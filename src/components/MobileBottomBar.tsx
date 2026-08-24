import { ChevronUp, Phone, Calendar, MessageCircle } from "lucide-react";

export const MobileBottomBar = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I would like to book a cab in Tirupur.");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const bookingElem = document.getElementById("booking");
    if (bookingElem) {
      e.preventDefault();
      bookingElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-2.5 left-1/2 -translate-x-1/2 z-50 sm:hidden w-[86%] max-w-[290px] flex flex-col items-center pointer-events-auto">
      
      {/* 1. TOP SCROLL TO TOP CHEVRON ARROW */}
      <button 
        onClick={scrollToTop}
        className="mb-0.5 text-white opacity-80 hover:opacity-100 transition-opacity focus:outline-none p-0.5 drop-shadow"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ChevronUp className="w-5 h-5 text-white stroke-[2.5]" />
      </button>

      {/* 2. FLOATING DARK CAPSULE BAR WITH VERTICAL DIVIDERS */}
      <div className="w-full bg-[#18191c]/95 backdrop-blur-xl border border-neutral-700/80 rounded-[18px] py-1.5 px-1 shadow-[0_6px_25px_rgba(0,0,0,0.85)]">
        <div className="grid grid-cols-3 divide-x divide-neutral-700/80 items-center w-full">
          
          {/* COLUMN 1: CALL */}
          <a
            href="tel:+919786223334"
            className="flex flex-col items-center justify-center px-0.5 active:scale-95 transition-transform"
            aria-label="Call Mr Ayyan Cabs"
          >
            <div className="w-8 h-8 rounded-full bg-[#f5a623] flex items-center justify-center shadow-md">
              <Phone className="w-4 h-4 fill-black text-black" />
            </div>
            <span className="text-[9px] font-extrabold text-white tracking-wider uppercase mt-1 font-heading">
              CALL
            </span>
          </a>

          {/* COLUMN 2: BOOK NOW */}
          <a
            href="#booking"
            onClick={scrollToBooking}
            className="flex flex-col items-center justify-center px-0.5 active:scale-95 transition-transform"
            aria-label="Book a Cab Now"
          >
            <div className="w-8 h-8 rounded-full bg-neutral-900/90 border border-neutral-600 flex items-center justify-center shadow-md">
              <Calendar className="w-4 h-4 text-[#f5a623]" />
            </div>
            <span className="text-[9px] font-extrabold text-white tracking-wider uppercase mt-1 font-heading">
              BOOK NOW
            </span>
          </a>

          {/* COLUMN 3: WHATSAPP */}
          <a
            href={`https://wa.me/919786223334?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center px-0.5 active:scale-95 transition-transform"
            aria-label="Contact Mr Ayyan Cabs on WhatsApp"
          >
            <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shadow-md">
              <MessageCircle className="w-4 h-4 fill-white text-white" />
            </div>
            <span className="text-[9px] font-extrabold text-white tracking-wider uppercase mt-1 font-heading">
              WHATSAPP
            </span>
          </a>

        </div>
      </div>

    </div>
  );
};

export default MobileBottomBar;
