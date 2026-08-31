import HeroSection from "../components/HeroSection";
import OutstationSection from "../components/OutstationSection";
import PopularRoutesSection from "../components/PopularRoutesSection";
import BookingSection from "../components/BookingSection";
import CarsCollectionSection from "../components/CarsCollectionSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import MobileBottomBar from "../components/MobileBottomBar";
import SEOHead from "../components/SEOHead";
import { Phone, MessageCircle, MapPin, Navigation, Car } from "lucide-react";

const TirupurOutstationCab = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I would like to book an outstation cab from Tirupur.");

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Mr Ayyan Cabs - Tirupur Outstation Cab",
    "url": "https://mrayyancabs.com/tirupur-outstation-cab",
    "description": "Outstation cab rental service from Tirupur to Coimbatore, Chennai, Madurai, Bangalore, Salem, and Ooty.",
    "telephone": "+919786223334",
    "areaServed": "Tirupur, Tamil Nadu"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Tirupur Outstation Cab | One-Way & Round Trip Taxi | Mr Ayyan Cabs"
        description="Book outstation cabs from Tirupur to Coimbatore, Chennai, Bangalore, Salem, Ooty, and Madurai with Mr Ayyan Cabs. One-way drops & round trips. Call +91 97862 23334."
        canonicalUrl="https://mrayyancabs.com/tirupur-outstation-cab"
        schema={pageSchema}
      />
      <HeroSection />

      <section className="py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <span className="text-amber-600 font-bold text-xs uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
              One-Way &amp; Round Trip Cabs
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              Tirupur Outstation Cab Rental Service
            </h1>

            <div className="prose prose-lg text-gray-600 space-y-4 mb-8 leading-relaxed">
              <p>
                Planning an outstation travel from Tirupur? Mr Ayyan Cabs offers well-maintained Sedans (Etios, Zest) and 7-seater family SUVs (Innova, Crysta) for one-way drops and multi-day round trips across South India.
              </p>
              <p>
                Whether it is business travel to Chennai or Bangalore, family vacation to Ooty or Kodaikanal, or temple visits to Palani and Madurai, our experienced highway drivers ensure a smooth journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                <Navigation className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">One-Way Savings</h3>
                  <p className="text-xs text-gray-600">Pay only for destination distance on select one-way drops.</p>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                <Car className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Comfortable Fleet</h3>
                  <p className="text-xs text-gray-600">Air-conditioned sedans &amp; spacious 7-seater Innova SUVs.</p>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Highway Expertise</h3>
                  <p className="text-xs text-gray-600">Drivers expert in South Indian highway &amp; hill routes.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919786223334"
                className="inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#b88910] text-black font-bold px-6 py-3.5 rounded-xl text-sm shadow-md"
              >
                <Phone className="w-4 h-4 fill-black" />
                Book Outstation Cab (+91 97862 23334)
              </a>
              <a
                href={`https://wa.me/919786223334?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Outstation Booking
              </a>
            </div>

          </div>
        </div>
      </section>

      <OutstationSection />
      <PopularRoutesSection />
      <BookingSection />
      <CarsCollectionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default TirupurOutstationCab;
