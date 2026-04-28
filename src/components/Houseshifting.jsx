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
            House Shifting ka{" "}
            <span className="bp-orange">Complete Guide</span> (2026)
          </h1>

          <p className="bp-hero-sub">Packing se Unpacking tak</p>

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
              Nex Go Team
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
              Ghar shift karna ek badi zimmedari hai — lekin sahi planning se yeh
              kaam bahut aasaan ho sakta hai. Is guide mein hum aapko
              <strong> step-by-step </strong>
              batayenge ki kaise packing se lekar unpacking tak har kaam smoothly
              ho sakta hai.
            </p>

            {/* STEP 1 */}
            <div className="bp-step">
              <div className="bp-step-num">01</div>

              <div className="bp-step-content">
                <h2 className="bp-step-title">Planning Pehle Karo</h2>

                <p>
                  Move karne se kam se kam <strong>4-6 hafte pehle</strong>
                  planning shuru kar do. Moving date fix karo, budget banao aur
                  ek checklist tayar karo.
                </p>

                <ul className="bp-list">
                  <li>Moving date confirm karo</li>
                  <li>Professional packers book karo</li>
                  <li>Budget estimate banao</li>
                  <li>New house ka address utilities mein update karo</li>
                </ul>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bp-step">
              <div className="bp-step-num">02</div>

              <div className="bp-step-content">
                <h2 className="bp-step-title">Saman Sort Karo</h2>

                <p>
                  Packing shuru karne se pehle saman ko 3 categories mein divide
                  karo:
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
                    <strong>Rakhna hai</strong>
                    <p>Regularly use hone wali cheezein</p>
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
                    <strong>Donate karo</strong>
                    <p>Kaam ki cheez jo aap use nahi karte</p>
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
                    <strong>Phenko</strong>
                    <p>Toot-phooti aur bekaar cheezein</p>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bp-step">
              <div className="bp-step-num">03</div>

              <div className="bp-step-content">
                <h2 className="bp-step-title">Packing Sahi Tarike Se Karo</h2>

                <p>Sahi packing se aapka saman damage se bachta hai.</p>

                <ul className="bp-list">
                  <li>Fragile items ko bubble wrap se wrap karo</li>
                  <li>Boxes ko zyada bhaari mat karo</li>
                  <li>Har box par clearly label lagao</li>
                  <li>Electronics ke original boxes use karo</li>
                  <li>Kapdon ko suitcase mein pack karo</li>
                </ul>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bp-step">
              <div className="bp-step-num">04</div>

              <div className="bp-step-content">
                <h2 className="bp-step-title">Moving Day Plan</h2>

                <ul className="bp-list">
                  <li>Subah jaldi uthkar ready ho jao</li>
                  <li>Last walkthrough karo</li>
                  <li>Documents khud carry karo</li>
                  <li>Children aur pets arrange karo</li>
                  <li>Loading supervise karo</li>
                </ul>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="bp-step">
              <div className="bp-step-num">05</div>

              <div className="bp-step-content">
                <h2 className="bp-step-title">Unpacking Smart Tarike Se</h2>

                <ul className="bp-list">
                  <li>Pehle kitchen setup karo</li>
                  <li>Bedrooms pehle set karo</li>
                  <li>Room by room unpack karo</li>
                  <li>Empty boxes hatao</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bp-cta">
              <div className="bp-cta-content">
                <h3>Professional Help Chahiye?</h3>
                <p>
                  Nex Go ke expert packers aur movers aapki shifting ko
                  stress-free banayenge.
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