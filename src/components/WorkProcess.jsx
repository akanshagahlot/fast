import "../styles/workprocess.css";

export default function WorkProcess() {
  const steps = [
    {
      number: "1",
      icon: "/images/working/move.png",
      title: "Move Planning",
      desc: "Our experts plan every move carefully so packing, loading and scheduling stay organized and nothing delays your shifting.",
    },
    {
      number: "2",
      icon: "/images/working/transport.png",
      title: "Safe Transport",
      desc: "Our trained drivers transport your goods securely using proper handling methods so every item reaches the destination safely.",
    },
    {
      number: "3",
      icon: "/images/working/delivery.png",
      title: "Delivery Done",
      desc: "After careful packing and transport, our team ensures timely delivery so clients receive their goods complete and damage free.",
    },
  ];

  return (
    <section className="work-process-section">
      <div className="work-container">
        <div className="work-heading">
          <span className="work-subtitle">WORKING PROCESS</span>
          <h2>Standard Work Process</h2>
        </div>

        <div className="process-wrapper">
          <div className="dotted-line"></div>

          {steps.map((step, index) => (
            <div className="process-card" key={index}>
              <div className="icon-box">
                <span className="step-number">{step.number}</span>

                <img
                  src={step.icon}
                  alt={step.title}
                  className="process-icon-img"
                  width={50}       // ✅ yahan change kiya
                  height={50}      // ✅ yahan change kiya
                />
              </div>

              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}