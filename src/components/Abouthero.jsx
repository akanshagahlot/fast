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
    { value: "10+", label: "Years of Experience" },
    { value: "10K+", label: "Happy Customers" },
    { value: "150+", label: "Cities Covered" },
    { value: "99%", label: "Safe Delivery Rate" },
  ];

  return (
    <section className="about-hero" ref={sectionRef}>
      {/* BG IMAGE */}
      <div className="about-bg-wrap">
        <Image
          src="/images/about-bg.jpg"
          alt="Fast Professional Cargo Movers"
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
          CARGO TRANSPORTATION SERVICES
        </div>

        <h1 className="about-heading about-animate">
          Your Trusted{" "}
          <span className="about-orange">PACKING MOVING SERVICES</span>
          <br />
          &amp; <span className="about-orange">TRUCK TRANSPORT</span> IN AHMEDABAD
        </h1>

        <p className="about-desc about-animate">
          At <strong>Fast Professional Cargo Movers</strong>, we provide reliable 
          goods transport services in India with top-tier transport services Ahmedabad 
          businesses can depend on. From near me packers and movers assistance to commercial 
          shipments, our team ensures professional handling, seamless courier distribution, 
          and damage-free delivery.
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