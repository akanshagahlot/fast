"use client";

import { useState } from "react";
import "../styles/contactForm.css";

const services = [
  "Home Shifting",
  "Office Shifting",
  "Loading & Unloading",
  "Packing & Unpacking",
  "Warehouse Services",
  "Insurance Services",
  "Logistics Services",
  "Commercial Moving",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    shiftingFrom: "",
    shiftingTo: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our team will contact you shortly.");
  };

  return (
    <section className="cf-section">
      <div className="cf-inner">
        <div className="cf-left">
          <span className="cf-tag">Contact Us</span>

          <h2 className="cf-title">
            Get In <span>Touch</span>
          </h2>

          <p className="cf-desc">
            Share your moving details with us and our expert team will contact
            you with the best relocation solution.
          </p>

          <div className="cf-info-box">
            <div className="cf-info-item">
              <div className="cf-info-icon">☎</div>
              <div>
                <p>Call Us 24/7</p>
                <h3>+91 975-282-8166</h3>
              </div>
            </div>

            <div className="cf-info-item">
              <div className="cf-info-icon">✉</div>
              <div>
                <p>Make A Quote</p>
                <h3>Info@Gmail.in</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="cf-right">
          <h2 className="cf-form-title">Let&apos;s Get In Touch</h2>

          <form className="cf-form" onSubmit={handleSubmit}>
            <div className="cf-row">
              <div className="cf-field">
                <label>Your Name*</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="cf-field">
                <label>Your Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone*"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="cf-row">
              <div className="cf-field">
                <label>Shifting From*</label>
                <input
                  type="text"
                  name="shiftingFrom"
                  placeholder="Shifting From*"
                  value={form.shiftingFrom}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="cf-field">
                <label>Shifting To*</label>
                <input
                  type="text"
                  name="shiftingTo"
                  placeholder="Shifting To*"
                  value={form.shiftingTo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="cf-field">
              <label>Select Service*</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="cf-field">
              <label>Your Message*</label>
              <textarea
                name="message"
                placeholder="Write Message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="cf-btn">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}