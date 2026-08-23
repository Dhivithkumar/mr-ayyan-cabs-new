import { Car, Clock, ShieldCheck, MapPin, Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-amber-600 font-bold text-xs sm:text-sm uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
            About Mr Ayyan Cabs
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
            Trusted Local Cab Service in Tirupur
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            Named after Lord Ayyanar, the traditional guardian deity, Mr Ayyan Cabs is dedicated to providing safe, comfortable, and reliable taxi services in Tirupur and across Tamil Nadu. We offer local city rides, Coimbatore airport pickups &amp; drops, and outstation trips with courteous drivers and clean air-conditioned vehicles.
          </p>
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-amber-100 border border-amber-200 rounded-full flex items-center justify-center">
              <Car className="w-10 h-10 text-amber-700" />
            </div>
          </div>
        </div>

        {/* Real Core Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">Tirupur Based</h3>
            <p className="text-xs text-gray-600">Local drivers familiar with every corner of Tirupur and surrounding areas.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">24x7 Cab Booking</h3>
            <p className="text-xs text-gray-600">Round-the-clock availability for urgent rides and advance flight bookings.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">Clean &amp; Safe Cabs</h3>
            <p className="text-xs text-gray-600">Regularly cleaned AC hatchbacks, sedans, and 7-seater SUVs.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Phone className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">Direct Call Booking</h3>
            <p className="text-xs text-gray-600">No complicated apps. Call +91 97862 23334 for instant cab confirmation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
