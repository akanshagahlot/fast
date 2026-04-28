"use client";

import React, { useState, useRef, useEffect } from "react";
import "../styles/DeliveryPackages.css";

const packages = [
  {
    id: "basic",
    icon: "/images/icons/packing.png",
    name: "Basic Delivery",
    tagline: "Reliable & Budget-Friendly",
    time: "2–4",
    timeUnit: "/days",
    desc: "Reliable services for individuals with simple, non-urgent relocation needs.",
    popular: false,
    color: "light",
    features: [
      { text: "Packing Service", included: true },
      { text: "Safe Item Handling", included: true },
      { text: "Normal Transit Speed", included: true },
      { text: "Budget-Friendly Pricing", included: true },
      { text: "Basic Tracking", included: true },
      { text: "Priority Packing Team", included: false },
      { text: "Express Transport", included: false },
      { text: "24/7 Dedicated Support", included: false },
    ],
    image: "/images/delivery/basic.png",
    cta: "Choose Basic",
  },
  {
    id: "fast",
    icon: "/images/icons/thunder.png",
    name: "Fast Delivery",
    tagline: "Quick & Reliable",
    time: "48",
    timeUnit: "/hours",
    desc: "Faster services for customers needing quicker and hassle-free moves.",
    popular: true,
    color: "dark",
    features: [
      { text: "Priority Packing Service", included: true },
      { text: "Faster Transport Speed", included: true },
      { text: "Dedicated Move Manager", included: true },
      { text: "Real-Time GPS Tracking", included: true },
      { text: "Priority Customer Support", included: true },
      { text: "Express Packing Team", included: true },
      { text: "Ultra-Fast Transportation", included: false },
      { text: "White-Glove Unpacking", included: false },
    ],
    image: "/images/delivery/fast.jpg",
    cta: "Choose Fast",
  },
  {
    id: "superfast",
    icon: "/images/icons/superfast.png",
    name: "Super Fast Delivery",
    tagline: "Premium & Urgent",
    time: "24",
    timeUnit: "/hours",
    desc: "Premium services for urgent relocations requiring top priority handling.",
    popular: false,
    color: "light",
    features: [
      { text: "Express Packing Team", included: true },
      { text: "Ultra-Fast Transportation", included: true },
      { text: "White-Glove Unpacking", included: true },
      { text: "Live Video Tracking", included: true },
      { text: "24/7 Priority Support", included: true },
      { text: "Premium Insurance Cover", included: true },
      { text: "Same-Day Confirmation", included: true },
      { text: "Dedicated Supervisor", included: true },
    ],
    image: "/images/delivery/superfast.jpg",
    cta: "Choose Super Fast",
  },
];

const comparisons = [
  { feature: "Transit Speed", basic: "2–4 Days", fast: "48 Hours", superfast: "24 Hours" },
  { feature: "Packing Team", basic: "Standard", fast: "Priority", superfast: "Express Elite" },
  { feature: "Tracking", basic: "SMS Updates", fast: "GPS Real-Time", superfast: "Live Video" },
  { feature: "Support", basic: "Business Hours", fast: "Priority Line", superfast: "24/7 Dedicated" },
  { feature: "Insurance", basic: "Optional Add-on", fast: "Optional Add-on", superfast: "Included" },
  { feature: "Move Manager", basic: "—", fast: "✅", superfast: "✅ Senior" },
  { feature: "Unpacking", basic: "—", fast: "—", superfast: "White-Glove" },
];

const faqs_mini = [
  {
    q: "Can I switch packages after booking?",
    a: "Yes, you can upgrade your package up to 48 hours before your scheduled move date.",
  },
  {
    q: "Is insurance mandatory for all packages?",
    a: "Insurance is optional for Basic & Fast plans and is included in the Super Fast package.",
  },
  {
    q: "What's the difference between Fast and Super Fast?",
    a: "Super Fast includes white-glove unpacking, live video tracking, premium insurance, and a dedicated senior supervisor.",
  },
];

