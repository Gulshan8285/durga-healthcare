export const SERVICES_DATA = [
  {
    id: "patient-care",
    title: "Patient Care Assistance at Home",
    category: "personal-elderly",
    tag: "Daily Attendant",
    image: "/images/hero-caregiver.jpg",
    description: "Home-based assistance for individuals who need compassionate support with everyday personal care, hygiene, bed-to-chair mobility, and routine living activities.",
    features: [
      "Bathing, sponge bath & personal grooming",
      "Safe bed-to-chair transfer & walking aid",
      "Timely medication reminders & hydration",
      "Assistance with meals and nutrition"
    ],
    shiftOptions: "12h Day / 12h Night / 24h Live-in",
    priceRange: "From ₹900 - ₹1,200 / day",
    recommendedFor: "Bedridden patients, post-surgery recovery, mobility impairments"
  },
  {
    id: "elderly-care",
    title: "Elderly Care & Senior Companionship",
    category: "personal-elderly",
    tag: "Senior Care",
    image: "/images/service-elderly.jpg",
    description: "Dedicated assistance designed to promote dignity, emotional comfort, and independence for elderly family members who live alone or require daytime supervision.",
    features: [
      "Assisted morning and evening walks",
      "Dignified dressing and bathroom assistance",
      "Companionship, emotional warmth and reading",
      "Fall prevention awareness and vigilance"
    ],
    shiftOptions: "12h Day / 12h Night / 24h Full-time",
    priceRange: "From ₹950 - ₹1,250 / day",
    recommendedFor: "Seniors living independently, memory support, age-related frailty"
  },
  {
    id: "home-nursing",
    title: "Professional Home Nursing Care",
    category: "nursing-icu",
    tag: "Clinical Nursing",
    image: "/images/service-nursing.jpg",
    description: "Clinical nursing managed by verified GNM / B.Sc registered staff nurses for post-operative management, wound healing, injections, and infusion therapy.",
    features: [
      "IV fluid infusions, injections & medication administration",
      "Surgical wound dressing, bed sore staging & care",
      "Urinary Foley catheterization & Ryle's tube feeding",
      "Vital signs monitoring and clinical escalation notes"
    ],
    shiftOptions: "Per Visit / 12h Shift / 24h Clinical Nurse",
    priceRange: "From ₹1,500 - ₹2,200 / shift",
    recommendedFor: "Post-discharge surgical recovery, IV management, chronic disease care"
  },
  {
    id: "icu-setup",
    title: "Home ICU Setup & Critical Nursing",
    category: "nursing-icu",
    tag: "Critical Care",
    image: "/images/service-equipment.jpg",
    description: "Complete hospital-grade ICU setups at home supervised by experienced critical-care nurses with ventilator, BiPAP, oxygen concentrators, and cardiac monitor support.",
    features: [
      "Tracheostomy care & suctioning protocols",
      "BiPAP, CPAP & Ventilator patient monitoring",
      "Cardiac multi-parameter monitor management",
      "24/7 dedicated critical care certified nurse"
    ],
    shiftOptions: "12h Critical Shift / 24h Live-In ICU Team",
    priceRange: "From ₹2,200 - ₹3,000 / shift",
    recommendedFor: "Comatose patients, end-stage palliative care, tracheostomy care"
  },
  {
    id: "stroke-rehab",
    title: "Stroke, Paralysis & Post-Surgical Rehab",
    category: "specialized",
    tag: "Neuro & Rehab",
    image: "/images/service-stroke.jpg",
    description: "Comprehensive home rehabilitation for patients recovering from strokes, brain injury, hip/knee replacements, or neurodegenerative conditions like Parkinson's.",
    features: [
      "Passive & active range-of-motion physical therapy",
      "Bed sore prevention via regular turning protocols",
      "Re-learning daily functional mobility tasks",
      "Patient encouragement and positive reinforcement"
    ],
    shiftOptions: "12h / 24h Attendant + Physio Visits",
    priceRange: "From ₹1,200 - ₹1,600 / day",
    recommendedFor: "Stroke recovery, hemi/paraplegia, orthopedic replacement recovery"
  },
  {
    id: "physiotherapy",
    title: "Qualified Home Physiotherapy",
    category: "specialized",
    tag: "Physiotherapy",
    image: "/images/service-physio.jpg",
    description: "Licensed physiotherapists visit your residence with specialized exercise equipment to help improve balance, restore joint mobility, and relieve musculoskeletal pain.",
    features: [
      "Customized geriatric mobility exercise regimens",
      "Neuro-rehabilitation for stroke and nerve injury",
      "Post-knee & hip replacement gait training",
      "Chest physiotherapy for pulmonary recovery"
    ],
    shiftOptions: "Per Session (45-60 mins) / Monthly Packages",
    priceRange: "From ₹600 - ₹900 / session",
    recommendedFor: "Arthritis, sciatica, post-surgery stiffness, neurological recovery"
  },
  {
    id: "doctor-visit",
    title: "Doctor Consultations at Home",
    category: "doctor-diagnostic",
    tag: "Physician Visit",
    image: "/images/service-doctor.jpg",
    description: "General physicians and geriatric specialists visit your home to conduct routine check-ups, review medications, manage chronic conditions, and adjust treatment plans.",
    features: [
      "Thorough physical checkup and symptom assessment",
      "Medication review and prescription adjustment",
      "Clinical guidance for family attendants and nurses",
      "Routine geriatric wellness screening"
    ],
    shiftOptions: "Scheduled Home Visit / Tele-Consultation",
    priceRange: "From ₹1,000 - ₹1,800 / visit",
    recommendedFor: "Bedbound seniors, non-emergency checkups, routine health reviews"
  },
  {
    id: "lab-tests",
    title: "Lab Blood Tests & Home Sample Collection",
    category: "doctor-diagnostic",
    tag: "Doorstep Diagnostics",
    image: "/images/service-lab.jpg",
    description: "Trained phlebotomists collect blood and urine samples right at your doorstep with certified NABL accredited laboratory testing and prompt digital reports.",
    features: [
      "Complete blood count (CBC), lipid profile, sugar tests",
      "Kidney and liver function panels (KFT/LFT)",
      "Senior wellness comprehensive health packages",
      "Fast same-day digital reports via WhatsApp/Email"
    ],
    shiftOptions: "Morning Home Sample Slots (6 AM - 12 PM)",
    priceRange: "Standard Diagnostic Pricing",
    recommendedFor: "Routine chronic disease monitoring, elderly health checkups"
  },
  {
    id: "medical-equipment",
    title: "Medical Equipment Rental & Purchase",
    category: "equipment",
    tag: "Equipment & Beds",
    image: "/images/service-equipment.jpg",
    description: "Doorstep delivery, installation, and sanitization of medical equipment including hospital ICU beds, oxygen concentrators, BiPAP/CPAP machines, wheelchairs, and suction units.",
    features: [
      "Hospital motorized & semi-fowler patient beds",
      "5L & 10L medical-grade oxygen concentrators",
      "BiPAP, CPAP and portable suction units",
      "Wheelchairs, air mattresses and walker frames"
    ],
    shiftOptions: "Daily / Monthly Rental or Direct Purchase",
    priceRange: "From ₹2,500 / month",
    recommendedFor: "Home ICU setup, post-op recovery, respiratory support"
  }
];

export const SERVICE_CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "personal-elderly", label: "Attendant & Elderly" },
  { id: "nursing-icu", label: "Nursing & ICU Care" },
  { id: "specialized", label: "Specialized Care" },
  { id: "doctor-diagnostic", label: "Doctor & Diagnostics" },
  { id: "equipment", label: "Medical Equipment" }
];
