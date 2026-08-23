import { Plane, Clock, Shield, Luggage, Phone, MessageCircle } from "lucide-react";

export const AirportTaxiSection = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I want to book an Airport Taxi from Tirupur to Coimbatore Airport.");

  return (
    <section id="airport" className="py-20 md:py-28 bg-[#0c0c0c] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#F59E0B] font-extrabold text-xs sm:text-sm uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3 font-heading">
              Coimbatore Airport (CJB) Transfers
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
              Tirupur Airport Taxi Service
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              Reliable airport pickups and drop-offs between Tirupur and Coimbatore International Airport (CJB). Advance booking for early morning &amp; late night flights.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all flex flex-col items-start group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl border border-amber-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h3 className="font-extrabold text-white text-base mb-1 font-heading">On-Time Pickup</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Punctual arrival guaranteed for smooth airport drop and pickup.</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all flex flex-col items-start group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl border border-amber-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Luggage className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h3 className="font-extrabold text-white text-base mb-1 font-heading">Luggage Capacity</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Spacious boots in Sedans (Etios, Zest) &amp; SUVs (Innova, Crysta).</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all flex flex-col items-start group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl border border-amber-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Plane className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h3 className="font-extrabold text-white text-base mb-1 font-heading">Coimbatore Airport (CJB)</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Direct cab transfers from any neighborhood in Tirupur to CJB airport.</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all flex flex-col items-start group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl border border-amber-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h3 className="font-extrabold text-white text-base mb-1 font-heading">24x7 Availability</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Book in advance for early morning 3 AM flight drops or midnight arrivals.</p>
            </div>
          </div>

          {/* Banner Box */}
          <div className="bg-gradient-to-r from-[#181818] via-[#121212] to-black text-white p-8 md:p-12 rounded-3xl border border-amber-500/30 gold-shadow flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 text-white font-heading">Need a Taxi to Coimbatore Airport?</h3>
              <p className="text-gray-300 text-sm md:text-base max-w-xl font-medium">
                Call Mr Ayyan Cabs for hassle-free airport transfer booking. Get instant confirmation for your ride.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href="tel:+919786223334"
                className="inline-flex items-center justify-center gap-2.5 bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold px-7 py-4 rounded-xl text-sm transition-all gold-shadow font-heading"
              >
                <Phone className="w-4 h-4 fill-black" />
                Book Airport Cab (+91 97862 23334)
              </a>
              <a
                href={`https://wa.me/919786223334?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-4 rounded-xl text-sm transition-all shadow-md font-heading"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AirportTaxiSection;
