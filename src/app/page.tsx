import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingSection from "@/components/BookingSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import DoctorSection from "@/components/DoctorSection";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

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
