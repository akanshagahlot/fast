"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "../styles/Abouthero.css";

const AboutHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      sectionRef.current?.classList.add("about-hero-animated");
    }, 100);

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("about-visible");
        }),
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".about-animate")
      .forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const stats = [
    { value: "12+",  label: "Years of Experience" },
    { value: "50K+", label: "Happy Customers"     },
    { value: "200+", label: "Cities Covered"      },
    { value: "99%",  label: "Safe Delivery Rate"  },
  ];

  return (
    <section className="about-hero" ref={sectionRef}>

      {/* BG IMAGE */}
      <div className="about-bg-wrap">
        <Image
          src="/images/about-bg.jpg"
          alt="Packers and movers background"
          fill
          className="about-bg-img"
          priority
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="about-overlay" />

      {/* GRID TEXTURE */}
      <div className="about-grid-texture" />

      {/* DECORATIVE */}
      <div className="about-ring-left" />
      <div className="about-ring-right" />
      <div className="about-accent-bar" />
      <div className="about-bottom-border" />

      {/* CONTENT */}
      <div className="about-container">

        <div className="about-badge about-animate">
          <span className="about-badge-dot" />
          ABOUT NEX GO
        </div>

        <h1 className="about-heading about-animate">
          Your More Trusted{" "}
          <span className="about-orange">PACKERS</span>
          <br />
          &amp; <span className="about-orange">MOVERS</span> ACROSS INDIA
        </h1>

        <p className="about-desc about-animate">
          At <strong>Nex Go</strong>, we don&apos;t just move your belongings — we
          move your life with care. From household shifting to commercial
          relocation, our expert team ensures every item reaches safely, on
          time, every time.
        </p>

        <div className="about-stats-row about-animate">
          {stats.map((s, i) => (
            <div className="about-stat-card" key={i}>
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* SCROLL HINT */}
      <div className="about-scroll-hint">
        <div className="about-scroll-line" />
        <span className="about-scroll-text">SCROLL</span>
      </div>

    </section>
  );
};

export default AboutHero;