"use client";

import React, { useEffect, useRef } from "react";
import styles from "../styles/Aboutusheader.module.css";

const AboutUsHeader = () => {
  const titleRef = useRef(null);

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

    const animatedEls = document.querySelectorAll(`.${styles.animateIn}`);
    animatedEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.headerSection}>
      {/* Diagonal grid overlay */}
      <div className={styles.gridOverlay} />

      {/* Floating accent circles */}
      <div className={styles.circleAccent1} />
      <div className={styles.circleAccent2} />

      {/* Orange bottom border */}
      <div className={styles.bottomBorder} />

      <div className={styles.container}>
        <div className={styles.leftContent}>
          {/* Pill badge */}
          <div className={`${styles.badge} ${styles.animateIn}`}>
            <span className={styles.badgeDot} />
            WHO WE ARE
          </div>

          {/* Main heading */}
          <h1 className={`${styles.heading} ${styles.animateIn}`} ref={titleRef}>
            ABOUT <span className={styles.highlight}>US</span>
          </h1>

          {/* Thin orange underline */}
          <div className={`${styles.headingUnderline} ${styles.animateIn}`} />

          {/* Tagline */}
          <p className={`${styles.tagline} ${styles.animateIn}`}>
            Trusted movers, delivering peace of mind since day one.
          </p>

          {/* Breadcrumb */}
          <nav className={`${styles.breadcrumb} ${styles.animateIn}`}>
            <a href="/" className={styles.breadcrumbLink}>Home</a>
            <span className={styles.breadcrumbSep}>»</span>
            <span className={styles.breadcrumbActive}>About Us</span>
          </nav>
        </div>

        {/* Right decorative panel */}
        <div className={`${styles.rightPanel} ${styles.animateIn}`}>
          <div className={styles.statsCard}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>12+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5K+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Safe Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeader;