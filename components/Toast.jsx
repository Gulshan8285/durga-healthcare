"use client";

import React from "react";
import { useModal } from "./ModalContext";

export default function Toast() {
  const { toastMessage } = useModal();

  if (!toastMessage) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "5rem",
        right: "1.5rem",
        zIndex: 9999,
        backgroundColor: "var(--slate-900)",
        color: "#ffffff",
        padding: "0.875rem 1.25rem",
        borderRadius: "0.75rem",
        boxShadow: "var(--shadow-xl)",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        maxWidth: "24rem",
        border: "1px solid var(--primary-500)",
        animation: "slideInUp 0.3s ease forwards"
      }}
    >
      <div
        style={{
          width: "2rem",
          height: "2rem",
          borderRadius: "9999px",
          backgroundColor: "var(--primary-600)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div style={{ fontSize: "0.875rem", lineHeight: 1.4 }}>{toastMessage}</div>
    </div>
  );
}
