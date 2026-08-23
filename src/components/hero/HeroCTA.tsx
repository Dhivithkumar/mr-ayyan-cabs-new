import { Phone, MessageCircle } from "lucide-react";

export const HeroCTA = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I would like to book a cab in Tirupur.");

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7 max-w-md">
      {/* Primary Call CTA */}
      <a 
        href="tel:+919786223334" 
        className="flex-1 inline-flex items-center justify-center gap-3 bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold text-sm sm:text-base px-6 py-4 rounded-xl gold-shadow transition-all hover:scale-[1.02] active:scale-98"
      >
        <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center">
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
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-3 bg-black/60 hover:bg-black/80 backdrop-blur-xl border border-white/20 hover:border-emerald-500/50 text-white font-bold text-sm sm:text-base px-5 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-98"
      >
        <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
          <MessageCircle className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] tracking-widest uppercase text-gray-300 font-bold">WHATSAPP</span>
          <span className="text-sm font-bold text-white font-heading">Chat with Us</span>
        </div>
      </a>
    </div>
  );
};

export default HeroCTA;
