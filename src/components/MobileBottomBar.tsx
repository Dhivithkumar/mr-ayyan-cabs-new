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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 py-1 px-2 sm:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.9)]">
      <div className="grid grid-cols-3 gap-1 items-center max-w-[260px] mx-auto">
        
        {/* 1. CALL ACTION (LEFT) */}
        <a
          href="tel:+919786223334"
          className="flex flex-col items-center justify-center group py-0.5"
          aria-label="Call Mr Ayyan Cabs"
        >
          <div className="w-8 h-8 rounded-full bg-black/80 border border-[#F5B800] text-[#F5B800] flex items-center justify-center shadow-sm active:scale-90 transition-transform">
            <PhoneCall className="w-3.5 h-3.5 fill-[#F5B800]" />
          </div>
          <span className="text-[8px] font-black tracking-wider text-white uppercase mt-0.5 font-heading">
            CALL
          </span>
        </a>

        {/* 2. BOOK ACTION (CENTRE) */}
        <a
          href="#booking"
          onClick={scrollToBooking}
          className="flex flex-col items-center justify-center group -mt-2"
          aria-label="Book a Cab Now"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F5B800] via-[#ffd666] to-[#F5B800] text-black flex items-center justify-center shadow-[0_3px_14px_rgba(245,184,0,0.5)] border-2 border-black active:scale-90 transition-transform">
            <Car className="w-4 h-4 text-black stroke-[2.5]" />
          </div>
          <span className="text-[8px] font-black tracking-wider text-[#F5B800] uppercase mt-0.5 font-heading">
            BOOK
          </span>
        </a>

        {/* 3. WHATSAPP ACTION (RIGHT) */}
        <a
          href={`https://wa.me/919786223334?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center group py-0.5"
          aria-label="Contact Mr Ayyan Cabs on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm active:scale-90 transition-transform">
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
          </div>
          <span className="text-[8px] font-black tracking-wider text-white uppercase mt-0.5 font-heading">
            WHATSAPP
          </span>
        </a>

      </div>
    </div>
  );
};

export default MobileBottomBar;
