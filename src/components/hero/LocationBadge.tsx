import { MapPin } from "lucide-react";

export const LocationBadge = () => {
  return (
    <div className="flex justify-end w-full">
      <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-amber-400/30 px-4 py-1.5 rounded-full text-xs font-bold text-white tracking-wider uppercase mb-5 shadow-lg shadow-black/40">
        <MapPin className="w-3.5 h-3.5 text-[#F5B800] animate-pulse" />
        <span className="text-gray-100 font-extrabold">TIRUPUR'S TRUSTED CAB SERVICE</span>
      </div>
    </div>
  );
};

export default LocationBadge;
