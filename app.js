/**
 * Durga Healthcare & VR Healthcare - Core Interactive Logic
 * Fully responsive, accessible, interactive features
 */

// Site Configuration (Easily customized in one place)
const SITE_CONFIG = {
  brandName: "Durga Healthcare",
  brandAccent: "Healthcare",
  shortName: "Durga",
  tagline: "Home & Patient Care",
  primaryPhone: "+91 85918 50947",
  primaryPhoneClean: "+918591850947",
  secondaryPhone: "+91 85918 50947",
  secondaryPhoneClean: "+918591850947",
  whatsappNumber: "918591850947",
  email: "govindkokare8751@gmail.com",
  altEmail: "govindkokare8751@gmail.com",
  rating: "4.1/5",
  ratingCount: "126+ Families Supported",
  headquarters: "All Over India (Pan-India Service Coordination - Delhi NCR, Bengaluru, Mumbai, Pune & Major Cities)",
  hours: "24/7 Round-the-Clock Support"
};

// Expose configuration globally
window.SITE_CONFIG = SITE_CONFIG;

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileMenu();
  initServiceFilters();
  initEnquiryModal();
  initFaqAccordion();
  initCostCalculator();
  initFormSubmissions();
  initReviewScroller();
});

/* --------------------------------------------------------------------------
   1. Sticky Header Shadow on Scroll
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector("header.sticky-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const drawer = document.getElementById("mobileDrawer");
  const openBtn = document.getElementById("openMobileNav");
  const closeBtn = document.getElementById("closeMobileNav");
  const drawerLinks = document.querySelectorAll(".drawer-nav-link");

  if (!drawer || !openBtn) return;

  const openDrawer = () => {
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    drawer.classList.remove("open");
    document.body.style.overflow = "";
  };

  openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

  drawer.addEventListener("click", (e) => {
    if (e.target === drawer) closeDrawer();
  });

  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   3. Service Tabs Filter
   -------------------------------------------------------------------------- */
