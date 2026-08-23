import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "../components/SEOHead";
import { Phone, Home, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Non-existent route accessed:", location.pathname);
  }, [location.pathname]);

  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I would like to book a cab in Tirupur.");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <SEOHead
        title="Page Not Found | Mr Ayyan Cabs Tirupur"
        description="The page you are looking for does not exist. Return to Mr Ayyan Cabs homepage or call +91 97862 23334 to book a cab in Tirupur."
        canonicalUrl="https://mrayyancabs.com/404"
      />
      <div className="text-center max-w-md bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
        <span className="text-5xl font-black text-[#D4A017] block mb-2">404</span>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-sm text-gray-600 mb-6">
          The page you requested could not be found. Looking to book a cab in Tirupur?
        </p>

        <div className="flex flex-col gap-3">
          <a 
            href="/" 
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white font-bold py-3 px-5 rounded-xl text-sm transition-colors"
          >
            <Home className="w-4 h-4" /> Return to Homepage
          </a>
          <a 
            href="tel:+919786223334" 
            className="inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#b88910] text-black font-bold py-3 px-5 rounded-xl text-sm transition-colors"
          >
            <Phone className="w-4 h-4 fill-black" /> Call +91 97862 23334
          </a>
          <a 
            href={`https://wa.me/919786223334?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 rounded-xl text-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Booking
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