const DeliveryPackages = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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
      id="packages"
      className={`dp-section ${visible ? "dp-section--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="dp-container">
        <div className="dp-header">
          <div className="dp-header__tag">Our Packages</div>
          <h2 className="dp-header__title">
            Choose the <span className="dp-header__accent">Right Plan</span> for Your Move
          </h2>
          <p className="dp-header__sub">
            All plans include professional packing, careful handling, and our
            satisfaction guarantee. Pick what fits your timeline.
          </p>
        </div>

        <div className="dp-cards">
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`dp-card dp-card--${pkg.color} ${pkg.popular ? "dp-card--popular" : ""}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {pkg.popular && (
                <div className="dp-card__popular-badge">⭐ Most Popular</div>
              )}

              <div className="dp-card__img-wrap">
                <img src={pkg.image} alt={pkg.name} className="dp-card__img" />
                <div className="dp-card__img-overlay" />

                <div className="dp-card__time-badge">
                  <span className="dp-card__time-num">{pkg.time}</span>
                  <span className="dp-card__time-unit">{pkg.timeUnit}</span>
                </div>
              </div>

              <div className="dp-card__body">
                <div className="dp-card__icon">
                  <img
                    src={pkg.icon}
                    alt={pkg.name}
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div className="dp-card__name-row">
                  <h3 className="dp-card__name">{pkg.name}</h3>
                  <span className="dp-card__tagline">{pkg.tagline}</span>
                </div>

                <p className="dp-card__desc">{pkg.desc}</p>

                <div className="dp-card__divider" />

                <ul className="dp-card__features">
                  {pkg.features.map((f, fi) => (
                    <li
                      key={fi}
                      className={`dp-card__feature ${!f.included ? "dp-card__feature--excluded" : ""}`}
                    >
                      <span className="dp-card__feature-icon">
                        {f.included ? "✓" : "✗"}
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>

                <a href="/contact" className="dp-card__cta">
                  {pkg.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="dp-compare">
          <div className="dp-compare__header">
            <div className="dp-compare__tag">Compare Plans</div>
            <h3 className="dp-compare__title">
              Side-by-Side <span className="dp-compare__accent">Comparison</span>
            </h3>
          </div>

          <div className="dp-compare__table-wrap">
            <table className="dp-compare__table">
              <thead>
                <tr>
                  <th className="dp-compare__th dp-compare__th--feature">Feature</th>
                  <th className="dp-compare__th">Basic</th>
                  <th className="dp-compare__th dp-compare__th--highlight">Fast</th>
                  <th className="dp-compare__th">Super Fast</th>
                </tr>
              </thead>

              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "dp-compare__row--even" : ""}>
                    <td className="dp-compare__td dp-compare__td--feature">{row.feature}</td>
                    <td className="dp-compare__td">{row.basic}</td>
                    <td className="dp-compare__td dp-compare__td--highlight">{row.fast}</td>
                    <td className="dp-compare__td">{row.superfast}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="dp-faq">
          <div className="dp-faq__header">
            <h3 className="dp-faq__title">Package FAQs</h3>
          </div>

          <div className="dp-faq__list">
            {faqs_mini.map((faq, i) => {
              const isOpen = openFaq === i;

              return (
                <div
                  key={i}
                  className={`dp-faq__item ${isOpen ? "dp-faq__item--open" : ""}`}
                >
                  <button
                    className="dp-faq__question"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="dp-faq__chevron">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="dp-faq__answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="dp-cta-banner">
          <div className="dp-cta-banner__content">
            <h3 className="dp-cta-banner__title">
              Not Sure Which Plan is Right?
            </h3>

            <p className="dp-cta-banner__text">
              Talk to our relocation experts for a free consultation. We'll
              recommend the best package for your needs and budget.
            </p>

            <div className="dp-cta-banner__btns">
              <a
                href="tel:+918001234567"
                className="dp-cta-banner__btn dp-cta-banner__btn--primary"
              >
                📞 Call Us Now
              </a>

              <a
                href="/contact"
                className="dp-cta-banner__btn dp-cta-banner__btn--secondary"
              >
                Get Free Quote →
              </a>
            </div>
          </div>

          <div className="dp-cta-banner__right">
            <img
              src="/images/banner/cta.png"
              alt="Relocation Expert"
              className="dp-cta-banner__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPackages;