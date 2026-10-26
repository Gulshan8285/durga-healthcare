"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/data/siteConfig";

const rates = {
  attendant: {
    name: "Patient Attendant (General Care)",
    "12h-day": "₹900 - ₹1,200 / day",
    "12h-night": "₹950 - ₹1,300 / night",
    "24h": "₹1,600 - ₹2,200 / 24h",
    hourly: "₹150 - ₹250 / hour"
  },
  elderly: {
    name: "Elderly Care & Senior Companion",
    "12h-day": "₹950 - ₹1,250 / day",
    "12h-night": "₹1,000 - ₹1,350 / night",
    "24h": "₹1,700 - ₹2,400 / 24h",
    hourly: "₹180 - ₹250 / hour"
  },
  nursing: {
    name: "Home Nursing Care (GNM / B.Sc)",
    "12h-day": "₹1,500 - ₹2,200 / shift",
    "12h-night": "₹1,700 - ₹2,500 / shift",
    "24h": "₹2,800 - ₹3,800 / 24h",
    hourly: "₹400 - ₹600 / visit"
  },
  icu: {
    name: "Intensive Home Care / ICU Setup",
    "12h-day": "₹2,200 - ₹3,000 / shift",
    "12h-night": "₹2,400 - ₹3,200 / shift",
    "24h": "₹4,200 - ₹5,800 / 24h",
    hourly: "Custom Assessment"
  },
  specialized: {
    name: "Specialized (Stroke / Dementia / Parkinson's)",
    "12h-day": "₹1,200 - ₹1,600 / day",
    "12h-night": "₹1,300 - ₹1,700 / night",
    "24h": "₹2,200 - ₹2,900 / 24h",
    hourly: "₹250 - ₹350 / hour"
  },
  physio: {
    name: "Physiotherapy at Home",
    "12h-day": "₹600 - ₹900 / session",
    "12h-night": "₹700 - ₹1,000 / session",
    "24h": "Package Available",
    hourly: "₹600 - ₹900 / session"
  },
  equipment: {
    name: "Medical Equipment on Rent",
    "12h-day": "From ₹2,500 / month",
    "12h-night": "From ₹2,500 / month",
    "24h": "From ₹2,500 / month",
    hourly: "Daily / Monthly Rent"
  }
};

const shiftLabels = {
  "12h-day": "12-Hour Day Shift",
  "12h-night": "12-Hour Night Shift",
  "24h": "24-Hour Live-in Caregiver",
  hourly: "Hourly Care / Per Visit"
};

export default function CostCalculator() {
  const [service, setService] = useState("attendant");
  const [shift, setShift] = useState("12h-day");
  const [city, setCity] = useState("");

  const estimate =
    rates[service] && rates[service][shift]
      ? rates[service][shift]
      : "Contact for Free Assessment";

  const serviceName = rates[service]?.name || "Home Care Service";
  const shiftName = shiftLabels[shift] || shift;
  const locationText = city.trim() ? city.trim() : "My City";

  const msg = encodeURIComponent(
    `Hello ${SITE_CONFIG.brandName}, I would like to book or discuss ${serviceName} (${shiftName}) in ${locationText}. Please share attendant availability and confirm quote: ${estimate}.`
  );

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${msg}`;

  return (
    <section className="calc-section">
      <div className="max-w-7xl">
        <div className="calc-card">
          <div style={{ textAlign: "center" }}>
            <div className="section-label">Free Estimate</div>
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: 800,
                color: "var(--slate-900)",
                letterSpacing: "-0.025em"
              }}
            >
              Estimate Your Care Plan &amp; Shift Pricing
            </h2>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--slate-600)",
                marginTop: "0.5rem"
              }}
            >
              Select your required home-care service and preferred shift duration to calculate starting rates.
            </p>
          </div>

          <div className="calc-form-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="calcService">
                Select Service Type
              </label>
              <select
                id="calcService"
                className="form-select"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="attendant">Patient Attendant (General Care)</option>
                <option value="elderly">Elderly Care &amp; Senior Companion</option>
                <option value="nursing">Home Nursing Care (GNM / B.Sc)</option>
                <option value="icu">Intensive Home Care / ICU Setup</option>
                <option value="specialized">Specialized (Stroke / Dementia / Parkinson's)</option>
                <option value="physio">Physiotherapy at Home</option>
                <option value="equipment">Medical Equipment on Rent</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="calcShift">
                Select Shift Duration
              </label>
              <select
                id="calcShift"
                className="form-select"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
              >
                <option value="12h-day">12-Hour Day Shift</option>
                <option value="12h-night">12-Hour Night Shift</option>
                <option value="24h">24-Hour Live-in Caregiver</option>
                <option value="hourly">Hourly Care / Per Visit</option>
              </select>
            </div>

            <div className="form-group" style={{ gridColumn: "1 / -1" }}>
              <label className="form-label" htmlFor="calcCity">
                Your City / Location
              </label>
              <input
                type="text"
                id="calcCity"
                className="form-input"
                placeholder="e.g. South Delhi, Noida Sector 62, Gurgaon DLF, Bengaluru, Mumbai"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div className="calc-result-box">
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--slate-500)",
                  textTransform: "uppercase"
                }}
              >
                Estimated Starting Rate
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "var(--primary-700)",
                  marginTop: "0.25rem"
                }}
              >
                {estimate}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--slate-500)" }}>
                *Final quote depends on patient medical dependency and exact location.
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-hero"
              style={{ whiteSpace: "nowrap" }}
            >
              Confirm on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
