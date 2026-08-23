import { useState } from "react";
import { Menu, X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import logo from '../../assets/mr_ayyan_cabs_logo.png';

export const HeroHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Airport Taxi", href: "/tirupur-airport-taxi" },
    { name: "Outstation", href: "/tirupur-outstation-cab" },
    { name: "Fleet", href: "/#fleet" },
    { name: "Reviews", href: "/#reviews" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" }
  ];

  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I would like to book a cab in Tirupur.");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2.5 px-4 md:px-8 border-b border-white/10 bg-black/50 backdrop-blur-xl transition-all text-white">
      <div className="container mx-auto flex items-center justify-between w-full">
        
        {/* Logo & Brand Identity (ALIGNED LEFT) */}
        <a href="/" className="flex items-center gap-2 group focus:outline-none shrink-0">
          <img 
            src={logo} 
            alt="Mr Ayyan Cabs Logo" 
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-base sm:text-xl font-black text-white leading-none tracking-tight uppercase font-heading">
            <span className="text-white">MR </span>
            <span className="text-[#F5B800]">AYYAN </span>
            <span className="text-white">CABS</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs md:text-sm font-semibold text-gray-200 hover:text-[#F5B800] transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F5B800] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Header Right Action Buttons (ALIGNED RIGHT) */}
        <div className="flex items-center gap-2 shrink-0 ml-auto lg:ml-0">
          {/* Phone Call Quick Button */}
          <a 
            href="tel:+919786223334" 
            className="w-9 h-9 sm:w-10 sm:h-10 bg-black/60 hover:bg-black/80 border border-white/20 hover:border-[#F5B800]/60 text-[#F5B800] rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all"
            aria-label="Call Mr Ayyan Cabs at +91 97862 23334"
            title="Call +91 97862 23334"
          >
            <Phone className="w-4 h-4 fill-[#F5B800]" />
          </a>

          {/* Menu Drawer Toggle */}
          <button 
            className="w-9 h-9 sm:w-10 sm:h-10 bg-black/60 hover:bg-black/80 border border-white/20 hover:border-white/40 text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 text-[#F5B800]" />
            ) : (
              <Menu className="w-4 h-4 text-white" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer - Dark Theme */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0c0c0c]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1 pb-1 border-b border-white/10">
            Navigation Menu
          </div>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold text-gray-200 py-3 px-2 rounded-lg hover:bg-white/5 hover:text-[#F5B800] flex items-center justify-between transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>{link.name}</span>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2.5">
            <a 
              href="tel:+919786223334"
              className="w-full bg-[#F5B800] hover:bg-[#e0a700] text-black font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg active:scale-98 transition-transform"
            >
              <Phone className="w-4 h-4 fill-black" /> Call +91 97862 23334
            </a>
            <a 
              href={`https://wa.me/919786223334?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg active:scale-98 transition-transform"
            >
              <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Booking
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeroHeader;
