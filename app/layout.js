import "./globals.css";
import TopAnnouncementBar from "@/components/TopAnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import EnquiryModal from "@/components/EnquiryModal";
import Toast from "@/components/Toast";
import { ModalProvider } from "@/components/ModalContext";
import { SITE_CONFIG } from "@/data/siteConfig";

export const viewport = {
  themeColor: "#0D9488"
};

export const metadata = {
  metadataBase: new URL("https://durgahealthcare.com"),
  title: {
    default: "Durga Healthcare | Compassionate Home Care & Patient Support",
    template: "%s | Durga Healthcare"
  },
  description:
    "Durga Healthcare coordinates reliable home-care support, patient attendants, elderly assistance, home nursing, post-hospitalization recovery, physiotherapy, and medical equipment across India. 24/7 care coordination desk.",
  keywords: [
    "Durga Healthcare",
    "patient attendant",
    "elderly care at home",
    "home nursing care",
    "ICU setup at home",
    "physiotherapy at home",
    "caregiver agency India",
    "bedridden patient care",
    "home care services Delhi NCR Bengaluru Mumbai"
  ],
  authors: [{ name: "Durga Healthcare" }],
  creator: "Durga Healthcare",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://durgahealthcare.com",
    title: "Durga Healthcare | Compassionate Home Care & Patient Support",
    description:
      "Reliable home-care support, patient attendants, home nursing, and elderly assistance designed around your family's needs. 24/7 Care Coordination.",
    siteName: "Durga Healthcare",
    images: [
      {
        url: "/images/hero-caregiver.jpg",
        width: 1200,
        height: 630,
        alt: "Durga Healthcare Home Attendant and Patient"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "HomeHealthcare", "LocalBusiness"],
    name: "Durga Healthcare",
    alternateName: "Durga Home Healthcare & Patient Attendants",
    description:
      "Durga Healthcare coordinates reliable home-care support, patient attendants, elderly care, home nursing, post-hospitalization recovery, and doctor consultations across India.",
    telephone: "+919481568203",
    email: "care@durgahealthcare.com",
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Net Banking, Credit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pan-India Service Coordination",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110001",
      addressCountry: "IN"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.1",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "126"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ModalProvider>
          <TopAnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <EnquiryModal />
          <Toast />
          <FloatingActions />
        </ModalProvider>
      </body>
    </html>
  );
}
