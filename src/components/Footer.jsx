import Link from "next/link";
import Image from "next/image";
import "../styles/footer.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Get A Quote", href: "/contact" },
];

const services = [
  { label: "Home Shifting", href: "/services/homeshifting" },
  { label: "Office Shifting", href: "/services/officeshifting" },
  { label: "Loading & Unloading", href: "/services/loadingunloading" },
  { label: "Packing & Unpacking", href: "/services/packingunpacking" },
  { label: "Warehouse Services", href: "/services/warehouse" },
  { label: "Insurance Services", href: "/services/insurance" },
  { label: "Logistics Services", href: "/services/logistics" },
  { label: "Commercial Moving", href: "/services/commercial" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: "f" },
  { label: "Instagram", href: "https://instagram.com", icon: "in" },
  { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
  { label: "YouTube", href: "https://youtube.com", icon: "▶" },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* Decorative top border line */}
      <div className="footer-top-bar" />

      {/* Main Grid */}
      <div className="footer-grid">
        {/* Col 1 — Brand */}
        <div className="footer-brand">
          <Image
            src="/images/footer.png"
            alt="Nex Go Logo"
            width={200}
            height={150}
            className="footer-logo"
          />

          <p className="footer-about">
            Nex Go Packers & Movers provides safe, reliable, and affordable
            relocation services across India — for homes, offices, and
            commercial goods.
          </p>

          

          {/* Social Icons */}
          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="social-btn"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <div className="footer-divider" />

          <ul className="footer-list">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="footer-link">
                  <span className="link-arrow">›</span> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div className="footer-col">
          <h4 className="footer-heading">Our Services</h4>
          <div className="footer-divider" />

          <ul className="footer-list">
            {services.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="footer-link">
                  <span className="link-arrow">›</span> {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div className="footer-col">
          <h4 className="footer-heading">Get In Touch</h4>
          <div className="footer-divider" />

          <ul className="footer-contact-list">
            <li className="contact-item">
              <img
                src="/images/icons/location.png"
                alt="Location"
                width="18"
                height="18"
                style={{ objectFit: "contain", marginRight: "8px" }}
              />
              <span>123, MG Road, Jodhpur, Rajasthan – 342001</span>
            </li>

            <li className="contact-item">
              <img
                src="/images/icons/phone.png"
                alt="Call"
                width="18"
                height="18"
                style={{ objectFit: "contain", marginRight: "8px" }}
              />
              <a href="tel:+919876543210" className="footer-link">
                +91 98765 43210
              </a>
            </li>

            <li className="contact-item">
              <img
                src="/images/icons/email.png"
                alt="Email"
                width="18"
                height="18"
                style={{ objectFit: "contain", marginRight: "8px" }}
              />
              <a href="mailto:info@nexgo.in" className="footer-link">
                info@nexgo.in
              </a>
            </li>
          </ul>

          <Link href="/contact" className="footer-cta">
            Get Free Quote →
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()}{" "}
          <span className="brand-name">Nex Go Packers & Movers</span>. All Rights
          Reserved.
        </p>

        <div className="footer-legal">
          <Link href="/terms" className="legal-link">
            Terms & Conditions
          </Link>

          <span className="legal-dot">•</span>

          <Link href="/privacy" className="legal-link">
            Privacy Policy
          </Link>

          <span className="legal-dot">•</span>

          <Link href="/sitemap" className="legal-link">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}