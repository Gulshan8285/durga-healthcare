"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteConfig";
import { BLOGS_DATA } from "@/data/content";
import { useModal } from "@/components/ModalContext";
import ServiceTabsFilter from "@/components/ServiceTabsFilter";
import CostCalculator from "@/components/CostCalculator";
import ReviewCarousel from "@/components/ReviewCarousel";
import FaqAccordion from "@/components/FaqAccordion";
import EnquiryForm from "@/components/EnquiryForm";

export default function HomePage() {
  const { openEnquiryModal } = useModal();

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section hero-gradient">
        <div className="max-w-7xl">
          <div className="hero-grid">
            <div className="hero-content">
              {/* Pill Badge */}
              <div className="pill-badge" style={{ width: "fit-content", margin: "0 auto 0 0" }}>
                <span className="dot-indicator">
                  <span className="ping"></span>
                  <span className="solid"></span>
                </span>
                <span>24/7 Home Care Coordination &amp; Patient Attendants</span>
              </div>

              <h1 className="hero-title">
                Compassionate Home Care for Your Loved Ones
              </h1>

              <p className="hero-subtitle">
                Reliable home-care support designed to help individuals and families with everyday care, personal assistance, home nursing, post-hospitalization convalescence, and rehabilitation at home.
              </p>

              {/* Star Rating Box */}
              <div className="hero-rating-box">
                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "#f59e0b" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                <span style={{ fontWeight: 800, color: "var(--slate-900)" }}>4.1/5</span>
                <span style={{ width: "4px", height: "4px", borderRadius: "9999px", backgroundColor: "var(--primary-300)" }}></span>
                <span style={{ fontWeight: 700, color: "var(--primary-900)" }}>126+ Families Supported</span>
              </div>

              {/* Action Buttons */}
              <div className="hero-cta-buttons">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    "Hello Durga Healthcare, I would like to enquire about your home-care services."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-hero"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.33C16.32 14.2 15.1 13.6 14.87 13.52C14.65 13.43 14.48 13.39 14.32 13.64C14.15 13.88 13.68 14.44 13.53 14.61C13.39 14.77 13.25 14.8 13 14.67C12.75 14.55 11.95 14.29 11 13.45C10.26 12.79 9.76 11.98 9.61 11.73C9.47 11.49 9.6 11.35 9.72 11.23C9.83 11.12 9.97 10.94 10.1 10.79C10.22 10.64 10.27 10.53 10.35 10.37C10.43 10.2 10.39 10.06 10.33 9.94C10.27 9.81 9.77 8.58 9.56 8.08C9.36 7.59 9.16 7.66 9.01 7.65C8.87 7.64 8.7 7.64 8.54 7.64C8.37 7.64 8.1 7.7 7.87 7.95C7.64 8.2 7 8.8 7 10.02C7 11.24 7.89 12.42 8.01 12.59C8.14 12.75 9.75 15.24 12.23 16.31C12.82 16.57 13.28 16.72 13.64 16.83C14.23 17.02 14.77 16.99 15.2 16.93C15.68 16.86 16.67 16.33 16.88 15.75C17.08 15.18 17.08 14.69 17.02 14.58C16.96 14.48 16.82 14.45 16.57 14.33Z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>

                <a href={`tel:${SITE_CONFIG.primaryPhoneClean}`} className="btn-call-hero">
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
                    style={{ color: "var(--primary-600)" }}
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                  <span>Call 24/7</span>
                </a>

                <button
                  type="button"
                  className="btn-enquire-hero"
                  onClick={() => openEnquiryModal("Hero Section Enquiry")}
                >
                  <span>Enquire Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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

              {/* USPs */}
              <div className="hero-usps-row">
                <div className="hero-usp-item">
                  <svg className="usp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <div>
                    <h4>24/7 Availability</h4>
                    <p>Day &amp; night shift arrangements</p>
                  </div>
                </div>

                <div className="hero-usp-item">
                  <svg className="usp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <div>
                    <h4>Honest Communication</h4>
                    <p>Caregiver availability verified</p>
                  </div>
                </div>

                <div className="hero-usp-item">
                  <svg className="usp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <div>
                    <h4>Dedicated Attendants</h4>
                    <p>Dignified, warm personal care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image & Badge */}
            <div className="hero-image-wrap">
              <div className="hero-image-frame">
                <img
                  src="/images/hero-caregiver.jpg"
                  alt="Compassionate Indian home nurse assisting elder grandfather with warm care"
                  width="800"
                  height="600"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div className="hero-floating-badge">
                <div className="badge-icon-sq">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.8125rem", fontWeight: 800, color: "var(--slate-900)" }}>Verified Home Attendants</div>
                  <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "var(--primary-700)" }}>24/7 Dedicated Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS / STATS BAR */}
      <section style={{ padding: "3rem 0", backgroundColor: "#ffffff", borderBottom: "1px solid var(--slate-100)" }}>
        <div className="max-w-7xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", backgroundColor: "var(--primary-50)", color: "var(--primary-600)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                🛡️
              </div>
              <div>
                <h4 style={{ fontWeight: 800, color: "var(--slate-900)", fontSize: "1.125rem" }}>100% Verified</h4>
                <p style={{ fontSize: "0.8125rem", color: "var(--slate-500)" }}>Aadhaar &amp; background checked</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", backgroundColor: "var(--primary-50)", color: "var(--primary-600)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                🕒
              </div>
              <div>
                <h4 style={{ fontWeight: 800, color: "var(--slate-900)", fontSize: "1.125rem" }}>24/7 Desk</h4>
                <p style={{ fontSize: "0.8125rem", color: "var(--slate-500)" }}>Instant coordination &amp; support</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", backgroundColor: "var(--primary-50)", color: "var(--primary-600)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                🤝
              </div>
              <div>
                <h4 style={{ fontWeight: 800, color: "var(--slate-900)", fontSize: "1.125rem" }}>Free Replacement</h4>
                <p style={{ fontSize: "0.8125rem", color: "var(--slate-500)" }}>Hassle-free caregiver switches</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", backgroundColor: "var(--primary-50)", color: "var(--primary-600)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                📍
              </div>
              <div>
                <h4 style={{ fontWeight: 800, color: "var(--slate-900)", fontSize: "1.125rem" }}>Pan-India Reach</h4>
                <p style={{ fontSize: "0.8125rem", color: "var(--slate-500)" }}>Delhi NCR, Bangalore, Mumbai &amp; more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION WITH INTERACTIVE FILTER */}
      <section id="services" style={{ padding: "4.5rem 0", backgroundColor: "var(--slate-50)", borderBottom: "1px solid var(--slate-200)" }}>
        <div className="max-w-7xl">
          <div className="section-header">
            <div className="section-label">Our Comprehensive Services</div>
            <h2 className="section-title">Home-Care Support Designed for Your Family</h2>
            <p className="section-desc">
              Explore our complete suite of in-home care options. We have combined verified attendants, elderly companions, qualified clinical nursing, specialized stroke &amp; dementia care, physiotherapists, doctor home visits, lab testing, and medical equipment rent &amp; sale.
            </p>
          </div>

          <ServiceTabsFilter />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose-section">
        <div className="max-w-7xl">
          <div className="section-header">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">Why Families Depend on Durga Healthcare</h2>
            <p className="section-desc">
              We are dedicated to honest communication, verified background-checked caregivers, and dedicated coordination to ensure total peace of mind.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="feature-title">Compassionate Approach</h3>
              <p className="feature-desc">Every patient attendant and nurse is selected for genuine empathy, patience, and warmth toward senior citizens and recovering individuals.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <polyline points="16 11 18 13 22 9"></polyline>
                </svg>
              </div>
              <h3 className="feature-title">Personalized Assistance</h3>
              <p className="feature-desc">Care routines are tailored precisely around your family's schedule—whether you need 12-hour day shifts, overnight vigilance, or 24/7 live-in care.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </div>
              <h3 className="feature-title">Comfortable Home-Based Care</h3>
              <p className="feature-desc">Recovering at home surrounded by family is proven to boost morale and speed up recovery while avoiding costly prolonged hospital stays.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="feature-title">Clear &amp; Honest Communication</h3>
              <p className="feature-desc">We verify caregiver availability for your exact pincode before taking any commitment. No false promises, only realistic, reliable coordination.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="feature-title">Care Coordination Desk</h3>
              <p className="feature-desc">You are assigned a dedicated care coordinator who stays in regular contact, manages shift replacements if a caregiver falls ill, and oversees quality.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="feature-title">No Long-Term Lock-in</h3>
              <p className="feature-desc">Enjoy full flexibility. You can use our services on a daily, weekly, or monthly plan, and pause or adjust shifts as recovery advances.</p>
            </div>
          </div>

          {/* Stats Banner */}
          <div className="stats-banner">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>5+ Years</h3>
                <p>Home Care Experience</p>
              </div>
              <div className="stat-item">
                <h3>10,000+</h3>
                <p>Families Supported</p>
              </div>
              <div className="stat-item">
                <h3>24/7 Live</h3>
                <p>Care Coordination Desk</p>
              </div>
              <div className="stat-item">
                <h3>97.8%</h3>
                <p>Client Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works-section">
        <div className="max-w-7xl">
          <div className="section-header">
            <div className="section-label">Simple Process</div>
            <h2 className="section-title">How Arranging Home Care Works</h2>
            <p className="section-desc">
              We make booking home care quick, smooth, and stress-free in four simple steps.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="step-title">Submit an Enquiry</h3>
              <p className="step-desc">Call our 24/7 helpline, chat on WhatsApp, or submit your basic requirements through our quick online form.</p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="step-title">Discuss Requirements</h3>
              <p className="step-desc">Our care manager calls to understand the patient’s condition, mobility level, shift preference, and any specific doctor instructions.</p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <polyline points="16 11 18 13 22 9"></polyline>
                </svg>
              </div>
              <h3 className="step-title">Confirm Availability</h3>
              <p className="step-desc">We match and verify certified caregiver profiles matching your schedule, address, and language preferences.</p>
            </div>

            <div className="step-card">
              <div className="step-number">04</div>
              <div className="step-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="step-title">Arrange the Service</h3>
              <p className="step-desc">The caregiver begins service with structured daily supervision, ongoing coordinator support, and regular check-ins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE COST CALCULATOR */}
      <CostCalculator />

      {/* VERIFIED REVIEWS CAROUSEL */}
      <ReviewCarousel />

      {/* 24/7 CTA BANNER */}
      <section className="cta-banner-section">
        <div className="max-w-7xl">
          <div className="cta-banner-content">
            <h2 className="cta-title">Need Immediate Care Coordination for Your Family?</h2>
            <p className="cta-subtitle">
              Speak directly with our dedicated pan-India care coordination desk right now. We confirm verified attendant availability within minutes.
            </p>
            <div className="cta-buttons">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Durga Healthcare, I need immediate care coordination for a family member."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-hero"
              >
                Instant WhatsApp Chat
              </a>
              <a href={`tel:${SITE_CONFIG.primaryPhoneClean}`} className="btn-call-hero">
                📞 Call {SITE_CONFIG.primaryPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="faq-section">
        <div className="max-w-7xl">
          <div className="section-header">
            <div className="section-label">Questions &amp; Answers</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Find answers to commonly asked questions regarding home attendants, nursing, shift packages, and caregiver verification.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* BLOGS PREVIEW */}
      <section className="blogs-section">
        <div className="max-w-7xl">
          <div className="section-header">
            <div className="section-label">Caregiving Insights</div>
            <h2 className="section-title">Latest Health &amp; Home-Care Guides</h2>
            <p className="section-desc">
              Practical advice, checklists, and expert recovery tips to assist family caregivers in maintaining optimal patient wellbeing at home.
            </p>
          </div>

          <div className="blog-grid">
            {BLOGS_DATA.map((blog) => (
              <div key={blog.id} className="blog-card">
                <div className="blog-media">
                  <img src={blog.image} alt={blog.title} loading="lazy" />
                </div>
                <div className="blog-content">
                  <div className="blog-tag">{blog.tag}</div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-snippet">{blog.snippet}</p>
                  <Link href={`/blogs#${blog.id}`} className="btn-learn-more">
                    Read Full Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN-PAGE LEAD ENQUIRY SECTION */}
      <section className="enquiry-section">
        <div className="max-w-7xl">
          <div className="enquiry-grid">
            <div>
              <div className="section-label">Get in Touch</div>
              <h2 className="section-title">Speak with Our Care Coordination Desk</h2>
              <p className="section-desc" style={{ textAlign: "left", marginBottom: "2rem" }}>
                Reach out today to discuss your family’s home healthcare requirements. Our care managers verify location availability, caregiver profiles, and answer all your questions with transparent pricing.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.5rem", backgroundColor: "var(--primary-50)", color: "var(--primary-600)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.25rem" }}>
                    📞
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--slate-500)", fontWeight: 700, textTransform: "uppercase" }}>24/7 Telephone Helpline</div>
                    <div style={{ fontWeight: 700, color: "var(--slate-900)", marginTop: "0.25rem" }}>
                      <a href={`tel:${SITE_CONFIG.primaryPhoneClean}`} style={{ color: "var(--primary-700)" }}>{SITE_CONFIG.primaryPhone}</a>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.5rem", backgroundColor: "rgba(37, 211, 102, 0.1)", color: "var(--whatsapp)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.25rem" }}>
                    💬
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--slate-500)", fontWeight: 700, textTransform: "uppercase" }}>Instant WhatsApp Chat</div>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontWeight: 700, color: "var(--whatsapp)", marginTop: "0.25rem", display: "inline-block" }}
                    >
                      Connect on WhatsApp ({SITE_CONFIG.primaryPhone})
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.5rem", backgroundColor: "var(--primary-50)", color: "var(--primary-600)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.25rem" }}>
                    ✉️
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--slate-500)", fontWeight: 700, textTransform: "uppercase" }}>Email Inquiries</div>
                    <a href={`mailto:${SITE_CONFIG.email}`} style={{ fontWeight: 600, color: "var(--slate-800)", marginTop: "0.25rem", display: "inline-block" }}>
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.5rem", backgroundColor: "var(--primary-50)", color: "var(--primary-600)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.25rem" }}>
                    📍
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--slate-500)", fontWeight: 700, textTransform: "uppercase" }}>Pan-India Service Coordination</div>
                    <div style={{ fontWeight: 600, color: "var(--slate-700)", marginTop: "0.25rem", fontSize: "0.875rem" }}>
                      Delhi NCR, Bengaluru, Mumbai, Pune, Hyderabad, Chennai &amp; Tier-1 Cities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="enquiry-card">
              <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1.375rem", fontWeight: 800, color: "var(--slate-900)" }}>
                  Submit Care Coordination Request
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--slate-600)", marginTop: "0.25rem" }}>
                  Fill in your details below. A care coordinator will connect with you within 15 minutes.
                </p>
              </div>

              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
