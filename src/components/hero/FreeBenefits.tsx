import { Wifi, Camera, Gift } from "lucide-react";

export const FreeBenefits = () => {
  return (
    <>
      {/* MOBILE FREE BENEFITS (ANIMATED, NO SEPARATING LINES, COMPACT SIZE) */}
      <div className="block sm:hidden relative z-20 container mx-auto px-2 mb-3 mt-1">
        <div className="grid grid-cols-3 gap-2 text-center py-1 relative">
          
          {/* FREE WIFI */}
          <div className="flex flex-col items-center justify-center group">
            <div className="w-9 h-9 rounded-full border border-[#F5B800]/50 bg-black/50 backdrop-blur-md flex items-center justify-center mb-1 text-[#F5B800] shadow-md animate-bounce-slow transition-transform group-hover:scale-110">
              <Wifi className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-extrabold text-white uppercase tracking-wider block font-heading drop-shadow">
              FREE WIFI
            </span>
          </div>

          {/* FREE PHOTO SHOOTS */}
          <div className="flex flex-col items-center justify-center group">
            <div className="w-9 h-9 rounded-full border border-[#F5B800]/50 bg-black/50 backdrop-blur-md flex items-center justify-center mb-1 text-[#F5B800] shadow-md animate-bounce-slow [animation-delay:200ms] transition-transform group-hover:scale-110">
              <Camera className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-extrabold text-white uppercase tracking-wider block font-heading drop-shadow">
              FREE PHOTO SHOOTS
            </span>
          </div>

          {/* FREE GIFTS */}
          <div className="flex flex-col items-center justify-center group">
            <div className="w-9 h-9 rounded-full border border-[#F5B800]/50 bg-black/50 backdrop-blur-md flex items-center justify-center mb-1 text-[#F5B800] shadow-md animate-bounce-slow [animation-delay:400ms] transition-transform group-hover:scale-110">
              <Gift className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-extrabold text-white uppercase tracking-wider block font-heading drop-shadow">
              FREE GIFTS
            </span>
          </div>

        </div>
      </div>

      {/* DESKTOP FREE BENEFITS - SLEEK RIGHT-ALIGNED GLASS STRIP */}
      <div className="hidden sm:block w-full max-w-md ml-auto mb-5">
        <div className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-3.5 shadow-xl">
          <div className="grid grid-cols-3 gap-2 divide-x divide-white/10 text-center">
            
            {/* Free Wi-Fi */}
            <div className="px-1 flex flex-col items-center justify-center group">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center mb-1 text-[#F5B800] group-hover:scale-110 transition-transform">
                <Wifi className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-extrabold text-[#F5B800] uppercase tracking-wider block font-heading">FREE</span>
              <span className="text-xs font-black text-white leading-tight font-heading">WI-FI</span>
            </div>

            {/* Free Photo Shoots */}
            <div className="px-1 flex flex-col items-center justify-center group">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center mb-1 text-[#F5B800] group-hover:scale-110 transition-transform">
                <Camera className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-extrabold text-[#F5B800] uppercase tracking-wider block font-heading">FREE</span>
              <span className="text-xs font-black text-white leading-tight font-heading">PHOTO SHOOTS</span>
            </div>

            {/* Free Gifts */}
            <div className="px-1 flex flex-col items-center justify-center group">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center mb-1 text-[#F5B800] group-hover:scale-110 transition-transform">
                <Gift className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-extrabold text-[#F5B800] uppercase tracking-wider block font-heading">FREE</span>
              <span className="text-xs font-black text-white leading-tight font-heading">GIFTS</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default FreeBenefits;
