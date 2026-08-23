import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyWhatsApp = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I want to book a cab in Tirupur.");

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
      <Button 
        size="lg" 
        className="rounded-full w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl transition-transform hover:scale-105"
        onClick={() => window.open(`https://wa.me/919786223334?text=${whatsappMessage}`, '_blank')}
        aria-label="Chat with Mr Ayyan Cabs on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default StickyWhatsApp;
