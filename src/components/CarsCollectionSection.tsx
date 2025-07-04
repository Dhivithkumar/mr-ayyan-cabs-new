import { Car, Users, Shield, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Local images
import toyoto from "../assets/Toyotoetios.jpg";
import crysta from "../assets/crysta.jpg";
import swift from "../assets/swift.jpg";
import innova from "../assets/innova.jpg";
import zest from "../assets/zest.jpg";

type CarType = {
  name: string;
  type: string;
  capacity: string;
  image: string;
};

const CarsCollectionSection = () => {
  const cars: CarType[] = [
    {
      name: "Toyota Etios",
      type: "Sedan",
      capacity: "4+1",
      image: toyoto,
    },
    {
      name: "Swift",
      type: "Hatchback",
      capacity: "4+1",
      image: swift,
    },
    {
      name: "Innova",
      type: "SUV",
      capacity: "7+1",
      image: innova,
    },
    {
      name: "Crysta",
      type: "Premium SUV",
      capacity: "7+1",
      image: crysta,
    },
    // {
    //   name: "Baleno",
    //   type: "Premium Hatchback",
    //   capacity: "4+1",
    //   image:
    //     "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop",
    // },
    // {
    //   name: "Toyota Glanza",
    //   type: "Hatchback",
    //   capacity: "4+1",
    //   image:
    //     "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=300&fit=crop",
    // },
    // {
    //   name: "Ertiga",
    //   type: "MPV",
    //   capacity: "7+1",
    //   image:
    //     "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
    // },
    // {
    //   name: "Eco",
    //   type: "Compact",
    //   capacity: "4+1",
    //   image:
    //     "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
    // },
    {
      name: "Tata Zest",
      type: "Sedan",
      capacity: "4+1",
      image:
        zest,
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-background to-muted/30"
      id="fleet"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-tamil text-primary mb-4 animate-fadeInUp">
            Premium Fleet Collection
          </h2>
          <p
            className="text-lg text-muted-foreground animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            Choose from our diverse range of well-maintained vehicles for your
            perfect journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {cars.map((car, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className="animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-primary/20">
                      <div className="relative bg-white">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-52 object-contain p-2"
                        />
                        <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          {car.capacity}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {car.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-muted-foreground">
                              4.8
                            </span>
                          </div>
                        </div>
                        <p className="text-red-600 font-medium mb-4">
                          {car.type}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              Capacity: {car.capacity}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Shield className="w-4 h-4 text-green-600" />
                            <span className="text-xs text-green-600">
                              Verified
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Car className="w-8 h-8 text-primary animate-float" />
              <h3 className="text-2xl font-bold text-secondary">
                All Vehicles Include
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <Shield className="w-6 h-6 text-green-600 mx-auto" />
                <p className="text-sm font-medium">Full Insurance</p>
              </div>
              <div className="space-y-2">
                <Car className="w-6 h-6 text-primary mx-auto" />
                <p className="text-sm font-medium">GPS Tracking</p>
              </div>
              <div className="space-y-2">
                <Users className="w-6 h-6 text-secondary mx-auto" />
                <p className="text-sm font-medium">Experienced Driver</p>
              </div>
              <div className="space-y-2">
                <Star className="w-6 h-6 text-accent mx-auto" />
                <p className="text-sm font-medium">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsCollectionSection;
