"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../styles/navbar.css";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  const servicesRef = useRef(null);
  const pagesRef = useRef(null);

  const servicesTimer = useRef(null);
  const pagesTimer = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (pagesRef.current && !pagesRef.current.contains(e.target)) {
        setPagesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Body scroll lock when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const closeAll = () => {
    setServicesOpen(false);
    setPagesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobilePagesOpen(false);
    scrollToTop();
  };

  const isActive = (href) => pathname === href;
  const isServiceActive = () =>
    pathname === "/services" || pathname.startsWith("/services/");
  const isPagesActive = () =>
    pathname === "/faq" || pathname === "/delivery-packages";

  const handlePagesEnter = () => {
    clearTimeout(pagesTimer.current);
    clearTimeout(servicesTimer.current);
    setServicesOpen(false);
    setPagesOpen(true);
  };

  const handlePagesLeave = () => {
    pagesTimer.current = setTimeout(() => setPagesOpen(false), 200);
  };

  const handleServicesEnter = () => {
    clearTimeout(servicesTimer.current);
    clearTimeout(pagesTimer.current);
    setPagesOpen(false);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimer.current = setTimeout(() => setServicesOpen(false), 200);
  };

  return (
    <>
      <nav className="navbar">

        {/* Logo */}
        <Link href="/" className="logoBox" onClick={closeAll}>
          <Image
            src="/images/logo.png"
            alt="Nex Go Logo"
            width={180}
            height={70}
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="navLinks">

          <li>
            <Link href="/" onClick={closeAll} className={isActive("/") ? "nav-active" : ""}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" onClick={closeAll} className={isActive("/about") ? "nav-active" : ""}>
              About Us
            </Link>
          </li>

          {/* Pages Dropdown */}
          <li
            className="dropdown"
            ref={pagesRef}
            onMouseEnter={handlePagesEnter}
            onMouseLeave={handlePagesLeave}
          >
            <button
              className={`serviceLink dropBtn ${pagesOpen ? "dropBtn--open" : ""} ${isPagesActive() ? "nav-active" : ""}`}
            >
              Pages {pagesOpen ? "▴" : "▾"}
            </button>

            {pagesOpen && (
              <ul
                className="dropdownMenu dropdownMenu--open"
                onMouseEnter={() => clearTimeout(pagesTimer.current)}
                onMouseLeave={handlePagesLeave}
              >
                <li>
                  <Link href="/faq" onClick={closeAll} className={isActive("/faq") ? "dropdown-active" : ""}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/delivery-packages" onClick={closeAll} className={isActive("/delivery-packages") ? "dropdown-active" : ""}>
                    Delivery Packages
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/blog" onClick={closeAll} className={isActive("/blog") ? "nav-active" : ""}>
              Blog
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="dropdown"
            ref={servicesRef}
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <Link
              href="/services"
              onClick={closeAll}
              className={`serviceLink dropBtn ${servicesOpen ? "dropBtn--open" : ""} ${isServiceActive() ? "nav-active" : ""}`}
            >
              Service {servicesOpen ? "▴" : "▾"}
            </Link>

            {servicesOpen && (
              <ul
                className="dropdownMenu dropdownMenu--open"
                onMouseEnter={() => clearTimeout(servicesTimer.current)}
                onMouseLeave={handleServicesLeave}
              >
                <li><Link href="/services/homeshifting"     onClick={closeAll} className={isActive("/services/homeshifting")     ? "dropdown-active" : ""}>Home Shifting</Link></li>
                <li><Link href="/services/officeshifting"   onClick={closeAll} className={isActive("/services/officeshifting")   ? "dropdown-active" : ""}>Office Shifting</Link></li>
                <li><Link href="/services/loadingunloading" onClick={closeAll} className={isActive("/services/loadingunloading") ? "dropdown-active" : ""}>Loading And Unloading</Link></li>
                <li><Link href="/services/packingunpacking" onClick={closeAll} className={isActive("/services/packingunpacking") ? "dropdown-active" : ""}>Packing And Unpacking</Link></li>
                <li><Link href="/services/warehouse"        onClick={closeAll} className={isActive("/services/warehouse")        ? "dropdown-active" : ""}>Warehouse Services</Link></li>
                <li><Link href="/services/insurance"        onClick={closeAll} className={isActive("/services/insurance")        ? "dropdown-active" : ""}>Insurance Services</Link></li>
                <li><Link href="/services/logistic"         onClick={closeAll} className={isActive("/services/logistic")         ? "dropdown-active" : ""}>Logistics Services</Link></li>
                <li><Link href="/services/commercial"       onClick={closeAll} className={isActive("/services/commercial")       ? "dropdown-active" : ""}>Commercial Moving</Link></li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/contact" onClick={closeAll} className={isActive("/contact") ? "nav-active" : ""}>
              Contact Us
            </Link>
          </li>

        </ul>

        {/* Desktop Quote Button */}
        <Link href="/contact" className="quoteBtn desktopQuote" onClick={scrollToTop}>
          Get A Quote →
        </Link>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${mobileOpen ? "hamburger--open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          <span className="hamburger__line" />
          <span className="hamburger__line" />
          <span className="hamburger__line" />
        </button>

      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="mobileOverlay" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile Drawer */}
      <div className={`mobileMenu ${mobileOpen ? "mobileMenu--open" : ""}`}>

        {/* Mobile Menu Header */}
        <div className="mobileMenu__header">
          <Image src="/images/logo.png" alt="Nex Go Logo" width={130} height={50} />
          <button className="mobileMenu__close" onClick={() => setMobileOpen(false)}>
            ✕
          </button>
        </div>

        <ul className="mobileMenu__links">

          <li>
            <Link href="/" onClick={closeAll} className={isActive("/") ? "nav-active" : ""}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" onClick={closeAll} className={isActive("/about") ? "nav-active" : ""}>
              About Us
            </Link>
          </li>

          {/* Mobile Pages Accordion */}
          <li className="mobileAccordion">
            <button
              className="mobileAccordion__btn"
              onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
            >
              Pages <span>{mobilePagesOpen ? "▴" : "▾"}</span>
            </button>
            {mobilePagesOpen && (
              <ul className="mobileAccordion__submenu">
                <li><Link href="/faq" onClick={closeAll}>FAQ</Link></li>
                <li><Link href="/delivery-packages" onClick={closeAll}>Delivery Packages</Link></li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/blog" onClick={closeAll} className={isActive("/blog") ? "nav-active" : ""}>
              Blog
            </Link>
          </li>

          {/* Mobile Services Accordion */}
          <li className="mobileAccordion">
            <button
              className="mobileAccordion__btn"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Service <span>{mobileServicesOpen ? "▴" : "▾"}</span>
            </button>
            {mobileServicesOpen && (
              <ul className="mobileAccordion__submenu">
                <li><Link href="/services/homeshifting"     onClick={closeAll}>Home Shifting</Link></li>
                <li><Link href="/services/officeshifting"   onClick={closeAll}>Office Shifting</Link></li>
                <li><Link href="/services/loadingunloading" onClick={closeAll}>Loading And Unloading</Link></li>
                <li><Link href="/services/packingunpacking" onClick={closeAll}>Packing And Unpacking</Link></li>
                <li><Link href="/services/warehouse"        onClick={closeAll}>Warehouse Services</Link></li>
                <li><Link href="/services/insurance"        onClick={closeAll}>Insurance Services</Link></li>
                <li><Link href="/services/logistic"         onClick={closeAll}>Logistics Services</Link></li>
                <li><Link href="/services/commercial"       onClick={closeAll}>Commercial Moving</Link></li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/contact" onClick={closeAll} className={isActive("/contact") ? "nav-active" : ""}>
              Contact Us
            </Link>
          </li>

        </ul>

        {/* Mobile Quote Button */}
        <Link href="/contact" className="quoteBtn mobileQuote" onClick={closeAll}>
          Get A Quote →
        </Link>

      </div>
    </>
  );
}