import { ShieldCheck, Clock, HeartHandshake, Car, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
          
          <div className="text-center mb-12">
            <span className="text-amber-600 font-bold text-xs sm:text-sm uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
              Why Ride With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Why Choose Mr Ayyan Cabs Tirupur?
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Built on community trust, local road experience, and customer-first service across Tirupur district.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {points.map((item, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:border-amber-400 shadow-sm transition-all">
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
            ))}
          </div>

          <div className="text-center">
            <a
              href="tel:+919786223334"
              className="inline-flex items-center gap-2 bg-[#D4A017] hover:bg-[#b88910] text-black font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md"
            >
              <Phone className="w-4 h-4 fill-black" />
              Call Mr Ayyan Cabs (+91 97862 23334)
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
