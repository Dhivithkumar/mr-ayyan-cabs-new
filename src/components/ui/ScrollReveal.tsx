import React from "react";
import { motion, Variants } from "framer-motion";

type AnimationDirection = "fade-up" | "fade-down" | "slide-left" | "slide-right" | "zoom-in" | "fade";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

// Ultra-smooth Apple-like ease-out curve
const EASE_OUT = [0.16, 1, 0.3, 1];

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.35,
  className = "",
  once = true,
}) => {
  const getVariants = (): Variants => {
    switch (animation) {
      case "fade-up":
        return {
          hidden: { opacity: 0, y: 18 },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-down":
        return {
          hidden: { opacity: 0, y: -18 },
          visible: { opacity: 1, y: 0 },
        };
      case "slide-left":
        return {
          hidden: { opacity: 0, x: 24 },
          visible: { opacity: 1, x: 0 },
        };
      case "slide-right":
        return {
          hidden: { opacity: 0, x: -24 },
          visible: { opacity: 1, x: 0 },
        };
      case "zoom-in":
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        };
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.05 }}
      transition={{
        duration,
        delay,
        ease: EASE_OUT,
      }}
      variants={getVariants()}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.06,
  className = "",
  once = true,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.05 }}
      variants={containerVariants}
      className={className}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  animation?: AnimationDirection;
  className?: string;
}> = ({ children, animation = "fade-up", className = "" }) => {
  const itemVariants: Variants = {
    hidden: 
      animation === "slide-left" 
        ? { opacity: 0, x: 20 } 
        : animation === "slide-right" 
        ? { opacity: 0, x: -20 } 
        : animation === "zoom-in" 
        ? { opacity: 0, scale: 0.95 } 
        : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: EASE_OUT,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} style={{ willChange: "transform, opacity" }}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
