import { Check } from "lucide-react";

export const TrustStrip = () => {
  const trustItems = [
    "Safe & Reliable",
    "On Time Service",
    "Well Maintained Cars",
    "24/7 Support"
  ];

  return (
    <div className="bg-black/60 backdrop-blur-xl border border-white/15 rounded-2xl p-3.5 max-w-md w-full ml-auto shadow-xl">
      <div className="grid grid-cols-2 gap-2.5 text-xs text-gray-200 font-semibold">
        {trustItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-[#F59E0B]" />
            </div>
            <span className="truncate">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustStrip;
