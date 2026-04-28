import "../styles/contactBanner.css";

export default function ContactBanner() {
  return (
    <section className="contactBanner__outer">
      <div className="contactBanner">
        <div className="contactBanner__content">
          <h2>Need Help With Moving?</h2>
          <p>Contact Nex Go Packers and Movers for a quick quote.</p>
          <a href="/contact">Contact Now</a>
        </div>
        <div className="contactBanner__image-wrapper">
          <img src="/images/banner/banner.png" alt="Moving Help" />
        </div>
      </div>
    </section>
  );
}