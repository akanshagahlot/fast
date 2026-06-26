"use client";

import Link from "next/link";
import "../styles/Houseshifting.css";

export default function HouseShiftingPage() {
  return (
    <main className="blog-post">
      {/* HERO BANNER */}
      <section className="bp-hero">
        <div className="bp-hero-bg-wrap">
          <img
            src="/images/blog/house-shifting.jpg"
            alt="House Shifting Guide"
            className="bp-hero-bg-img"
          />
        </div>

        <div className="bp-hero-overlay" />
        <div className="bp-hero-texture" />
        <div className="bp-hero-bottom-border" />

        <div className="bp-hero-content">
          <span className="bp-hero-category">Moving Tips</span>

          <h1 className="bp-hero-title">
            Packing &amp; Moving Services:{" "}
            <span className="bp-orange">Complete Guide</span> (2026)
          </h1>

          <p className="bp-hero-sub">Reliable Goods Transport Services in India</p>

          <div className="bp-hero-meta">
            <span className="bp-meta-item">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              Fast Professional Cargo Movers Team
            </span>

            <span className="bp-meta-item">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              28 Nov, 2024
            </span>
          </div>

          <nav className="bp-breadcrumb">
            <Link href="/" className="bp-bc-link">Home</Link>
            <span className="bp-bc-sep">»</span>
            <Link href="/blog" className="bp-bc-link">Blog</Link>
            <span className="bp-bc-sep">»</span>
            <span className="bp-bc-active">House Shifting Guide</span>
          </nav>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bp-body">
        <div className="bp-body-inner">
          <article className="bp-article">
            <p className="bp-intro">
              Relocating your home is a major responsibility — but with proper planning, the entire 
              process can become completely seamless. This comprehensive guide provides a 
              <strong> step-by-step breakdown </strong> 
              on managing everything from packing to secure delivery across Ahmedabad and India.
            </p>

            {/* STEP 1 */}
            <div className="bp-step">
              <div className="bp-step-num">01</div>

              <div className="bp-step-content">
                <h2 className="bp-step-title">Plan Your Move Well in Advance</h2>

                <p>
                  Start your logistics coordination at least <strong>4-6 weeks prior</strong> to 
                  your moving date. Finalize the dates, estimate budgets, and build an organized 
                  checklist.
                </p>

                <ul className="bp-list">
                  <li>Confirm the exact shipment or shifting date</li>
                  <li>Book professional packers and movers near me</li>
                  <li>Create a transparent budget estimate</li>
                  <li>Update your address for essential utilities and delivery courier services</li>
                </ul>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bp-step">
              <div className="bp-step-num">02</div>

              <div className="bp-step-content">
                <h2 className="bp-step-title">Sort and Categorize Your Goods</h2>

                <p>
                  Before beginning the packing process, categorize all household items into 
                  three distinct groups:
                </p>

                <div className="bp-three-col">
                  <div className="bp-col-card bp-col-keep">
                    <img
                      src="/images/icons/check.png"
                      alt="Keep"
                      style={{
                        width: "28px",
                        height: "28px",
                        objectFit: "contain",
                        marginBottom: "10px",
                      }}
                    />
                    <strong>Items to Retain</strong>
                    <p>Regularly used appliances, furniture, and belongings</p>
                  </div>

                  <div className="bp-col-card bp-col-donate">
                    <img
                      src="/images/icons/gift.png"
                      alt="Donate"
                      style={{
                        width: "28px",
                        height: "28px",
                        objectFit: "contain",
                        marginBottom: "10px",
                      }}
                    />
                    <strong>Items to Donate</strong>
                    <p>Useful items that you no longer require or use</p>
                  </div>

                  <div className="bp-col-card bp-col-throw">
                    <img
                      src="/images/icons/delete.png"
                      alt="Throw"
                      style={{
                        width: "28px",
                        height: "28px",
                        objectFit: "contain",
                        marginBottom: "10px",
                      }}
                    />
                    <strong>Discard or Scrap</strong>
                    <p>Damaged, broken, or completely unusable goods</p>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bp-step">
              <div className="bp-step-num">03</div>

              <div className="bp-step-content">
                <h2 className="bp-step-title">Execute Packing with High Standards</h2>

                <p>Proper packing methods protect your valuable goods from transit damage.</p>

                <ul className="bp-list">
                  <li>Wrap fragile products in heavy-duty bubble wrap layers</li>
                  <li>Avoid overstuffing boxes beyond their weight capacities</li>
                  <li>Clearly label every box with its destination room</li>
                  <li>Utilize original packaging for electronic cargo transportation</li>
                  <li>Pack clothing in sturdy suitcases for door to door parcel service safety</li>
                </ul>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bp-step">
              <div className="bp-step-num">04</div>

              <div className="bp-step-content">
                <h2 className="bp-step-title">Moving Day Management</h2>

                <ul className="bp-list">
                  <li>Begin early in the morning to maximize daylight hours</li>
                  <li>Perform a comprehensive final walkthrough of the empty rooms</li>
                  <li>Keep important personal documents and IDs with you explicitly</li>
                  <li>Coordinate safety arrangements for children and pets</li>
                  <li>Supervise the truck transport loading process efficiently</li>
                </ul>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="bp-step">
              <div className="bp-step-num">05</div>

              <div className="bp-step-content">
                <h2 className="bp-step-title">Smart and Systematic Unpacking</h2>

                <p>Once the transport services arrive at your destination, unpack efficiently:</p>

                <ul className="bp-list">
                  <li>Set up the kitchen area first for basic requirements</li>
                  <li>Arrange bedding and bedrooms for immediate comfort</li>
                  <li>Unpack systematically, moving room by room</li>
                  <li>Dispose of empty boxes and packing clutter quickly</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bp-cta">
              <div className="bp-cta-content">
                <h3>Looking for Goods Transport Service Near Me?</h3>
                <p>
                  Fast Professional Cargo Movers provides premium, stress-free shifting, truck transport in Ahmedabad, 
                  and reliable logistics services all over India.
                </p>

                <Link href="/contact" className="bp-cta-btn">
                  Get Free Quote →
                </Link>
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="bp-sidebar">
            <div className="bp-sidebar-card">
              <h4 className="bp-sidebar-title">Other Blogs</h4>

              <Link href="/blog/packingtips" className="bp-sidebar-link">
                <span className="bp-sidebar-arrow">→</span>
                Professional Packing Tips for Safe Moving
              </Link>
            </div>

            <div className="bp-sidebar-card">
              <h4 className="bp-sidebar-title">Quick Stats</h4>

              <div className="bp-sidebar-stats">
                <div className="bp-ss-item">
                  <span className="bp-ss-num">12+</span>
                  <span className="bp-ss-label">Years Experience</span>
                </div>

                <div className="bp-ss-item">
                  <span className="bp-ss-num">50K+</span>
                  <span className="bp-ss-label">Happy Clients</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}