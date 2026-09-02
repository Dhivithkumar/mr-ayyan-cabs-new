import { ShieldCheck, Clock, HeartHandshake, Car, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import { trackCallClick } from "@/utils/analytics";

const WhyChooseUsSection = () => {
  const points = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
      title: "Local Experienced Drivers",
      desc: "Our drivers are knowledgeable about local Tirupur routes, Coimbatore airport shortcuts, and outstation highways for safe, efficient trips."
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-600" />,
      title: "Punctual Pickup & Drop",
      desc: "We value your time. Whether it's an early morning airport flight or a late night train drop, we arrive on schedule."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-amber-600" />,
      title: "Transparent & Honest Pricing",
      desc: "No hidden extra charges or unexpected surge costs. Clear distance billing and transparent communication before you travel."
    },
    {
      icon: <Car className="w-8 h-8 text-amber-600" />,
      title: "Clean & AC Vehicles",
      desc: "Well-maintained hatchbacks, sedans, and SUVs sanitized and cleaned regularly for family and business comfort."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          
          <ScrollReveal animation="fade-down" className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-[#D4A017] tracking-tight font-heading">
              Why Choose Us
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {points.map((item, index) => (
              <StaggerItem key={index} animation="fade-up">
                <Card className="bg-white border-gray-200 hover:border-amber-400 shadow-sm transition-all h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 bg-amber-50 border border-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal animation="zoom-in" delay={0.2} className="text-center">
            <a
              href="tel:+919786223334"
              onClick={() => trackCallClick()}
              className="inline-flex items-center gap-2 bg-[#D4A017] hover:bg-[#b88910] text-black font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md"
            >
              <Phone className="w-4 h-4 fill-black" />
              Call Mr Ayyan Cabs (+91 97862 23334)
            </a>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
