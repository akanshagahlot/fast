"use client";
import React, { useEffect, useRef, useState } from "react";
import "../styles/FaqHero.css";

const FaqHero = () => {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      className={`faq-hero ${visible ? "faq-hero--visible" : ""}`}
      ref={heroRef}
    >
      <div className="faq-hero__container">

        {/* 🔥 FLEX WRAPPER */}
        <div className="faq-hero__content">

          {/* ✅ LEFT SIDE IMAGE */}
          <div className="faq-hero__left">
            <img
              src="/images/faq/main.png"
              alt="FAQ Illustration"
              className="faq-hero__main-img"
            />
          </div>

          {/* ✅ RIGHT SIDE CONTENT */}
          <div className="faq-hero__right">

            {/* Breadcrumb */}
            <div className="faq-hero__breadcrumb">
              <span>Home</span>
              <span className="faq-hero__breadcrumb-sep">›</span>
              <span>Pages</span>
              <span className="faq-hero__breadcrumb-sep">›</span>
              <span className="faq-hero__breadcrumb-current">FAQ</span>
            </div>

            {/* Tag */}
            <div className="faq-hero__tag">
              <span className="faq-hero__tag-dot" />
              Frequently Asked Questions
            </div>

            {/* Heading */}
            <h1 className="faq-hero__title">
              Got <span className="faq-hero__title--accent">Questions?</span>
              <br />
              We've Got Answers.
            </h1>

            <p className="faq-hero__subtitle">
              Everything you need to know about our packing, moving, and relocation
              services — answered clearly and honestly.
            </p>

            {/* Search */}
            <div className="faq-hero__search">
              <span className="faq-hero__search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search your question here..."
                className="faq-hero__search-input"
              />
              <button className="faq-hero__search-btn">Search</button>
            </div>

            {/* Stats */}
            <div className="faq-hero__stats">
              {[
                { num: "50+", label: "Questions Answered" },
                { num: "24/7", label: "Support Available" },
                { num: "98%", label: "Customer Satisfied" },
              ].map((s, i) => (
                <div className="faq-hero__stat" key={i}>
                  <strong className="faq-hero__stat-num">{s.num}</strong>
                  <span className="faq-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      
    </section>
  );
};

export default FaqHero;