"use client";

import React, { useRef } from "react";
import { TESTIMONIALS_DATA } from "@/data/content";

export default function ReviewCarousel() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section className="testimonials-section">
      <div className="max-w-7xl">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "2rem"
          }}
        >
          <div>
            <div className="section-label">Family Reviews</div>
            <h2 className="section-title">Trusted by Families Across the Region</h2>
            <p className="section-desc" style={{ marginTop: "0.25rem" }}>
              Read firsthand experiences from families who coordinated home-care and attendant support with our care coordination team.
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              type="button"
              onClick={scrollLeft}
              className="btn-icon-mobile"
              aria-label="Previous Review"
              style={{ width: "2.5rem", height: "2.5rem", borderRadius: "9999px", border: "1px solid var(--slate-300)" }}
            >
              ←
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="btn-icon-mobile"
              aria-label="Next Review"
              style={{ width: "2.5rem", height: "2.5rem", borderRadius: "9999px", border: "1px solid var(--slate-300)" }}
            >
              →
            </button>
          </div>
        </div>

        <div className="reviews-carousel-wrap no-scrollbar" ref={scrollRef}>
          {TESTIMONIALS_DATA.map((rev) => (
            <div key={rev.id} className="review-card">
              <div>
                <div className="review-service-tag">{rev.tag}</div>
                <div
                  style={{
                    display: "flex",
                    color: "#f59e0b",
                    marginBottom: "0.75rem",
                    letterSpacing: "2px"
                  }}
                >
                  ★★★★★
                </div>
                <p className="review-quote">{rev.quote}</p>
              </div>
              <div className="review-author-wrap">
                <div className="review-avatar">{rev.initials}</div>
                <div>
                  <div className="review-author-name">{rev.author}</div>
                  <div className="review-author-loc">{rev.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "0.8125rem",
            color: "var(--slate-400)"
          }}
        >
          ← Swipe left/right or use arrows to view more verified reviews →
        </div>
      </div>
    </section>
  );
}
