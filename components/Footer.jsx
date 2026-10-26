import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="max-w-7xl">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link href="/" className="brand-logo-link" style={{ color: "#ffffff" }}>
              <div className="brand-icon-box">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor">
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.45"
                  />
                  <path
                    d="M12 7.5v7M8.5 11h7"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="brand-title-wrap">
                <div className="brand-title" style={{ color: "#ffffff" }}>
                  <span>{SITE_CONFIG.shortName}</span>{" "}
                  <span style={{ color: "var(--primary-400)" }}>{SITE_CONFIG.brandAccent}</span>
                </div>
                <span className="brand-subtitle" style={{ color: "var(--slate-400)" }}>
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </Link>
            <p>
              Durga Healthcare coordinates dedicated home-care assistance, elderly support, patient attendants, professional home nursing, post-hospitalization recovery, and diagnostics across India with dignity, safety, and compassion.
            </p>
            <div style={{ marginTop: "1rem", fontSize: "0.8125rem", color: "var(--slate-400)" }}>
              📍 <strong>Pan-India Service Coordination:</strong> Delhi NCR, Bengaluru, Mumbai, Pune, Hyderabad, Chennai &amp; Tier-1 Cities.
            </div>
          </div>

          {/* Home Services Links */}
          <div>
            <h4 className="footer-heading">Home Services</h4>
            <ul className="footer-links-list">
              <li><Link href="/services#patient-care">Patient Care Assistance at Home</Link></li>
              <li><Link href="/services#elderly-care">Elderly Care &amp; Daily Routine</Link></li>
              <li><Link href="/services#home-nursing">Home Nursing Care &amp; ICU Setup</Link></li>
              <li><Link href="/services#day-night-care">24/7 &amp; Day/Night Attendants</Link></li>
              <li><Link href="/services#post-hospital">Post-Hospitalization Support</Link></li>
              <li><Link href="/services#stroke-care">Stroke &amp; Paralysis Care</Link></li>
              <li><Link href="/services#physiotherapy">Physiotherapy at Home</Link></li>
              <li><Link href="/services#medical-equipment">Medical Equipment on Rent/Sale</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Durga Healthcare</Link></li>
              <li><Link href="/services">All Services Catalog</Link></li>
              <li><Link href="/blogs">Care Guides &amp; Blogs</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/#faq">Frequently Asked Questions</Link></li>
              <li><Link href="/about#privacy">Privacy Policy</Link></li>
              <li><Link href="/about#terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* 24/7 Care Coordination */}
          <div>
            <h4 className="footer-heading">24/7 Care Coordination</h4>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <a href={`tel:${SITE_CONFIG.primaryPhoneClean}`} style={{ color: "#ffffff", fontWeight: 700 }}>
                  {SITE_CONFIG.primaryPhone}
                </a>
                <div style={{ fontSize: "0.6875rem", color: "var(--primary-300)" }}>Priority Helpline 1</div>
              </div>
            </div>

            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <a href={`tel:${SITE_CONFIG.secondaryPhoneClean}`} style={{ color: "#ffffff", fontWeight: 700 }}>
                  {SITE_CONFIG.secondaryPhone}
                </a>
                <div style={{ fontSize: "0.6875rem", color: "var(--primary-300)" }}>Priority Helpline 2</div>
              </div>
            </div>

            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.33C16.32 14.2 15.1 13.6 14.87 13.52C14.65 13.43 14.48 13.39 14.32 13.64C14.15 13.88 13.68 14.44 13.53 14.61C13.39 14.77 13.25 14.8 13 14.67C12.75 14.55 11.95 14.29 11 13.45C10.26 12.79 9.76 11.98 9.61 11.73C9.47 11.49 9.6 11.35 9.72 11.23C9.83 11.12 9.97 10.94 10.1 10.79C10.22 10.64 10.27 10.53 10.35 10.37C10.43 10.2 10.39 10.06 10.33 9.94C10.27 9.81 9.77 8.58 9.56 8.08C9.36 7.59 9.16 7.66 9.01 7.65C8.87 7.64 8.7 7.64 8.54 7.64C8.37 7.64 8.1 7.7 7.87 7.95C7.64 8.2 7 8.8 7 10.02C7 11.24 7.89 12.42 8.01 12.59C8.14 12.75 9.75 15.24 12.23 16.31C12.82 16.57 13.28 16.72 13.64 16.83C14.23 17.02 14.77 16.99 15.2 16.93C15.68 16.86 16.67 16.33 16.88 15.75C17.08 15.18 17.08 14.69 17.02 14.58C16.96 14.48 16.82 14.45 16.57 14.33Z" />
              </svg>
              <div>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#34d399", fontWeight: 700 }}
                >
                  Instant WhatsApp Chat
                </a>
                <div style={{ fontSize: "0.6875rem", color: "var(--slate-400)" }}>24/7 Instant Responses</div>
              </div>
            </div>

            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <a href={`mailto:${SITE_CONFIG.email}`} style={{ color: "#ffffff" }}>
                  {SITE_CONFIG.email}
                </a>
                <div style={{ fontSize: "0.6875rem", color: "var(--slate-400)" }}>Email Coordination</div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            <div>
              © {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved. Compassionate Care Across India.
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--slate-400)", marginTop: "0.35rem" }}>
              Created with ❤️ by{" "}
              <a
                href="https://codeorbit.cloud"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--primary-300)", fontWeight: 700, textDecoration: "underline" }}
              >
                codeorbit.cloud
              </a>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link href="/about#privacy" style={{ color: "var(--slate-400)" }}>Privacy Policy</Link>
            <Link href="/about#terms" style={{ color: "var(--slate-400)" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
