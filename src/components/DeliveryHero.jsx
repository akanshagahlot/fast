"use client";
import React, { useEffect, useState } from "react";
import "../styles/DeliveryHero.css";

const DeliveryHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className={`dh-section ${visible ? "dh-section--visible" : ""}`}>
      {/* Decorative elements */}
      <div className="dh-deco dh-deco--ring1" />
      <div className="dh-deco dh-deco--ring2" />
      <div className="dh-deco dh-deco--dot1" />
      <div className="dh-deco dh-deco--dot2" />

      <div className="dh-container">
        <div className="dh-content">
          <nav className="dh-breadcrumb">
            <span>Home</span>
            <span className="dh-breadcrumb__sep">›</span>
            <span>Pages</span>
            <span className="dh-breadcrumb__sep">›</span>
            <span className="dh-breadcrumb__curr">Delivery Packages</span>
          </nav>

          <div className="dh-tag">
            <span className="dh-tag__dot"></span>
            Choose Your Plan
          </div>

          <h1 className="dh-title">
            Amazing <span className="dh-title--accent">Service</span>
            <br />
            Plans for Every Need
          </h1>

          <p className="dh-subtitle">
            From budget-friendly basic delivery to ultra-fast premium relocation,
            Nex Go has a package crafted perfectly for your timeline and budget.
          </p>

          <div className="dh-cta-row">
            <a href="#packages" className="dh-cta dh-cta--primary">
              View Packages ↓
            </a>
            <a href="/contact" className="dh-cta dh-cta--secondary">
              Get a Free Quote →
            </a>
          </div>

          <div className="dh-highlights">
            {[
              "No Hidden Charges",
              "Fully Insured",
              "Real-Time Tracking",
              "4.9 Star Rating",
            ].map((text, i) => (
              <div className="dh-highlight" key={i}>
                <span className="dh-highlight__dot"></span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dh-right">
          <div className="dh-promo-card">
            <div className="dh-promo-card__top">
              <img
                src="/images/delivery/hero.png"
                alt="Delivery Service"
                className="dh-promo-card__img"
              />
              
            </div>

            <div className="dh-promo-card__body">
              <div className="dh-promo-card__plan">
                <span className="dh-promo-card__dot"></span>
                Fast Delivery
              </div>

              <div className="dh-promo-card__time">
                <span className="dh-promo-card__num">48</span>
                <span className="dh-promo-card__unit">/hours</span>
              </div>

              <p className="dh-promo-card__desc">
                Priority packing, faster transport, real-time updates.
              </p>

              <a href="#packages" className="dh-promo-card__btn">
                See All Plans →
              </a>
            </div>

            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryHero;