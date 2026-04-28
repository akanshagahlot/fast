"use client";

import Link from "next/link";
import "../styles/Servicepage.css";

const allServices = [
  { label: "Home Shifting",       href: "/services/homeshifting"     },
  { label: "Office Shifting",     href: "/services/officeshifting"   },
  { label: "Loading & Unloading", href: "/services/loadingunloading" },
  { label: "Packing & Unpacking", href: "/services/packingunpacking" },
  { label: "Warehouse Services",  href: "/services/warehouse"        },
  { label: "Insurance Services",  href: "/services/insurance"        },
  { label: "Logistics Services",  href: "/services/logistic"         },
  { label: "Commercial Moving",   href: "/services/commercial"       },
];

const ServicePageLayout = ({ service }) => {
  const {
    title,
    slug,
    category,
    heroBg,
    mainImage,
    gridImage1,
    gridImage2,
    chooseImage,
    intro1,
    intro2,
    intro3,
    chooseTitle,
    chooseDesc,
    features,
    phone = "+91 98765 43210",
  } = service;

  return (
    <main className="sp-main">

      {/* ══ HERO ══ */}
      <section className="sp-hero">
        <div className="sp-hero-bg">
          <img src={heroBg} alt={title} className="sp-hero-bg-img" />
        </div>
        <div className="sp-hero-overlay" />
        <div className="sp-hero-texture" />
        <div className="sp-hero-bottom-border" />

        <div className="sp-hero-content">
          <span className="sp-hero-category">{category}</span>
          <h1 className="sp-hero-title">{title}</h1>
          <nav className="sp-breadcrumb">
            <Link href="/" className="sp-bc-link">Home</Link>
            <span className="sp-bc-sep">»</span>
            <Link href="/services" className="sp-bc-link">Services</Link>
            <span className="sp-bc-sep">»</span>
            <span className="sp-bc-active">{title}</span>
          </nav>
        </div>
      </section>

      {/* ══ BODY ══ */}
      <section className="sp-body">
        <div className="sp-body-inner">

          {/* ── MAIN CONTENT ── */}
          <div className="sp-content">

            {/* Top image */}
            <div className="sp-main-img-wrap">
              <img src={mainImage} alt={title} className="sp-main-img" />
            </div>

            {/* Title + Intro */}
            <h2 className="sp-content-title">{title}</h2>
            <p className="sp-content-para">{intro1}</p>
            <p className="sp-content-para">{intro2}</p>

            {/* 2-image grid */}
            <div className="sp-img-grid">
              <img src={gridImage1} alt={`${title} 1`} className="sp-grid-img" />
              <img src={gridImage2} alt={`${title} 2`} className="sp-grid-img" />
            </div>

            <p className="sp-content-para">{intro3}</p>

            {/* Choose Services */}
            <div className="sp-choose">
              <h3 className="sp-choose-title">{chooseTitle}</h3>
              <p className="sp-content-para">{chooseDesc}</p>

              <div className="sp-choose-layout">
                <div className="sp-choose-img-wrap">
                  <img src={chooseImage} alt="Choose Services" className="sp-choose-img" />
                </div>
                <ul className="sp-features-list">
                  {features.map((f, i) => (
                    <li key={i} className="sp-feature-item">
                      <span className="sp-feature-check">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* ── SIDEBAR ── */}
          <aside className="sp-sidebar">

            {/* Main Services */}
            <div className="sp-sidebar-card">
              <h4 className="sp-sidebar-title">Main Services</h4>
              <ul className="sp-services-list">
                {allServices.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className={`sp-service-link ${s.href.includes(slug) ? "sp-service-link--active" : ""}`}
                    >
                      {s.label}
                      <span className="sp-service-arrow">»</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call Card */}
            <div className="sp-call-card">
              <div className="sp-call-card-img-wrap">
                <img
                  src="/images/services/lady.png"
                  alt="Customer Support"
                  className="sp-call-card-img"
                />
              </div>
              <div className="sp-call-card-body">
                <div className="sp-call-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.72 12 19.79 19.79 0 011.65 3.4 2 2 0 013.62 1.22h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9 a16 16 0 006.09 6.09l1.27-.95a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.71 2.03z"/>
                  </svg>
                </div>
                <h3 className="sp-call-title">Need Help? Call Here</h3>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="sp-call-number">{phone}</a>
                <Link href="/contact" className="sp-call-btn">GET A QUOTE →</Link>
              </div>
            </div>

          </aside>

        </div>
      </section>

    </main>
  );
};

export default ServicePageLayout;