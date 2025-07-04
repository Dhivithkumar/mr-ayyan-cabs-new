
import { Camera, Gift, Shield, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUsSection = () => {
  const whyChooseUs = [
    { icon: <Camera className="w-8 h-8" />, title: "Free Photoshoot", desc: "Capture memories at tourist destinations with professional photography" },
    { icon: <Gift className="w-8 h-8" />, title: "Long Trip Gifts", desc: "Special packages and complimentary gifts for extended journeys" },
    { icon: <Shield className="w-8 h-8" />, title: "Safe & Sanitized", desc: "Clean, secure, and regularly sanitized vehicles for your safety" },
    { icon: <Star className="w-8 h-8" />, title: "Transparent Rates", desc: "No hidden charges, honest pricing with upfront cost disclosure" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold font-tamil text-center text-primary mb-16 animate-fadeInUp">
          Why Choose Mr Ayyan Cabs?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="group bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 animate-slideInLeft border-0" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce transition-all duration-300">
                  <div className="text-white animate-iconFloat">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4 animate-textSlide" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed animate-textSlide" style={{ animationDelay: `${index * 0.1 + 0.4}s` }}>{item.desc}</p>
                <div className="mt-6 animate-checkBounce" style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
