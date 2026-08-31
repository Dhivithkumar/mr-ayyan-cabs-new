import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

export const ContactSection = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I want to book a cab in Tirupur.");

  return (
    <section className="py-16 md:py-24 bg-gray-50/80 border-t border-gray-200" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-[#D4A017] tracking-tight font-heading">
            Get In Touch
          </h2>
        </ScrollReveal>

        {/* SINGLE BOX CARD CONTAINING ALL 5 CONTACT ITEMS */}
        <ScrollReveal animation="zoom-in" delay={0.1} className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden p-6 sm:p-10">
          
          <div className="text-center pb-6 mb-8 border-b border-gray-100">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 font-heading uppercase tracking-tight">
              Mr <span className="text-[#D4A017]">Ayyan</span> Cabs Contact Info
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Reach out to us anytime for instant taxi bookings and inquiries in Tirupur
            </p>
          </div>

          <div className="space-y-4">
            
            {/* 1. Phone Number with Icon */}
            <a 
              href="tel:+919786223334" 
              className="flex items-center gap-4 p-4 rounded-2xl bg-amber-50/40 border border-amber-200/70 hover:border-[#D4A017] hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-black text-[#F5B800] border border-[#F5B800]/30 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 fill-[#F5B800]" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#D4A017] uppercase tracking-wider block font-heading">Phone Number</span>
                <span className="text-base sm:text-lg font-black text-gray-900 group-hover:text-[#D4A017] transition-colors">
                  +91 97862 23334
                </span>
              </div>
            </a>

            {/* 2. WhatsApp Number with Icon */}
            <a 
              href={`https://wa.me/919786223334?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-amber-50/40 border border-amber-200/70 hover:border-[#D4A017] hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-black text-[#F5B800] border border-[#F5B800]/30 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 fill-[#F5B800]" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#D4A017] uppercase tracking-wider block font-heading">WhatsApp Booking</span>
                <span className="text-base sm:text-lg font-black text-gray-900 group-hover:text-[#D4A017] transition-colors">
                  +91 97862 23334
                </span>
              </div>
            </a>

            {/* 3. Mail Address with Icon */}
            <a 
              href="mailto:mrayyancabs@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-amber-50/40 border border-amber-200/70 hover:border-[#D4A017] hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-black text-[#F5B800] border border-[#F5B800]/30 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#D4A017] uppercase tracking-wider block font-heading">Email Address</span>
                <span className="text-base sm:text-lg font-black text-gray-900 group-hover:text-[#D4A017] transition-colors break-all">
                  mrayyancabs@gmail.com
                </span>
              </div>
            </a>

            {/* 4. Office Address with Icon */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/40 border border-amber-200/70 hover:border-[#D4A017] hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-black text-[#F5B800] border border-[#F5B800]/30 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-extrabold text-[#D4A017] uppercase tracking-wider block font-heading">Office Address</span>
                <p className="text-sm sm:text-base font-extrabold text-gray-900 mt-0.5 leading-snug">
                  Tirupur Main Road, Tirupur, Tamil Nadu - 641603, India
                </p>
                <span className="text-xs font-semibold text-gray-600 mt-1 block">Local &amp; Outstation Pickup Across Tirupur</span>
              </div>
            </div>

            {/* 5. Business Hours with Icon */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/40 border border-amber-200/70 hover:border-[#D4A017] hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-black text-[#F5B800] border border-[#F5B800]/30 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#D4A017] uppercase tracking-wider block font-heading">Business Hours</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-black bg-[#F5B800] px-2.5 py-1 rounded-full border border-amber-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                    24/7 Open
                  </span>
                </div>
                <p className="text-sm sm:text-base font-extrabold text-gray-900 mt-0.5">
                  24 Hours / 7 Days a Week
                </p>
                <span className="text-xs font-medium text-gray-600 block mt-0.5">Round the clock Day &amp; Night Taxi Service</span>
              </div>
            </div>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
};

export default ContactSection;
