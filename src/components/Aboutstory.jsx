import "../styles/Aboutstory.css";

const milestones = [
  { year: "2012", text: "Founded in Ahmedabad with a commitment to provide reliable cargo and relocation services." },
  { year: "2016", text: "Expanded operations across Gujarat and neighboring states." },
  { year: "2020", text: "Successfully completed thousands of household and commercial relocations." },
  { year: "2024", text: "Serving customers across India with professional moving and cargo solutions." },
];

export default function AboutStory() {
  return (
    <section className="as-section">
      <div className="as-grid">

        {/* Left — Visual panel */}
        <div className="as-visual">
          <div className="as-image-card">
            <div className="as-image-inner">
              <img
                src="/images/about/story.png"
                alt="Fast Professional Cargo Movers Truck"
                className="as-main-img"
              />
              <p className="as-img-tagline">Serving India Since 2012</p>
            </div>

            {/* Floating badge */}
            <div className="as-badge-float">
              <span className="as-badge-num">12+</span>
              <span className="as-badge-txt">Years of<br />Trust</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="as-timeline">
            {milestones.map((m) => (
              <div className="as-milestone" key={m.year}>
                <div className="as-milestone-dot" />
                <div>
                  <span className="as-milestone-year">{m.year}</span>
                  <p className="as-milestone-text">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Text */}
        <div className="as-text">
          <span className="as-tag">Our Story</span>
          <h2 className="as-title">
            From Local Service to <span className="as-orange">India's Trusted</span> Shifting Partner
          </h2>
          <p className="as-desc">
            Fast Professional Cargo Movers was established with one mission —
            to provide safe, reliable, and stress-free relocation services for
            families and businesses. Based in Ahmedabad, we offer professional
            truck transport in ahmedabad customers trust with complete customer satisfaction.
          </p>
          <p className="as-desc">
            We understand that every move is important. Our experienced team
            handles your belongings with utmost care and professionalism,
            ensuring secure packing, safe transportation, and timely delivery
            through our delivery courier service and goods transport service near me.
          </p>

          {/* Mission, Vision, Values & Promise cards — 2×2 grid */}
          <div className="as-mv-grid">
            <div className="as-mv-card">
              <img
                src="/images/about/mission.png"
                alt="Our Mission"
                className="as-mv-img"
                width={40}
                height={40}
              />
              <h4>Our Mission</h4>
              <p>
                Deliver safe, affordable, and reliable packing moving services and
                parcel services near me across India.
              </p>
            </div>

            <div className="as-mv-card">
              <img
                src="/images/about/vision.png"
                alt="Our Vision"
                className="as-mv-img"
                width={40}
                height={40}
              />
              <h4>Our Vision</h4>
              <p>
                To become one of India's most trusted cargo and near me packers and movers
                through quality and customer satisfaction.
              </p>
            </div>

            <div className="as-mv-card">
              <img
                src="/images/icons/values.png"
                alt="Our Values"
                className="as-mv-img"
                width={40}
                height={40}
              />
              <h4>Our Values</h4>
              <p>
                Integrity, transparency, safety, and customer-first service are
                the foundations of our business.
              </p>
            </div>

            <div className="as-mv-card">
              <img
                src="/images/icons/promises.png"
                alt="Our Promise"
                className="as-mv-img"
                width={40}
                height={40}
              />
              <h4>Our Promise</h4>
              <p>
                Safe packing, secure transportation, timely delivery, and complete
                support from start to finish.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}