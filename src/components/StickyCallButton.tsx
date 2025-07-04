import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCallButton = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button 
        size="lg" 
        className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg transition-shadow"
        onClick={() => window.open('tel:+919786223334', '_blank')}
      >
        <Phone className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default StickyCallButton;
