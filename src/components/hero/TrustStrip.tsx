import { Check } from "lucide-react";

export const TrustStrip = () => {
  const trustItems = [
    "Safe & Reliable",
    "On Time Service",
    "Well Maintained Cars",
    "24/7 Support"
  ];

  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3 max-w-md w-full ml-auto shadow-lg">
      <div className="grid grid-cols-2 gap-2 text-xs text-gray-200 font-semibold">
        {trustItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 group">
            <div className="w-4 h-4 rounded-full bg-amber-500/15 border border-amber-400/40 flex items-center justify-center shrink-0 group-hover:border-amber-400 group-hover:scale-110 transition-all">
              <Check className="w-2.5 h-2.5 text-[#F5B800]" />
            </div>
            <span className="truncate text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustStrip;
