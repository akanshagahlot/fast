import "../styles/contactMap.css";

export default function ContactMap() {
  return (
    <section className="cm-section">
      <div className="cm-header">
        <span className="cm-tag">Find Us</span>
        <h2 className="cm-title">
          Our <span className="cm-orange">Location</span>
        </h2>
      </div>

      <div className="cm-map-wrap">
        <iframe
          title="Fast Professional Cargo Movers Location"
          src="https://www.google.com/maps?q=18,+Swaminarayan+Park+6,+Narol+Vatva+Road,+Nr.+Bhamariya+Kuwa,+Narol,+Ahmedabad,+Gujarat+382405&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}