import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroSection = () => {
  const containerRef = useRef(null);

  // Scroll offset calculation:
  // - "start start": Starts when the top of container meets the top of viewport.
  // - "end start": Completes when the bottom of container reaches the top of viewport.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Map vertical scroll progress [0, 1] to hardware-accelerated 3D transforms:
  // - scale: Smoothly zooms down from 1.0 (full screen) to 0.75 (75% dimension).
  // - rotateX: Tilts backward on the X-axis from 0 deg to 15 deg for 3D depth perception.
  // - opacity: Fades out subtle ambient layer near scroll exit.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.9, 0.4]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[150vh] bg-black text-white"
    >
      {/* Sticky Viewport Shell with 3D Perspective Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center [perspective:1200px]">
        
        <motion.div
          style={{
            scale,
            rotateX,
            opacity,
            transformStyle: "preserve-3d",
          }}
          className="relative w-[92%] h-[88vh] rounded-[36px] bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border border-white/15 p-8 md:p-16 flex flex-col justify-between shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden transform-gpu"
        >
          {/* Ambient Glow Background Accent */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

          {/* Header Tag */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Cinematic 3D Scroll Perspective
            </span>
            <span className="text-xs font-mono text-neutral-400">01 / HERO</span>
          </div>

          {/* Headline & Hero Content */}
          <div className="my-auto max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight leading-[0.95] text-white">
              WEIGHTLESS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
                MOTION FLOW
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-xl font-medium leading-relaxed">
              Scroll down to witness hardware-accelerated 3D depth transformation synced with Lenis antigravity momentum physics.
            </p>
          </div>

          {/* Bottom Footer Details */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10 text-xs font-medium text-neutral-400">
            <span>Scroll Down to Shrink &amp; Tilt</span>
            <span>Scale: 1.0 → 0.75</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
