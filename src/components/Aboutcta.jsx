import Link from "next/link";
import "../styles/Aboutcta.css";

export default function AboutCTA() {
  return (
    <section className="acta-section">
      <div className="acta-blob acta-blob1" />
      <div className="acta-blob acta-blob2" />

      <div className="acta-inner">
        <span className="acta-tag">Ready to Move?</span>

        <h2 className="acta-title">
          Let's Make Your Next Move <span className="acta-orange">Smooth &amp; Stress-Free</span>
        </h2>

        <p className="acta-desc">
          Get a free quote in minutes. Our team is available 24/7 to plan
          your relocation — anywhere in India.
        </p>

        <div className="acta-buttons">
          <Link href="/quote" className="acta-btn-primary">
            Get Free Quote →
          </Link>
          <a href="tel:+919876543210" className="acta-btn-secondary">
            📞 Call Us Now
          </a>
        </div>

        {/* Trust badges */}
        <div className="acta-badges">
          <span className="acta-badge-item">✔ No Hidden Charges</span>
          <span className="acta-badge-item">✔ Verified Professionals</span>
          <span className="acta-badge-item">✔ 50,000+ Happy Customers</span>
        </div>
      </div>
    </section>
  );
}