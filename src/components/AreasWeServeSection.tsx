import { MapPin, Phone } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

export const AreasWeServeSection = () => {
  const primaryAreas = [
    "Tirupur City Center",
    "Avinashi",
    "Palladam",
    "Dharapuram",
    "Kangeyam",
    "Perumanallur",
    "Mangalam",
    "Veerapandi",
    "Uthukuli",
    "Kovilpalayam",
    "Murugampalayam",
    "Coimbatore Airport (CJB)"
  ];

  return (
    <section id="areas" className="py-20 md:py-28 bg-gray-50/80 border-t border-gray-200/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          <ScrollReveal animation="fade-down" className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-[#D4A017] tracking-tight font-heading">
              Areas We Serve
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
            {primaryAreas.map((area, idx) => (
              <StaggerItem key={idx} animation="zoom-in">
                <div 
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 hover:border-amber-400 flex items-center gap-3 text-gray-900 font-bold text-sm shadow-sm hover:shadow-md transition-all card-hover-effect"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-[#F59E0B]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-heading">{area}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal animation="zoom-in" delay={0.2} className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border border-amber-500/30 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
            <div>
              <h3 className="font-extrabold text-gray-900 text-lg mb-1 font-heading">Don't see your area listed?</h3>
              <p className="text-sm text-gray-600 font-medium">We service all surrounding villages, industrial areas, and highway pickup points in Tirupur district.</p>
            </div>
            <a
              href="tel:+919786223334"
              className="inline-flex items-center gap-2 bg-maroon-gradient hover:opacity-95 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm shrink-0 transition-colors shadow-md font-heading"
            >
              <Phone className="w-4 h-4" /> Check Pickup Availability
            </a>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default AreasWeServeSection;
