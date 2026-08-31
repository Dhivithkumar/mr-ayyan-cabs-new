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

      {/* DESKTOP FREE BENEFITS */}
      <div className="hidden sm:block relative z-20 container mx-auto px-4 md:px-8 -mt-8 sm:-mt-10 mb-6">
        <div className="bg-white text-gray-900 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 p-5 sm:p-7 max-w-4xl mx-auto">
          
          <div className="text-center mb-4">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#8b1c1c] bg-red-50 px-4 py-1.5 rounded-full border border-red-100 inline-block font-heading">
              ENJOY MORE WITH US
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-6 divide-x divide-gray-100 text-center">
            
            {/* Free Wi-Fi */}
            <div className="px-2 flex flex-col items-center justify-center group">
              <div className="w-11 h-11 sm:w-14 sm:h-14 bg-amber-50 rounded-2xl border border-amber-100 flex items-center justify-center mb-2 text-[#F59E0B] group-hover:scale-110 transition-transform">
                <Wifi className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <span className="text-[10px] sm:text-xs font-extrabold text-amber-700 uppercase tracking-widest block">FREE</span>
              <span className="text-xs sm:text-base font-extrabold text-gray-900 leading-tight font-heading">WI-FI</span>
            </div>

            {/* Free Photo Shoots */}
            <div className="px-2 flex flex-col items-center justify-center group">
              <div className="w-11 h-11 sm:w-14 sm:h-14 bg-amber-50 rounded-2xl border border-amber-100 flex items-center justify-center mb-2 text-[#F59E0B] group-hover:scale-110 transition-transform">
                <Camera className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <span className="text-[10px] sm:text-xs font-extrabold text-amber-700 uppercase tracking-widest block">FREE</span>
              <span className="text-xs sm:text-base font-extrabold text-gray-900 leading-tight font-heading">PHOTO SHOOTS</span>
            </div>

            {/* Free Gifts */}
            <div className="px-2 flex flex-col items-center justify-center group">
              <div className="w-11 h-11 sm:w-14 sm:h-14 bg-amber-50 rounded-2xl border border-amber-100 flex items-center justify-center mb-2 text-[#F59E0B] group-hover:scale-110 transition-transform">
                <Gift className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <span className="text-[10px] sm:text-xs font-extrabold text-amber-700 uppercase tracking-widest block">FREE</span>
              <span className="text-xs sm:text-base font-extrabold text-gray-900 leading-tight font-heading">GIFTS</span>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default FreeBenefits;
