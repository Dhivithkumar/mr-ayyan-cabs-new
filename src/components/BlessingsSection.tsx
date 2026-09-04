import { Shield, Heart, Award, Users } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const BlessingsSection = () => {
  return (
    <section id="blessings" className="py-12 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border-t border-amber-100 relative overflow-hidden">
      <div className="container mx-auto max-w-lg">
        <ScrollReveal animation="zoom-in" duration={0.6}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-amber-200 text-center">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-3xl font-black text-[#D4A017] tracking-tight font-heading">
                அய்யனார் ஆசீர்வாதத்துடன் (Ayyanar Blessings)
              </h2>
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

              <div className="p-3 bg-orange-50/50 rounded-xl border border-orange-100 flex flex-col items-center text-center">
                <Award className="w-6 h-6 text-orange-700 mb-1" />
                <span className="text-xs font-bold text-gray-900">10+ Yrs Exp.</span>
                <span className="text-[11px] text-gray-500">Expert Drivers</span>
              </div>

              <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100 flex flex-col items-center">
                <Users className="w-6 h-6 text-rose-700 mb-1" />
                <span className="text-xs font-bold text-gray-900">Family Friendly</span>
                <span className="text-[11px] text-gray-500">Respectful Courtesy</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlessingsSection;
