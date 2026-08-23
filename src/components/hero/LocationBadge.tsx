import { MapPin } from "lucide-react";

export const LocationBadge = () => {
  return (
    <div className="flex justify-end sm:justify-start w-full">
      <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-xs font-bold text-white tracking-wider uppercase mb-5 shadow-lg">
        <MapPin className="w-3.5 h-3.5 text-[#F5B800]" />
        <span className="text-gray-100 font-extrabold">TIRUPUR'S TRUSTED CAB SERVICE</span>
      </div>
    </div>
  );
};

export default LocationBadge;
