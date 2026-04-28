"use client";

import Link from "next/link";
import "../styles/packingtips.css"

export default function PackingTipsPage() {
  return (
    <main className="blog-post">

      {/* ── HERO BANNER ── */}
      <section className="bp-hero">
        <div className="bp-hero-bg-wrap">
          <img
            src="/images/blog/packing-tips.jpg"
            alt="Packing Tips"
            className="bp-hero-bg-img"
          />
        </div>
        <div className="bp-hero-overlay" />
        <div className="bp-hero-texture" />
        <div className="bp-hero-bottom-border" />

        <div className="bp-hero-content">
          <span className="bp-hero-category">Packing</span>
          <h1 className="bp-hero-title">
            Professional <span className="bp-orange">Packing Tips</span> for Safe Moving
          </h1>
          <p className="bp-hero-sub">Apna Saman Safely Pack Karo</p>
          <div className="bp-hero-meta">
            <span className="bp-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
              Nex Go Team
            </span>
            <span className="bp-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8"  y1="2" x2="8"  y2="6"/>
                <line x1="3"  y1="10" x2="21" y2="10"/>
              </svg>
              10 Dec, 2024
            </span>
          </div>
          <nav className="bp-breadcrumb">
            <Link href="/" className="bp-bc-link">Home</Link>
            <span className="bp-bc-sep">»</span>
            <Link href="/blog" className="bp-bc-link">Blog</Link>
            <span className="bp-bc-sep">»</span>
            <span className="bp-bc-active">Packing Tips</span>
          </nav>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="bp-body">
        <div className="bp-body-inner">

          <article className="bp-article">

            <p className="bp-intro">
              Sahi packing se aapka saman <strong>safe aur secure</strong> rehta hai move ke dauran.
              Professional packers ke yeh tried-and-tested tips follow karo aur apni shifting
              bilkul stress-free banao.
            </p>

            {/* Tip 1 */}
            <div className="bp-step">
              <div className="bp-step-num">01</div>
              <div className="bp-step-content">
                <h2 className="bp-step-title">Sahi Materials Istemal Karo</h2>
                <p>Packing ki quality directly saman ki safety par depend karti hai. Yeh materials zarur use karo:</p>
                <ul className="bp-list">
                  <li>Strong double-wall cardboard boxes</li>
                  <li>Bubble wrap — fragile items ke liye</li>
                  <li>Packing peanuts ya crumpled newspaper filling ke liye</li>
                  <li>Heavy-duty packing tape (transparent)</li>
                  <li>Permanent markers labeling ke liye</li>
                  <li>Stretch wrap — furniture ke liye</li>
                </ul>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="bp-step">
              <div className="bp-step-num">02</div>
              <div className="bp-step-content">
                <h2 className="bp-step-title">Room-by-Room Pack Karo</h2>
                <p>Ek saath sab kuch pack karne ki koshish mat karo. Ek room complete karo phir agla shuru karo.
                   Har box par clearly likho:</p>
                <ul className="bp-list">
                  <li>Room ka naam (e.g., "Kitchen", "Master Bedroom")</li>
                  <li>Content brief (e.g., "Utensils", "Books")</li>
                  <li>Handling instruction (e.g., "FRAGILE", "THIS SIDE UP")</li>
                  <li>Priority level (unpack karne ki order)</li>
                </ul>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="bp-step">
              <div className="bp-step-num">03</div>
              <div className="bp-step-content">
                <h2 className="bp-step-title">Fragile Items Special Care</h2>
                <p>Glass, crockery aur electronics ke liye extra precaution lena zaroori hai:</p>
                <div className="bp-tip-boxes">

                  <div className="bp-tip-box">
                    <img
                      src="/images/icons/crockery.png"
                      alt="Crockery"
                      className="bp-tip-icon"
                    />
                    <strong>Crockery</strong>
                    <p>Har plate ko individually wrap karo. Plates ko flat nahi, khade rakho — kam chances of breakage.</p>
                  </div>

                  <div className="bp-tip-box">
                    <img
                      src="/images/icons/electronics.png"
                      alt="Electronics"
                      className="bp-tip-icon"
                    />
                    <strong>Electronics</strong>
                    <p>Original packaging best hai. Agar na ho toh zyada bubble wrap aur snug fit box use karo.</p>
                  </div>

                  <div className="bp-tip-box">
                    <img
                      src="/images/icons/plants.png"
                      alt="Plants"
                      className="bp-tip-icon"
                    />
                    <strong>Plants</strong>
                    <p>Move se 2 din pehle paani dena band karo. Khule top ke saath light cardboard box mein rakho.</p>
                  </div>

                </div>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="bp-step">
              <div className="bp-step-num">04</div>
              <div className="bp-step-content">
                <h2 className="bp-step-title">Heavy aur Light Ka Balance</h2>
                <p>Box packing ka golden rule:</p>
                <ul className="bp-list">
                  <li>Heavy items (books, tools) — <strong>chhote boxes</strong> mein</li>
                  <li>Light items (pillows, linens) — <strong>bade boxes</strong> mein</li>
                  <li>Box ke neeche heavy, upar light items rakho</li>
                  <li>Box full bharao — half-empty box crush hota hai</li>
                  <li>Ek box max 20-25 kg se zyada nahi hona chahiye</li>
                </ul>
              </div>
            </div>

            {/* Tip 5 */}
            <div className="bp-step">
              <div className="bp-step-num">05</div>
              <div className="bp-step-content">
                <h2 className="bp-step-title">Essentials Box Alag Rakho</h2>
                <p>Ek "First Night Box" banao jo aap khud carry karo. Ismein yeh cheezein rakho:</p>
                <ul className="bp-list">
                  <li>Important documents (Aadhaar, passport, property papers)</li>
                  <li>Phone charger aur laptop</li>
                  <li>2 din ke kapde</li>
                  <li>Basic toiletries</li>
                  <li>Medicines</li>
                  <li>Snacks aur paani</li>
                  <li>Cash aur cards</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bp-cta">
              <div className="bp-cta-content">
                <h3>Expert Packing Help Chahiye?</h3>
                <p>Nex Go ke trained packers aapka poora saman safely pack aur deliver karenge.</p>
                <Link href="/contact" className="bp-cta-btn">Book Packers Now →</Link>
              </div>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="bp-sidebar">
            <div className="bp-sidebar-card">
              <h4 className="bp-sidebar-title">Other Blogs</h4>
              <Link href="/blog/houseshifting" className="bp-sidebar-link">
                <span className="bp-sidebar-arrow">→</span>
                House Shifting ka Complete Guide (2026)
              </Link>
            </div>

            <div className="bp-sidebar-card">
              <h4 className="bp-sidebar-title">Quick Stats</h4>
              <div className="bp-sidebar-stats">
                <div className="bp-ss-item">
                  <span className="bp-ss-num">200+</span>
                  <span className="bp-ss-label">Cities Covered</span>
                </div>
                <div className="bp-ss-item">
                  <span className="bp-ss-num">99%</span>
                  <span className="bp-ss-label">Safe Delivery</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </section>

    </main>
  );
}