import { Wifi, Camera, Gift } from "lucide-react";

export const FreeBenefits = () => {
  return (
    <>
      {/* MOBILE FREE BENEFITS (ANIMATED, COMPACT SIZE) */}
      <div className="block sm:hidden relative z-20 container mx-auto px-2 mb-3 mt-1">
        <div className="grid grid-cols-3 gap-1.5 text-center py-1 relative items-start">
          
          {/* FREE WIFI */}
          <div className="flex flex-col items-center justify-start group">
            <div className="w-9 h-9 rounded-full border border-[#F5B800]/50 bg-black/50 backdrop-blur-md flex items-center justify-center mb-1 text-[#F5B800] shadow-md animate-bounce-slow transition-transform group-hover:scale-110">
              <Wifi className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-extrabold text-white uppercase tracking-wider block font-heading drop-shadow">
              FREE WIFI
            </span>
          </div>

          {/* FREE PHOTO SHOOTS */}
          <div className="flex flex-col items-center justify-start group">
            <div className="w-9 h-9 rounded-full border border-[#F5B800]/50 bg-black/50 backdrop-blur-md flex items-center justify-center mb-1 text-[#F5B800] shadow-md animate-bounce-slow [animation-delay:200ms] transition-transform group-hover:scale-110">
              <Camera className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-extrabold text-white uppercase tracking-wider block font-heading drop-shadow leading-tight">
              FREE PHOTO SHOOTS
            </span>
            <span className="text-[7.5px] font-semibold text-amber-300/90 leading-tight mt-0.5">
              (Tourist place - advanced booking only)
            </span>
          </div>

          {/* FREE GIFTS */}
          <div className="flex flex-col items-center justify-start group">
            <div className="w-9 h-9 rounded-full border border-[#F5B800]/50 bg-black/50 backdrop-blur-md flex items-center justify-center mb-1 text-[#F5B800] shadow-md animate-bounce-slow [animation-delay:400ms] transition-transform group-hover:scale-110">
              <Gift className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-extrabold text-white uppercase tracking-wider block font-heading drop-shadow leading-tight">
              FREE GIFTS
            </span>
            {/* <span className="text-[7.5px] font-semibold text-amber-300/90 leading-tight mt-0.5">
              (Tourist place - advanced booking only)
            </span> */}
          </div>

        </div>
      </div>

      {/* DESKTOP FREE BENEFITS - ELEGANT TRANSPARENT LAYOUT */}
      <div className="hidden sm:block w-full max-w-lg ml-auto mb-6">
        <div className="grid grid-cols-3 gap-3 text-center items-start">
          
          {/* Free Wi-Fi */}
          <div className="flex flex-col items-center justify-start group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center mb-1.5 text-[#F5B800] group-hover:bg-[#F5B800] group-hover:text-black group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-500/30 transition-all duration-300">
              <Wifi className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold text-[#F5B800] uppercase tracking-wider block font-heading drop-shadow-sm">FREE</span>
            <span className="text-xs font-black text-white leading-tight font-heading drop-shadow-md">WI-FI</span>
          </div>

          {/* Free Photo Shoots */}
          <div className="flex flex-col items-center justify-start group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center mb-1.5 text-[#F5B800] group-hover:bg-[#F5B800] group-hover:text-black group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-500/30 transition-all duration-300">
              <Camera className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold text-[#F5B800] uppercase tracking-wider block font-heading drop-shadow-sm">FREE</span>
            <span className="text-xs font-black text-white leading-tight font-heading drop-shadow-md">PHOTO SHOOTS</span>
            <span className="text-[9px] font-medium text-amber-300/90 leading-tight mt-1 px-1">
              (Tourist place - advanced booking only)
            </span>
          </div>

          {/* Free Gifts */}
          <div className="flex flex-col items-center justify-start group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center mb-1.5 text-[#F5B800] group-hover:bg-[#F5B800] group-hover:text-black group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-500/30 transition-all duration-300">
              <Gift className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold text-[#F5B800] uppercase tracking-wider block font-heading drop-shadow-sm">FREE</span>
            <span className="text-xs font-black text-white leading-tight font-heading drop-shadow-md">GIFTS</span>
            <span className="text-[9px] font-medium text-amber-300/90 leading-tight mt-1 px-1">
              (Tourist place - advanced booking only)
            </span>
          </div>

        </div>
      </div>
    </>
  );
};

export default FreeBenefits;
