
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold font-tamil text-primary mb-8 animate-fadeInUp">
          Affordable Pricing
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="text-6xl lg:text-8xl font-bold text-secondary mb-4 animate-priceGrow">
              ₹149*
            </div>
            <p className="text-2xl text-primary font-semibold mb-4">Starting From</p>
            <p className="text-lg text-muted-foreground mb-8">
              Transparent rates with no hidden charges. Fair pricing for all your travel needs.
            </p>
            <div className="flex justify-center items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-lg font-semibold text-accent">100% Transparent Rates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;