
import { Shield, Heart, Zap, Users } from "lucide-react";

const BlessingsSection = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      <div className="container mx-auto max-w-md">
        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg border border-gray-100 mx-2 sm:mx-0">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-red-800 mb-2">
              அய்யனார்
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-red-800 mb-1">
              ஆசீர்வாதத்துடன் -
            </h3>
            <h4 className="text-base sm:text-lg font-bold text-red-800">
              WITH AYYANAR'S
            </h4>
            <h4 className="text-base sm:text-lg font-bold text-red-800">
              BLESSINGS
            </h4>
          </div>
          
          {/* Features Grid - 2x2 */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {/* Protected */}
            <div className="text-center flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-green-700 mb-1">Protected</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Divine Safety</p>
            </div>

            {/* Trusted */}
            <div className="text-center flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-orange-600 mb-1">Trusted</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Community Approved</p>
            </div>

            {/* Quick */}
            <div className="text-center flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-yellow-600 mb-1">Quick</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Instant Response</p>
            </div>

            {/* Caring */}
            <div className="text-center flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-pink-700 mb-1">Caring</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Personal Touch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlessingsSection;
