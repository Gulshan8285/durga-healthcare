"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useModal } from "@/components/ModalContext";

export default function AboutPage() {
  const { openEnquiryModal } = useModal();

  return (
    <>
      {/* About Hero */}
      <section className="hero-gradient" style={{ padding: "4rem 0 3.5rem 0", borderBottom: "1px solid var(--slate-200)", textAlign: "center" }}>
        <div className="max-w-7xl">
          <div className="pill-badge" style={{ marginBottom: "1rem" }}>
            <span className="dot-indicator">
              <span className="ping"></span>
              <span className="solid"></span>
            </span>
            <span>Our Mission &amp; Values</span>
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--slate-900)", letterSpacing: "-0.025em", maxWidth: "44rem", margin: "0 auto 1rem auto" }}>
            Dignified, Compassionate Home Care for Every Family
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--slate-600)", maxWidth: "38rem", margin: "0 auto", lineHeight: 1.6 }}>
            At Durga Healthcare, we understand that finding dependable support for an aging parent or recovering loved one is one of the most critical decisions a family makes.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section style={{ padding: "4.5rem 0", backgroundColor: "#ffffff", borderBottom: "1px solid var(--slate-100)" }}>
        <div className="max-w-7xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <div style={{ borderRadius: "1.5rem", overflow: "hidden", boxShadow: "var(--shadow-lg)", aspectRatio: "4 / 3" }}>
                <img
                  src="/images/about-care.jpg"
                  alt="Dedicated home healthcare team"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <div className="section-label">Our Story</div>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1rem" }}>
                Putting Compassion &amp; Patient Dignity First
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--slate-600)", lineHeight: 1.7, marginBottom: "1rem" }}>
                Started with a singular purpose—to make arranging qualified, compassionate in-home care transparent and reliable—Durga Healthcare coordinates home-care support, patient attendants, elderly companions, and registered nurses across major Indian cities.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "var(--slate-500)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                We eliminate the guesswork and stress. By thoroughly assessing each patient&apos;s physical and medical needs first, verifying caregiver background and schedule availability, and assigning dedicated care coordinators, we ensure families feel supported every step of the journey.
              </p>

              <div style={{ borderLeft: "4px solid var(--primary-600)", paddingLeft: "1.25rem", fontStyle: "italic", color: "var(--slate-700)", fontSize: "0.9375rem", marginBottom: "1.5rem" }}>
                “Our mission is to help individuals recover and age with dignity in the warmth of their own homes, giving family members complete peace of mind.”
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => openEnquiryModal("About Us Enquiry")}
                >
                  <span>Enquire With Our Team</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
                <a
                  href={`tel:${SITE_CONFIG.primaryPhoneClean}`}
                  className="btn-call-hero"
                >
                  📞 Call 24/7 Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caregiver Verification Process */}
      <section style={{ padding: "4.5rem 0", backgroundColor: "var(--slate-50)", borderBottom: "1px solid var(--slate-200)" }}>
        <div className="max-w-7xl">
          <div className="section-header">
            <div className="section-label">Trust &amp; Safety</div>
            <h2 className="section-title">Our Rigorous 4-Step Caregiver Verification</h2>
            <p className="section-desc">We select only top-qualified applicants to ensure safety, punctuality, and medical reliability at your residence.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon-box">🪪</div>
              <h3 className="step-title">Identity &amp; Address Authentication</h3>
              <p className="step-desc">Aadhaar card verification, permanent address authentication, and criminal background checks through official databases.</p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon-box">🩺</div>
              <h3 className="step-title">Clinical &amp; Practical Assessment</h3>
              <p className="step-desc">Rigorous evaluation of patient transfer skills, vitals monitoring, hygiene maintenance, injection safety, and first aid.</p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon-box">🤝</div>
              <h3 className="step-title">Empathy &amp; Behavioral Screening</h3>
              <p className="step-desc">Structured interviews evaluating patience, communication skills, respectful language, and demeanor towards senior citizens.</p>
            </div>

            <div className="step-card">
              <div className="step-number">04</div>
              <div className="step-icon-box">🛡️</div>
              <h3 className="step-title">Continuous Supervision</h3>
              <p className="step-desc">Regular feedback calls with the family, coordinator check-ins, and free immediate replacement if expectations are not met.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy & Terms Section */}
      <section id="privacy" style={{ padding: "4.5rem 0", backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl">
          <div style={{ maxWidth: "48rem", margin: "0 auto", backgroundColor: "var(--slate-50)", padding: "2.5rem", borderRadius: "1.5rem", border: "1px solid var(--slate-200)" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1rem" }}>
              Privacy Policy &amp; Terms Summary
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--slate-600)", lineHeight: 1.7, marginBottom: "1rem" }}>
              Durga Healthcare respects client privacy. All personal information and health requirements shared through our website or care coordination desk are kept strictly confidential and used solely for coordinating caregiver matches.
            </p>
            <p style={{ fontSize: "0.875rem", color: "var(--slate-600)", lineHeight: 1.7 }} id="terms">
              Caregiver shift placements are subject to location feasibility and verified caregiver availability. Non-clinical attendants provide supportive daily living care; clinical medical treatments are performed by registered nursing staff under physician direction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
