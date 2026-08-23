import HeroSection from "../components/HeroSection";
import BlessingsSection from "../components/BlessingsSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServiceSection";
import AirportTaxiSection from "../components/AirportTaxiSection";
import OutstationSection from "../components/OutstationSection";
import PopularRoutesSection from "../components/PopularRoutesSection";
import AreasWeServeSection from "../components/AreasWeServeSection";
import CarsCollectionSection from "../components/CarsCollectionSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ReviewsSection from "../components/ReviewsSection";
import FAQSection from "../components/FAQSection";
import BookingSection from "../components/BookingSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import MobileBottomBar from "../components/MobileBottomBar";
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
      <HeroSection />
      <BlessingsSection />
      <AboutSection />
      <ServicesSection />
      <AirportTaxiSection />
      <OutstationSection />
      <PopularRoutesSection />
      <AreasWeServeSection />
      <CarsCollectionSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <FAQSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
