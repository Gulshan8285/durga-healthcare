"use client";

import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useModal } from "./ModalContext";

export default function EnquiryModal() {
  const { isModalOpen, modalService, closeEnquiryModal, showToast } = useModal();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: "",
    shift: "12-Hour Day Shift",
    city: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (modalService) {
      setFormData((prev) => ({ ...prev, service: modalService }));
    }
  }, [modalService]);

  if (!isModalOpen) return null;

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
    closeEnquiryModal();
    setIsSubmitting(false);

    // Optional direct WhatsApp redirect
    const msg = encodeURIComponent(
      `Hello ${SITE_CONFIG.brandName}, I requested assistance for: ${formData.service} (${formData.shift}) in ${formData.city || "my city"}.\nName: ${formData.fullName}\nContact: ${formData.phone}\nNotes: ${formData.notes || "None"}`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${msg}`, "_blank");
  };

  return (
    <div className="modal-overlay open" onClick={closeEnquiryModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          aria-label="Close modal"
          onClick={closeEnquiryModal}
        >
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
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>

        <div style={{ marginBottom: "1.5rem" }}>
          <div className="section-label">24/7 Desk</div>
          <h3 style={{ fontSize: "1.375rem", fontWeight: 800, color: "var(--slate-900)" }}>
            Request Home Care Assistance
          </h3>
          <p style={{ fontSize: "0.8125rem", color: "var(--slate-600)", marginTop: "0.25rem" }}>
            Tell us your care requirements. We verify caregiver availability for your area immediately.
          </p>
        </div>

        <form className="care-enquiry-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="modalName">
              Full Name <span className="req">*</span>
            </label>
            <input
              type="text"
              id="modalName"
              name="fullName"
              className="form-input"
              placeholder="Your name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="modalPhone">
              Mobile Number (10 Digits) <span className="req">*</span>
            </label>
            <div className="phone-input-group">
              <span style={{ padding: "0.5rem 0.75rem", backgroundColor: "var(--slate-100)", border: "1px solid var(--slate-300)", borderRadius: "0.5rem 0 0 0.5rem", fontWeight: 600, fontSize: "0.875rem", display: "flex", alignItems: "center" }}>
                🇮🇳 +91
              </span>
              <input
                type="tel"
                id="modalPhone"
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
            <label className="form-label" htmlFor="modalServiceSelect">
              Required Service <span className="req">*</span>
            </label>
            <select
              id="modalServiceSelect"
              name="service"
              className="form-select"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">-- Choose a Service --</option>
              <option value="Patient Care Assistance at Home">Patient Care Assistance at Home</option>
              <option value="Elderly Care & Senior Companionship">Elderly Care &amp; Senior Companionship</option>
              <option value="Professional Home Nursing Care">Professional Home Nursing Care</option>
              <option value="Home ICU Setup & Critical Nursing">Home ICU Setup &amp; Critical Nursing</option>
              <option value="Stroke, Paralysis & Post-Surgical Rehab">Stroke, Paralysis &amp; Post-Surgical Rehab</option>
              <option value="Qualified Home Physiotherapy">Qualified Home Physiotherapy</option>
              <option value="Doctor Consultations at Home">Doctor Consultations at Home</option>
              <option value="Lab Blood Tests & Home Collection">Lab Blood Tests &amp; Home Collection</option>
              <option value="Medical Equipment Rental & Purchase">Medical Equipment Rental &amp; Purchase</option>
              <option value="General Enquiry">Other Care Coordination Request</option>
            </select>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            <div className="form-group">
              <label className="form-label" htmlFor="modalShift">Shift Duration</label>
              <select
                id="modalShift"
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
              <label className="form-label" htmlFor="modalCity">City / Location</label>
              <input
                type="text"
                id="modalCity"
                name="city"
                className="form-input"
                placeholder="e.g. South Delhi, Bangalore"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="modalNotes">Specific Requirements</label>
            <textarea
              id="modalNotes"
              name="notes"
              rows={2}
              className="form-textarea"
              placeholder="Patient condition, mobility level, special assistance required..."
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%", padding: "0.75rem", fontSize: "0.9375rem" }}
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? "Submitting..." : "Submit Request & Connect"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
      </div>
    </div>
  );
}
