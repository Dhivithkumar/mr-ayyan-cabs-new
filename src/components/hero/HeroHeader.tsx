import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, ArrowRight, Home, Car, MapPin, Route, Star, HelpCircle, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../../assets/mr_ayyan_cabs_logo.png';
import { useSmoothScroll } from "../ui/SmoothScroll";

export const HeroHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const lenis = useSmoothScroll();

  // Scroll to hash target on location change or initial load
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          if (lenis) {
            lenis.scrollTo(element, { duration: 1.2 });
          } else {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [location, lenis]);

  // Prevent background scrolling when menu drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = "unset";
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = "unset";
      if (lenis) lenis.start();
    };
  }, [isMenuOpen, lenis]);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4 text-white" /> },
    { name: "Tirupur Cab Service", href: "/tirupur-cab-service", icon: <Car className="w-4 h-4 text-[#F5B800]" /> },
    { name: "Tirupur Taxi Service", href: "/tirupur-taxi-service", icon: <Car className="w-4 h-4 text-[#F5B800]" /> },
    { name: "Airport Taxi", href: "/tirupur-airport-taxi", icon: <Car className="w-4 h-4 text-sky-400" /> },
    { name: "Outstation Cab", href: "/tirupur-outstation-cab", icon: <Car className="w-4 h-4 text-emerald-400" /> },
    { name: "Services", href: "/#services", icon: <Car className="w-4 h-4 text-amber-400" /> },
    { name: "Fleets", href: "/#fleet", icon: <Car className="w-4 h-4 text-yellow-400" /> },
    { name: "Booking", href: "/#booking", icon: <Mail className="w-4 h-4 text-[#F5B800]" /> },
    { name: "Areas We Serve", href: "/#areas", icon: <MapPin className="w-4 h-4 text-amber-400" /> },
    { name: "Cab Routes", href: "/#routes", icon: <Route className="w-4 h-4 text-amber-400" /> },
    { name: "Reviews", href: "/#reviews", icon: <Star className="w-4 h-4 text-yellow-400" /> },
    { name: "FAQ", href: "/#faq", icon: <HelpCircle className="w-4 h-4 text-sky-400" /> },
    { name: "Contact", href: "/#contact", icon: <Phone className="w-4 h-4 text-emerald-400" /> }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false);

    // If it's a separate route (e.g. /tirupur-cab-service or /)
    if (!href.includes("#")) {
      e.preventDefault();
      navigate(href);
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.0 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // It's a hash section link like /#services or #services
    const hashIndex = href.indexOf("#");
    const targetPath = href.substring(0, hashIndex) || "/";
    const sectionId = href.substring(hashIndex + 1);

    if (location.pathname === targetPath || (targetPath === "/" && location.pathname === "/")) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        if (lenis) {
          lenis.scrollTo(element, { duration: 1.2 });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
        window.history.pushState(null, "", href);
      } else {
        navigate(href);
      }
    } else {
      e.preventDefault();
      navigate(href);
    }
  };

  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I would like to book a cab in Tirupur.");

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 py-2 sm:py-3 px-3 sm:px-6 border-b border-white/10 bg-black/70 backdrop-blur-lg transition-colors transition-shadow duration-300 text-white">
        <div className="w-full flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center gap-2.5 group focus:outline-none shrink-0">
            <img 
              src={logo} 
              alt="Mr Ayyan Cabs Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105 transform-gpu"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-black text-white leading-none tracking-tight uppercase font-heading">
              <span className="text-white">MR </span>
              <span className="text-[#F5B800]">AYYAN </span>
              <span className="text-white">CABS</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.slice(0, 7).map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs md:text-sm font-semibold text-gray-200 hover:text-[#F5B800] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F5B800] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Burger Menu Button Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="tel:+919786223334" 
              className="hidden sm:inline-flex items-center gap-2 bg-[#F5B800] hover:bg-[#e0a700] text-black font-extrabold text-xs px-4 py-2 rounded-full shadow-md transition-transform active:scale-95 transform-gpu font-heading"
            >
              <Phone className="w-3.5 h-3.5 fill-black" />
              <span>+91 97862 23334</span>
            </a>

            <button 
              className="w-10 h-10 bg-black/80 hover:bg-black border border-white/20 hover:border-[#F5B800] text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all transform-gpu focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-[#F5B800]" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Full Overlay Drawer Navigation Menu (Static Instant Rendering, Zero Animation Overhead) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto">
          
          {/* Header Bar inside Drawer */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 sm:mb-6">
            <a href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center gap-2">
              <img src={logo} alt="Mr Ayyan Cabs" className="w-10 h-10 object-contain" />
              <span className="text-xl font-black text-white font-heading">
                MR <span className="text-[#F5B800]">AYYAN</span> CABS
              </span>
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center focus:outline-none"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5 text-[#F5B800]" />
            </button>
          </div>

          {/* Navigation Links Grid */}
          <div className="max-w-4xl mx-auto w-full my-auto py-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 font-heading">
              Navigation Menu
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-amber-500/15 border border-white/10 hover:border-[#F5B800] text-gray-100 hover:text-[#F5B800] flex items-center justify-between text-sm sm:text-base font-bold transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#F5B800] group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Action CTAs */}
          <div className="max-w-4xl mx-auto w-full pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <a 
              href="tel:+919786223334"
              className="flex-1 bg-[#F5B800] hover:bg-[#e0a700] text-black font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg font-heading"
            >
              <Phone className="w-4 h-4 fill-black" /> Call +91 97862 23334
            </a>
            <a 
              href={`https://wa.me/919786223334?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg font-heading"
            >
              <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Booking
            </a>
          </div>

        </div>
      )}
    </>
  );
};

export default HeroHeader;

