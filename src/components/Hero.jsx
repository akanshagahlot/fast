import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">
        <p className="smallText">Goods Transport Service Near Me</p>
        <h1>Move Anywhere With Fast Professional Cargo Movers</h1>
        <p>
          Fast Professional Cargo Movers provides trusted packing moving services, 
          truck transport in Ahmedabad, and complete logistics solutions across India.
        </p>

        <div className="heroButtons">
          <a href="/contact">Get Quote</a>
          <a href="/services">Our Services</a>
        </div>
      </div>
    </section>
  );
}