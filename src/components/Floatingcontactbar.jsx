"use client";

import { useState, useEffect } from "react";

export default function FloatingContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  // Primary business contact configurations
  const phoneNumber = "+919265057478"; 
  const whatsappNumber = "919265057478";
  const whatsappMessage = "Hello Fast Professional Cargo Movers! I would like to get a quote for your packing and moving services.";

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @keyframes bounce-icon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .floating-bar {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 0;
          animation: ${visible ? "slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" : "none"};
          opacity: ${visible ? 1 : 0};
        }

        .floating-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .floating-btn:hover {
          transform: translateX(-8px);
        }

        .floating-btn:hover .btn-label {
          max-width: 160px;
          opacity: 1;
          padding-left: 14px;
          padding-right: 6px;
        }

        .btn-label {
          background: white;
          color: #1a1a1a;
          font-size: 13px;
          font-weight: 600;
          font-family: 'Segoe UI', sans-serif;
          letter-spacing: 0.3px;
          white-space: nowrap;
          max-width: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          padding-top: 0;
          padding-bottom: 0;
          height: 52px;
          line-height: 52px;
          border-radius: 8px 0 0 8px;
          box-shadow: -4px 0 12px rgba(0,0,0,0.08);
          padding-right: 0;
        }

        .btn-icon-wrap {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px 0 0 8px;
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .call-btn .btn-icon-wrap {
          background: #1A0066;          /* Deep Navy Primary */
          border-radius: 8px 0 0 8px;
        }

        .whatsapp-btn .btn-icon-wrap {
          background: #FF6600;          /* Vibrant Cargo Orange */
          border-radius: 8px 0 0 8px;
          margin-top: 4px;
        }

        .call-btn .btn-label {
          color: #1A0066;               /* Deep Navy Primary */
          border: 2px solid #1A0066;
          border-right: none;
        }

        .whatsapp-btn .btn-label {
          color: #FF6600;               /* Vibrant Cargo Orange */
          border: 2px solid #FF6600;
          border-right: none;
        }

        .btn-icon-wrap svg {
          animation: bounce-icon 2s ease-in-out infinite;
        }

        .call-btn:hover .btn-icon-wrap {
          background: #100040;          /* Deep Navy Darkened */
        }

        .whatsapp-btn:hover .btn-icon-wrap {
          background: #CC5200;          /* Cargo Orange Darkened */
        }

        /* Pulse ring */
        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          z-index: 1;
        }

        .pulse-ring::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border-radius: 8px 0 0 8px;
          background: inherit;
          animation: pulse-ring 2.5s ease-out infinite;
        }

        .call-btn .pulse-ring::before {
          background: #1A0066;          /* Deep Navy Primary */
        }

        .whatsapp-btn .pulse-ring::before {
          background: #FF6600;          /* Vibrant Cargo Orange */
        }

        /* Divider line */
        .btn-divider {
          width: 52px;
          height: 2px;
          background: rgba(255,255,255,0.3);
          margin-left: auto;
        }

        @media (max-width: 640px) {
          .btn-icon-wrap {
            width: 46px;
            height: 46px;
          }

          .btn-label {
            height: 46px;
            line-height: 46px;
            font-size: 12px;
          }

          .pulse-ring {
            width: 46px;
            height: 46px;
          }
        }
      `}</style>

      <div className="floating-bar">
        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="floating-btn call-btn"
          aria-label="Call Fast Professional Cargo Movers"
          title="Call Fast Professional Cargo Movers"
        >
          <span className="btn-label">Call Us Now</span>
          <div className="btn-icon-wrap">
            <div className="pulse-ring" />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                fill="white"
              />
            </svg>
          </div>
        </a>

        <div className="btn-divider" />

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-btn"
          aria-label="Chat with Fast Professional Cargo Movers on WhatsApp"
          title="Chat on WhatsApp"
        >
          <span className="btn-label">WhatsApp Us</span>
          <div className="btn-icon-wrap">
            <div className="pulse-ring" />
            <svg width="23" height="23" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 3C9.373 3 4 8.373 4 15c0 2.385.67 4.61 1.832 6.502L4 29l7.701-1.807A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3z"
                fill="white"
              />
              <path
                d="M21.58 19.51c-.27.76-1.35 1.39-2.22 1.57-.59.13-1.36.23-3.95-.85-3.32-1.38-5.46-4.74-5.62-4.96-.16-.22-1.32-1.76-1.32-3.35 0-1.59.83-2.37 1.13-2.69.27-.29.59-.36.79-.36.2 0 .39.002.56.01.18.008.42-.068.66.5.27.63.91 2.23.99 2.39.08.17.13.36.03.58-.1.22-.15.36-.3.55-.15.19-.32.43-.45.58-.15.17-.31.36-.13.7.18.34.79 1.3 1.69 2.1 1.16 1.03 2.14 1.35 2.48 1.5.34.15.54.13.74-.08.2-.21.86-.99 1.09-1.33.23-.34.45-.28.76-.17.31.11 1.97.93 2.31 1.1.34.17.56.25.65.4.08.15.08.87-.19 1.63z"
                fill="#FF6600"            /* Updated custom svg logo path */
              />
            </svg>
          </div>
        </a>
      </div>
    </>
  );
}