import { Phone, MessageCircle, Instagram, Facebook, Youtube, MapPin } from "lucide-react";
import logo from '../assets/mr_ayyan_cabs_logo.png';
import { trackCallClick, trackWhatsAppClick, trackBookingClick } from "@/utils/analytics";

const Footer = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I want to inquire about booking a cab.");

  return (
    <footer className="bg-[#0a0a0a] text-gray-300 pt-16 pb-24 sm:pb-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Mr Ayyan Cabs Tirupur" 
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-black text-white leading-none">Mr Ayyan Cabs</span>
                <span className="text-xs text-amber-400 font-medium">Tirupur Cab &amp; Taxi Service</span>
                <span className="text-[11px] text-gray-400 mt-0.5">Owned by Rajapandi</span>
              </div>
            </a>
            <p className="text-xs text-gray-400 leading-relaxed">
              Providing reliable local taxi booking, airport pickup/drop, and outstation cab rides across Tirupur and Tamil Nadu.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Tirupur, Tamil Nadu, India - 641603</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="/#services" className="hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="/tirupur-airport-taxi" className="hover:text-amber-400 transition-colors">Airport Taxi</a></li>
              <li><a href="/tirupur-outstation-cab" className="hover:text-amber-400 transition-colors">Outstation Cabs</a></li>
              <li><a href="/#fleet" className="hover:text-amber-400 transition-colors">Vehicle Fleet</a></li>
              <li><a href="/#faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
              <li><a href="/#contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Dedicated SEO Landing Pages */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Cab Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/tirupur-cab-service" className="hover:text-amber-400 transition-colors">
                  Tirupur Cab Service
                </a>
              </li>
              <li>
                <a href="/tirupur-taxi-service" className="hover:text-amber-400 transition-colors">
                  Tirupur Taxi Service
                </a>
              </li>
              <li>
                <a href="/tirupur-airport-taxi" className="hover:text-amber-400 transition-colors">
                  Tirupur Airport Taxi
                </a>
              </li>
              <li>
                <a href="/tirupur-outstation-cab" className="hover:text-amber-400 transition-colors">
                  Tirupur Outstation Cab
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Contact &amp; Book
            </h4>
            <div className="space-y-3 mb-4">
              <a 
                href="tel:+919786223334" 
                onClick={() => trackCallClick()}
                className="flex items-center gap-2 text-xs text-amber-400 hover:underline font-bold"
              >
                <Phone className="w-4 h-4 fill-amber-400" /> +91 97862 23334
              </a>
              <a 
                href={`https://wa.me/919786223334?text=${whatsappMessage}`}
                onClick={() => trackWhatsAppClick()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-emerald-400 hover:underline font-bold"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Booking
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/mrayyan.cabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/mrayyan.cabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com/@mrayyancabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-500 space-y-1.5">
          <p>© {new Date().getFullYear()} Mr Ayyan Cabs - மிஸ்டர் அய்யன் கேப்ஸ் | Tirupur, Tamil Nadu. All rights reserved.</p>
          <p className="text-gray-400 font-medium">Owned by Rajapandi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
