import { ArrowRight, Phone } from "lucide-react";

export const PopularRoutesSection = () => {
  const routes = [
    { from: "Tirupur", to: "Coimbatore Airport (CJB)", desc: "Direct airport transfers", distance: "~45 km" },
    { from: "Tirupur", to: "Coimbatore City", desc: "Local & business trips", distance: "~50 km" },
    { from: "Tirupur", to: "Erode", desc: "One-way & round trip", distance: "~55 km" },
    { from: "Tirupur", to: "Salem", desc: "Highway outstation cab", distance: "~115 km" },
    { from: "Tirupur", to: "Ooty / Coonoor", desc: "Hill station family tour", distance: "~130 km" },
    { from: "Tirupur", to: "Chennai", desc: "Long distance taxi rental", distance: "~450 km" },
    { from: "Tirupur", to: "Bangalore", desc: "Inter-state outstation cab", distance: "~320 km" },
    { from: "Tirupur", to: "Madurai", desc: "Temple & heritage travel", distance: "~195 km" },
  ];

  return (
    <section id="routes" className="py-20 md:py-28 bg-white border-t border-gray-200/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-amber-700 font-extrabold text-xs sm:text-sm uppercase tracking-widest bg-amber-100/70 text-amber-900 px-4 py-1.5 rounded-full border border-amber-200/80 inline-block mb-3 font-heading">
              Popular Travel Routes
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 font-heading">
              Cab Routes From Tirupur
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Frequent outstation cab routes serviced by Mr Ayyan Cabs with experienced drivers and comfortable vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {routes.map((route, idx) => (
              <div 
                key={idx}
                className="p-6 bg-gray-50/80 rounded-3xl border border-gray-200/80 hover:border-amber-400 hover:bg-white transition-all duration-300 flex flex-col justify-between card-hover-effect group"
              >
                <div>
                  <div className="flex items-center gap-2 text-gray-900 font-extrabold text-sm sm:text-base mb-2 font-heading">
                    <span>{route.from}</span>
                    <ArrowRight className="w-4 h-4 text-[#F59E0B] shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="text-amber-900">{route.to}</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-3">{route.desc}</p>
                  <span className="inline-block bg-amber-50 text-amber-800 border border-amber-200 text-xs px-3 py-1 rounded-full font-bold mb-4 font-mono">
                    {route.distance}
                  </span>
                </div>
                <a
                  href="tel:+919786223334"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white font-extrabold text-xs py-2.5 px-3 rounded-xl transition-colors w-full font-heading"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F59E0B]" /> Call to Book
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PopularRoutesSection;
