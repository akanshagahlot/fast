import "../styles/about.css";

export default function AboutSection() {
  const features = [
    {
      icon: "/images/icons/packing.png",
      title: "Packing Moving Services",
      desc: "We use high-quality packing materials to ensure the safety of your belongings during transportation.",
    },
    {
      icon: "/images/icons/ontime.png",
      title: "Door to Door Parcel Service",
      desc: "Our team ensures timely pickup and delivery services for a smooth and hassle-free moving experience.",
    },
    {
      icon: "/images/icons/team.png",
      title: "Near Me Packers and Movers",
      desc: "Our skilled and experienced staff handle your goods with utmost care and professionalism.",
    },
    {
      icon: "/images/icons/pricing.png",
      title: "Affordable Pricing",
      desc: "We offer transparent and competitive pricing with no hidden charges.",
    },
    {
      icon: "/images/icons/insurance.png",
      title: "Goods Transport Service Near Me",
      desc: "We prioritize the safety of your belongings with secure handling and transportation services.",
    },
    {
      icon: "/images/icons/support.png",
      title: "24/7 Customer Support",
      desc: "Our support team is available round the clock to assist you before, during, and after your move.",
    },
  ];

  return (
    <section className="aboutSection">
      <div className="features-section">
        <span className="about-tag">Why Choose Us</span>

        <h3 className="features-title">
          Why Choose{" "}
          <span className="highlight">
            Fast Professional Cargo Movers
          </span>
        </h3>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">
                <img
                  src={f.icon}
                  alt={f.title}
                  className="feature-icon-img"
                />
              </div>

              <h4 className="feature-title">{f.title}</h4>

              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}