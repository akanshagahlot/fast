"use client";
import React, { useState, useRef } from "react";
import "../styles/FaqAccordion.css";

const categories = [
  { id: "all", label: "All", icon: "/images/faq/all.png" },
  { id: "booking", label: "Booking", icon: "/images/faq/booking.png" },
  { id: "packing", label: "Packing", icon: "/images/faq/packing.png" },
  { id: "pricing", label: "Pricing", icon: "/images/faq/pricing.png" },
  { id: "delivery", label: "Delivery", icon: "/images/faq/delivery.png" },
  { id: "support", label: "Support", icon: "/images/faq/support.png" },
];

const faqs = [
  {
    id: 1,
    category: "booking",
    question: "How do I book a goods transport service near me with Fast Professional Cargo Movers?",
    answer:
      "Booking with Fast Professional Cargo Movers is simple! You can call us at 9265057478 or 9157615400, fill out our online quote form, or visit our office at Narol Vatva Road, Ahmedabad. Our team will assess your requirements, provide a transparent quote, and schedule a convenient moving date within 24 hours.",
  },
  {
    id: 2,
    category: "booking",
    question: "How far in advance should I book my transport services in Ahmedabad?",
    answer:
      "We recommend booking at least 7–10 days in advance for local moves and 15–20 days for long-distance or interstate relocations. During peak seasons (summer, month-end), early booking ensures better slot availability.",
  },
  {
    id: 3,
    category: "packing",
    question: "What packing moving services materials do you use?",
    answer:
      "We use industry-grade materials: multi-layered bubble wrap, corrugated boxes, foam padding, stretch wrap for furniture, and specialized crates for fragile or high-value items. All materials are sourced to ensure zero damage during transit.",
  },
  {
    id: 4,
    category: "packing",
    question: "Do I need to pack my cargo transportation services items before your team arrives?",
    answer:
      "No! Our expert packers handle everything from start to finish — dismantling, wrapping, packing, labeling, loading, transporting, unloading, and unpacking. You don't need to do a thing unless you prefer to pack specific personal items yourself.",
  },
  {
    id: 5,
    category: "packing",
    question: "How do you handle fragile items during truck transport in ahmedabad?",
    answer:
      "Fragile and antique items receive special handling with custom foam inserts, wooden crates, and individual wrapping. Our team is trained to identify and treat high-value items with extra care throughout the entire move.",
  },
  {
    id: 6,
    category: "pricing",
    question: "How is the cost of my door to door parcel service calculated?",
    answer:
      "Pricing depends on factors like distance, volume/weight of goods, floor access (lift or stairs), packing requirements, and special services like vehicle transport or storage. All charges are disclosed upfront — no surprises.",
  },
  {
    id: 7,
    category: "pricing",
    question: "Are there any hidden charges for goods transport services in india?",
    answer:
      "Absolutely not. Fast Professional Cargo Movers follows a 100% transparent pricing policy. Your final quote includes all costs — packing materials, labour, transport, toll taxes, and insurance. We confirm everything in writing before the move.",
  },
  {
    id: 8,
    category: "pricing",
    question: "Do you offer insurance coverage for delivery courier service shipments?",
    answer:
      "Yes, we offer transit insurance as an add-on service. It covers accidental damage or loss during transportation. We highly recommend it for long-distance moves or shipments containing valuable electronics, artwork, or antiques.",
  },
  {
    id: 9,
    category: "delivery",
    question: "How long does parcel services near me delivery take?",
    answer:
      "Local moves are typically completed within 1 day. Intercity moves take 2–7 days depending on distance and package chosen (Basic, Fast, or Super Fast Delivery). Real-time tracking is provided so you always know where your goods are.",
  },
  {
    id: 10,
    category: "delivery",
    question: "Can I track my cargo movers shipment in real-time?",
    answer:
      "Yes! All our moves come with live tracking via SMS updates and our online tracking portal. You'll receive regular status updates from the moment your goods are loaded until they're safely delivered.",
  },
  {
    id: 11,
    category: "delivery",
    question: "What happens if my parcel delivery is delayed?",
    answer:
      "In the rare event of a delay (due to road closures, weather, etc.), our logistics team will notify you immediately and provide an updated ETA. We are committed to minimizing delays and keeping you fully informed.",
  },
  {
    id: 12,
    category: "support",
    question: "What is your customer support availability?",
    answer:
      "Our customer support team is available 24/7 via phone, WhatsApp, email, and live chat. A dedicated relationship manager is assigned to every customer to ensure smooth communication throughout the move.",
  },
  {
    id: 13,
    category: "support",
    question: "What should I do if an item is damaged during packers and movers transit?",
    answer:
      "Contact our support team immediately with photos of the damage. We have a streamlined claims process and will resolve the issue promptly — either through repair, replacement, or compensation as per the agreed terms.",
  },
];

