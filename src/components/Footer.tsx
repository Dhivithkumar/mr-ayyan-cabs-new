
import { Phone, MessageCircle, Instagram, Car, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-float">
              <Car className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-tamil text-primary">Mr Ayyan Cabs</h3>
          </div>
          <p className="text-gray-400 mb-6">
            Serving Tirupur with trust, tradition, and modern comfort
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="sm" onClick={() => window.open('tel:+919786223334', '_blank')}>
              <Phone className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => window.open('https://wa.me/919786223334', '_blank')}>
              <MessageCircle className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => window.open('https://instagram.com/mrayyan.cabs', '_blank')}>
              <Instagram className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => window.open('https://facebook.com/mrayyancabs', '_blank')}>
              <Facebook className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => window.open('https://youtube.com/@mrayyancabs', '_blank')}>
              <Youtube className="w-5 h-5" />
            </Button>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 font-tamil">
              © 2025 Mr Ayyan Cabs - மிஸ்டர் அய்யன் கேப்ஸ் | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
