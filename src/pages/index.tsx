import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServiceSection";
import CarsCollectionSection from "../components/CarsCollectionSection";
import BookingSection from "../components/BookingSection";
import AreasWeServeSection from "../components/AreasWeServeSection";
import PopularRoutesSection from "../components/PopularRoutesSection";
import ReviewsSection from "../components/ReviewsSection";
import BlessingsSection from "../components/BlessingsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

const Index = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Mr Ayyan Cabs",
    "url": "https://mrayyancabs.com/",
    "image": "https://mrayyancabs.com/mrayyan-og.png",
    "description": "Tirupur Cab & Taxi Service providing local taxi booking, Coimbatore airport transfers, and outstation cabs across Tamil Nadu.",
    "telephone": "+919786223334",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tirupur",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "areaServed": "Tirupur, Tamil Nadu"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Mr Ayyan Cabs | Tirupur Cab & Taxi Service | Call +91 97862 23334"
        description="Book Tirupur's reliable cab service – Mr Ayyan Cabs. 24x7 local taxi booking, airport pickup/drop, and outstation cabs. Call +91 97862 23334 now!"
        canonicalUrl="https://mrayyancabs.com/"
        schema={homeSchema}
      />
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. Services */}
      <ServicesSection />
      {/* 3. Fleets */}
      <CarsCollectionSection />
      {/* 4. Booking */}
      <BookingSection />
      {/* 5. Areas We Serve */}
      <AreasWeServeSection />
      {/* 6. Cab route from Tirupur */}
      <PopularRoutesSection />
      {/* 7. Feed back and Reviews */}
      <ReviewsSection />
      {/* 8. Ayyanar Blessings */}
      <BlessingsSection />
      {/* 9. FAQ */}
      <FAQSection />
      {/* 10. Contact */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
