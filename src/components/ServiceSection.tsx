import { MapPin, Car, Plane, Navigation, RefreshCw, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import localCabImg from "../assets/service_local_cab.jpg";
import airportTaxiImg from "../assets/service_airport_taxi.jpg";
import outstationCabImg from "../assets/service_outstation_cab.jpg";

const ServicesSection = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I want to inquire about your cab services in Tirupur.");

  const services = [
    {
      icon: <Car className="w-5 h-5 text-[#F59E0B]" />,
      title: "Local Cab Service",
      desc: "Point-to-point local taxi booking in Tirupur city for shopping, business visits, station drop, and personal travel.",
      image: localCabImg,
      altText: "Local Cab Service in Tirupur - Mr Ayyan Cabs",
      link: "/tirupur-cab-service"
    },
    {
      icon: <Plane className="w-5 h-5 text-[#F59E0B]" />,
      title: "Airport Taxi (Coimbatore CJB)",
      desc: "Punctual airport pickup and drop services connecting Tirupur and Coimbatore International Airport. Advance booking available.",
      image: airportTaxiImg,
      altText: "Airport Taxi Service from Tirupur to Coimbatore Airport - Mr Ayyan Cabs",
      link: "/tirupur-airport-taxi"
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#F59E0B]" />,
      title: "Outstation Cab Service",
      desc: "Comfortable outstation rides from Tirupur to major cities, tourist destinations, and pilgrimage centers across Tamil Nadu.",
      image: outstationCabImg,
      altText: "Outstation Cab Rental Service in Tirupur - Mr Ayyan Cabs",
      link: "/tirupur-outstation-cab"
    },
    {
      icon: <Navigation className="w-5 h-5 text-[#F59E0B]" />,
      title: "One-Way Drop Taxi",
      desc: "Affordable one-way cab bookings without paying for return journey km when traveling outstation from Tirupur.",
      image: outstationCabImg,
      altText: "One-Way Drop Taxi Service in Tirupur - Mr Ayyan Cabs",
      link: "/tirupur-outstation-cab"
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#F59E0B]" />,
      title: "Round Trip Travel",
      desc: "Dedicated cabs for multi-day outstation journeys, family trips, corporate visits, and temple tours with local experienced drivers.",
      image: localCabImg,
      altText: "Round Trip Outstation Cab in Tirupur - Mr Ayyan Cabs",
      link: "/tirupur-outstation-cab"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-t border-gray-200/80">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 font-extrabold text-xs sm:text-sm uppercase tracking-widest bg-amber-100/70 text-amber-900 px-4 py-1.5 rounded-full border border-amber-200/80 inline-block mb-3 font-heading">
            Tirupur Cab &amp; Taxi Services
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 font-heading">
            Reliable Cab Solutions in Tirupur
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            Mr Ayyan Cabs provides local city taxis, airport transfers, and outstation rides tailored to your schedule.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gray-200/80 hover:border-amber-400 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Service Real Image Header */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-900">
                  <img 
                    src={service.image} 
                    alt={service.altText}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    {service.icon}
                    <span className="text-xs font-bold text-white tracking-wide font-heading">{service.title}</span>
                  </div>
                </div>

                <CardContent className="p-6 md:p-7">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{service.desc}</p>
                </CardContent>
              </div>

              <div className="p-6 md:p-7 pt-0 border-t border-gray-100 flex flex-col sm:flex-row gap-3 mt-auto">
                <a
                  href="tel:+919786223334"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-maroon-gradient hover:opacity-95 text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all font-heading"
                >
                  <Phone className="w-4 h-4" /> Call to Book
                </a>
                <a
                  href={`https://wa.me/919786223334?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all font-heading"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;