"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES_DATA, SERVICE_CATEGORIES } from "@/data/services";
import { useModal } from "./ModalContext";

export default function ServiceTabsFilter({ limit }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const { openEnquiryModal } = useModal();

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeCategory === "all") return true;
    return service.category === activeCategory;
  });

  const displayServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <div>
      {/* Filter Tabs */}
      <div className="service-tabs-wrap">
        {SERVICE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`service-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {displayServices.map((service) => (
          <div key={service.id} className="service-card card-hover-effect">
            <div className="service-card-media">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                width="400"
                height="260"
              />
              <div className="service-card-tag">{service.tag}</div>
            </div>

            <div className="service-card-body">
              <div className="service-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9"></path>
                </svg>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <ul className="service-features-list">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="service-feature-item">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="service-card-footer">
                <Link href={`/services#${service.id}`} className="btn-learn-more">
                  Learn More →
                </Link>
                <button
                  type="button"
                  className="btn-service-enquire"
                  onClick={() => openEnquiryModal(service.title)}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
