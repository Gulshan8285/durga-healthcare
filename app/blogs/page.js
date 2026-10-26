"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { BLOGS_DATA } from "@/data/content";
import { useModal } from "@/components/ModalContext";

export default function BlogsPage() {
  const { openEnquiryModal } = useModal();
  const [expandedBlog, setExpandedBlog] = useState(null);

  const toggleBlog = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <>
      {/* Blogs Hero */}
      <section className="hero-gradient" style={{ padding: "4rem 0 3.5rem 0", borderBottom: "1px solid var(--slate-200)", textAlign: "center" }}>
        <div className="max-w-7xl">
          <div className="pill-badge" style={{ marginBottom: "1rem" }}>
            <span className="dot-indicator">
              <span className="ping"></span>
              <span className="solid"></span>
            </span>
            <span>Knowledge &amp; Eldercare Guides</span>
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--slate-900)", letterSpacing: "-0.025em", maxWidth: "44rem", margin: "0 auto 1rem auto" }}>
            Home Healthcare &amp; Caregiving Resources
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--slate-600)", maxWidth: "38rem", margin: "0 auto", lineHeight: 1.6 }}>
            Practical checklists, senior wellness routines, and expert recovery tips to assist family caregivers and promote patient well-being at home.
          </p>
        </div>
      </section>

      {/* Blogs Catalog */}
      <section style={{ padding: "4.5rem 0", backgroundColor: "var(--slate-50)" }}>
        <div className="max-w-7xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {BLOGS_DATA.map((blog) => {
              const isExpanded = expandedBlog === blog.id;
              return (
                <div
                  key={blog.id}
                  id={blog.id}
                  className="blog-card"
                  style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: "#ffffff", borderRadius: "1.25rem", overflow: "hidden", border: "1px solid var(--slate-200)", boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="blog-media" style={{ height: "220px", overflow: "hidden" }}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  <div className="blog-content" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                      <span className="blog-tag">{blog.tag}</span>
                      <span style={{ fontSize: "0.75rem", color: "var(--slate-400)" }}>{blog.date}</span>
                    </div>

                    <h3 className="blog-title" style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.75rem" }}>
                      {blog.title}
                    </h3>

                    <p className="blog-snippet" style={{ color: "var(--slate-600)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                      {blog.snippet}
                    </p>

                    {isExpanded && (
                      <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--slate-100)", whiteSpace: "pre-line", fontSize: "0.875rem", color: "var(--slate-700)", lineHeight: 1.7 }}>
                        {blog.content}
                      </div>
                    )}

                    <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                      <button
                        type="button"
                        onClick={() => toggleBlog(blog.id)}
                        className="btn-learn-more"
                        style={{ fontWeight: 700, color: "var(--primary-600)", cursor: "pointer" }}
                      >
                        {isExpanded ? "▲ Show Less" : "▼ Read Full Guide →"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="cta-banner-section">
        <div className="max-w-7xl">
          <div className="cta-banner-content">
            <h2 className="cta-title">Need Personalized Medical Guidance for a Loved One?</h2>
            <p className="cta-subtitle">
              Our care coordinators can answer questions about shift routines, mobility aids, or matching dedicated attendants for your family.
            </p>
            <div className="cta-buttons">
              <button
                type="button"
                className="btn-primary"
                onClick={() => openEnquiryModal("Blog Reader Consultation")}
              >
                <span>Request Free Advice</span>
              </button>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Durga Healthcare, I was reading your care guides and would like advice on home care."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-hero"
              >
                WhatsApp Care Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