function initServiceFilters() {
  const tabButtons = document.querySelectorAll(".service-tab-btn");
  const serviceCards = document.querySelectorAll(".service-card");

  if (!tabButtons.length || !serviceCards.length) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      serviceCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter || (category && category.includes(filter))) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 10);
        } else {
          card.style.display = "none";
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. Enquiry Modal
   -------------------------------------------------------------------------- */
function initEnquiryModal() {
  const modal = document.getElementById("enquiryModal");
  const closeBtn = document.getElementById("closeModalBtn");
  const triggers = document.querySelectorAll(".btn-open-enquiry");
  const serviceSelect = document.getElementById("modalServiceSelect");

  if (!modal) return;

  const openModal = (preselectedService = "") => {
    if (serviceSelect && preselectedService) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text.toLowerCase().includes(preselectedService.toLowerCase()) ||
            serviceSelect.options[i].value.toLowerCase().includes(preselectedService.toLowerCase())) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  triggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute("data-service") || "";
      openModal(serviceName);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  window.openEnquiryModal = openModal;
  window.closeEnquiryModal = closeModal;
}

/* --------------------------------------------------------------------------
   5. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Optional: close other items for an exclusive accordion feel
      faqItems.forEach((other) => {
        if (other !== item) other.classList.remove("active");
      });

      if (isOpen) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Cost / Plan Estimator
   -------------------------------------------------------------------------- */
function initCostCalculator() {
  const serviceSelect = document.getElementById("calcService");
  const shiftSelect = document.getElementById("calcShift");
  const cityInput = document.getElementById("calcCity");
  const priceDisplay = document.getElementById("calcPriceDisplay");
  const btnBookCalc = document.getElementById("btnBookCalc");

  if (!serviceSelect || !shiftSelect || !priceDisplay) return;

  const rates = {
    "attendant": { "12h-day": "₹900 - ₹1,200 / day", "12h-night": "₹950 - ₹1,300 / night", "24h": "₹1,600 - ₹2,200 / 24h", "hourly": "₹150 - ₹250 / hour" },
    "elderly": { "12h-day": "₹950 - ₹1,250 / day", "12h-night": "₹1,000 - ₹1,350 / night", "24h": "₹1,700 - ₹2,400 / 24h", "hourly": "₹180 - ₹250 / hour" },
    "nursing": { "12h-day": "₹1,500 - ₹2,200 / shift", "12h-night": "₹1,700 - ₹2,500 / shift", "24h": "₹2,800 - ₹3,800 / 24h", "hourly": "₹400 - ₹600 / visit" },
    "icu": { "12h-day": "₹2,200 - ₹3,000 / shift", "12h-night": "₹2,400 - ₹3,200 / shift", "24h": "₹4,200 - ₹5,800 / 24h", "hourly": "Custom Assessment" },
    "specialized": { "12h-day": "₹1,200 - ₹1,600 / day", "12h-night": "₹1,300 - ₹1,700 / night", "24h": "₹2,200 - ₹2,900 / 24h", "hourly": "₹250 - ₹350 / hour" },
    "physio": { "12h-day": "₹600 - ₹900 / session", "12h-night": "₹700 - ₹1,000 / session", "24h": "Package Available", "hourly": "₹600 - ₹900 / session" },
    "equipment": { "12h-day": "From ₹2,500 / month", "12h-night": "From ₹2,500 / month", "24h": "From ₹2,500 / month", "hourly": "Daily / Monthly Rent" }
  };

  const updateEstimate = () => {
    const s = serviceSelect.value;
    const shift = shiftSelect.value;
    const estimate = (rates[s] && rates[s][shift]) ? rates[s][shift] : "Contact for Free Assessment";
    priceDisplay.textContent = estimate;

    if (btnBookCalc) {
      const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
      const shiftName = shiftSelect.options[shiftSelect.selectedIndex].text;
      const city = cityInput ? (cityInput.value || "My City") : "My Location";
      const msg = encodeURIComponent(`Hello ${SITE_CONFIG.brandName}, I would like to book or discuss ${serviceName} (${shiftName}) in ${city}. Please share attendant availability and confirm quote: ${estimate}.`);
      btnBookCalc.href = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${msg}`;
    }
  };

  serviceSelect.addEventListener("change", updateEstimate);
  shiftSelect.addEventListener("change", updateEstimate);
  if (cityInput) cityInput.addEventListener("input", updateEstimate);
  updateEstimate();
}

/* --------------------------------------------------------------------------
   7. Form Submissions (Lead Capture & Instant WhatsApp sync)
   -------------------------------------------------------------------------- */
function initFormSubmissions() {
  const forms = document.querySelectorAll("form.care-enquiry-form");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = form.querySelector("[name='fullName']");
      const phoneInput = form.querySelector("[name='phone']");
      const serviceSelect = form.querySelector("[name='service']");
      const cityInput = form.querySelector("[name='city']");
      const shiftSelect = form.querySelector("[name='shift']");
      const noteInput = form.querySelector("[name='notes']");

      const fullName = nameInput ? nameInput.value.trim() : "Valued Family";
      const phone = phoneInput ? phoneInput.value.trim() : "";
      const service = serviceSelect ? serviceSelect.value : "Home Care Service";
      const city = cityInput ? cityInput.value.trim() : "Location not specified";
      const shift = shiftSelect ? shiftSelect.value : "Flexible";
      const notes = noteInput ? noteInput.value.trim() : "";

      if (!phone || phone.length < 10) {
        alert("Please enter a valid 10-digit mobile number so our care desk can reach you.");
        if (phoneInput) phoneInput.focus();
        return;
      }

      // Save lead locally for verification and persistence
      const lead = {
        fullName,
        phone,
        service,
        city,
        shift,
        notes,
        timestamp: new Date().toISOString()
      };

      try {
        const storedLeads = JSON.parse(localStorage.getItem("durga_leads") || "[]");
        storedLeads.push(lead);
        localStorage.setItem("durga_leads", JSON.stringify(storedLeads));
      } catch (err) {
        console.warn("Storage error:", err);
      }

      // Show toast
      showToastNotice(`Thank you ${fullName}! Your request has been recorded. Our 24/7 care desk is connecting with you.`);

      // Reset form
      form.reset();

      // If modal was open, close it
      if (window.closeEnquiryModal) {
        setTimeout(window.closeEnquiryModal, 800);
      }

      // Automatically construct WhatsApp message and offer instant chat
      const waText = encodeURIComponent(
        `Hello ${SITE_CONFIG.brandName},\n\n` +
        `I have submitted a home-care request:\n` +
        `• Name: ${fullName}\n` +
        `• Phone: ${phone}\n` +
        `• Service: ${service}\n` +
        `• Shift: ${shift}\n` +
        `• Location: ${city}\n` +
        (notes ? `• Details: ${notes}\n\n` : `\n`) +
        `Please confirm attendant availability and pricing.`
      );

      const confirmWa = confirm(
        `Enquiry submitted successfully!\n\nWould you like to connect directly on WhatsApp with our 24/7 care coordinator for priority assistance?`
      );

      if (confirmWa) {
        window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${waText}`, "_blank");
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. Toast Notifications
   -------------------------------------------------------------------------- */
function showToastNotice(message) {
  let toast = document.getElementById("toastNotice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4500);
}

/* --------------------------------------------------------------------------
   9. Reviews Carousel Controls
   -------------------------------------------------------------------------- */
function initReviewScroller() {
  const container = document.querySelector(".reviews-carousel-wrap");
  const prevBtn = document.getElementById("prevReviewBtn");
  const nextBtn = document.getElementById("nextReviewBtn");

  if (!container) return;

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      container.scrollBy({ left: -340, behavior: "smooth" });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      container.scrollBy({ left: 340, behavior: "smooth" });
    });
  }
}
