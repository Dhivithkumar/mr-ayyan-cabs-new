import { Plane, Clock, Shield, Luggage, Phone, MessageCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import { trackCallClick, trackWhatsAppClick } from "@/utils/analytics";

export const AirportTaxiSection = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I want to book an Airport Taxi from Tirupur to Coimbatore Airport.");

  return (
    <section id="airport" className="py-20 md:py-28 bg-[#0c0c0c] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <ScrollReveal animation="fade-down" className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#F5B800] tracking-tight font-heading">
              Airport Taxi
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">
              Seamless transfers between Tirupur and Coimbatore International Airport (CJB)
            </p>
          </ScrollReveal>

          {/* 2x2 GRID HIGHLIGHTS */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            
            <StaggerItem animation="fade-up">
              <div className="p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all flex flex-col sm:flex-row items-start gap-4 group">
                <div className="w-14 h-14 bg-amber-500/10 rounded-2xl border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Clock className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-lg mb-1.5 font-heading">On-Time Pickup</h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    Punctual arrival guaranteed for smooth, stress-free airport drop and pickup.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem animation="fade-up">
              <div className="p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all flex flex-col sm:flex-row items-start gap-4 group">
                <div className="w-14 h-14 bg-amber-500/10 rounded-2xl border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Luggage className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-lg mb-1.5 font-heading">Luggage Capacity</h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    Spacious boot storage in Etios, Dzire sedans &amp; Innova Crysta SUVs for all your flight bags.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem animation="fade-up">
              <div className="p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all flex flex-col sm:flex-row items-start gap-4 group">
                <div className="w-14 h-14 bg-amber-500/10 rounded-2xl border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Plane className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-lg mb-1.5 font-heading">Coimbatore Airport (CJB)</h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    Direct doorstep pickup from any textile hub or home in Tirupur straight to CJB terminal.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem animation="fade-up">
              <div className="p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all flex flex-col sm:flex-row items-start gap-4 group">
                <div className="w-14 h-14 bg-amber-500/10 rounded-2xl border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Shield className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-lg mb-1.5 font-heading">24x7 Availability</h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    Advance bookings accepted for 3 AM early flights and late night landings.
                  </p>
                </div>
              </div>
            </StaggerItem>

          </StaggerContainer>

          {/* Banner Box */}
          <ScrollReveal animation="zoom-in" delay={0.2} className="bg-gradient-to-r from-[#181818] via-[#121212] to-black text-white p-8 md:p-12 rounded-3xl border border-amber-500/30 gold-shadow flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 text-white font-heading">Need a Taxi to Coimbatore Airport?</h3>
              <p className="text-gray-300 text-sm md:text-base max-w-xl font-medium">
                Call Mr Ayyan Cabs for hassle-free airport transfer booking. Get instant confirmation for your ride.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href="tel:+919786223334"
                onClick={() => trackCallClick()}
                className="inline-flex items-center justify-center gap-2.5 bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold px-7 py-4 rounded-xl text-sm transition-all gold-shadow font-heading"
              >
                <Phone className="w-4 h-4 fill-black" />
                Book Airport Cab (+91 97862 23334)
              </a>
              <a
                href={`https://wa.me/919786223334?text=${whatsappMessage}`}
                onClick={() => trackWhatsAppClick()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-4 rounded-xl text-sm transition-all shadow-md font-heading"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default AirportTaxiSection;
