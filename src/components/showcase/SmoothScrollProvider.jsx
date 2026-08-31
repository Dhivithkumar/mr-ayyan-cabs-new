import React, { useEffect, createContext, useContext, useState } from "react";
import Lenis from "lenis";

const SmoothScrollContext = createContext(null);

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export const SmoothScrollProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Custom Antigravity Physics Engine Setup:
    // - duration (2.2s): Extended floating scroll decay.
    // - lerp (0.03): Low linear interpolation weight creates weightless momentum inertia lag.
    // - easing (1 - (1-t)^4): Quartic exponential curve for graceful deceleration.
    const instance = new Lenis({
      duration: 2.2,
      lerp: 0.03,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
      infinite: false,
    });

    setLenis(instance);

    // Synchronize physics loop with display refresh rate using requestAnimationFrame
    let rafId;
    function updatePhysics(time) {
      instance.raf(time);
      rafId = requestAnimationFrame(updatePhysics);
    }
    rafId = requestAnimationFrame(updatePhysics);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export default SmoothScrollProvider;
