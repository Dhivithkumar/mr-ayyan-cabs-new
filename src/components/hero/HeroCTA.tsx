import { Phone, MessageCircle } from "lucide-react";
import { trackCallClick, trackWhatsAppClick } from "@/utils/analytics";

export const HeroCTA = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I would like to book a cab in Tirupur.");

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4 max-w-md w-full ml-auto justify-end">
      {/* Primary Call CTA */}
      <a 
        href="tel:+919786223334" 
        onClick={() => trackCallClick()}
        className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 via-[#F5B800] to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 group"
      >
        <div className="w-8 h-8 bg-black/15 group-hover:bg-black/25 rounded-full flex items-center justify-center transition-colors">
          <Phone className="w-4 h-4 fill-black" />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] tracking-widest uppercase text-black/80 font-black">CALL NOW</span>
          <span className="text-sm sm:text-base font-extrabold font-heading">+91 97862 23334</span>
        </div>
      </a>

      {/* Secondary WhatsApp CTA */}
      <a 
        href={`https://wa.me/919786223334?text=${whatsappMessage}`}
        onClick={() => trackWhatsAppClick()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-3 bg-emerald-950/40 hover:bg-emerald-900/60 backdrop-blur-xl border border-emerald-500/30 hover:border-emerald-400/60 text-white font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 group"
      >
        <div className="w-8 h-8 bg-emerald-500/20 group-hover:bg-emerald-500/30 rounded-full flex items-center justify-center border border-emerald-500/40 transition-colors">
          <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] tracking-widest uppercase text-emerald-300/90 font-bold">WHATSAPP</span>
          <span className="text-sm font-bold text-white font-heading">Chat with Us</span>
        </div>
      </a>
    </div>
  );
};

export default HeroCTA;
