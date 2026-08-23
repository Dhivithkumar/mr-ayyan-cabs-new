import { CheckCircle, Phone, MessageCircle } from "lucide-react";

const PricingSection = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, please provide a fare quote for my ride.");

  return (
    <section id="pricing" className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto mb-10">
          <span className="text-amber-600 font-bold text-xs sm:text-sm uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
            Honest Fares
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Transparent Pricing &amp; Fair Billing
          </h2>
          <p className="text-base text-gray-600">
            No hidden charges or surprise costs. We communicate exact distance-based billing before your trip begins.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-left">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">Local City Rides</span>
              <span className="text-sm font-bold text-gray-900 block mb-1">Meter / Point-to-Point</span>
              <p className="text-xs text-gray-500">Affordable fares across Tirupur city limits.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">Airport Taxi</span>
              <span className="text-sm font-bold text-gray-900 block mb-1">Fixed Airport Rates</span>
              <p className="text-xs text-gray-500">Fixed rate quotes for Coimbatore Airport pickup &amp; drop.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">Outstation Cabs</span>
              <span className="text-sm font-bold text-gray-900 block mb-1">Per KM Billing</span>
              <p className="text-xs text-gray-500">Transparent per-km rate for Sedan &amp; 7-seater SUV rentals.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-semibold text-gray-700 mb-8">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Zero Hidden Fees</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Upfront Toll &amp; Fare Discussion</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>One-Way &amp; Round Trip Rates</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:+919786223334"
              className="inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#b88910] text-black font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 fill-black" /> Get Instant Price Quote
            </a>
            <a
              href={`https://wa.me/919786223334?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;