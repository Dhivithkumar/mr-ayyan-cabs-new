import { motion } from "framer-motion";
import HeroHeader from "./hero/HeroHeader";
import LocationBadge from "./hero/LocationBadge";
import HeroCTA from "./hero/HeroCTA";
import TrustStrip from "./hero/TrustStrip";
import FreeBenefits from "./hero/FreeBenefits";
import heroBg from '../assets/hero_background.jpg';
import heroBgMobile from '../assets/hero_background_mobile.jpg';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col bg-[#0a0a0a] text-white overflow-hidden font-sans">
      
      {/* 1. MINIMAL TRANSPARENT HEADER */}
      <HeroHeader />

      {/* 2. MAIN HERO CONTAINER WITH BACKGROUND */}
      <div className="relative min-h-[85vh] sm:min-h-[88vh] flex flex-col justify-between pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-hidden bg-[#0a0a0a]">
        
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBgMobile} 
            alt="Mr Ayyan Cabs Tirupur Cab and Taxi Service Background" 
            className="block sm:hidden w-full h-full object-cover object-center"
            loading="eager"
          />
          <img 
            src={heroBg} 
            alt="Mr Ayyan Cabs Tirupur Cab and Taxi Service Background" 
            className="hidden sm:block w-full h-full object-cover object-[75%_center] lg:object-[85%_center]"
            loading="eager"
          />
          {/* Dark Overlay for Pristine Contrast & Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-black/60 sm:bg-gradient-to-r sm:from-[#0a0a0a]/90 sm:via-black/50 sm:to-transparent pointer-events-none"></div>
        </div>

        {/* 3. HERO CONTENT - LEFT TO RIGHT ANIMATION ON WINDOWS/DESKTOP */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 my-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-left flex flex-col items-start"
          >
            
            {/* Unified Clean Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-3 text-white uppercase drop-shadow-lg font-heading text-left">
              PREMIUM <span className="text-[#F5B800]">CAB SERVICE</span> IN TIRUPUR
            </h1>

            {/* Accent Underline Bar */}
            <div className="w-12 sm:w-16 h-1 bg-[#F5B800] rounded-full mb-3"></div>

            {/* Supporting Sub-text */}
            <p className="text-sm sm:text-base md:text-lg text-gray-200 font-semibold leading-relaxed mb-4 max-w-lg text-left drop-shadow">
              Local City Rides, Airport Transfers &amp; Outstation Cab Packages
            </p>

            {/* Location Pill / Badge */}
            <div className="mb-5">
              <LocationBadge />
            </div>

            {/* Hero CTAs (Call Now + WhatsApp) */}
            <div className="w-full max-w-md mb-4">
              <HeroCTA />
            </div>

            {/* Trust Rating Strip */}
            <div className="w-full">
              <TrustStrip />
            </div>

          </motion.div>
        </div>

      </div>

      {/* 4. FREE BENEFITS STRIP */}
      <FreeBenefits />

    </div>
  );
};

export default HeroSection;