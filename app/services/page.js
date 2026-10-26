"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteConfig";
import { SERVICES_DATA } from "@/data/services";
import { useModal } from "@/components/ModalContext";
import ServiceTabsFilter from "@/components/ServiceTabsFilter";
import CostCalculator from "@/components/CostCalculator";
import FaqAccordion from "@/components/FaqAccordion";
import EnquiryForm from "@/components/EnquiryForm";

export default function ServicesPage() {
  const { openEnquiryModal } = useModal();

  return (
    <>
      {/* Services Hero */}
      <section className="hero-gradient" style={{ padding: "4rem 0 3.5rem 0", borderBottom: "1px solid var(--slate-200)", textAlign: "center" }}>
        <div className="max-w-7xl">
          <div className="pill-badge" style={{ marginBottom: "1rem" }}>
            <span className="dot-indicator">
              <span className="ping"></span>
              <span className="solid"></span>
            </span>
            <span>Comprehensive Care Portfolio</span>
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--slate-900)", letterSpacing: "-0.025em", maxWidth: "44rem", margin: "0 auto 1rem auto" }}>
            Our Home Healthcare &amp; Attendant Services
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--slate-600)", maxWidth: "38rem", margin: "0 auto", lineHeight: 1.6 }}>
            Explore verified patient attendants, elderly care companions, hospital-trained nurses, stroke rehabilitation, home ICU setups, and medical equipment rent &amp; sale across India.
          </p>
        </div>
      </section>

      {/* Services Tabs Filter */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--slate-50)", borderBottom: "1px solid var(--slate-200)" }}>
        <div className="max-w-7xl">
          <div className="section-header">
            <div className="section-label">All Services</div>
            <h2 className="section-title">Explore by Care Category</h2>
            <p className="section-desc">
              Filter according to your family&apos;s specific daily living, clinical, or recovery requirements.
            </p>
          </div>

          <ServiceTabsFilter />
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section style={{ padding: "4.5rem 0", backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl">
          <div className="section-header">
            <div className="section-label">Detailed Guide</div>
            <h2 className="section-title">In-Depth Service Specifications</h2>
            <p className="section-desc">
              Transparent specifications of what each service covers, shifts available, and starting rate estimates.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {SERVICES_DATA.map((srv, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={srv.id}
                  id={srv.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "2.5rem",
                    alignItems: "center",
                    padding: "2rem",
                    borderRadius: "1.25rem",
                    backgroundColor: isEven ? "var(--slate-50)" : "#ffffff",
                    border: "1px solid var(--slate-200)"
                  }}
                >
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ borderRadius: "1rem", overflow: "hidden", aspectRatio: "16 / 10", boxShadow: "var(--shadow-md)" }}>
                      <img
                        src={srv.image}
                        alt={srv.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  </div>

                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div className="pill-badge" style={{ marginBottom: "0.75rem", fontSize: "0.75rem" }}>
                      <span>{srv.tag}</span>
                    </div>
                    <h3 style={{ fontSize: "1.625rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "0.75rem" }}>
                      {srv.title}
                    </h3>
                    <p style={{ color: "var(--slate-600)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                      {srv.description}
                    </p>

                    <div style={{ marginBottom: "1rem" }}>
                      <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--slate-700)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                        Key Tasks Handled:
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                        {srv.features.map((feat, i) => (
                          <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--slate-600)" }}>
                            <span style={{ color: "var(--primary-600)", fontWeight: "bold" }}>✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", padding: "0.75rem 1rem", backgroundColor: "rgba(13, 148, 136, 0.08)", borderRadius: "0.75rem", marginBottom: "1.25rem", fontSize: "0.8125rem" }}>
                      <div>
                        <strong style={{ color: "var(--primary-900)" }}>Shifts:</strong> {srv.shiftOptions}
                      </div>
                      <div>
                        <strong style={{ color: "var(--primary-900)" }}>Starting Rate:</strong> {srv.priceRange}
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "0.75rem" }}>
                      <button
                        type="button"
                        className="btn-primary"
                        onClick={() => openEnquiryModal(srv.title)}
                      >
                        <span>Book / Enquire</span>
                      </button>
                      <a
                        href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                          `Hello Durga Healthcare, I would like to book or enquire about ${srv.title}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp-hero"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <CostCalculator />

      {/* FAQs */}
      <section className="faq-section">
        <div className="max-w-7xl">
          <div className="section-header">
            <div className="section-label">Common Questions</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* Lead Capture */}
      <section className="enquiry-section">
        <div className="max-w-7xl">
          <div className="section-header">
            <div className="section-label">Quick Booking</div>
            <h2 className="section-title">Request a Free Care Assessment</h2>
            <p className="section-desc">
              Tell us what support you need and we will coordinate attendant availability.
            </p>
          </div>
          <div style={{ maxWidth: "36rem", margin: "0 auto", backgroundColor: "#ffffff", padding: "2rem", borderRadius: "1.25rem", boxShadow: "var(--shadow-lg)" }}>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
