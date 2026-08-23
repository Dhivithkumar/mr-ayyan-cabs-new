import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I want to book a cab in Tirupur.");

  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-200" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-600 font-bold text-xs sm:text-sm uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
            Contact Mr Ayyan Cabs
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Call or Message Us Any Time
          </h2>
          <p className="text-base text-gray-600">
            For local taxi booking, airport transfers, or outstation rides in Tirupur, contact us directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <a
              href="tel:+919786223334"
              className="p-6 bg-gray-50 border border-gray-200 hover:border-amber-400 rounded-2xl text-center transition-all group"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Phone Number</h3>
              <p className="text-sm font-semibold text-amber-700">+91 97862 23334</p>
              <span className="text-[11px] text-gray-500 block mt-1">Tap to call</span>
            </a>

            <a
              href={`https://wa.me/919786223334?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-50 border border-gray-200 hover:border-emerald-400 rounded-2xl text-center transition-all group"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">WhatsApp</h3>
              <p className="text-sm font-semibold text-emerald-700">+91 97862 23334</p>
              <span className="text-[11px] text-gray-500 block mt-1">Tap to chat</span>
            </a>

            <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Location</h3>
              <p className="text-sm text-gray-600">Tirupur, Tamil Nadu</p>
              <span className="text-[11px] text-gray-500 block mt-1">India - 641603</span>
            </div>

            <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Operating Hours</h3>
              <p className="text-sm text-gray-600">24 Hours Available</p>
              <span className="text-[11px] text-gray-500 block mt-1">7 Days a Week</span>
            </div>

          </div>

          {/* Callout */}
          <div className="bg-[#0f0f0f] text-white p-8 md:p-10 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-2 text-white">Ready to Travel?</h3>
            <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6">
              Call Mr Ayyan Cabs now for instant cab availability in Tirupur. Experienced drivers and clean vehicles ready for local, airport, and outstation trips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <Button 
                size="lg" 
                className="bg-[#D4A017] hover:bg-[#b88910] text-black font-bold rounded-xl text-base"
                onClick={() => window.open('tel:+919786223334', '_self')}
              >
                <Phone className="w-5 h-5 mr-2 fill-black" />
                Call +91 97862 23334
              </Button>
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-base"
                onClick={() => window.open(`https://wa.me/919786223334?text=${whatsappMessage}`, '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
