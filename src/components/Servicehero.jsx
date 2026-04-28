"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import "../styles/ServiceHero.css";

const ServiceHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const currentHero = heroRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentHero?.classList.add("animate-in");
        }
      },
      { threshold: 0.1 }
    );

    if (currentHero) {
      observer.observe(currentHero);
    }

    return () => {
      if (currentHero) {
        observer.unobserve(currentHero);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section className="service-hero" ref={heroRef}>
      <div className="hero-bg-image">
        {/* ✅ Apni image yahan rakho: public/images/servicehero/hero-bg.jpg */}
        <img
          src="/images/servicehero/hero-bg.jpg"
          alt="Packers and movers background"
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-deco hero-deco--circle1"></div>
      <div className="hero-deco hero-deco--circle2"></div>
      <div className="hero-deco hero-deco--line"></div>

      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Our Services
        </div>

        <h1 className="hero-title">
          Professional <span className="hero-title--accent">Packers</span>{" "}
          &amp; <span className="hero-title--accent">Movers</span>
          <br />
          <span className="hero-title--sub">Services Across India</span>
        </h1>

        <p className="hero-desc">
          We do not just move your belongings — we move your life with care.
          From household shifting to commercial relocation, our expert team
          ensures every item reaches safely, on time, every time.
        </p>

        <div className="hero-actions">
          <Link href="/contact" className="btn btn--primary">
            Get A Free Quote →
          </Link>

          <a href="#services-list" className="btn btn--outline">
            Explore Services
          </a>
        </div>

        <div className="hero-stats">
          {[
            { value: "3,000+", label: "Successful Deliveries" },
            { value: "450+", label: "Expert Professionals" },
            { value: "3,150", label: "Moves Completed" },
            { value: "6,561", label: "Satisfied Clients" },
          ].map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <span className="hero-stat__value">{stat.value}</span>
              <span className="hero-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span className="scroll-line"></span>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  );
};

export default ServiceHero;