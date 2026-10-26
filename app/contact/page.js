"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import EnquiryForm from "@/components/EnquiryForm";
import FaqAccordion from "@/components/FaqAccordion";

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero */}
      <section className="hero-gradient" style={{ padding: "4rem 0 3.5rem 0", borderBottom: "1px solid var(--slate-200)", textAlign: "center" }}>
        <div className="max-w-7xl">
          <div className="pill-badge" style={{ marginBottom: "1rem" }}>
            <span className="dot-indicator">
              <span className="ping"></span>
              <span className="solid"></span>
            </span>
            <span>24/7 Pan-India Support Desk</span>
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--slate-900)", letterSpacing: "-0.025em", maxWidth: "44rem", margin: "0 auto 1rem auto" }}>
            We Are Here to Help 24/7
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--slate-600)", maxWidth: "38rem", margin: "0 auto", lineHeight: 1.6 }}>
            Speak directly with our dedicated care coordinators to discuss caregiver availability, nurse visits, shift schedules, or pricing for your area.
          </p>
        </div>
      </section>

      {/* Contact Main Grid */}
      <section style={{ padding: "4.5rem 0", backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem" }}>
            {/* Contact Channels */}
            <div>
              <div className="section-label">Direct Communication</div>
              <h2 style={{ fontSize: "1.875rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1rem" }}>
                Reach Out Anytime, Day or Night
              </h2>
              <p style={{ color: "var(--slate-600)", fontSize: "0.9375rem", lineHeight: 1.65, marginBottom: "2rem" }}>
                Whether it is an urgent post-discharge patient care arrangement or ongoing support for an elderly parent, our team responds promptly.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Phone */}
                <div style={{ display: "flex", gap: "1rem", padding: "1.25rem", backgroundColor: "var(--slate-50)", borderRadius: "1rem", border: "1px solid var(--slate-200)" }}>
                  <div style={{ fontSize: "1.5rem" }}>📞</div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: "var(--slate-900)", marginBottom: "0.25rem" }}>Priority Phone Helpline</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                      <a href={`tel:${SITE_CONFIG.primaryPhoneClean}`} style={{ fontWeight: 700, color: "var(--primary-700)", fontSize: "1.0625rem" }}>
                        {SITE_CONFIG.primaryPhone} (24/7 Dedicated Support)
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div style={{ display: "flex", gap: "1rem", padding: "1.25rem", backgroundColor: "rgba(37, 211, 102, 0.08)", borderRadius: "1rem", border: "1px solid rgba(37, 211, 102, 0.3)" }}>
                  <div style={{ fontSize: "1.5rem" }}>💬</div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: "var(--slate-900)", marginBottom: "0.25rem" }}>Instant WhatsApp Coordination</h4>
                    <p style={{ fontSize: "0.8125rem", color: "var(--slate-600)", marginBottom: "0.5rem" }}>
                      Get instant replies, attendant profiles, and cost estimates via chat.
                    </p>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                        "Hello Durga Healthcare, I would like to enquire about home-care services."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp-hero"
                      style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}
                    >
                      Chat on WhatsApp Now
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: "flex", gap: "1rem", padding: "1.25rem", backgroundColor: "var(--slate-50)", borderRadius: "1rem", border: "1px solid var(--slate-200)" }}>
                  <div style={{ fontSize: "1.5rem" }}>✉️</div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: "var(--slate-900)", marginBottom: "0.25rem" }}>Email Coordination</h4>
                    <a href={`mailto:${SITE_CONFIG.email}`} style={{ color: "var(--primary-700)", fontWeight: 600 }}>
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Service Hours */}
                <div style={{ display: "flex", gap: "1rem", padding: "1.25rem", backgroundColor: "var(--slate-50)", borderRadius: "1rem", border: "1px solid var(--slate-200)" }}>
                  <div style={{ fontSize: "1.5rem" }}>🕒</div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: "var(--slate-900)", marginBottom: "0.25rem" }}>Hours of Operation</h4>
                    <div style={{ color: "var(--slate-700)", fontSize: "0.875rem" }}>
                      24 Hours a Day / 7 Days a Week / 365 Days a Year
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Page Form */}
            <div>
              <div style={{ backgroundColor: "#ffffff", padding: "2.5rem", borderRadius: "1.5rem", border: "1px solid var(--slate-200)", boxShadow: "var(--shadow-xl)" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <div className="section-label">Enquiry Form</div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--slate-900)" }}>
                    Submit Your Care Requirement
                  </h3>
                  <p style={{ fontSize: "0.8125rem", color: "var(--slate-600)", marginTop: "0.25rem" }}>
                    We match caregiver profiles and confirm feasible timings immediately.
                  </p>
                </div>

                <EnquiryForm defaultService="Patient Care Assistance at Home" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Cities */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--slate-50)", borderTop: "1px solid var(--slate-200)" }}>
        <div className="max-w-7xl">
          <div className="section-header">
            <div className="section-label">Locations Covered</div>
            <h2 className="section-title">Pan-India Home Care Coordination</h2>
            <p className="section-desc">
              Providing reliable home attendants and nursing care in all major Indian metropolitan areas and surrounding regions.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", maxWidth: "48rem", margin: "0 auto" }}>
            {SITE_CONFIG.cities.map((city, idx) => (
              <div
                key={idx}
                style={{
                  padding: "0.5rem 1.25rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--slate-800)",
                  border: "1px solid var(--slate-300)",
                  boxShadow: "var(--shadow-xs)"
                }}
              >
                📍 {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section">
        <div className="max-w-7xl">
          <div className="section-header">
            <div className="section-label">Help &amp; Answers</div>
            <h2 className="section-title">Common Enquiries</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
