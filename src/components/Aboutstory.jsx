import "../styles/Aboutstory.css";

const milestones = [
  { year: "2012", text: "Founded in Jodhpur with a single truck and a big dream." },
  { year: "2016", text: "Expanded to 50+ cities across Rajasthan & Gujarat." },
  { year: "2020", text: "Crossed 30,000 successful relocations across India." },
  { year: "2024", text: "Now serving 200+ cities with a fleet of 120+ vehicles." },
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
                alt="Nex Go Moving Truck"
                className="as-main-img"
              />
              <p className="as-img-tagline">Moving India Since 2012</p>
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
            From One Truck to <span className="as-orange">India's Most Trusted</span> Moving Partner
          </h2>
          <p className="as-desc">
            Nex Go was born in 2012 with a single purpose — to make relocation
            stress-free for every family and business in India. What started as
            a small operation in Jodhpur has grown into a pan-India network
            trusted by over 50,000 customers.
          </p>
          <p className="as-desc">
            Every move we do is personal to us. We understand that your
            belongings carry memories, and our team treats each item with the
            same care they would their own. That philosophy has driven us for
            12 years — and it always will.
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
              <p>Deliver safe, affordable, and on-time relocation services to every corner of India.</p>
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
              <p>To become India's No.1 trusted logistics and moving company by 2030.</p>
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
              <p>Integrity, transparency, and customer-first thinking guide every decision we make.</p>
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
              <p>Zero damage, on-time delivery, and full support — from first call to final placement.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}