import HeroHeader from "./hero/HeroHeader";
import LocationBadge from "./hero/LocationBadge";
import HeroCTA from "./hero/HeroCTA";
import TrustStrip from "./hero/TrustStrip";
import FreeBenefits from "./hero/FreeBenefits";
import heroBg from '../assets/hero_background.jpg';
import heroBgMobile from '../assets/hero_background_mobile.jpg';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col bg-[#0a0a0a] text-white font-sans">
      
      {/* 1. MINIMAL TRANSPARENT HEADER */}
      <HeroHeader />

      {/* 2. MAIN HERO CONTAINER WITH BACKGROUND (FULL VIEWPORT HEIGHT COVERAGE) */}
      <div className="relative min-h-screen sm:min-h-[90vh] flex flex-col justify-between pt-20 sm:pt-24 md:pt-28 pb-20 lg:pb-20 overflow-hidden bg-[#0a0a0a]">
        
        {/* Background Image Setup: Deity, Horse, Cab & Sunset visible */}
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
            className="hidden sm:block w-full h-full object-cover object-[20%_center] lg:object-[15%_center]"
            loading="eager"
          />
          {/* Responsive Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-black/25 to-transparent sm:bg-gradient-to-l sm:from-[#0a0a0a]/85 sm:via-black/40 sm:to-transparent pointer-events-none"></div>
        </div>

        {/* 3. HERO CONTENT */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 my-auto pt-16 sm:pt-4">
          <div className="max-w-xl text-right ml-auto flex flex-col items-end">
            
            {/* Main H1 Headline - Mobile & Desktop aligned right with matching design */}
            <h1 className="block sm:hidden text-4xl font-black tracking-tight leading-[1.08] mb-2 text-white uppercase drop-shadow-md font-heading text-right">
              <span className="text-white">PREMIUM</span>
              <br />
              <span className="text-[#F5B800]">CAB SERVICE</span>
              <br />
              <span className="text-white">IN TIRUPUR</span>
            </h1>

            <h1 className="hidden sm:block text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-2 text-white uppercase drop-shadow-md text-right font-heading">
              <span className="text-white">PREMIUM</span>
              <br />
              <span className="text-[#F5B800]">CAB SERVICE</span>
              <br />
              <span className="text-white">IN TIRUPUR</span>
            </h1>

            {/* Accent Underline Bar */}
            <div className="w-12 h-1 bg-[#F5B800] rounded-full my-2.5 ml-auto"></div>

            {/* Supporting Text */}
            <p className="text-base sm:text-base md:text-lg text-gray-200 font-medium leading-relaxed mb-3 max-w-md drop-shadow text-right">
              Local, Airport &amp; Outstation<br className="block sm:hidden" /> Travel Made Easy
            </p>

            {/* Location Pill / Badge */}
            <LocationBadge />

            {/* Free Benefits */}
            <div className="w-full">
              <FreeBenefits />
            </div>

            {/* Desktop CTAs & Trust Strip - Aligned Right */}
            <div className="hidden sm:flex flex-col items-end ml-auto w-full max-w-md gap-3">
              <HeroCTA />
              <TrustStrip />
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default HeroSection;