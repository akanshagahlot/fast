import "../styles/contactinfo.css";

const infoItems = [
  {
    icon: "/images/icons/location.png",
    title: "Our Address",
    lines: ["123, MG Road", "Jodhpur, Rajasthan 342001"],
  },
  {
    icon: "/images/icons/phone.png",
    title: "Phone Number",
    lines: ["+91 98765 43210", "+91 91234 56789"],
  },
  {
    icon: "/images/icons/email.png",
    title: "Email Address",
    lines: ["info@nexgopackers.com", "support@nexgopackers.com"],
  },
];

export default function ContactInfo() {
  return (
    <section className="ci-section">
      <div className="ci-inner">
        <div className="ci-header">
          <span className="ci-tag">Reach Us</span>
          <h2 className="ci-title">
            Our Contact <span className="ci-orange">Information</span>
          </h2>
        </div>

        <div className="ci-cards">
          {infoItems.map((item, i) => (
            <div className="ci-card" key={i}>
              <div className="ci-icon-wrap">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="ci-icon-img"
                  style={{
                    width: "28px",
                    height: "28px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="ci-card-body">
                <h4 className="ci-card-title">{item.title}</h4>

                {item.lines.map((line, j) => (
                  <p className="ci-card-line" key={j}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}