import { MapPin, Navigation, Phone, MessageCircle, Check } from "lucide-react";

export const OutstationSection = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I would like to book an Outstation Cab from Tirupur.");

  return (
    <section id="outstation" className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-amber-600 font-bold text-xs sm:text-sm uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
              Outstation Travel
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Tirupur Outstation Cab Service
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Comfortable, reliable outstation taxi rentals from Tirupur. Available in Sedan and SUV options for one-way drops and round-trip journeys across South India.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* One-Way Drop */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Navigation className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">One-Way Outstation Drop</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Traveling one way to Coimbatore, Erode, Salem, Chennai, or Bangalore? Pay only for the journey to your destination without paying return fare.
                </p>
                <ul className="text-xs text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>No return kilometer charge for standard one-way routes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Doorstep pickup from your home or office in Tirupur</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Clean AC sedans and SUVs</span>
                  </li>
                </ul>
              </div>
              <a
                href="tel:+919786223334"
                className="inline-flex items-center justify-center gap-2 bg-[#8b1c1c] hover:bg-[#6b1515] text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors"
              >
                <Phone className="w-4 h-4" /> Book One-Way Cab
              </a>
            </div>

            {/* Round Trip */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Outstation Round Trip</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Planning a family holiday to Ooty, Kodaikanal, Munnar, or pilgrimage trips to Madurai, Palani, and Rameswaram? Book our dedicated driver and vehicle.
                </p>
                <ul className="text-xs text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Experienced drivers familiar with hill stations &amp; highways</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Flexible multi-day itinerary support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Transparent kilometer &amp; toll billing</span>
                  </li>
                </ul>
              </div>
              <a
                href="tel:+919786223334"
                className="inline-flex items-center justify-center gap-2 bg-[#8b1c1c] hover:bg-[#6b1515] text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors"
              >
                <Phone className="w-4 h-4" /> Book Round Trip Cab
              </a>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="text-center bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="font-bold text-gray-900 block text-base">Book Your Outstation Taxi Today</span>
              <span className="text-xs text-gray-500">Call us at +91 97862 23334 or chat on WhatsApp for exact route quotes.</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:+919786223334"
                className="bg-[#D4A017] hover:bg-[#b88910] text-black font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 fill-black" /> Call Now
              </a>
              <a
                href={`https://wa.me/919786223334?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OutstationSection;
