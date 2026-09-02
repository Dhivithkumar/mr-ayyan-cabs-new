import HeroSection from "../components/HeroSection";
import AirportTaxiSection from "../components/AirportTaxiSection";
import BookingSection from "../components/BookingSection";
import CarsCollectionSection from "../components/CarsCollectionSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import MobileBottomBar from "../components/MobileBottomBar";
import SEOHead from "../components/SEOHead";
import { Phone, MessageCircle, Plane, Clock, Shield } from "lucide-react";
import { trackCallClick, trackWhatsAppClick } from "@/utils/analytics";

const TirupurAirportTaxi = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I want to book an Airport Taxi to Coimbatore Airport.");

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Mr Ayyan Cabs - Tirupur Airport Taxi",
    "url": "https://mrayyancabs.com/tirupur-airport-taxi",
    "image": "https://mrayyancabs.com/mr_ayyan_cabs_logo.png",
    "logo": "https://mrayyancabs.com/mr_ayyan_cabs_logo.png",
    "description": "Airport cab service connecting Tirupur to Coimbatore International Airport (CJB). Punctual pickup and drop.",
    "telephone": "+919786223334",
    "areaServed": "Tirupur, Tamil Nadu"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Tirupur Airport Taxi | Tirupur to Coimbatore Airport Cab"
        description="Book Tirupur to Coimbatore Airport (CJB) taxi with Mr Ayyan Cabs. 24x7 punctual airport pickups & drops. Call +91 97862 23334 for advance booking."
        canonicalUrl="https://mrayyancabs.com/tirupur-airport-taxi"
        schema={pageSchema}
      />
      <HeroSection />

      <section className="py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <span className="text-amber-600 font-bold text-xs uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
              Coimbatore Airport (CJB) Transfers
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              Tirupur to Coimbatore Airport Taxi Service
            </h1>

            <div className="prose prose-lg text-gray-600 space-y-4 mb-8 leading-relaxed">
              <p>
                Catching an early morning flight or landing late at night at Coimbatore International Airport (CJB)? Mr Ayyan Cabs provides guaranteed punctual airport taxi transfers between Tirupur and Coimbatore Airport.
              </p>
              <p>
                Distance between Tirupur city center and CJB airport is approximately 45 kilometers (~1 hour drive). We track your flight timings and ensure doorstep pickup from your residence, textile unit, or hotel in Tirupur.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                <Plane className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Direct CJB Transfers</h3>
                  <p className="text-xs text-gray-600">Fast highway route via Avinashi / Neelambur.</p>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">24x7 Flight Pickup</h3>
                  <p className="text-xs text-gray-600">Available for red-eye flights and midnight arrivals.</p>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                <Shield className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Luggage Friendly</h3>
                  <p className="text-xs text-gray-600">Large boot capacity in Sedans &amp; Innova SUVs.</p>
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
                Book Airport Taxi (+91 97862 23334)
              </a>
              <a
                href={`https://wa.me/919786223334?text=${whatsappMessage}`}
                onClick={() => trackWhatsAppClick()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Airport Taxi
              </a>
            </div>

          </div>
        </div>
      </section>

      <AirportTaxiSection />
      <BookingSection />
      <CarsCollectionSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default TirupurAirportTaxi;
