"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useModal } from "./ModalContext";

export default function EnquiryForm({ defaultService = "Patient Care Assistance at Home" }) {
  const { showToast } = useModal();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: defaultService,
    shift: "12-Hour Day Shift",
    city: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.phone || formData.phone.length < 10) {
      alert("Please enter a valid 10-digit mobile number so our care desk can reach you.");
      return;
    }

    setIsSubmitting(true);

    const lead = {
      ...formData,
      timestamp: new Date().toISOString()
    };

    try {
      const storedLeads = JSON.parse(localStorage.getItem("durga_leads") || "[]");
      storedLeads.push(lead);
      localStorage.setItem("durga_leads", JSON.stringify(storedLeads));
    } catch (err) {
      console.warn("Storage error:", err);
    }

    showToast(`Thank you ${formData.fullName || "Valued Family"}! Your request has been recorded. Our 24/7 care desk is connecting with you.`);
    setIsSubmitting(false);

    // Open WhatsApp confirmation
    const msg = encodeURIComponent(
      `Hello ${SITE_CONFIG.brandName}, I would like to request care support:\nService: ${formData.service}\nShift: ${formData.shift}\nCity: ${formData.city || "Not specified"}\nName: ${formData.fullName}\nPhone: ${formData.phone}\nNotes: ${formData.notes || "None"}`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${msg}`, "_blank");
  };

  return (
    <form className="care-enquiry-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="leadFullName">
          Patient or Family Contact Name <span className="req">*</span>
        </label>
        <input
          type="text"
          id="leadFullName"
          name="fullName"
          className="form-input"
          placeholder="e.g. Ramesh Sharma"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="leadPhone">
          Contact Phone Number (10 Digits) <span className="req">*</span>
        </label>
        <div className="phone-input-group">
          <span style={{ padding: "0.5rem 0.75rem", backgroundColor: "var(--slate-100)", border: "1px solid var(--slate-300)", borderRadius: "0.5rem 0 0 0.5rem", fontWeight: 600, fontSize: "0.875rem", display: "flex", alignItems: "center" }}>
            🇮🇳 +91
          </span>
          <input
            type="tel"
            id="leadPhone"
            name="phone"
            className="form-input"
            style={{ borderRadius: "0 0.5rem 0.5rem 0", borderLeft: "none" }}
            placeholder="10-digit mobile number"
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="leadService">
          Required Care Service <span className="req">*</span>
        </label>
        <select
          id="leadService"
          name="service"
          className="form-select"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="Patient Care Assistance at Home">Patient Care Assistance at Home</option>
          <option value="Elderly Care & Senior Companionship">Elderly Care &amp; Senior Companionship</option>
          <option value="Professional Home Nursing Care">Professional Home Nursing Care</option>
          <option value="Home ICU Setup & Critical Nursing">Home ICU Setup &amp; Critical Nursing</option>
          <option value="Stroke, Paralysis & Post-Surgical Rehab">Stroke, Paralysis &amp; Post-Surgical Rehab</option>
          <option value="Qualified Home Physiotherapy">Qualified Home Physiotherapy</option>
          <option value="Doctor Consultations at Home">Doctor Consultations at Home</option>
          <option value="Lab Blood Tests & Home Collection">Lab Blood Tests &amp; Home Collection</option>
          <option value="Medical Equipment Rental & Purchase">Medical Equipment Rental &amp; Purchase</option>
          <option value="Hospital to Home Bystander">Hospital to Home Bystander</option>
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
        <div className="form-group">
          <label className="form-label" htmlFor="leadShift">Shift Preference</label>
          <select
            id="leadShift"
            name="shift"
            className="form-select"
            value={formData.shift}
            onChange={handleChange}
          >
            <option value="12-Hour Day Shift">12-Hour Day Shift</option>
            <option value="12-Hour Night Shift">12-Hour Night Shift</option>
            <option value="24-Hour Live-in Care">24-Hour Live-in Care</option>
            <option value="Hourly / Per Visit">Hourly / Per Visit</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="leadCity">Your City / Sector</label>
          <input
            type="text"
            id="leadCity"
            name="city"
            className="form-input"
            placeholder="e.g. South Delhi, Indiranagar"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="leadNotes">Patient Condition / Notes</label>
        <textarea
          id="leadNotes"
          name="notes"
          rows={2}
          className="form-textarea"
          placeholder="Patient age, mobility status, medical history, or urgent requests..."
          value={formData.notes}
          onChange={handleChange}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn-primary"
        style={{ width: "100%", padding: "0.875rem", fontSize: "1rem" }}
        disabled={isSubmitting}
      >
        <span>{isSubmitting ? "Connecting..." : "Submit Care Request"}</span>
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
    </form>
  );
}
