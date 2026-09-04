import React from "react";
import HeroHeader from "../components/hero/HeroHeader";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";
import BookingSection from "../components/BookingSection";
import { Leaf, Phone, MessageCircle, ArrowRight, CheckCircle, ShieldCheck, Award, HeartHandshake } from "lucide-react";
import { trackCallClick, trackWhatsAppClick, trackBookingClick } from "@/utils/analytics";
import offerBannerDesktop from "../assets/free_plant_offer_banner.png";
import offerBannerMobile from "../assets/free_plant_offer_banner_mobile.png";

const OffersPage: React.FC = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I would like to book a long trip and claim the Free Plant Offer!");

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Free Plant For Long Trips Offer",
    "seller": {
      "@type": "TaxiService",
      "name": "Mr Ayyan Cabs",
      "telephone": "+919786223334",
      "url": "https://mrayyancabs.com/"
    },
    "description": "Get a complimentary plant sapling in an eco-friendly coir pot with every outstation and long-distance cab booking from Tirupur.",
    "category": "Cab Booking Promotion",
    "availability": "https://schema.org/InStock",
    "areaServed": "Tirupur, Tamil Nadu"
  };

  const faqs = [
    {
      q: "Which trips are eligible for the Free Plant Offer?",
      a: "All outstation round trips, long-distance intercity cab travel (e.g. Tirupur to Bangalore, Chennai, Ooty, Munnar, Madurai, Coimbatore), and multi-day tour packages qualify for a complimentary green plant sapling."
    },
    {
      q: "Is there any hidden cost or additional charge for the plant?",
      a: "No! The plant sapling is 100% complimentary from Mr Ayyan Cabs as part of our green travel initiative."
    },
    {
      q: "How is the plant sapling handed over?",
      a: "Our driver will present your healthy plant sapling in a light, eco-friendly coir pot at the start or completion of your trip so it is easy to carry."
    },
    {
      q: "How do I claim this offer while booking?",
      a: "Simply book your long-distance cab through our website form, WhatsApp, or direct call. Mention 'Free Plant Offer' or select outstation booking, and our team will automatically assign it to your trip."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-emerald-500 selection:text-black">
      <SEOHead
        title="Free Plant For Long Trips Offer | Mr Ayyan Cabs Tirupur"
        description="Book outstation cabs with Mr Ayyan Cabs and receive a complimentary green plant sapling for every long-distance journey. Travel far, leave something green behind!"
        canonicalUrl="https://mrayyancabs.com/offers"
        schema={offerSchema}
      />

      {/* Header Navigation */}
      <HeroHeader />

      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-white text-neutral-900 border-b border-neutral-200">
        
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 max-w-6xl flex flex-col items-center">
          
          {/* Main Responsive Image Banner Display (Mobile vs Desktop) */}
          <div className="w-full max-w-sm sm:max-w-none rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden border-2 border-emerald-600/30 shadow-xl shadow-emerald-950/10 mb-6 sm:mb-10">
            <picture className="w-full">
              <source media="(min-width: 640px)" srcSet={offerBannerDesktop} />
              <img
                src={offerBannerMobile}
                alt="Free Plant For Long Trips Offer Banner"
                className="w-full h-auto object-cover"
              />
            </picture>
          </div>

          {/* Action CTAs */}
          <div className="w-full max-w-md sm:max-w-none">
            {/* Mobile CTAs: Single Line */}
            <div className="flex sm:hidden flex-row items-center justify-center gap-2 w-full">
              <a
                href="#booking"
                onClick={() => trackBookingClick("website_booking")}
                className="flex-1 inline-flex items-center justify-center gap-1 bg-[#F5B800] hover:bg-[#e0a700] text-black font-black text-xs px-3 py-3.5 rounded-full shadow-md text-center font-heading active:scale-95 whitespace-nowrap"
              >
                <span>Book Long Trip Now</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </a>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 w-full">
              <a
                href="#booking"
                onClick={() => trackBookingClick("website_booking")}
                className="inline-flex items-center gap-2 bg-[#F5B800] hover:bg-[#e0a700] text-black font-black text-xs sm:text-sm md:text-base px-7 py-3.5 rounded-full shadow-lg shadow-amber-500/20 transition-all duration-300 font-heading active:scale-95"
              >
                <span>Book Your Long Trip Now</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </a>

              <a
                href={`https://wa.me/919786223334?text=${whatsappMessage}`}
                onClick={() => trackWhatsAppClick()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb956] text-white font-extrabold text-xs sm:text-sm md:text-base px-6 py-3.5 rounded-full shadow-md transition-all duration-300 font-heading"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Booking</span>
              </a>

              <a
                href="tel:+919786223334"
                onClick={() => trackCallClick()}
                className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-black text-white font-extrabold text-xs sm:text-sm md:text-base px-6 py-3.5 rounded-full shadow-md transition-all duration-300 font-heading"
              >
                <Phone className="w-4 h-4 text-[#F5B800]" />
                <span>Call +91 97862 23334</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* WHY WE GIVE A FREE PLANT */}
      <section className="py-14 sm:py-20 bg-neutral-900/60 border-t border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-emerald-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest font-heading">
              OUR MISSION & PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
              Why We Gift A Sapling With Every Long Journey
            </h2>
            <p className="text-gray-300 text-sm sm:text-base font-medium">
              At Mr Ayyan Cabs, we believe travel is not just about reaching a destination—it’s about nurturing positive memories and giving back to mother earth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            <div className="bg-neutral-950 p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Green Environmental Footprint</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Long-distance highway travel connects lives. By planting a sapling, every passenger contributes towards carbon off-setting and cleaner air for future generations.
              </p>
            </div>

            <div className="bg-neutral-950 p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">A Lasting Trip Memory</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Take a piece of your voyage home! Watch your plant grow as a living memory of your comfortable journey with Mr Ayyan Cabs.
              </p>
            </div>

            <div className="bg-neutral-950 p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Hand-Nurtured Healthy Saplings</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our plant saplings are selected from trusted local nurseries and packaged in 100% biodegradable coir pots that require minimal maintenance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* HOW TO CLAIM IN 3 SIMPLE STEPS */}
      <section className="py-14 sm:py-20 bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
              How To Claim Your Free Plant 3 Step Process
            </h2>
            <p className="text-gray-300 text-sm sm:text-base font-medium">
              Getting your complimentary plant sapling is quick and effortless!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-neutral-900/80 p-6 rounded-2xl border border-emerald-500/20 space-y-3 text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-black font-black text-lg flex items-center justify-center font-heading">
                1
              </div>
              <h3 className="text-lg font-bold text-white font-heading">Book an Outstation Cab</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Select your destination from Tirupur (Outstation, Intercity, Tourism Package) via phone, WhatsApp, or booking form.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-neutral-900/80 p-6 rounded-2xl border border-emerald-500/20 space-y-3 text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-black font-black text-lg flex items-center justify-center font-heading">
                2
              </div>
              <h3 className="text-lg font-bold text-white font-heading">Instant Driver & Cab Confirmation</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Receive instant confirmation with vehicle details, transparent pricing, and zero hidden charges.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-neutral-900/80 p-6 rounded-2xl border border-emerald-500/20 space-y-3 text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-black font-black text-lg flex items-center justify-center font-heading">
                3
              </div>
              <h3 className="text-lg font-bold text-white font-heading">Receive Your Green Gift</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Your driver will hand over your healthy potted sapling at pickup. Enjoy a safe, comfortable, and green ride!
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BOOKING SECTION INTEGRATION */}
      <section className="py-10 bg-neutral-900/40 border-t border-white/10">
        <BookingSection />
      </section>

      {/* TERMS & CONDITIONS & FAQS */}
      <section className="py-14 sm:py-20 bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* T&C */}
          <div className="lg:col-span-5 space-y-4 bg-neutral-900/80 p-6 sm:p-8 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Offer Terms & Conditions
            </h3>
            <ul className="space-y-2.5 text-gray-300 text-xs sm:text-sm font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Valid on all eligible outstation round trips & long-distance cab bookings from Tirupur.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>One complimentary plant sapling provided per completed booking.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Saplings are provided in 100% eco-friendly coir pots.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Subject to plant availability at the time of pickup.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Mr Ayyan Cabs reserves the right to modify offer terms without prior notice.</span>
              </li>
            </ul>
          </div>

          {/* FAQs */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl font-bold text-white font-heading">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-neutral-900/80 border border-white/10 rounded-2xl p-5 space-y-2">
                  <h4 className="text-sm sm:text-base font-bold text-amber-300 font-heading">
                    Q: {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default OffersPage;
