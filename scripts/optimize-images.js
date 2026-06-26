#!/usr/bin/env node
/**
 * Image optimization + reference update script
 * - Discovers .jpg/.jpeg/.png recursively
 * - Converts to .webp with target size under 120KB
 * - Updates code references from old extensions to .webp
 * - Deletes originals only after successful conversion/reference pass
 *
 * Usage:
 *   node scripts/optimize-images.js --dry-run
 *   node scripts/optimize-images.js
 *
 * Optional flags:
 *   --max-kb=120
 *   --root=.
 *   --verbose
 */

const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const VERBOSE = args.includes("--verbose");
const ROOT_ARG = args.find((a) => a.startsWith("--root="));
const MAX_KB_ARG = args.find((a) => a.startsWith("--max-kb="));

const ROOT = path.resolve(ROOT_ARG ? ROOT_ARG.split("=")[1] : ".");
const MAX_KB = MAX_KB_ARG ? Number(MAX_KB_ARG.split("=")[1]) : 120;
const MAX_BYTES = MAX_KB * 1024;

const IMAGE_EXT_RE = /\.(jpe?g|png)$/i;
const CODE_FILE_RE = /\.(html?|css|s[ac]ss|less|js|jsx|ts|tsx|mjs|cjs|json|md|mdx|txt|xml|yml|yaml)$/i;

const IGNORE_DIRS = new Set([
  ".git",
  "node_modules",
  ".next",
  "dist",
  "build",
  "out",
  "coverage",
  ".turbo",
]);

function log(...msg) {
  console.log(...msg);
}
function vlog(...msg) {
  if (VERBOSE) console.log(...msg);
}

