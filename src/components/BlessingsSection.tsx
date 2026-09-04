import { Shield, Heart, Award, Users, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const BlessingsSection = () => {
  const blessings = [
    {
      icon: <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-[#F5B800] group-hover:scale-110 transition-transform duration-300" />,
      title: "Safe Travel",
      subtitle: "Careful Drivers",
      accentBg: "bg-amber-500/10 border-amber-400/30",
    },
    {
      icon: <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-[#F5B800] group-hover:scale-110 transition-transform duration-300" />,
      title: "Honest Service",
      subtitle: "Fair Billing",
      accentBg: "bg-amber-500/10 border-amber-400/30",
    },
    {
      icon: <Award className="w-4 h-4 sm:w-6 sm:h-6 text-[#F5B800] group-hover:scale-110 transition-transform duration-300" />,
      title: "10+ Yrs Exp.",
      subtitle: "Expert Drivers",
      accentBg: "bg-amber-500/10 border-amber-400/30",
    },
    {
      icon: <Users className="w-4 h-4 sm:w-6 sm:h-6 text-[#F5B800] group-hover:scale-110 transition-transform duration-300" />,
      title: "Family Friendly",
      subtitle: "Respectful Courtesy",
      accentBg: "bg-amber-500/10 border-amber-400/30",
    },
  ];

  return (
    <section 
      id="blessings" 
      className="py-5 sm:py-14 md:py-16 px-3 sm:px-6 md:px-8 bg-gradient-to-b from-[#080808] via-[#120f06] to-[#0a0a0a] border-t border-amber-500/20 relative overflow-hidden"
    >
      {/* Radiant Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto max-w-6xl relative z-10 w-full text-center">
        <ScrollReveal animation="fade-up" duration={0.5}>
          
          {/* Top Auspicious Pill Tag */}
          <div className="inline-flex items-center gap-1 px-3 py-0.5 sm:px-4 sm:py-1 rounded-full text-[9px] sm:text-xs font-black uppercase tracking-widest bg-amber-500/15 border border-amber-400/30 text-amber-300 font-heading mb-1.5 sm:mb-3 shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F5B800]" />
            <span>DIVINE PROTECTION &amp; TRUST</span>
          </div>

          {/* Section Header */}
          <div className="space-y-1 mb-4 sm:mb-8 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight font-heading leading-tight bg-gradient-to-r from-amber-200 via-[#F5B800] to-amber-300 bg-clip-text text-transparent drop-shadow">
              அய்யனார் ஆசீர்வாதத்துடன்
            </h2>
            <p className="text-[11px] sm:text-sm font-extrabold text-amber-200/80 tracking-wider uppercase font-heading">
              (Ayyanar Blessings)
            </p>
            <div className="w-16 sm:w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-amber-400/60 to-transparent my-1 sm:my-2" />
            <p className="text-[10px] sm:text-xs text-amber-100/70 font-medium italic">
              “ஒவ்வொரு பயணமும் பாதுகாப்பாகவும் மங்களகரமாகவும் அமைய அய்யனாரின் அருளாசிகள்”
            </p>
          </div>

          {/* 4 Wide Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-5 w-full">
            {blessings.map((item, index) => (
              <div
                key={index}
                className="p-2.5 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-amber-400/20 hover:border-amber-400/60 flex flex-col items-center text-center shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-amber-500/10 group backdrop-blur-sm"
              >
                <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-xl ${item.accentBg} flex items-center justify-center mb-1.5 sm:mb-2.5 shadow-inner`}>
                  {item.icon}
                </div>
                <h3 className="text-xs sm:text-base font-extrabold text-white group-hover:text-amber-300 transition-colors font-heading leading-tight">
                  {item.title}
                </h3>
                <p className="text-[9.5px] sm:text-xs font-medium text-amber-200/70 mt-0.5 leading-snug">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-4 sm:mt-7 pt-2.5 sm:pt-4 border-t border-amber-500/15 flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-amber-200/80 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>24×7 Safe, Reliable &amp; Blessed Cab Service in Tirupur</span>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlessingsSection;
