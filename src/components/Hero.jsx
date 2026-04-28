import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">
        <p className="smallText">Safe, Fast & Reliable Moving Service</p>
        <h1>Move Anywhere With Nex Go</h1>
        <p>
          Nex Go Packers and Movers provides trusted shifting, packing,
          loading, logistics and moving services with professional care.
        </p>

        <div className="heroButtons">
          <a href="/quote">Get Quote</a>
          <a href="/services">Our Services</a>
        </div>
      </div>
    </section>
  );
}