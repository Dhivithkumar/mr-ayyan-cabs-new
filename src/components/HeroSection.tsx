import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Wifi, Camera, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from '../assets/mr_ayyan_cabs_logo.png';
import heroBg from '../assets/hero_background.jpg';
import heroBgMobile from '../assets/hero_background_mobile.jpg';

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Book Now", href: "#booking" },
    { name: "Fleet", href: "#fleet" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="relative flex flex-col bg-black overflow-hidden">
      
      {/* 1. DARK STICKY NAVBAR (SITS COMPLETELY ABOVE IMAGE) */}
      <header 
        className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-white/5 py-1 lg:py-1.5 shadow-xl"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-2 lg:gap-4 group">
            <img 
              src={logo} 
              alt="Mr. Ayyan Cabs Logo" 
              className="w-16 h-16 lg:w-28 lg:h-28 -my-2 lg:-my-6 object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105 relative z-10"
            />
            <div className="flex flex-col justify-center">
              <span className="text-xl lg:text-2xl font-black text-white tracking-tight leading-none group-hover:text-[#D4A017] transition-colors duration-300">
                Mr.Ayyan Cabs
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-2 text-gray-200 hover:text-[#D4A017] group`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-1/2 h-[2px] bg-[#D4A017] transition-all duration-300 ease-out transform -translate-x-1/2 ${
                    link.active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden relative z-50 p-2 -mr-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a] shadow-2xl overflow-hidden transition-all duration-300 ease-in-out border-t border-white/10 ${
            isMobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-bold text-gray-200 py-3 border-b border-white/5 hover:text-[#D4A017] hover:pl-2 transition-all duration-300 flex items-center justify-between"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
                <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* 2. RESPONSIVE HERO AREA */}
      <div className="relative flex-grow flex flex-col items-center lg:items-start justify-center pt-8 lg:pt-20 pb-8 lg:pb-24 min-h-[calc(100vh-88px)]">
        
        {/* Background - Starts strictly below navbar, NO zoom animation */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBgMobile} 
            alt="South Indian Temple Gopuram and Ayyanar Horse Statue at sunset with White Cab" 
            className="block lg:hidden w-full h-full object-cover object-[20%_top]"
          />
          <img 
            src={heroBg} 
            alt="South Indian Temple Gopuram and Ayyanar Horse Statue at sunset with White Cab" 
            className="hidden lg:block w-full h-full object-cover object-center"
          />
          {/* Responsive Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-black/10 to-[#0a0a0a]/90 lg:bg-gradient-to-l lg:from-black/90 lg:via-black/50 lg:to-transparent pointer-events-none"></div>
        </div>

        {/* Hero Content - Centered on Mobile, Right-Aligned on Desktop */}
        <div className="container mx-auto px-6 relative z-10 w-full flex-grow flex flex-col items-center lg:items-end justify-between lg:justify-center text-center lg:text-right mt-2 lg:mt-0 pb-4 lg:pb-0">
          
          <div className="max-w-xl lg:max-w-3xl flex flex-col items-center lg:items-end h-full w-full">
            
            {/* Solid Yellow Badge */}
            <div className="hidden lg:inline-block bg-[#F59E0B] text-black px-4 lg:px-5 py-1.5 rounded-full text-[11px] sm:text-xs lg:text-sm font-bold tracking-wide lg:tracking-wider mb-4 lg:mb-5">
              Your Guardian on the Road
            </div>

            {/* Spacer for mobile to push everything down to the bottom */}
            <div className="lg:hidden flex-grow min-h-[35vh]"></div>

            {/* Typography - Responsive styling */}
            <h1 className="font-sans text-[2.75rem] sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight drop-shadow-2xl mb-6 mt-auto lg:mt-0">
              <span className="lg:hidden text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Premium<br/><span className="text-[#f0d58e]">Cab Service</span>
              </span>
              <span className="hidden lg:inline">
                <span className="text-white">Inspired by Legacy,</span><br />
                {/* White on mobile, pale gold on desktop */}
                <span className="text-[#f0d58e]">Driven by Safety.</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="hidden lg:block text-sm sm:text-base lg:text-lg text-white/95 leading-snug lg:leading-relaxed max-w-[320px] sm:max-w-md lg:max-w-2xl font-medium drop-shadow-md mb-8 lg:mb-10">
              Experience South India's most reliable cab service. Blending ancient guardianship with modern comfort and premium perks.
            </p>

            {/* CTAs - Stacked on Mobile, Row on Desktop */}
            <div className="flex flex-col sm:flex-row lg:flex-row gap-3 lg:gap-4 w-full max-w-[280px] sm:max-w-sm lg:max-w-none mt-2 lg:mt-0 mb-6 lg:mb-8 mx-auto lg:mx-0 lg:ml-auto lg:justify-end">
              <Button 
                className="w-full lg:w-auto bg-gradient-to-r from-[#8b1c1c] to-[#6b1515] hover:from-[#7c1a1a] hover:to-[#5a1212] border border-[#a12828] text-white py-5 lg:px-10 lg:py-7 rounded-2xl text-base lg:text-lg font-bold shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-all duration-300"
                onClick={() => {
                  const el = document.getElementById('booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Your Ride
              </Button>
              <Button 
                variant="outline"
                className="w-full lg:w-auto bg-black/30 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border border-white/30 lg:border-white/50 hover:bg-white/10 text-white py-5 lg:px-10 lg:py-7 rounded-2xl text-base lg:text-lg font-semibold shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-all duration-300"
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Services
              </Button>
            </div>

            {/* Floating Icons Row - Placed under buttons */}
            <div className="relative z-10 w-full mt-4 lg:mt-6 mb-2 lg:mb-0">
              <div className="flex justify-between lg:justify-end lg:gap-16 items-start w-full max-w-[340px] sm:max-w-md lg:max-w-none mx-auto lg:mx-0 pr-0 lg:pr-2">
            
            <div className="flex flex-col items-center text-center gap-1.5 group cursor-pointer">
              <div className="animate-bounce lg:bg-white/10 p-1 lg:p-3 rounded-full lg:backdrop-blur-sm lg:border lg:border-white/20 transition-all duration-300 lg:group-hover:bg-white/20 lg:group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]" style={{ animationDuration: '3s' }}>
                <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-md lg:drop-shadow-none" />
              </div>
              <span className="text-[10px] sm:text-xs text-white font-bold drop-shadow-md tracking-wide mt-1 lg:mt-0">Free Wi-Fi</span>
            </div>
            
            <div className="flex flex-col items-center text-center gap-1.5 group cursor-pointer">
              <div className="animate-bounce lg:bg-white/10 p-1 lg:p-3 rounded-full lg:backdrop-blur-sm lg:border lg:border-white/20 transition-all duration-300 lg:group-hover:bg-white/20 lg:group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
                <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-md lg:drop-shadow-none" />
              </div>
              <span className="text-[10px] sm:text-xs text-white font-bold drop-shadow-md tracking-wide mt-1 lg:mt-0">Free Photoshoot</span>
              <span className="hidden lg:block text-[9px] sm:text-[10px] text-gray-300 font-medium italic -mt-1 drop-shadow-md">(tourist places)</span>
            </div>
            
            <div className="flex flex-col items-center text-center gap-1.5 group cursor-pointer">
              <div className="animate-bounce lg:bg-white/10 p-1 lg:p-3 rounded-full lg:backdrop-blur-sm lg:border lg:border-white/20 transition-all duration-300 lg:group-hover:bg-white/20 lg:group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-md lg:drop-shadow-none" />
              </div>
              <span className="text-[10px] sm:text-xs text-white font-bold drop-shadow-md tracking-wide mt-1 lg:mt-0">Free Gift</span>
              <span className="hidden lg:block text-[9px] sm:text-[10px] text-gray-300 font-medium italic -mt-1 drop-shadow-md">(long trips)</span>
            </div>
            
              </div>
            </div>

          </div>
        </div>

      </div>
      
    </div>
  );
};

export default HeroSection;