async function walk(dir, files = []) {
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (IGNORE_DIRS.has(e.name)) continue;
      await walk(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function getWebpBufferUnderLimit(inputPath, maxBytes) {
  const originalMeta = await sharp(inputPath).metadata();
  if (!originalMeta.width || !originalMeta.height) {
    throw new Error(`Could not read dimensions: ${inputPath}`);
  }

  // Passes: try qualities first at original size
  const qualitySteps = [90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30];

  let best = null;

  for (const q of qualitySteps) {
    const buf = await sharp(inputPath).webp({ quality: q }).toBuffer();
    if (!best || buf.length < best.size) {
      best = { buffer: buf, size: buf.length, quality: q, scale: 1 };
    }
    if (buf.length <= maxBytes) {
      return { buffer: buf, quality: q, scale: 1, size: buf.length };
    }
  }

  // Fallback: scale down gradually, then retry qualities
  const scaleSteps = [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5];
  for (const s of scaleSteps) {
    const width = Math.max(1, Math.floor(originalMeta.width * s));
    const height = Math.max(1, Math.floor(originalMeta.height * s));
    for (const q of qualitySteps) {
      const buf = await sharp(inputPath)
        .resize(width, height, { fit: "inside", withoutEnlargement: true })
        .webp({ quality: q })
        .toBuffer();

      if (!best || buf.length < best.size) {
        best = { buffer: buf, size: buf.length, quality: q, scale: s };
      }
      if (buf.length <= maxBytes) {
        return { buffer: buf, quality: q, scale: s, size: buf.length, width, height };
      }
    }
  }

  // Could not meet strict limit; return smallest found and let caller decide.
  return { ...best, failedStrict: true };
}

async function fileExists(p) {
  try {
    await fsp.access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  log(`Root: ${ROOT}`);
  log(`Mode: ${DRY_RUN ? "DRY RUN" : "LIVE"}`);
  log(`Target max size: ${MAX_KB} KB`);

  const allFiles = await walk(ROOT);
  const imageFiles = allFiles.filter((f) => IMAGE_EXT_RE.test(f));
  const codeFiles = allFiles.filter((f) => CODE_FILE_RE.test(f));

  log(`Discovered ${imageFiles.length} image(s) to process.`);
  log(`Discovered ${codeFiles.length} code/text file(s) to scan for references.`);

  const manifest = {
    root: ROOT,
    maxKb: MAX_KB,
    dryRun: DRY_RUN,
    startedAt: new Date().toISOString(),
    converted: [],
    skipped: [],
    failed: [],
    referencesUpdated: [],
    deletedOriginals: [],
  };

  // 1) Convert images
  for (const imgAbs of imageFiles) {
    const rel = toPosix(path.relative(ROOT, imgAbs));
    const outAbs = imgAbs.replace(/\.(jpe?g|png)$/i, ".webp");
    const outRel = toPosix(path.relative(ROOT, outAbs));
    try {
      const result = await getWebpBufferUnderLimit(imgAbs, MAX_BYTES);

      if (result.failedStrict || !result.buffer || result.size > MAX_BYTES) {
        manifest.failed.push({
          source: rel,
          reason: `Could not reach under ${MAX_KB}KB strictly`,
          bestSizeBytes: result.size || null,
          quality: result.quality || null,
          scale: result.scale || null,
        });
        log(`[FAIL] ${rel} -> Could not meet strict ${MAX_KB}KB`);
        continue;
      }

      if (!DRY_RUN) {
        await fsp.writeFile(outAbs, result.buffer);
      }

      manifest.converted.push({
        source: rel,
        output: outRel,
        sizeBytes: result.size,
        quality: result.quality,
        scale: result.scale,
      });

      vlog(
        `[OK] ${rel} -> ${outRel} (${(result.size / 1024).toFixed(1)}KB, q=${result.quality}, scale=${result.scale})`
      );
    } catch (err) {
      manifest.failed.push({ source: rel, reason: err.message || String(err) });
      log(`[ERR] ${rel}: ${err.message || err}`);
    }
  }

  // Build mapping only for successfully converted images
  const mapOldToNew = new Map();
  for (const c of manifest.converted) {
    const oldRel = c.source;
    const newRel = c.output;

    const oldBaseNoExt = oldRel.replace(/\.(jpe?g|png)$/i, "");
    const newBaseNoExt = newRel.replace(/\.webp$/i, "");

    mapOldToNew.set(toPosix(oldRel), toPosix(newRel));
    mapOldToNew.set(toPosix("./" + oldRel), toPosix("./" + newRel));
    mapOldToNew.set(toPosix("/" + oldRel), toPosix("/" + newRel));

    // basename only refs
    const oldBase = path.basename(oldRel);
    const newBase = path.basename(newRel);
    mapOldToNew.set(oldBase, newBase);

    // refs without extension
    mapOldToNew.set(oldBaseNoExt, newBaseNoExt);
    mapOldToNew.set("/" + oldBaseNoExt, "/" + newBaseNoExt);
    mapOldToNew.set("./" + oldBaseNoExt, "./" + newBaseNoExt);
  }

  // 2) Update references in code files
  for (const cf of codeFiles) {
    const rel = toPosix(path.relative(ROOT, cf));
    let text;
    try {
      text = await fsp.readFile(cf, "utf8");
    } catch {
      continue; // skip binary/invalid text
    }

    let updated = text;
    let replacements = 0;

    for (const [oldRef, newRef] of mapOldToNew.entries()) {
      // Replace exact old ref with extension OR extensionless path where extension present in code
      const oldEsc = escapeRegExp(oldRef);
      const re = new RegExp(oldEsc, "g");
      const before = updated;
      updated = updated.replace(re, newRef);
      if (updated !== before) {
        replacements++;
      }

      // Also convert same string with .jpg/.jpeg/.png to .webp if somehow unresolved
      const extRe = new RegExp(
        escapeRegExp(oldRef).replace(/\\\.(jpe\?g\|png)\$?/i, "") + "\\.(jpe?g|png)",
        "gi"
      );
      const before2 = updated;
      updated = updated.replace(extRe, `${newRef}.webp`);
      if (updated !== before2) {
        replacements++;
      }
    }

    // Generic pass: replace remaining image extensions in quoted/url() refs
    const genericBefore = updated;
    updated = updated.replace(
      /((["'`(])(?:[^"'`()\s]|\\\s)+?)\.(jpe?g|png)(\2?)/gi,
      "$1.webp$4"
    );
    if (updated !== genericBefore) replacements++;

    if (replacements > 0 && updated !== text) {
      if (!DRY_RUN) {
        await fsp.writeFile(cf, updated, "utf8");
      }
      manifest.referencesUpdated.push({ file: rel, replacements });
      vlog(`[REF] Updated ${rel} (${replacements} replacement batch(es))`);
    }
  }

  // 3) Delete originals only for successfully converted images
  for (const c of manifest.converted) {
    const srcAbs = path.join(ROOT, c.source);
    const outAbs = path.join(ROOT, c.output);
    const srcRel = c.source;
    if (!(await fileExists(outAbs))) {
      manifest.skipped.push({
        source: srcRel,
        reason: "Output webp missing, original not deleted",
      });
      continue;
    }
    if (!DRY_RUN) {
      await fsp.unlink(srcAbs);
    }
    manifest.deletedOriginals.push(srcRel);
  }

  manifest.finishedAt = new Date().toISOString();

  const reportPath = path.join(ROOT, "image-optimization-report.json");
  if (!DRY_RUN) {
    await fsp.writeFile(reportPath, JSON.stringify(manifest, null, 2), "utf8");
  }

  log("");
  log("=== Optimization Summary ===");
  log(`Converted: ${manifest.converted.length}`);
  log(`Failed (strict limit unmet/errors): ${manifest.failed.length}`);
  log(`Code files updated: ${manifest.referencesUpdated.length}`);
  log(`Originals deleted: ${manifest.deletedOriginals.length}`);
  log(`Report: ${DRY_RUN ? "(dry-run, not written)" : reportPath}`);

  if (manifest.failed.length > 0) {
    log("\nSome files failed strict 120KB requirement. Review summary:");
    for (const f of manifest.failed.slice(0, 20)) {
      log(` - ${f.source}: ${f.reason}`);
    }
    if (manifest.failed.length > 20) {
      log(` ...and ${manifest.failed.length - 20} more`);
    }
    process.exitCode = 2;
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
