import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { trackBookingClick, trackWhatsAppClick, trackCallClick } from "@/utils/analytics";
import offerBannerDesktop from "../assets/free_plant_offer_banner.png";
import offerBannerMobile from "../assets/free_plant_offer_banner_mobile.jpg";

export const OfferSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I would like to book a long trip and claim the Free Plant Offer!");

  return (
    <section
      id="offers"
      aria-label="Free Plant For Long Trips Offer"
      className="py-10 sm:py-14 md:py-18 bg-white text-neutral-900 relative overflow-hidden border-t border-b border-neutral-200"
    >
      {/* Soft Light Eco Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Responsive Banner Picture: Mobile vs Desktop */}
          <div className="relative w-full max-w-sm sm:max-w-none rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden border-2 border-emerald-600/30 shadow-xl shadow-emerald-950/10 group">
            <picture className="w-full">
              <source media="(min-width: 640px)" srcSet={offerBannerDesktop} />
              <img
                src={offerBannerMobile}
                alt="Free Plant For Long Trips - Mr Ayyan Cabs Offer"
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </picture>
          </div>

          {/* Action CTAs Below Image Banner */}
          <div className="mt-5 sm:mt-8 w-full max-w-md sm:max-w-none">
            
            {/* MOBILE LAYOUT: Single Line 2 Buttons (Book Long Trip Now + View Offer Details) */}
            <div className="flex sm:hidden flex-row items-center justify-between gap-2 w-full">
              <a
                href="#booking"
                onClick={() => trackBookingClick("website_booking")}
                className="flex-1 inline-flex items-center justify-center gap-1 bg-[#F5B800] hover:bg-[#e0a700] text-black font-black text-[11px] px-2.5 py-3 rounded-full shadow-md text-center leading-none font-heading whitespace-nowrap active:scale-95"
              >
                <span>Book Long Trip Now</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 stroke-[3]" />
              </a>

              <Link
                to="/offers"
                className="flex-1 inline-flex items-center justify-center gap-1 bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-extrabold text-[11px] px-2.5 py-3 rounded-full shadow-md text-center leading-none font-heading whitespace-nowrap active:scale-95"
              >
                <span>View Offer Details</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </div>

            {/* DESKTOP LAYOUT: All buttons including WhatsApp & Call Desk */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#booking"
                onClick={() => trackBookingClick("website_booking")}
                className="inline-flex items-center gap-2 bg-[#F5B800] hover:bg-[#e0a700] text-black font-black text-xs sm:text-sm md:text-base px-6 py-3 sm:px-7 sm:py-3.5 rounded-full shadow-lg shadow-amber-500/20 transition-all duration-300 transform active:scale-95 font-heading"
              >
                <span>Book Your Long Trip Now</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </a>

              <a
                href={`https://wa.me/919786223334?text=${whatsappMessage}`}
                onClick={() => trackWhatsAppClick()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb956] text-white font-extrabold text-xs sm:text-sm md:text-base px-6 py-3 sm:px-7 sm:py-3.5 rounded-full shadow-md transition-all duration-300 font-heading"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Booking</span>
              </a>

              <a
                href="tel:+919786223334"
                onClick={() => trackCallClick()}
                className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-black text-white font-extrabold text-xs sm:text-sm md:text-base px-5 py-3 sm:px-6 sm:py-3.5 rounded-full shadow-md transition-all duration-300 font-heading"
              >
                <Phone className="w-4 h-4 text-[#F5B800]" />
                <span>Call +91 97862 23334</span>
              </a>

              <Link
                to="/offers"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#2D6A4F] hover:text-[#1B4332] px-3 py-2 underline underline-offset-4 font-heading"
              >
                <span>View Full Offer Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default OfferSection;
