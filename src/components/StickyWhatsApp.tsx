
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyWhatsApp = () => {
  const whatsappMessage = "Hi ! Mr Ayyan Cabs . I want To Book a Cab . Can you Help me?";
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        size="lg" 
        className="rounded-full w-14 h-14 bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => window.open(`https://wa.me/919786223334?text=${encodedMessage}`, '_blank')}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default StickyWhatsApp;
