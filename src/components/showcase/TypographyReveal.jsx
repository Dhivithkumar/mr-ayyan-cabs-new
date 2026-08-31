import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WordWordReveal = ({ word, range, progress }) => {
  // Map scroll progress range for this specific word to a clipPath percentage [0%, 100%]
  // Uses inset(0 0 0 0) to clip reveal text from left to right cleanly
  const clipProgress = useTransform(progress, range, [100, 0]);
  const clipPath = useTransform(clipProgress, (val) => `inset(0 ${val}% 0 0)`);

  return (
    <span className="relative inline-block mr-[0.25em] mb-2 select-none">
      {/* Background Muted Text Layer (Dark Gray) */}
      <span className="text-neutral-700 font-black">{word}</span>
      
      {/* Foreground Highlighted Text Layer (Bright White) masked via hardware-accelerated clipPath */}
      <motion.span 
        style={{ clipPath }}
        className="absolute top-0 left-0 text-white font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400"
      >
        {word}
      </motion.span>
    </span>
  );
};

export const TypographyReveal = () => {
  const containerRef = useRef(null);

  // Scroll offset calculation:
  // - "start 0.85": Starts revealing when the top of the text block reaches 85% from top of viewport.
  // - "end 0.35": Finish reveal when bottom of text block reaches 35% from top of viewport.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const statementText = "WE PROVIDE PREMIUM, PUNCTUAL, AND COMFORTABLE CAB SERVICES ACROSS TIRUPUR AND TAMIL NADU WITH 24x7 DEDICATED CHAUFFEURS AND UNMATCHED RELIABILITY.";
  const words = statementText.split(" ");

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-black text-white flex items-center justify-center py-24 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto text-left">
        
        {/* Header Tag */}
        <div className="mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Scroll-Driven Typography Masking
          </span>
        </div>

        {/* Word Masking Container */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase leading-[1.2] font-heading flex flex-wrap">
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + (1 / words.length);
            return (
              <WordWordReveal 
                key={index} 
                word={word} 
                range={[start, end]} 
                progress={scrollYProgress} 
              />
            );
          })}
        </h2>

        {/* Subtitle Details */}
        <p className="mt-8 text-sm md:text-base text-neutral-400 font-medium max-w-xl">
          Each word dynamically unveils via hardware-accelerated <code className="text-amber-300 font-mono">clipPath</code> interpolation synced with viewport center traversal.
        </p>

      </div>
    </section>
  );
};

export default TypographyReveal;
