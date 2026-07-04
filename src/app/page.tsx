import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import dynamic from "next/dynamic";

const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const SterilizationProcess = dynamic(() => import("@/components/SterilizationProcess"));
const ModernEquipment = dynamic(() => import("@/components/ModernEquipment"));
const DoctorSection = dynamic(() => import("@/components/DoctorSection"));
const BeforeAfter = dynamic(() => import("@/components/BeforeAfter"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const BookingSection = dynamic(() => import("@/components/BookingSection"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const CTASection = dynamic(() => import("@/components/CTASection"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingWidgets = dynamic(() => import("@/components/FloatingWidgets"));

export default function Home() {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Smile Signature Premium Dental Clinic",
    "image": "https://smilesignature.com/images/hero-dentist.png",
    "@id": "https://smilesignature.com/#dentist",
    "url": "https://smilesignature.com",
    "telephone": "+918866902356",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Suite 400, Golden Heights Medical Center, 742 Evergreen Terrace",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4878239,
      "longitude": 77.0805629
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://facebook.com",
      "https://instagram.com"
    ]
  };

  return (
    <>
      {/* Local Business Dentist Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
      />

      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <SterilizationProcess />
        <ModernEquipment />
        <DoctorSection />
        <BeforeAfter />
        <Gallery />
        <BookingSection />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
