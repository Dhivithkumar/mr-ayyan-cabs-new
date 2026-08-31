import { useRef, useEffect } from "react";
import { Car, Plane, Camera, Navigation, ArrowRight, Calendar } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

import localCityImg from "../assets/service_local_city.jpg";
import airportDepartureImg from "../assets/service_airport_departure.jpg";
import tourismImg from "../assets/service_tourism.jpg";
import roundTripImg from "../assets/service_round_trip.jpg";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  video: string;
  poster: string;
  link: string;
}

const VideoCard = ({ service }: { service: ServiceItem }) => {
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
      { threshold: 0.35 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <a 
      href={service.link} 
      className="block relative group focus:outline-none"
      aria-label={`${service.title} - ${service.desc}`}
    >
      <article
        ref={cardRef}
        className="relative aspect-square sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/10 shadow-md hover:shadow-2xl transition-all duration-300 transform-gpu flex flex-col justify-end p-3.5 sm:p-5 md:p-6"
      >
        {/* Background HTML5 Video Layer */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden transform-gpu">
          <video
            ref={videoRef}
            src={service.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={service.poster}
            className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 transform-gpu"
          />
          {/* Subtle Bottom Gradient Overlay (Transparent -> rgba(0,0,0,0.85)) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
        </div>

        {/* Card Content Overlay */}
        <div className="relative z-10 flex flex-col items-start min-w-0">
          
          {/* Icon & Title Row */}
          <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-[#F5B800] shrink-0">
              {service.icon}
            </div>
            <h3 className="text-sm sm:text-lg md:text-xl font-black text-white uppercase tracking-tight font-heading truncate drop-shadow-md">
              {service.title}
            </h3>
          </div>

          {/* Short Subtitle */}
          <p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-200 leading-snug drop-shadow-sm line-clamp-1">
            {service.desc}
          </p>

        </div>

        {/* Top-Right Arrow Hint on Hover */}
        <div className="absolute top-3 right-3 z-10 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-white/20 text-[#F5B800] flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:bg-[#F5B800] group-hover:text-black transition-all">
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
        </div>

      </article>
    </a>
  );
};

const ServicesSection = () => {
  const services: ServiceItem[] = [
    {
      id: "local",
      title: "LOCAL TAXI",
      desc: "Easy city travel",
      icon: <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      video: "https://res.cloudinary.com/dakjodrfg/video/upload/w_600,q_auto,f_auto/v1788192679/taxi_t9lwll.mp4",
      poster: localCityImg,
      link: "/tirupur-cab-service"
    },
    {
      id: "airport",
      title: "AIRPORT TAXI",
      desc: "Airport pickup & drop",
      icon: <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      video: "https://res.cloudinary.com/dakjodrfg/video/upload/w_600,q_auto,f_auto/v1788192761/flight_hqw99s.mp4",
      poster: airportDepartureImg,
      link: "/tirupur-airport-taxi"
    },
    {
      id: "tourism",
      title: "TOURISM",
      desc: "Explore with us",
      icon: <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      video: "https://res.cloudinary.com/dakjodrfg/video/upload/w_600,q_auto,f_auto/v1788192824/tourism_flncyr.mp4",
      poster: tourismImg,
      link: "/tirupur-outstation-cab"
    },
    {
      id: "roundtrip",
      title: "ROUND TRIPS",
      desc: "Travel there & back",
      icon: <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      video: "https://res.cloudinary.com/dakjodrfg/video/upload/w_600,q_auto,f_auto/v1788192970/round_avjajq.mp4",
      poster: roundTripImg,
      link: "/tirupur-outstation-cab"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white border-t border-white/10">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        
        {/* Minimal Section Header */}
        <ScrollReveal animation="fade-down" className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F5B800] bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full inline-block mb-2 font-heading">
            OUR SERVICES
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
            Travel Your Way
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-medium mt-2">
            Local rides, airport transfers, tourism and round trips.
          </p>
        </ScrollReveal>

        {/* 2 × 2 Services Grid */}
        <StaggerContainer staggerDelay={0.16} className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <StaggerItem key={service.id} animation="zoom-in">
              <VideoCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Single Subtle CTA */}
        <ScrollReveal animation="fade-up" delay={0.2} className="mt-8 sm:mt-10 text-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-[#F5B800] hover:bg-[#e0a700] text-black font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-transform active:scale-95 transform-gpu font-heading"
          >
            <Calendar className="w-4 h-4 fill-black" />
            <span>BOOK A CAB</span>
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ServicesSection;