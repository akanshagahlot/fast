import "../styles/ContactHeader.css";

export default function ContactHeader() {
  return (
    <section className="ch-section">
      <div className="ch-overlay" />
      <div className="ch-content">
        <div className="ch-text">
          <span className="ch-tag">Get In Touch</span>
          <h1 className="ch-title">Contact <span className="ch-orange">Us</span></h1>
          <p className="ch-breadcrumb">
            <a href="/">Home</a>
            <span className="ch-sep">»</span>
            <span className="ch-active">Contact</span>
          </p>
        </div>
        
      </div>
    </section>
  );
}