const FaqAccordion = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState(null);
  const contentRefs = useRef({});

  const filtered =
    activeCategory === "all"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-acc-section">
      <div className="faq-acc-container">
        {/* Section heading */}
        <div className="faq-acc-header">
          <div className="faq-acc-header__tag">Browse by Topic</div>
          <h2 className="faq-acc-header__title">
            Find Your <span className="faq-acc-header__accent">Answer</span>
          </h2>
          <p className="faq-acc-header__sub">
            Browse our most common questions by category, or search above.
          </p>
        </div>

        {/* Category tabs */}
        <div className="faq-acc-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`faq-acc-tab ${activeCategory === cat.id ? "faq-acc-tab--active" : ""}`}
              onClick={() => { setActiveCategory(cat.id); setOpenId(null); }}
            >
              <img
                src={cat.icon}
                alt={cat.label}
                className="faq-acc-tab__icon"
                width={20}
                height={20}
                style={{ width: "20px", height: "20px", objectFit: "contain" }}
              />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main layout: accordion + side image */}
        <div className="faq-acc-layout">
          {/* Accordion */}
          <div className="faq-acc-list">
            {filtered.map((faq, i) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`faq-acc-item ${isOpen ? "faq-acc-item--open" : ""}`}
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <button
                    className="faq-acc-item__question"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-acc-item__num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="faq-acc-item__q-text">{faq.question}</span>
                    <span className="faq-acc-item__chevron">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className="faq-acc-item__answer"
                    ref={(el) => (contentRefs.current[faq.id] = el)}
                    style={{
                      maxHeight: isOpen
                        ? contentRefs.current[faq.id]?.scrollHeight + "px"
                        : "0",
                    }}
                  >
                    <div className="faq-acc-item__answer-inner">
                      <div className="faq-acc-item__answer-bar" />
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Side panel */}
          <div className="faq-acc-side">
            {/* Side panel */}
            <div className="faq-acc-side__img-wrap">
              <img
                src="/images/faq/side.png"
                alt="Fast Professional Cargo Movers FAQ Support"
                className="faq-acc-side__img"
              />
              <div className="faq-acc-side__badge">
                <img
                  src="/images/faq/target.png"
                  alt="target"
                  width={18}
                  height={18}
                  style={{ width: "18px", height: "18px", objectFit: "contain" }}
                />
                <span>98% Resolved</span>
              </div>
            </div>

            <div className="faq-acc-side__card">
              <div className="faq-acc-side__card-icon">
                <img
                  src="/images/faq/phone.png"
                  alt="phone"
                  width={22}
                  height={22}
                  style={{ width: "22px", height: "22px", objectFit: "contain" }}
                />
              </div>
              <h3>Still confused?</h3>
              <p>
                Our relocation experts are just a call away. Talk to a real
                person, not a bot.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
                <a href="tel:+919265057478" className="faq-acc-side__card-btn" style={{ margin: 0, textAlign: "center" }}>
                  Call Now: 9265057478
                </a>
                <a href="tel:+919157615400" className="faq-acc-side__card-btn" style={{ margin: 0, textAlign: "center" }}>
                  Call Now: 9157615400
                </a>
              </div>
            </div>

            <div className="faq-acc-side__tips">
              <h4 className="faq-acc-side__tips-title">Quick Tips</h4>
              {[
                "Book at least 7-10 days in advance",
                "Opt for insurance on valuables",
                "Label all boxes clearly",
                "Keep important docs with you",
              ].map((tip, i) => (
                <div className="faq-acc-side__tip" key={i}>
                  <span className="faq-acc-side__tip-dot" />
                  {tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;