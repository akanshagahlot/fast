import "../styles/contactMap.css";

export default function ContactMap() {
  return (
    <section className="cm-section">
      <div className="cm-header">
        <span className="cm-tag">Find Us</span>
        <h2 className="cm-title">Our <span className="cm-orange">Location</span></h2>
      </div>
      <div className="cm-map-wrap">
        <iframe
          title="Nex Go Packers Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57637.89!2d73.0243!3d26.2389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4a0b7fffff%3A0xabb37c20b2a8e7ff!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1680000000000"
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