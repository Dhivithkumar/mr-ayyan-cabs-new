import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

export const ContactSection = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I want to book a cab in Tirupur.");

  return (
    <section className="py-6 sm:py-16 md:py-24 bg-gray-50/80 border-t border-gray-200" id="contact">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" className="text-center max-w-3xl mx-auto mb-3 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#D4A017] tracking-tight font-heading">
            Get In Touch
          </h2>
        </ScrollReveal>

        {/* COMPACT SINGLE BOX CARD */}
        <ScrollReveal animation="fade-up" duration={0.55} className="max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-lg overflow-hidden p-3.5 sm:p-8 md:p-10">
          
          <div className="text-center pb-2.5 mb-3 sm:pb-4 sm:mb-6 border-b border-gray-100">
            <h3 className="text-base sm:text-2xl font-black text-gray-900 font-heading uppercase tracking-tight">
              Mr <span className="text-[#D4A017]">Ayyan</span> Cabs Contact Info
            </h3>
            <p className="hidden sm:block text-xs sm:text-sm text-gray-500 mt-1">
              Reach out to us anytime for instant taxi bookings and inquiries in Tirupur
            </p>
          </div>

          <div className="space-y-2 sm:space-y-4">
            
            {/* Row 1: Phone & WhatsApp Side-by-Side on Mobile */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:gap-4">
              
              {/* 1. Phone Number */}
              <a 
                href="tel:+919786223334" 
                className="flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/40 border border-amber-200/70 hover:border-[#D4A017] transition-colors group"
              >
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-black text-[#F5B800] border border-[#F5B800]/30 flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-[#F5B800]" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-xs font-extrabold text-[#D4A017] uppercase tracking-wider block font-heading">Call Now</span>
                  <span className="text-xs sm:text-base font-black text-gray-900 truncate block">
                    +91 97862 23334
                  </span>
                </div>
              </a>

              {/* 2. WhatsApp Number */}
              <a 
                href={`https://wa.me/919786223334?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/40 border border-amber-200/70 hover:border-[#D4A017] transition-colors group"
              >
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-black text-[#F5B800] border border-[#F5B800]/30 flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-[#F5B800]" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-xs font-extrabold text-[#D4A017] uppercase tracking-wider block font-heading">WhatsApp</span>
                  <span className="text-xs sm:text-base font-black text-gray-900 truncate block">
                    +91 97862 23334
                  </span>
                </div>
              </a>

            </div>

            {/* 3. Mail Address */}
            <a 
              href="mailto:mrayyancabs@gmail.com"
              className="flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/40 border border-amber-200/70 hover:border-[#D4A017] transition-colors group"
            >
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-black text-[#F5B800] border border-[#F5B800]/30 flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] sm:text-xs font-extrabold text-[#D4A017] uppercase tracking-wider block font-heading">Email</span>
                <span className="text-xs sm:text-base font-black text-gray-900 truncate block">
                  mrayyancabs@gmail.com
                </span>
              </div>
            </a>

            {/* 4. Office Address */}
            <div className="flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/40 border border-amber-200/70">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-black text-[#F5B800] border border-[#F5B800]/30 flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] sm:text-xs font-extrabold text-[#D4A017] uppercase tracking-wider block font-heading">Office Location</span>
                <p className="text-xs sm:text-base font-extrabold text-gray-900 truncate">
                  Tirupur Main Road, Tirupur, TN - 641603
                </p>
              </div>
            </div>

            {/* 5. Business Hours */}
            <div className="flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/40 border border-amber-200/70">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-black text-[#F5B800] border border-[#F5B800]/30 flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1 flex items-center justify-between">
                <div>
                  <span className="text-[10px] sm:text-xs font-extrabold text-[#D4A017] uppercase tracking-wider block font-heading">Business Hours</span>
                  <p className="text-xs sm:text-base font-extrabold text-gray-900">
                    24 Hours / 7 Days
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-extrabold text-black bg-[#F5B800] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  24/7 Open
                </span>
              </div>
            </div>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
};

export default ContactSection;
