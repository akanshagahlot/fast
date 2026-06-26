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
            Packing Moving Services
          </div>

          <h1 className="dh-title">
            Goods Transport <span className="dh-title--accent">Services</span>
            <br />
            in Ahmedabad &amp; India
          </h1>

          <p className="dh-subtitle">
            From budget-friendly moving solutions to premium relocation services,
            Fast Professional Cargo Movers offers packages designed for every
            requirement and budget.
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
              "Safe & Secure Delivery",
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
                alt="Fast Professional Cargo Movers"
                className="dh-promo-card__img"
              />
            </div>

            <div className="dh-promo-card__body">
              <div className="dh-promo-card__plan">
                <span className="dh-promo-card__dot"></span>
                Near Me Packers and Movers
              </div>

              <div className="dh-promo-card__time">
                <span className="dh-promo-card__num">48</span>
                <span className="dh-promo-card__unit">/hours</span>
              </div>

              <p className="dh-promo-card__desc">
                Priority packing, faster transportation, and real-time updates
                for a smooth relocation experience.
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