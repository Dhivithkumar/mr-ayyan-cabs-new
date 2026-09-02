import HeroSection from "../components/HeroSection";
import BookingSection from "../components/BookingSection";
import ServicesSection from "../components/ServiceSection";
import CarsCollectionSection from "../components/CarsCollectionSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import MobileBottomBar from "../components/MobileBottomBar";
import SEOHead from "../components/SEOHead";
import { Phone, MessageCircle, Clock, ShieldCheck, MapPin } from "lucide-react";
import { trackCallClick, trackWhatsAppClick } from "@/utils/analytics";

const TirupurTaxiService = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I want to book a taxi in Tirupur.");

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Mr Ayyan Cabs - Tirupur Taxi Service",
    "url": "https://mrayyancabs.com/tirupur-taxi-service",
    "image": "https://mrayyancabs.com/mr_ayyan_cabs_logo.png",
    "logo": "https://mrayyancabs.com/mr_ayyan_cabs_logo.png",
    "description": "24x7 taxi service in Tirupur for urgent city travel, outstation trips, and airport transfers.",
    "telephone": "+919786223334",
    "areaServed": "Tirupur, Tamil Nadu"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Tirupur Taxi Service | 24x7 Taxi Booking | Mr Ayyan Cabs"
        description="Need a taxi in Tirupur? Call Mr Ayyan Cabs +91 97862 23334 for fast, 24x7 taxi service across Tirupur city, bus stand, railway station, and outstation."
        canonicalUrl="https://mrayyancabs.com/tirupur-taxi-service"
        schema={pageSchema}
      />
      <HeroSection />

      <section className="py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <span className="text-amber-600 font-bold text-xs uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
              24x7 Taxi Booking Tirupur
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              Prompt &amp; Professional Taxi Service in Tirupur
            </h1>

            <div className="prose prose-lg text-gray-600 space-y-4 mb-8 leading-relaxed">
              <p>
                Looking for a quick and reliable taxi number in Tirupur? Mr Ayyan Cabs provides 24x7 taxi service for residents, visitors, business travelers, and families in Tirupur.
              </p>
              <p>
                Our fleet of hatchbacks, sedans, and SUVs is driven by courteous drivers who know local shortcuts and traffic routes to reach your destination without delays.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">24/7 Available</h3>
                  <p className="text-xs text-gray-600">Day &amp; night taxi service whenever you need it.</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Honest Rates</h3>
                  <p className="text-xs text-gray-600">Fair distance pricing with no hidden costs.</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">All Area Pickup</h3>
                  <p className="text-xs text-gray-600">Servicing Avinashi Road, Palladam, Perumanallur &amp; more.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919786223334"
                onClick={() => trackCallClick()}
                className="inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#b88910] text-black font-bold px-6 py-3.5 rounded-xl text-sm shadow-md"
              >
                <Phone className="w-4 h-4 fill-black" />
                Call Taxi Now (+91 97862 23334)
              </a>
              <a
                href={`https://wa.me/919786223334?text=${whatsappMessage}`}
                onClick={() => trackWhatsAppClick()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Taxi Booking
              </a>
            </div>

          </div>
        </div>
      </section>

      <BookingSection />
      <ServicesSection />
      <CarsCollectionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default TirupurTaxiService;
