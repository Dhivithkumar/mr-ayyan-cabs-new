import React, { useEffect, createContext, useContext, useState, useRef } from "react";
import Lenis from "lenis";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// -----------------------------------------------------------------------------
// 1. ANTIGRAVITY LENIS CONTEXT & PROVIDER
// -----------------------------------------------------------------------------
const AntigravityScrollContext = createContext<Lenis | null>(null);

export const useAntigravityScroll = () => useContext(AntigravityScrollContext);

interface AntigravityProviderProps {
  children: React.ReactNode;
}

export const AntigravityProvider: React.FC<AntigravityProviderProps> = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    // Custom Antigravity Physics Parameters
    const lenis = new Lenis({
      duration: 2.2, // 2.2s extended duration for weightless drifting feel
      lerp: 0.03, // Low lerp factor (0.03) creates deep momentum lag
      easing: (t: number) => 1 - Math.pow(1 - t, 4), // Quartic ease-out deceleration curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1, // Light wheel boost for effortless glide initiation
      touchMultiplier: 1.8,
      infinite: false,
    });

    setLenisInstance(lenis);

    // Continuous rAF loop updating Lenis physics state
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  return (
    <AntigravityScrollContext.Provider value={lenisInstance}>
      {children}
    </AntigravityScrollContext.Provider>
  );
};

// -----------------------------------------------------------------------------
// 2. ANTIGRAVITY FLOAT PARALLAX COMPONENT
// -----------------------------------------------------------------------------
interface AntigravityFloatProps {
  children: React.ReactNode;
  speed?: number; // Y-offset parallax range in pixels
  rotateOffset?: number; // Subtle zero-gravity rotation angle (degrees)
  className?: string;
}

export const AntigravityFloat: React.FC<AntigravityFloatProps> = ({
  children,
  speed = -100,
  rotateOffset = 3,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Monitor scroll progress relative to element viewport entry/exit
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate target transformation coordinates
  const rawY = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const rawRotate = useTransform(scrollYProgress, [0, 1], [-rotateOffset, rotateOffset]);

  // Spring physics configuration mimicking floating objects in space
  const smoothY = useSpring(rawY, {
    stiffness: 35, // Low stiffness = soft, elastic, floating response
    damping: 18, // Damping prevents abrupt snapping
    mass: 0.15, // Light mass = weightless inertia delay
  });

  const smoothRotate = useSpring(rawRotate, {
    stiffness: 25,
    damping: 15,
    mass: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        y: smoothY,
        rotate: smoothRotate,
      }}
      className={`gpu-accelerated ${className}`}
    >
      {children}
    </motion.div>
  );
};
