import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HorizontalShowcase = () => {
  const targetRef = useRef(null);

  // Scroll offset calculation:
  // - "start start": Sticky pinning starts when top of container reaches top of viewport.
  // - "end end": Unpins right as the bottom of the 300vh spacer canvas reaches the bottom of viewport.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll progress [0, 1] to negative horizontal translateX ["0%", "-75%"]:
  // Moves 4 horizontal cards smoothly across the viewport while user scrolls down vertically.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const cards = [
    { id: "01", title: "Aerodynamic Fleet", desc: "Premium sedan and luxury cabs tuned for high-speed highway travel.", badge: "Sedan" },
    { id: "02", title: "Coimbatore Airport Pickup", desc: "Punctual 24x7 flight drop and pickup with real-time flight tracking.", badge: "Airport" },
    { id: "03", title: "Outstation Round Trips", desc: "Explore hill stations, pilgrimage destinations, and inter-city routes.", badge: "Outstation" },
    { id: "04", title: "Executive Travel", desc: "Tailored corporate transfers with professional uniformed chauffeurs.", badge: "Executive" },
  ];

  return (
    <section 
      ref={targetRef} 
      className="relative h-[300vh] bg-neutral-950 text-white"
    >
      {/* Sticky Viewport Shell */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Section Header Title */}
        <div className="px-6 md:px-16 mb-8 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Sideways Motion Flow
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white font-heading mt-1">
              Horizontal Fleet Showcase
            </h2>
          </div>
          <span className="hidden sm:block text-xs font-mono text-neutral-400">
            Scroll Down → Drives Sideways
          </span>
        </div>

        {/* Horizontal Track Wrapper */}
        <div className="w-full overflow-hidden px-6 md:px-16">
          <motion.div 
            style={{ x }} 
            className="flex gap-6 md:gap-10 w-max transform-gpu"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-[82vw] sm:w-[50vw] md:w-[38vw] lg:w-[28vw] h-[55vh] rounded-3xl bg-neutral-900/90 border border-white/10 p-8 flex flex-col justify-between shadow-2xl hover:border-amber-400/50 transition-colors group shrink-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-amber-400 font-mono">{card.id}</span>
                  <span className="text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1 rounded-full text-neutral-300">
                    {card.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-amber-400 transition-colors font-heading mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-neutral-300">
                  <span>Explore Route</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HorizontalShowcase;
