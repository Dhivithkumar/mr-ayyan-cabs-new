import HeroSection from "../components/HeroSection";
import BookingSection from "../components/BookingSection";
import ServicesSection from "../components/ServiceSection";
import CarsCollectionSection from "../components/CarsCollectionSection";
import AreasWeServeSection from "../components/AreasWeServeSection";
import AboutSection from "../components/AboutSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";
import { Phone, MessageCircle, CheckCircle, Car } from "lucide-react";

const TirupurCabService = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I would like to book a cab in Tirupur.");

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Mr Ayyan Cabs - Tirupur Cab Service",
    "url": "https://mrayyancabs.com/tirupur-cab-service",
    "description": "Book trusted local cab service in Tirupur for daily commutes, shopping, business visits, and station transfers.",
    "telephone": "+919786223334",
    "areaServed": "Tirupur, Tamil Nadu"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Tirupur Cab Service | Mr Ayyan Cabs | Call +91 97862 23334"
        description="Looking for local cab service in Tirupur? Book Mr Ayyan Cabs for fast, reliable city taxi rides, station transfers, and business travel across Tirupur."
        canonicalUrl="https://mrayyancabs.com/tirupur-cab-service"
        schema={pageSchema}
      />
      <HeroSection />

      {/* Landing Page Content Block */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <span className="text-amber-600 font-bold text-xs uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3 font-heading">
              Tirupur Local Cab Rental
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-[#D4A017] tracking-tight mb-6 font-heading">
              Reliable Local Cab Service in Tirupur
            </h1>

            <div className="prose prose-lg text-gray-600 space-y-4 mb-8 leading-relaxed">
              <p>
                Mr Ayyan Cabs offers dependable local cab services throughout Tirupur city and neighboring hubs. Whether you need a quick ride across town for textile business meetings, railway station pickup, hospital visits, or personal errands, our experienced local drivers ensure a comfortable trip.
              </p>
              <p>
                We operate clean air-conditioned sedans (Toyota Etios, Tata Zest), hatchbacks (Swift), and 7-seater SUVs (Innova, Crysta). With transparent billing and 24x7 phone booking, getting a taxi in Tirupur is hassle-free.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Station Transfers</h3>
                  <p className="text-xs text-gray-600">Punctual pickup &amp; drop for Tirupur Main Junction.</p>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Industrial Visits</h3>
                  <p className="text-xs text-gray-600">Dedicated cabs for garment factory &amp; business travel.</p>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">City Rides</h3>
                  <p className="text-xs text-gray-600">Doorstep pickup across all Tirupur residential zones.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919786223334"
                className="inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#b88910] text-black font-bold px-6 py-3.5 rounded-xl text-sm shadow-md"
              >
                <Phone className="w-4 h-4 fill-black" />
                Call Tirupur Cab (+91 97862 23334)
              </a>
              <a
                href={`https://wa.me/919786223334?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Booking
              </a>
            </div>

          </div>
        </div>
      </section>

      <BookingSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUsSection />
      <CarsCollectionSection />
      <AreasWeServeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default TirupurCabService;
