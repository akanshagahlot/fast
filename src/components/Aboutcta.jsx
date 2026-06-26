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
          Move with <span className="acta-orange">Fast Professional Cargo Movers</span>
        </h2>

        <p className="acta-desc">
          Get a free quote in minutes. Our expert team is available 24/7 to
          provide reliable door to door parcel service, taking care of your 
          parcel services near me and delivery courier service needs safely across India.
        </p>

        <div className="acta-buttons">
          <Link href="/contact" className="acta-btn-primary">
            Get Free Quote →
          </Link>

          <a href="tel:+919265057478" className="acta-btn-secondary">
            📞 Call Us Now
          </a>
        </div>

        {/* Trust badges */}
        <div className="acta-badges">
          <span className="acta-badge-item">✔ No Hidden Charges</span>
          <span className="acta-badge-item">✔ Verified Professionals</span>
          <span className="acta-badge-item">✔ Safe & Secure Relocation</span>
        </div>

       
      </div>
    </section>
  );
}