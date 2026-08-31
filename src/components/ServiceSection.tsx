import { useRef, useEffect } from "react";
import { Car, Plane, Camera, Navigation, ArrowRight, Phone, MessageCircle, MapPin } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

import localCityImg from "../assets/service_local_city.jpg";
import airportDepartureImg from "../assets/service_airport_departure.jpg";
import tourismImg from "../assets/service_tourism.jpg";
import roundTripImg from "../assets/service_round_trip.jpg";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  badgeIcon: React.ReactNode;
  badgeBg: string;
  video: string;
  poster: string;
  link: string;
  showMapPin?: boolean;
}

const VideoCard = ({ service, whatsappMessage }: { service: ServiceItem; whatsappMessage: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay waiting for interaction:", err);
      });
    }
  }, []);

  return (
    <div 
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.35)] transition-all duration-500 group min-h-[210px] sm:min-h-[260px] lg:min-h-[300px] flex flex-col justify-between"
    >
      {/* Background Video Layer - 100% FULL VISIBILITY */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={service.poster}
          className="w-full h-full object-cover opacity-100 transition-transform duration-700 group-hover:scale-108"
        >
          <source src={service.video} type="video/mp4" />
        </video>
        {/* Subtle Responsive Gradient Overlay for Pristine Video Visibility & Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 pointer-events-none"></div>
      </div>

      {/* Card Top Section Content */}
      <div className="relative z-10 p-3.5 sm:p-5 lg:p-6 flex flex-col items-start">
        {/* Top-Left Colored Icon Badge */}
        <div className={`w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full ${service.badgeBg} border flex items-center justify-center shadow-md mb-2 sm:mb-4 group-hover:scale-105 transition-transform`}>
          {service.badgeIcon}
        </div>

        {/* Title (High-contrast White with drop shadow) */}
        <h3 className="text-base sm:text-xl lg:text-2xl font-black text-white tracking-tight font-heading mb-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          {service.title}
        </h3>

        {/* Yellow Accent Underline */}
        <div className="w-6 h-0.5 sm:w-8 sm:h-1 bg-[#F5B800] rounded-full my-1 sm:my-2 shadow-sm"></div>

        {/* Description */}
        <p className="text-[11px] sm:text-xs lg:text-sm font-extrabold text-gray-100 max-w-xs leading-snug line-clamp-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
          {service.desc}
        </p>

        {/* Decorative Location Pin for Local Taxi */}
        {service.showMapPin && (
          <div className="absolute top-3 right-3 text-[#F5B800] animate-bounce hidden sm:block">
            <MapPin className="w-6 h-6 fill-[#F5B800] text-black drop-shadow-lg" />
          </div>
        )}
      </div>

      {/* Card Bottom Section Actions */}
      <div className="relative z-10 p-3.5 sm:p-5 lg:p-6 pt-0 flex items-center justify-between mt-auto">
        <a
          href={service.link}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#F5B800] bg-white hover:bg-[#F5B800] text-black flex items-center justify-center shadow-lg transition-all active:scale-95 group-hover:scale-110"
          aria-label={`Learn more about ${service.title}`}
          title={`View ${service.title}`}
        >
          <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
        </a>

        {/* Quick Call & WhatsApp Booking */}
        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href="tel:+919786223334"
            className="bg-[#F5B800] hover:bg-[#e0a700] text-black font-extrabold text-[10px] sm:text-xs px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl flex items-center gap-1 shadow-md active:scale-95 transition-transform font-heading"
          >
            <Phone className="w-3 h-3 fill-black" /> <span className="hidden xs:inline">Call</span>
          </a>
          <a
            href={`https://wa.me/919786223334?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-[10px] sm:text-xs px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl flex items-center gap-1 shadow-md active:scale-95 transition-transform font-heading"
          >
            <MessageCircle className="w-3 h-3 fill-white text-white" /> <span className="hidden xs:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I want to inquire about your cab services in Tirupur.");

  const services: ServiceItem[] = [
    {
      id: "local",
      title: "Local Taxi",
      desc: "Comfortable rides within the city",
      badgeIcon: <Car className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />,
      badgeBg: "bg-black/60 backdrop-blur-md border-amber-400/40",
      video: "/videos/local_taxi_real.mp4",
      poster: localCityImg,
      link: "/tirupur-cab-service",
      showMapPin: true
    },
    {
      id: "airport",
      title: "Airport Taxi",
      desc: "Timely airport pick-up & drop",
      badgeIcon: <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />,
      badgeBg: "bg-black/60 backdrop-blur-md border-sky-400/40",
      video: "/videos/airport_taxi_real.mp4",
      poster: airportDepartureImg,
      link: "/tirupur-airport-taxi"
    },
    {
      id: "tourism",
      title: "Tourism",
      desc: "Explore beautiful places with us",
      badgeIcon: <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />,
      badgeBg: "bg-black/60 backdrop-blur-md border-emerald-400/40",
      video: "/videos/tourism_real.mp4",
      poster: tourismImg,
      link: "/tirupur-outstation-cab"
    },
    {
      id: "roundtrip",
      title: "Round Trips",
      desc: "One way & round trip packages",
      badgeIcon: <Navigation className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />,
      badgeBg: "bg-black/60 backdrop-blur-md border-indigo-400/40",
      video: "/videos/round_trips_real.mp4",
      poster: roundTripImg,
      link: "/tirupur-outstation-cab"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-t border-gray-200/80">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#D4A017] tracking-tight font-heading">
            Services
          </h2>
        </ScrollReveal>

        {/* 4-COLUMN ON DESKTOP / 2x2 ON MOBILE */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <StaggerItem key={service.id} animation="zoom-in">
              <VideoCard service={service} whatsappMessage={whatsappMessage} />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default ServicesSection;