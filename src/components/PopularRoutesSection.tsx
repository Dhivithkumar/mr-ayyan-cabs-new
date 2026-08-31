import { ArrowRight, Phone } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

export const PopularRoutesSection = () => {
  const routes = [
    { from: "Tirupur", to: "Coimbatore Airport (CJB)", distance: "~45 km" },
    { from: "Tirupur", to: "Coimbatore City", distance: "~50 km" },
    { from: "Tirupur", to: "Erode", distance: "~55 km" },
    { from: "Tirupur", to: "Salem", distance: "~115 km" },
    { from: "Tirupur", to: "Ooty / Coonoor", distance: "~130 km" },
    { from: "Tirupur", to: "Chennai", distance: "~450 km" },
    { from: "Tirupur", to: "Bangalore", distance: "~320 km" },
    { from: "Tirupur", to: "Madurai", distance: "~195 km" },
  ];

  return (
    <section id="routes" className="py-16 md:py-24 bg-white border-t border-gray-200/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <ScrollReveal animation="fade-down" className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-[#D4A017] tracking-tight font-heading">
              Cab Routes From Tirupur
            </h2>
          </ScrollReveal>

          {/* Single Line Route Cards List */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {routes.map((route, idx) => (
              <StaggerItem key={idx} animation="fade-up">
                <div 
                  className="p-3.5 sm:p-4 bg-gray-50/90 hover:bg-amber-50/50 rounded-2xl border border-gray-200/80 hover:border-amber-400 flex items-center justify-between gap-3 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  {/* Single Line: From -> To */}
                  <div className="flex items-center gap-2 text-gray-900 font-extrabold text-xs sm:text-sm font-heading min-w-0 flex-1">
                    <span className="truncate">{route.from}</span>
                    <ArrowRight className="w-4 h-4 text-[#D4A017] shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="text-amber-900 truncate">{route.to}</span>
                  </div>

                  {/* Approx KM */}
                  <span className="shrink-0 bg-white text-amber-900 border border-amber-200 text-xs px-2.5 py-1 rounded-full font-bold font-mono">
                    {route.distance}
                  </span>

                  {/* Call Icon Button */}
                  <a
                    href="tel:+919786223334"
                    className="shrink-0 w-9 h-9 bg-gray-900 hover:bg-[#D4A017] text-white hover:text-black rounded-full flex items-center justify-center transition-colors shadow-sm"
                    aria-label={`Call to book cab from ${route.from} to ${route.to}`}
                    title={`Call +91 97862 23334 to book ${route.from} to ${route.to}`}
                  >
                    <Phone className="w-4 h-4 fill-current text-[#F59E0B] group-hover:text-black" />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
};

export default PopularRoutesSection;
