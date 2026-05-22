
import { MapPin, Car, Wifi, Camera, Gift, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    { icon: <MapPin className="w-8 h-8" />, title: "Airport Pickup/Drop", desc: "Reliable airport transfers" },
    { icon: <Car className="w-8 h-8" />, title: "Local & Outstation", desc: "AC/Non-AC available" },
    { icon: <Wifi className="w-8 h-8" />, title: "Free Wi-Fi", desc: "Stay connected on the go" },
    { icon: <Camera className="w-8 h-8" />, title: "Free Photoshoot", desc: "Tourist places (advance booking)" },
    { icon: <Gift className="w-8 h-8" />, title: "Long Trip Gifts", desc: "Special surprises for long journeys" },
    { icon: <Clock className="w-8 h-8" />, title: "24x7 Service", desc: "Always at your service" }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold font-tamil text-center text-primary mb-16 animate-fadeInUp">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 text-center">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;