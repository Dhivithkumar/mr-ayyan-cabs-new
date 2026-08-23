import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCallButton = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 hidden sm:block">
      <Button 
        size="lg" 
        className="rounded-full w-14 h-14 bg-[#D4A017] hover:bg-[#b88910] text-black shadow-xl transition-transform hover:scale-105"
        onClick={() => window.open('tel:+919786223334', '_self')}
        aria-label="Call Mr Ayyan Cabs"
      >
        <Phone className="w-6 h-6 fill-black" />
      </Button>
    </div>
  );
};

export default StickyCallButton;
