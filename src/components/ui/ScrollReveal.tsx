import React from "react";
import { motion, Variants } from "framer-motion";

type AnimationDirection = 
  | "fade-up" 
  | "fade-down" 
  | "slide-left" 
  | "slide-right" 
  | "slide-from-left" 
  | "slide-from-right" 
  | "zoom-in" 
  | "fade";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

// Ultra-smooth Apple-like ease-out curve
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.25,
  className = "",
  once = true,
}) => {
  const getVariants = (): Variants => {
    switch (animation) {
      case "fade-up":
        return {
          hidden: { opacity: 0, y: 12 },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-down":
        return {
          hidden: { opacity: 0, y: -12 },
          visible: { opacity: 1, y: 0 },
        };
      case "slide-left":
      case "slide-from-right":
        return {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        };
      case "slide-right":
      case "slide-from-left":
        return {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        };
      case "zoom-in":
        return {
          hidden: { opacity: 0, scale: 0.96 },
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
      viewport={{ once, amount: 0.05, margin: "0px 0px -10px 0px" }}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: EASE_OUT,
      }}
      className={`transform-gpu ${className}`}
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
  staggerDelay = 0.04,
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
      viewport={{ once, amount: 0.05, margin: "0px 0px -10px 0px" }}
      variants={containerVariants}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  animation?: AnimationDirection;
  duration?: number;
  className?: string;
}> = ({ children, animation = "fade-up", duration = 0.58, className = "" }) => {
  const getItemVariants = (): Variants => {
    switch (animation) {
      case "slide-from-left":
        return {
          hidden: { opacity: 0, x: -45 },
          visible: { opacity: 1, x: 0, transition: { duration, ease: EASE_OUT } },
        };
      case "slide-from-right":
        return {
          hidden: { opacity: 0, x: 45 },
          visible: { opacity: 1, x: 0, transition: { duration, ease: EASE_OUT } },
        };
      case "slide-left":
        return {
          hidden: { opacity: 0, x: 35 },
          visible: { opacity: 1, x: 0, transition: { duration, ease: EASE_OUT } },
        };
      case "slide-right":
        return {
          hidden: { opacity: 0, x: -35 },
          visible: { opacity: 1, x: 0, transition: { duration, ease: EASE_OUT } },
        };
      case "zoom-in":
        return {
          hidden: { opacity: 0, scale: 0.9, y: 16 },
          visible: { opacity: 1, scale: 1, y: 0, transition: { duration, ease: EASE_OUT } },
        };
      case "fade-down":
        return {
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration, ease: EASE_OUT } },
        };
      case "fade-up":
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration, ease: EASE_OUT } },
        };
    }
  };

  return (
    <motion.div variants={getItemVariants()} className={`transform-gpu ${className}`}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
