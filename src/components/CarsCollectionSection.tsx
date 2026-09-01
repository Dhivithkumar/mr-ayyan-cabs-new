import { Phone, Users, Luggage } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "./ui/ScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import toyotaEtios from "../assets/Toyotoetios.jpg";
import crysta from "../assets/crysta.jpg";
import swift from "../assets/swift.jpg";
import innova from "../assets/innova.jpg";
import zest from "../assets/zest.jpg";

type CarType = {
  name: string;
  type: string;
  seats: string;
  bags: string;
  image: string;
  altText: string;
};

const CarsCollectionSection = () => {
  const cars: CarType[] = [
    {
      name: "Toyota Etios",
      type: "Sedan",
      seats: "4+1 Seats",
      bags: "2 Bags",
      image: toyotaEtios,
      altText: "Toyota Etios sedan cab in Tirupur - Mr Ayyan Cabs",
    },
    {
      name: "Maruti Swift",
      type: "Hatchback",
      seats: "4+1 Seats",
      bags: "1 Bag",
      image: swift,
      altText: "Maruti Swift hatchback cab in Tirupur - Mr Ayyan Cabs",
    },
    {
      name: "Tata Zest",
      type: "Sedan",
      seats: "4+1 Seats",
      bags: "2 Bags",
      image: zest,
      altText: "Tata Zest sedan cab in Tirupur - Mr Ayyan Cabs",
    },
    {
      name: "Toyota Innova",
      type: "SUV",
      seats: "7+1 Seats",
      bags: "4 Bags",
      image: innova,
      altText: "Toyota Innova 7 seater SUV cab in Tirupur - Mr Ayyan Cabs",
    },
    {
      name: "Toyota Innova Crysta",
      type: "Premium SUV",
      seats: "7+1 Seats",
      bags: "4 Bags",
      image: crysta,
      altText: "Toyota Innova Crysta premium cab in Tirupur - Mr Ayyan Cabs",
    },
  ];

  return (
    <section id="fleet" className="py-16 md:py-24 bg-white border-t border-gray-200/80">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header - Only Yellow Section Name */}
        <ScrollReveal animation="fade-down" className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-[#D4A017] tracking-tight font-heading">
            Fleets
          </h2>
        </ScrollReveal>

        {/* Fleet Carousel */}
        <ScrollReveal animation="fade-up" duration={0.85} className="relative max-w-6xl mx-auto px-6">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {cars.map((car, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 flex"
                >
                  <Card className="w-full flex flex-col justify-between border-gray-200/80 hover:border-amber-400 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden group">
                    <div>
                      {/* Vehicle Image Container */}
                      <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 p-6 rounded-t-3xl overflow-hidden flex items-center justify-center h-52 border-b border-gray-100">
                        <img
                          src={car.image}
                          alt={car.altText}
                          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute top-4 right-4 bg-[#0a0a0a] text-[#F59E0B] text-xs font-extrabold px-3 py-1 rounded-full border border-amber-500/30 font-heading">
                          {car.type}
                        </span>
                      </div>

                      {/* Content: Name, Seats & Bags */}
                      <CardContent className="p-6 text-center">
                        <h3 className="text-xl font-extrabold text-gray-900 font-heading mb-3">{car.name}</h3>
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-800 bg-amber-50/80 px-3 py-1.5 rounded-full border border-amber-200">
                            <Users className="w-3.5 h-3.5 text-[#D4A017]" /> {car.seats}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-800 bg-amber-50/80 px-3 py-1.5 rounded-full border border-amber-200">
                            <Luggage className="w-3.5 h-3.5 text-[#D4A017]" /> {car.bags}
                          </span>
                        </div>
                      </CardContent>
                    </div>

                    <div className="p-6 pt-0">
                      <a
                        href="tel:+919786223334"
                        className="w-full inline-flex items-center justify-center gap-2 bg-maroon-gradient hover:opacity-95 text-white font-extrabold text-xs py-3 px-4 rounded-xl transition-all shadow-md font-heading"
                      >
                        <Phone className="w-3.5 h-3.5" /> Call to Book
                      </a>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 bg-white border-gray-300 text-gray-800 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-colors" />
            <CarouselNext className="-right-4 bg-white border-gray-300 text-gray-800 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-colors" />
          </Carousel>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default CarsCollectionSection;
