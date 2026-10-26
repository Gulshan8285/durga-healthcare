"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("General Enquiry");
  const [toastMessage, setToastMessage] = useState("");

  const openEnquiryModal = (serviceName = "General Enquiry") => {
    setModalService(serviceName);
    setIsModalOpen(true);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeEnquiryModal = () => {
    setIsModalOpen(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 4500);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeEnquiryModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        modalService,
        openEnquiryModal,
        closeEnquiryModal,
        toastMessage,
        showToast
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
