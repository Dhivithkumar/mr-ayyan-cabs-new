import { Shield, Heart, Zap, Users } from "lucide-react";

const BlessingsSection = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border-t border-amber-100 relative overflow-hidden">
      <div className="container mx-auto max-w-lg">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-amber-200 text-center">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-red-900 mb-1 font-serif">
              அய்யனார் ஆசீர்வாதத்துடன்
            </h2>
            <p className="text-xs sm:text-sm font-bold text-red-800 tracking-wider uppercase">
              With Lord Ayyanar's Blessings
            </p>
            <p className="text-xs text-gray-600 mt-2 max-w-sm mx-auto">
              Rooted in trust, care, and traditional hospitality for every passenger traveling from Tirupur.
            </p>
          </div>
          
          {/* Features Grid - 2x2 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-red-50/50 rounded-xl border border-red-100 flex flex-col items-center">
              <Shield className="w-6 h-6 text-red-700 mb-1" />
              <span className="text-xs font-bold text-gray-900">Safe Travel</span>
              <span className="text-[11px] text-gray-500">Careful Drivers</span>
            </div>

            <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-100 flex flex-col items-center">
              <Heart className="w-6 h-6 text-amber-700 mb-1" />
              <span className="text-xs font-bold text-gray-900">Honest Service</span>
              <span className="text-[11px] text-gray-500">Fair Billing</span>
            </div>

            <div className="p-3 bg-orange-50/50 rounded-xl border border-orange-100 flex flex-col items-center">
              <Zap className="w-6 h-6 text-orange-700 mb-1" />
              <span className="text-xs font-bold text-gray-900">Quick Response</span>
              <span className="text-[11px] text-gray-500">Prompt Booking</span>
            </div>

            <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100 flex flex-col items-center">
              <Users className="w-6 h-6 text-rose-700 mb-1" />
              <span className="text-xs font-bold text-gray-900">Family Friendly</span>
              <span className="text-[11px] text-gray-500">Respectful Courtesy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlessingsSection;
