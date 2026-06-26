"use client";

import Link from "next/link";
import "../styles/packingtips.css"

export default function PackingTipsPage() {
  return (
    <main className="blog-post">

      {/* ── HERO BANNER ── */}
      <section className="bp-hero">
        <div className="bp-hero-bg-wrap">
          <img
            src="/images/blog/packing-tips.jpg"
            alt="Packing Tips"
            className="bp-hero-bg-img"
          />
        </div>
        <div className="bp-hero-overlay" />
        <div className="bp-hero-texture" />
        <div className="bp-hero-bottom-border" />

        <div className="bp-hero-content">
          <span className="bp-hero-category">Packing</span>
          <h1 className="bp-hero-title">
            Professional <span className="bp-orange">Packing &amp; Moving Services</span> for Safe Moving
          </h1>
          <p className="bp-hero-sub">Ensure Your Belongings Are Safely Packed</p>
          <div className="bp-hero-meta">
            <span className="bp-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
              Fast Professional Cargo Movers Team
            </span>
            <span className="bp-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8"  y1="2" x2="8"  y2="6"/>
                <line x1="3"  y1="10" x2="21" y2="10"/>
              </svg>
              10 Dec, 2024
            </span>
          </div>
          <nav className="bp-breadcrumb">
            <Link href="/" className="bp-bc-link">Home</Link>
            <span className="bp-bc-sep">»</span>
            <Link href="/blog" className="bp-bc-link">Blog</Link>
            <span className="bp-bc-sep">»</span>
            <span className="bp-bc-active">Packing Tips</span>
          </nav>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="bp-body">
        <div className="bp-body-inner">

          <article className="bp-article">

            <p className="bp-intro">
              Proper packing ensures your goods remain <strong>safe and secure</strong> during the move. 
              Follow these tried-and-tested tips from professional packers to make your shifting completely stress-free.
            </p>

            {/* Tip 1 */}
            <div className="bp-step">
              <div className="bp-step-num">01</div>
              <div className="bp-step-content">
                <h2 className="bp-step-title">Use High-Quality Packing Materials</h2>
                <p>The safety of your goods depends entirely on the quality of the materials used. Ensure you have these items ready:</p>
                <ul className="bp-list">
                  <li>Strong double-wall cardboard boxes</li>
                  <li>Bubble wrap — for fragile items</li>
                  <li>Packing peanuts or crumpled newspaper for filling gaps</li>
                  <li>Heavy-duty transparent packing tape</li>
                  <li>Permanent markers for clear labeling</li>
                  <li>Stretch wrap — for furniture protection</li>
                </ul>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="bp-step">
              <div className="bp-step-num">02</div>
              <div className="bp-step-content">
                <h2 className="bp-step-title">Pack Room-by-Room for Organized Shifting</h2>
                <p>Do not try to pack everything at once. Complete one room before moving to the next. Ensure every box clearly indicates:</p>
                <ul className="bp-list">
                  <li>Room name (e.g., "Kitchen", "Master Bedroom")</li>
                  <li>Brief description of contents (e.g., "Utensils", "Books")</li>
                  <li>Handling instructions (e.g., "FRAGILE", "THIS SIDE UP")</li>
                  <li>Priority level for efficient unpacking</li>
                </ul>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="bp-step">
              <div className="bp-step-num">03</div>
              <div className="bp-step-content">
                <h2 className="bp-step-title">Special Care for Fragile Cargo</h2>
                <p>Glassware, premium crockery, and electronics require extra precautions during transit:</p>
                <div className="bp-tip-boxes">

                  <div className="bp-tip-box">
                    <img
                      src="/images/icons/crockery.png"
                      alt="Crockery"
                      className="bp-tip-icon"
                    />
                    <strong>Crockery</strong>
                    <p>Wrap each plate individually. Stack plates vertically rather than flat to significantly reduce the risk of breakage.</p>
                  </div>

                  <div className="bp-tip-box">
                    <img
                      src="/images/icons/electronics.png"
                      alt="Electronics"
                      className="bp-tip-icon"
                    />
                    <strong>Electronics</strong>
                    <p>Original packaging offers the best protection. If unavailable, use ample bubble wrap and a snug-fitting box.</p>
                  </div>

                  <div className="bp-tip-box">
                    <img
                      src="/images/icons/plants.png"
                      alt="Plants"
                      className="bp-tip-icon"
                    />
                    <strong>Plants</strong>
                    <p>Stop watering plants two days before the move. Place them in open-top cardboard boxes for adequate ventilation.</p>
                  </div>

                </div>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="bp-step">
              <div className="bp-step-num">04</div>
              <div className="bp-step-content">
                <h2 className="bp-step-title">Balance Heavy and Light Items</h2>
                <p>Follow the golden rule of efficient box packing:</p>
                <ul className="bp-list">
                  <li>Heavy items (books, tools) — pack in <strong>smaller boxes</strong></li>
                  <li>Light items (pillows, linens) — pack in <strong>larger boxes</strong></li>
                  <li>Place heavy items at the bottom and lighter items on top</li>
                  <li>Fill boxes completely — partially empty boxes can easily crush</li>
                  <li>Keep individual box weights under 20-25 kg for safer handling</li>
                </ul>
              </div>
            </div>

            {/* Tip 5 */}
            <div className="bp-step">
              <div className="bp-step-num">05</div>
              <div className="bp-step-content">
                <h2 className="bp-step-title">Keep an Essentials Box for Door to Door Delivery</h2>
                <p>Prepare a separate "First Night Box" to carry with you personally, containing:</p>
                <ul className="bp-list">
                  <li>Important documents (ID proofs, passports, property records)</li>
                  <li>Phone chargers and laptops</li>
                  <li>A change of clothes for a couple of days</li>
                  <li>Basic personal toiletries</li>
                  <li>Necessary medicines</li>
                  <li>Snacks and drinking water</li>
                  <li>Cash and essential cards</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bp-cta">
              <div className="bp-cta-content">
                <h3>Need Help? Goods Transport Service Near Me</h3>
                <p>Fast Professional Cargo Movers provides comprehensive packing and moving solutions across Ahmedabad and India.</p>
                <Link href="/contact" className="bp-cta-btn">Book Packers Now →</Link>
              </div>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="bp-sidebar">
            <div className="bp-sidebar-card">
              <h4 className="bp-sidebar-title">Other Blogs</h4>
              <Link href="/blog/houseshifting" className="bp-sidebar-link">
                <span className="bp-sidebar-arrow">→</span>
                House Shifting ka Complete Guide (2026)
              </Link>
            </div>

            <div className="bp-sidebar-card">
              <h4 className="bp-sidebar-title">Quick Stats</h4>
              <div className="bp-sidebar-stats">
                <div className="bp-ss-item">
                  <span className="bp-ss-num">200+</span>
                  <span className="bp-ss-label">Cities Covered</span>
                </div>
                <div className="bp-ss-item">
                  <span className="bp-ss-num">99%</span>
                  <span className="bp-ss-label">Safe Delivery</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </section>

    </main>
  );
}