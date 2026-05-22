import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import BookingSection from "../components/BookingSection";
import AboutSection from "../components/AboutSection";
// Make sure the file exists at the specified path, or update the path if necessary
import ServicesSection from "../components/ServiceSection";
import PricingSection from "../components/PricingSection";
import BlessingsSection from "../components/BlessingsSection";
import CarsCollectionSection from "../components/CarsCollectionSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import StickyWhatsApp from "../components/StickyWhatsApp";
import StickyCallButton from "../components/StickyCallButton";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <StickyWhatsApp />
      <StickyCallButton />
      <HeroSection />
      <BookingSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <BlessingsSection />
      <CarsCollectionSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
