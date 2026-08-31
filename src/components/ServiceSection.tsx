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
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {});
              }
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className="relative rounded-2xl sm:rounded-[28px] overflow-hidden bg-black border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.35)] transition-all duration-300 group min-h-[220px] sm:min-h-[350px] flex flex-col justify-between transform-gpu"
    >
      {/* Background Video Layer - Intersection Lazy Loaded */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden transform-gpu">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="metadata"
          poster={service.poster}
          className="w-full h-full object-cover opacity-100 transition-transform duration-500 group-hover:scale-105 transform-gpu"
        >
          <source src={service.video} type="video/mp4" />
        </video>
        {/* Subtle Responsive Gradient Overlay for Pristine Video Visibility & Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none"></div>
      </div>

      {/* Card Top Section Content */}
      <div className="relative z-10 p-3.5 sm:p-7 md:p-8 flex flex-col items-start">
        {/* Top-Left Colored Icon Badge */}
        <div className={`w-9 h-9 sm:w-14 sm:h-14 rounded-full ${service.badgeBg} border flex items-center justify-center shadow-md mb-2 sm:mb-5 group-hover:scale-105 transition-transform`}>
          {service.badgeIcon}
        </div>

        {/* Title (High-contrast White with drop shadow) */}
        <h3 className="text-base sm:text-2xl md:text-3xl font-black text-white tracking-tight font-heading mb-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          {service.title}
        </h3>

        {/* Yellow Accent Underline */}
        <div className="w-6 h-0.5 sm:w-10 sm:h-1 bg-[#F5B800] rounded-full my-1.5 sm:my-2.5 shadow-sm"></div>

        {/* Description */}
        <p className="text-[11px] sm:text-sm md:text-base font-extrabold text-gray-100 max-w-xs leading-snug line-clamp-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
          {service.desc}
        </p>

        {/* Decorative Location Pin for Local Taxi */}
        {service.showMapPin && (
          <div className="absolute top-4 right-4 text-[#F5B800] animate-bounce hidden sm:block">
            <MapPin className="w-8 h-8 fill-[#F5B800] text-black drop-shadow-lg" />
          </div>
        )}
      </div>

      {/* Card Bottom Section Actions */}
      <div className="relative z-10 p-3.5 sm:p-7 md:p-8 pt-0 flex items-center justify-between mt-auto">
        <a
          href={service.link}
          className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-[#F5B800] bg-white hover:bg-[#F5B800] text-black flex items-center justify-center shadow-lg transition-all active:scale-95 group-hover:scale-110"
          aria-label={`Learn more about ${service.title}`}
          title={`View ${service.title}`}
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black stroke-[2.5]" />
        </a>

        {/* Quick Call & WhatsApp Booking */}
        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href="tel:+919786223334"
            className="bg-[#F5B800] hover:bg-[#e0a700] text-black font-extrabold text-[10px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl flex items-center gap-1 shadow-md active:scale-95 transition-transform font-heading"
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-black" /> <span className="hidden xs:inline">Call</span>
          </a>
          <a
            href={`https://wa.me/919786223334?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-[10px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl flex items-center gap-1 shadow-md active:scale-95 transition-transform font-heading"
          >
            <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white text-white" /> <span className="hidden xs:inline">WhatsApp</span>
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
      badgeIcon: <Car className="w-4 h-4 sm:w-6 sm:h-6 text-amber-500" />,
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
      badgeIcon: <Plane className="w-4 h-4 sm:w-6 sm:h-6 text-sky-400" />,
      badgeBg: "bg-black/60 backdrop-blur-md border-sky-400/40",
      video: "/videos/airport_taxi_real.mp4",
      poster: airportDepartureImg,
      link: "/tirupur-airport-taxi"
    },
    {
      id: "tourism",
      title: "Tourism",
      desc: "Explore beautiful places with us",
      badgeIcon: <Camera className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />,
      badgeBg: "bg-black/60 backdrop-blur-md border-emerald-400/40",
      video: "/videos/tourism_real.mp4",
      poster: tourismImg,
      link: "/tirupur-outstation-cab"
    },
    {
      id: "roundtrip",
      title: "Round Trips",
      desc: "One way & round trip packages",
      badgeIcon: <Navigation className="w-4 h-4 sm:w-6 sm:h-6 text-indigo-400" />,
      badgeBg: "bg-black/60 backdrop-blur-md border-indigo-400/40",
      video: "/videos/round_trips_real.mp4",
      poster: roundTripImg,
      link: "/tirupur-outstation-cab"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-t border-gray-200/80">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#D4A017] tracking-tight font-heading">
            Services
          </h2>
        </ScrollReveal>

        {/* 2x2 Services Video Cards Grid (FULL VIDEO VISIBILITY) */}
        <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
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