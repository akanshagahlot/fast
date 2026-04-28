"use client";

import React, { useEffect } from "react";
import styles from "../styles/Faqheader.module.css";

const FaqHeader = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll(`.${styles.animateIn}`);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const faqCategories = [
    { src: "/images/pricing.png",  alt: "Pricing Questions",  label: "Pricing"   },
    { src: "/images/packing.png",  alt: "Packing Questions",  label: "Packing"   },
    { src: "/images/moving.png",   alt: "Moving Questions",   label: "Moving"    },
    { src: "/images/safety.png",   alt: "Safety Questions",   label: "Safety"    },
  ];

  return (
    <section className={styles.headerSection}>
      {/* Background texture */}
      <div className={styles.hatchTexture} />

      {/* Left accent bar */}
      <div className={styles.leftAccentBar} />

      {/* Top corner decorative shape */}
      <div className={styles.cornerShape} />

      {/* Bottom orange border */}
      <div className={styles.bottomBorder} />

      <div className={styles.container}>
        {/* ── LEFT CONTENT ── */}
        <div className={styles.leftContent}>
          {/* Badge */}
          <div className={`${styles.badge} ${styles.animateIn}`}>
            <span className={styles.badgeIcon}>?</span>
            FREQUENTLY ASKED
          </div>

          {/* Heading */}
          <h1 className={`${styles.heading} ${styles.animateIn}`}>
            FAQ <span className={styles.highlight}>CENTER</span>
          </h1>

          {/* Orange underline */}
          <div className={`${styles.headingUnderline} ${styles.animateIn}`} />

          {/* Sub text */}
          <p className={`${styles.description} ${styles.animateIn}`}>
            Got questions? We have answers. Everything you need to know about
            our relocation services.
          </p>

          {/* Breadcrumb */}
          <nav className={`${styles.breadcrumb} ${styles.animateIn}`}>
            <a href="/" className={styles.breadcrumbLink}>Home</a>
            <span className={styles.sep}>»</span>
            <span className={styles.breadcrumbActive}>FAQ</span>
          </nav>
        </div>

        {/* ── RIGHT ICON GRID ── */}
        <div className={`${styles.iconGrid} ${styles.animateIn}`}>
          {faqCategories.map((item, i) => (
            <div className={styles.iconCard} key={i}>
              <img src={item.src} alt={item.alt} className={styles.iconImg} />
              <span className={styles.iconLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqHeader;