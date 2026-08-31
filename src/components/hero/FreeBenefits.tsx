import { Wifi, Camera, Gift } from "lucide-react";

export const FreeBenefits = () => {
  return (
    <div className="relative z-20 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border-t border-b border-amber-500/20 py-4 sm:py-6 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#F5B800] font-heading block">
              COMPLIMENTARY TRAVEL PERKS
            </span>
            <span className="text-sm sm:text-lg font-extrabold text-white font-heading">
              Enjoy More With Every Ride
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-8 text-center w-full sm:w-auto">
            
            {/* Free Wi-Fi */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/60 rounded-2xl border border-amber-400/40 flex items-center justify-center mb-1 text-[#F5B800] shadow-md group-hover:scale-105 transition-transform">
                <Wifi className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[9px] sm:text-xs font-extrabold text-white uppercase tracking-wider font-heading">
                FREE WI-FI
              </span>
            </div>

            {/* Free Photo Shoots */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/60 rounded-2xl border border-amber-400/40 flex items-center justify-center mb-1 text-[#F5B800] shadow-md group-hover:scale-105 transition-transform">
                <Camera className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[9px] sm:text-xs font-extrabold text-white uppercase tracking-wider font-heading">
                FREE PHOTOS
              </span>
            </div>

            {/* Free Gifts */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/60 rounded-2xl border border-amber-400/40 flex items-center justify-center mb-1 text-[#F5B800] shadow-md group-hover:scale-105 transition-transform">
                <Gift className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[9px] sm:text-xs font-extrabold text-white uppercase tracking-wider font-heading">
                FREE GIFTS
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FreeBenefits;
