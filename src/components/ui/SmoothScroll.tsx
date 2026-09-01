import React, { useEffect, createContext, useContext, useState } from "react";
import Lenis from "lenis";

const SmoothScrollContext = createContext<Lenis | null>(null);

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      infinite: false,
    });

    setLenisInstance(lenis);

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
    <SmoothScrollContext.Provider value={lenisInstance}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export default SmoothScroll;
