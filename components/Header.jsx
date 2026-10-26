"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useModal } from "./ModalContext";

export default function Header() {
  const pathname = usePathname();
  const { openEnquiryModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Care Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact" }
  ];

  return (
    <>
      <header className={`sticky-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="max-w-7xl">
          <div className="nav-container">
            {/* Logo */}
            <Link href="/" className="brand-logo-link">
              <div className="brand-icon-box">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor">
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
                <div className="brand-title">
                  <span>{SITE_CONFIG.shortName}</span>{" "}
                  <span className="brand-accent">{SITE_CONFIG.brandAccent}</span>
                </div>
                <span className="brand-subtitle">{SITE_CONFIG.tagline}</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Header Action CTAs */}
            <div className="header-actions">
              <a
                href={`tel:${SITE_CONFIG.primaryPhoneClean}`}
                className="btn-header-call"
                title="Call our 24/7 Helpline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "var(--primary-600)" }}
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                <span>Call 24/7</span>
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Durga Healthcare, I would like to enquire about your home-care services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-header-whatsapp"
                title="WhatsApp Care Coordinator"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.33C16.32 14.2 15.1 13.6 14.87 13.52C14.65 13.43 14.48 13.39 14.32 13.64C14.15 13.88 13.68 14.44 13.53 14.61C13.39 14.77 13.25 14.8 13 14.67C12.75 14.55 11.95 14.29 11 13.45C10.26 12.79 9.76 11.98 9.61 11.73C9.47 11.49 9.6 11.35 9.72 11.23C9.83 11.12 9.97 10.94 10.1 10.79C10.22 10.64 10.27 10.53 10.35 10.37C10.43 10.2 10.39 10.06 10.33 9.94C10.27 9.81 9.77 8.58 9.56 8.08C9.36 7.59 9.16 7.66 9.01 7.65C8.87 7.64 8.7 7.64 8.54 7.64C8.37 7.64 8.1 7.7 7.87 7.95C7.64 8.2 7 8.8 7 10.02C7 11.24 7.89 12.42 8.01 12.59C8.14 12.75 9.75 15.24 12.23 16.31C12.82 16.57 13.28 16.72 13.64 16.83C14.23 17.02 14.77 16.99 15.2 16.93C15.68 16.86 16.67 16.33 16.88 15.75C17.08 15.18 17.08 14.69 17.02 14.58C16.96 14.48 16.82 14.45 16.57 14.33Z" />
                </svg>
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                className="btn-primary btn-open-enquiry"
                onClick={() => openEnquiryModal("Top Bar Enquiry")}
              >
                <span>Enquire Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>

            {/* Mobile Nav Toggle Icons */}
            <div className="mobile-nav-toggle">
              <a
                href={`tel:${SITE_CONFIG.primaryPhoneClean}`}
                className="btn-icon-mobile teal"
                aria-label="Call Helpline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Durga Healthcare, I would like to enquire about home-care."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-mobile green"
                aria-label="WhatsApp Us"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.33C16.32 14.2 15.1 13.6 14.87 13.52C14.65 13.43 14.48 13.39 14.32 13.64C14.15 13.88 13.68 14.44 13.53 14.61C13.39 14.77 13.25 14.8 13 14.67C12.75 14.55 11.95 14.29 11 13.45C10.26 12.79 9.76 11.98 9.61 11.73C9.47 11.49 9.6 11.35 9.72 11.23C9.83 11.12 9.97 10.94 10.1 10.79C10.22 10.64 10.27 10.53 10.35 10.37C10.43 10.2 10.39 10.06 10.33 9.94C10.27 9.81 9.77 8.58 9.56 8.08C9.36 7.59 9.16 7.66 9.01 7.65C8.87 7.64 8.7 7.64 8.54 7.64C8.37 7.64 8.1 7.7 7.87 7.95C7.64 8.2 7 8.8 7 10.02C7 11.24 7.89 12.42 8.01 12.59C8.14 12.75 9.75 15.24 12.23 16.31C12.82 16.57 13.28 16.72 13.64 16.83C14.23 17.02 14.77 16.99 15.2 16.93C15.68 16.86 16.67 16.33 16.88 15.75C17.08 15.18 17.08 14.69 17.02 14.58C16.96 14.48 16.82 14.45 16.57 14.33Z" />
                </svg>
              </a>
              <button
                type="button"
                className="btn-icon-mobile"
                aria-label="Open Navigation Menu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`} onClick={() => setMobileMenuOpen(false)}>
        <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
          <div className="drawer-header">
            <div className="brand-title" style={{ fontSize: "1.125rem" }}>
              <span>{SITE_CONFIG.shortName}</span>{" "}
              <span className="brand-accent">{SITE_CONFIG.brandAccent}</span>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              aria-label="Close Menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>

          <div className="drawer-nav-list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`drawer-nav-link ${isActive ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a
              href={`tel:${SITE_CONFIG.primaryPhoneClean}`}
              className="btn-call-hero"
              style={{ justifyContent: "center", width: "100%" }}
            >
              📞 Call Helpline: {SITE_CONFIG.primaryPhone}
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                "Hello Durga Healthcare, I would like to enquire about home-care."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-hero"
              style={{ justifyContent: "center", width: "100%" }}
            >
              💬 Chat on WhatsApp
            </a>
            <button
              type="button"
              className="btn-enquire-hero"
              style={{ width: "100%" }}
              onClick={() => {
                setMobileMenuOpen(false);
                openEnquiryModal("Mobile Menu Enquiry");
              }}
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
