"use client";

import React, { useEffect } from "react";
import styles from "../styles/Serviceheader.module.css";

const ServiceHeader = ({ serviceName = "Our Services" }) => {
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
      {/* Hatched diagonal background texture */}
      <div className={styles.hatchTexture} />

      {/* Left orange accent bar */}
      <div className={styles.leftAccentBar} />

      {/* Bottom border */}
      <div className={styles.bottomBorder} />

      {/* Top corner shape */}
      <div className={styles.topCornerShape} />

      <div className={styles.container}>
        <div className={styles.innerWrapper}>

          {/* Badge */}
          <div className={`${styles.badge} ${styles.animateIn}`}>
            <span className={styles.badgeIcon}>⚙</span>
            WHAT WE OFFER
          </div>

          {/* Heading Row */}
          <div className={`${styles.headingRow} ${styles.animateIn}`}>
            <h1 className={styles.heading}>
              OUR <span className={styles.highlight}>SERVICES</span>
            </h1>
          </div>

          {/* Description */}
          <p className={`${styles.description} ${styles.animateIn}`}>
            Professional packing, moving & relocation solutions — handled with care.
          </p>

          {/* Breadcrumb */}
          <nav className={`${styles.breadcrumb} ${styles.animateIn}`}>
            <a href="/" className={styles.breadcrumbLink}>Home</a>
            <span className={styles.sep}>»</span>
            <span className={styles.breadcrumbActive}>Services</span>
          </nav>

        </div>

        {/* Right Icon Grid */}
        <div className={`${styles.iconGrid} ${styles.animateIn}`}>
          {[
            { src: "/images/home.png", alt: "Home Shifting Service" , label: "Home Shifting" },
            { src: "/images/office.png",   alt: "Office Move Service",    label: "Office Move"   },
            { src: "/images/moving.png",     alt: "Transport Service",      label: "Transport"     },
            { src: "/images/packing.png",       alt: "Packing Service",        label: "Packing"       },
          ].map((item, i) => (
            <div className={styles.iconCard} key={i}>
              <img
                src={item.src}
                alt={item.alt}
                className={styles.iconImg}
              />
              <span className={styles.iconLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHeader;