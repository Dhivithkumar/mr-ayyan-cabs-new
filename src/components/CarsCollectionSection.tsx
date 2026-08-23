import { Users, Luggage, Phone, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
  capacity: string;
  luggage: string;
  description: string;
  image: string;
  altText: string;
};

const CarsCollectionSection = () => {
  const cars: CarType[] = [
    {
      name: "Toyota Etios",
      type: "Sedan (AC)",
      capacity: "4 + 1 Passengers",
      luggage: "2 Large Bags",
      description: "Spacious and comfortable sedan ideal for local city rides, airport transfers, and outstation trips.",
      image: toyotaEtios,
      altText: "Toyota Etios sedan cab in Tirupur - Mr Ayyan Cabs",
    },
    {
      name: "Maruti Swift",
      type: "Hatchback (AC)",
      capacity: "4 + 1 Passengers",
      luggage: "1 Medium Bag",
      description: "Economical hatchback perfect for quick local city travel and short-distance cab bookings.",
      image: swift,
      altText: "Maruti Swift hatchback cab in Tirupur - Mr Ayyan Cabs",
    },
    {
      name: "Tata Zest",
      type: "Sedan (AC)",
      capacity: "4 + 1 Passengers",
      luggage: "2 Bags",
      description: "Comfortable sedan for budget-friendly outstation drops and airport travel.",
      image: zest,
      altText: "Tata Zest sedan cab in Tirupur - Mr Ayyan Cabs",
    },
    {
      name: "Toyota Innova",
      type: "SUV (AC)",
      capacity: "7 + 1 Passengers",
      luggage: "4 Bags",
      description: "Popular 7-seater family SUV for comfortable outstation travel, group trips, and airport transfers.",
      image: innova,
      altText: "Toyota Innova 7 seater SUV cab in Tirupur - Mr Ayyan Cabs",
    },
    {
      name: "Toyota Innova Crysta",
      type: "Premium SUV (AC)",
      capacity: "7 + 1 Passengers",
      luggage: "4 Large Bags",
      description: "Premium SUV providing high luxury comfort for family vacations, long outstation tours, and corporate travel.",
      image: crysta,
      altText: "Toyota Innova Crysta premium cab in Tirupur - Mr Ayyan Cabs",
    },
  ];

  return (
    <section id="fleet" className="py-20 md:py-28 bg-white border-t border-gray-200/80">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 font-extrabold text-xs sm:text-sm uppercase tracking-widest bg-amber-100/70 text-amber-900 px-4 py-1.5 rounded-full border border-amber-200/80 inline-block mb-3 font-heading">
            Well-Maintained Fleet
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 font-heading">
            Our Vehicle Fleet in Tirupur
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            Choose from air-conditioned sedans, hatchbacks, and spacious 7-seater SUVs suitable for any journey.
          </p>
        </div>

        {/* Fleet Carousel */}
        <div className="relative max-w-6xl mx-auto px-6">
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
                        <span className="absolute top-4 right-4 bg-[#0a0a0a] text-[#F59E0B] text-xs font-black px-3 py-1 rounded-full border border-amber-500/30 font-heading">
                          {car.capacity}
                        </span>
                      </div>

                      {/* Content */}
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-extrabold text-gray-900 font-heading">{car.name}</h3>
                          <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                            {car.type}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mb-5 leading-relaxed font-medium">{car.description}</p>
                        
                        <div className="space-y-2 text-xs text-gray-600 font-semibold mb-2">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-[#F59E0B]" />
                            <span>Seating: {car.capacity}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Luggage className="w-4 h-4 text-[#F59E0B]" />
                            <span>Luggage: {car.luggage}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <span>Air Conditioned &amp; Clean Cabs</span>
                          </div>
                        </div>
                      </CardContent>
                    </div>

                    <div className="p-6 pt-0">
                      <a
                        href="tel:+919786223334"
                        className="w-full inline-flex items-center justify-center gap-2 bg-maroon-gradient hover:opacity-95 text-white font-extrabold text-xs py-3 px-4 rounded-xl transition-all shadow-md font-heading"
                      >
                        <Phone className="w-3.5 h-3.5" /> Call to Book {car.name}
                      </a>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 bg-white border-gray-300 text-gray-800 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-colors" />
            <CarouselNext className="-right-4 bg-white border-gray-300 text-gray-800 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-colors" />
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default CarsCollectionSection;
