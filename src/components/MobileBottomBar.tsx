import { PhoneCall, Car, MessageCircle } from "lucide-react";

export const MobileBottomBar = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I would like to book a cab in Tirupur.");

  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const bookingElem = document.getElementById("booking");
    if (bookingElem) {
      e.preventDefault();
      bookingElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#09090b]/95 backdrop-blur-2xl border-t border-white/15 py-2.5 px-4 sm:hidden shadow-[0_-6px_25px_rgba(0,0,0,0.95)]">
      <div className="grid grid-cols-3 gap-2 items-center max-w-xs mx-auto">
        
        {/* 1. CALL ACTION (LEFT) */}
        <a
          href="tel:+919786223334"
          className="flex flex-col items-center justify-center group active:scale-95 transition-transform"
          aria-label="Call Mr Ayyan Cabs"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#F5B800] to-[#c79400] text-black flex items-center justify-center shadow-[0_0_12px_rgba(245,184,0,0.4)] border border-amber-300/40">
            <PhoneCall className="w-5 h-5 fill-black text-black" />
          </div>
          <span className="text-[10px] font-extrabold tracking-widest text-[#F5B800] uppercase mt-1 font-heading">
            CALL
          </span>
        </a>

        {/* 2. BOOK ACTION (CENTRE) */}
        <a
          href="#booking"
          onClick={scrollToBooking}
          className="flex flex-col items-center justify-center group -mt-3 active:scale-95 transition-transform"
          aria-label="Book a Cab Now"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#FFD700] via-[#F5B800] to-[#ffba08] text-black flex items-center justify-center shadow-[0_4px_20px_rgba(245,184,0,0.65)] border-2 border-black">
            <Car className="w-6 h-6 text-black stroke-[2.5]" />
          </div>
          <span className="text-[11px] font-black tracking-widest text-white uppercase mt-1 font-heading drop-shadow">
            BOOK NOW
          </span>
        </a>

        {/* 3. WHATSAPP ACTION (RIGHT) */}
        <a
          href={`https://wa.me/919786223334?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center group active:scale-95 transition-transform"
          aria-label="Contact Mr Ayyan Cabs on WhatsApp"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-[0_0_12px_rgba(37,211,102,0.4)] border border-emerald-300/30">
            <MessageCircle className="w-5 h-5 fill-white text-white" />
          </div>
          <span className="text-[10px] font-extrabold tracking-widest text-[#25D366] uppercase mt-1 font-heading">
            WHATSAPP
          </span>
        </a>

      </div>
    </div>
  );
};

export default MobileBottomBar;
