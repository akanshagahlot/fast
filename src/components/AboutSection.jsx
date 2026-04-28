import "../styles/about.css";

export default function AboutSection() {
  const stats = [
    { number: "12+", label: "Years of Experience" },
    { number: "50K+", label: "Happy Customers" },
    { number: "200+", label: "Cities Covered" },
    { number: "99%", label: "Safe Delivery Rate" },
  ];

  const features = [
    {
      icon: "/images/icons/packing.png",
      title: "Premium Packing",
      desc: "High-quality packing materials are used to keep your valuable items safe during shifting.",
    },
    {
      icon: "/images/icons/ontime.png",
      title: "On-Time Delivery",
      desc: "We make sure your goods are picked up and delivered on time without delay.",
    },
    {
      icon: "/images/icons/team.png",
      title: "Expert Team",
      desc: "Our trained and experienced team handles every item with proper care and safety.",
    },
    {
      icon: "/images/icons/pricing.png",
      title: "Transparent Pricing",
      desc: "We provide clear pricing with no hidden charges, so you know exactly what you pay.",
    },
    {
      icon: "/images/icons/insurance.png",
      title: "Insurance Coverage",
      desc: "Your goods are protected with insurance coverage for a safe and worry-free move.",
    },
    {
      icon: "/images/icons/support.png",
      title: "24/7 Support",
      desc: "Our support team is always available to help you with queries before and after moving.",
    },
  ];

  return (
    <section className="aboutSection">
      <div className="features-section">
        <span className="about-tag">Our Services</span>

        <h3 className="features-title">
          Everything You Need for a <span className="highlight">Perfect Move</span>
        </h3>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">
                <img src={f.icon} alt={f.title} className="feature-icon-img" />
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