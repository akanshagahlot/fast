"use client";
import React, { useEffect, useRef, useState } from "react";
import "../styles/Whychooseus.css";

const features = [
  {
    id: 1,
    title: "Safety & Reliability",
    desc: "Experienced staff deliver secure transport with careful packing, smooth loading, and damage-free shifting for all customers.",
    image: "/images/whychooseus/safety.png",
    cardIcon: "/images/whychooseus/isafety.png",
    tag: "100% Safe",
  },
  {
    id: 2,
    title: "On-Time Delivery",
    desc: "We guarantee timely relocation with real-time tracking and dedicated logistics coordination across all routes.",
    image: "/images/whychooseus/ontime.png",
    cardIcon: "/images/whychooseus/iontime.png",
    tag: "Always On Time",
  },
  {
    id: 3,
    title: "Transparent Pricing",
    desc: "No hidden charges. Get clear, upfront quotes with flexible packages tailored to every budget and requirement.",
    image: "/images/whychooseus/pricing.png",
    cardIcon: "/images/whychooseus/ipricing.png",
    tag: "No Hidden Fees",
  },
  {
    id: 4,
    title: "Expert Team",
    desc: "Our trained professionals handle everything from packing delicate items to heavy furniture with precision and care.",
    image: "/images/whychooseus/team.jpg",
    cardIcon: "/images/whychooseus/iteam.png",
    tag: "450+ Experts",
  },
  {
    id: 5,
    title: "Premium Packing",
    desc: "We use industry-grade packing materials ensuring zero damage during transit, regardless of distance or item type.",
    image: "/images/whychooseus/packing.png",
    cardIcon: "/images/whychooseus/ipacking.png",
    tag: "Zero Damage",
  },
  {
    id: 6,
    title: "Pan-India Network",
    desc: "With branches across 200+ cities, we ensure seamless relocation anywhere in India with local expertise everywhere.",
    image: "/images/whychooseus/network.jpg",
    cardIcon: "/images/whychooseus/inetwork.png",
    tag: "200+ Cities",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`wcu-section ${visible ? "wcu-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="wcu-bg-deco">
        <div className="wcu-bg-circle wcu-bg-circle--1" />
        <div className="wcu-bg-circle wcu-bg-circle--2" />
        <div className="wcu-bg-grid" />
      </div>

      <div className="wcu-container">

        {/* ── Header ── */}
        <div className="wcu-header">
          <div className="wcu-tag">Why Choose Us</div>
          <h2 className="wcu-title">
            What Makes Us <span className="wcu-title--accent">Different</span>
          </h2>
          <p className="wcu-subtitle">
            Thousands of families and businesses trust us every year. Here&apos;s
            why Nex Go stands above the rest.
          </p>
        </div>

        {/* ── Main Image (Bada) ── */}
        <div className="wcu-main-visual">
          <div className="wcu-main-img-wrap">
            <img
              src={
                activeCard !== null
                  ? features[activeCard].image
                  : "/images/whychooseus/main.png"
              }
              alt="Why Choose Us"
              className="wcu-main-img"
            />
            <div className="wcu-main-img-overlay" />
            <div className="wcu-main-badge">
              {activeCard !== null ? features[activeCard].tag : "Hover a feature"}
            </div>
          </div>
        </div>

        {/* ── 6 Cards — 3 per row ── */}
        <div className="wcu-grid">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className={`wcu-card ${activeCard === i ? "wcu-card--active" : ""}`}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Card bg image */}
              <div className="wcu-card__img-wrap">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="wcu-card__img"
                />
                <div className="wcu-card__img-overlay" />
              </div>

              <div className="wcu-card__body">
                <div className="wcu-card__icon-wrap">
                  <img
                    src={feature.cardIcon}
                    alt={feature.title}
                    className="wcu-card__icon-img"
                  />
                </div>
                <h3 className="wcu-card__title">{feature.title}</h3>
                <p className="wcu-card__desc">{feature.desc}</p>
                <span className="wcu-card__tag">{feature.tag}</span>
              </div>
            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
};

export default WhyChooseUs;