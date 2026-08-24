import { Clock, ShieldCheck, MapPin, Phone } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-[#D4A017] tracking-tight font-heading">
            About Us
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2 font-medium">
            Your most trusted local cab and taxi partner in Tirupur
          </p>
        </ScrollReveal>

        {/* 2x2 GRID LAYOUT FOR ABOUT US */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          <StaggerItem animation="fade-up">
            <div className="bg-gray-50/80 rounded-3xl border border-gray-200 p-6 md:p-8 hover:border-[#D4A017]/60 hover:shadow-xl transition-all group flex flex-col sm:flex-row items-start gap-4">
              <div className="w-14 h-14 bg-[#D4A017]/10 rounded-2xl border border-[#D4A017]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="w-7 h-7 text-[#D4A017]" />
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-1.5 font-heading">Tirupur Based</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Local drivers with intimate knowledge of every corner, route, and industrial area across Tirupur.
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem animation="fade-up">
            <div className="bg-gray-50/80 rounded-3xl border border-gray-200 p-6 md:p-8 hover:border-[#D4A017]/60 hover:shadow-xl transition-all group flex flex-col sm:flex-row items-start gap-4">
              <div className="w-14 h-14 bg-[#D4A017]/10 rounded-2xl border border-[#D4A017]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Clock className="w-7 h-7 text-[#D4A017]" />
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-1.5 font-heading">24x7 Cab Booking</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Round-the-clock availability for emergency trips, early morning flights, and late-night station pickups.
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem animation="fade-up">
            <div className="bg-gray-50/80 rounded-3xl border border-gray-200 p-6 md:p-8 hover:border-[#D4A017]/60 hover:shadow-xl transition-all group flex flex-col sm:flex-row items-start gap-4">
              <div className="w-14 h-14 bg-[#D4A017]/10 rounded-2xl border border-[#D4A017]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-7 h-7 text-[#D4A017]" />
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-1.5 font-heading">Clean &amp; Safe Cabs</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Regularly sanitized, fully air-conditioned hatchbacks, sedans, and spacious 7-seater Innova SUVs.
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem animation="fade-up">
            <div className="bg-gray-50/80 rounded-3xl border border-gray-200 p-6 md:p-8 hover:border-[#D4A017]/60 hover:shadow-xl transition-all group flex flex-col sm:flex-row items-start gap-4">
              <div className="w-14 h-14 bg-[#D4A017]/10 rounded-2xl border border-[#D4A017]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-7 h-7 text-[#D4A017]" />
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-1.5 font-heading">Direct Phone Booking</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  No app downloads required. Simply call +91 97862 23334 for instant cab dispatch and booking confirmation.
                </p>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>

      </div>
    </section>
  );
};

export default AboutSection;
