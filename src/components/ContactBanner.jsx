import "../styles/contactBanner.css";

export default function ContactBanner() {
  return (
    <section className="contactBanner__outer">
      <div className="contactBanner">
        <div className="contactBanner__content">
          <h2>Goods Transport Service Near Me</h2>
          <p>
            Contact Fast Professional Cargo Movers for safe, reliable packing moving services, 
            and truck transport in Ahmedabad across India.
          </p>
          <a href="/contact">Contact Now</a>
        </div>

        <div className="contactBanner__image-wrapper">
          <img
            src="/images/banner/banner.png"
            alt="Fast Professional Cargo Movers"
          />
        </div>
      </div>
    </section>
  );
}