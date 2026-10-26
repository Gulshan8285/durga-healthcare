"use client";

import React, { useState } from "react";
import { FAQS_DATA } from "@/data/content";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="faq-accordion-list">
      {FAQS_DATA.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`faq-item ${isOpen ? "active" : ""}`}>
            <button
              type="button"
              className="faq-trigger"
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.25s ease"
                }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {isOpen && <div className="faq-body">{faq.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
