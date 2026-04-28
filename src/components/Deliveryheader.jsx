"use client";

import React, { useEffect } from "react";
import styles from "../styles/Deliveryheader.module.css";

const DeliveryHeader = () => {
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

  return (
    <section className={styles.headerSection}>
      {/* Background texture */}
      <div className={styles.hatchTexture} />

      {/* Left accent bar */}
      <div className={styles.leftAccentBar} />

      {/* Decorative ring */}
      <div className={styles.decorRing} />

      {/* Decorative corner box */}
      <div className={styles.cornerShape} />

      {/* Bottom border */}
      <div className={styles.bottomBorder} />

      <div className={styles.container}>
        {/* ── LEFT CONTENT ── */}
        <div className={styles.leftContent}>

          {/* Badge */}
          <div className={`${styles.badge} ${styles.animateIn}`}>
            <img
              src="/images/moving.png"
              alt="Delivery truck icon"
              className={styles.badgeImg}
            />
            DELIVER PACKAGES
          </div>

          {/* Heading */}
          <h1 className={`${styles.heading} ${styles.animateIn}`}>
            DELIVER <span className={styles.highlight}>PACKAGES</span>
          </h1>

          {/* Orange underline */}
          <div className={`${styles.headingUnderline} ${styles.animateIn}`} />

          {/* Sub text */}
          <p className={`${styles.description} ${styles.animateIn}`}>
            Fast, safe &amp; reliable package delivery across cities — from
            fragile goods to heavy freight.
          </p>

          {/* Breadcrumb */}
          <nav className={`${styles.breadcrumb} ${styles.animateIn}`}>
            <a href="/" className={styles.breadcrumbLink}>Home</a>
            <span className={styles.sep}>»</span>
            <span className={styles.breadcrumbActive}>Deliver Packages</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default DeliveryHeader;