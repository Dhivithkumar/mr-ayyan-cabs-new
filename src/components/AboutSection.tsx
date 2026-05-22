
import { Car, Users, Clock, Award, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-tamil text-primary mb-8 animate-fadeInUp">
            About Mr Ayyan Cabs
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Named after Lord Ayyanar, the guardian deity of Tamil Nadu, our cab service embodies trust, 
            protection, and cultural heritage. We provide 24x7 reliable transportation services rooted 
            in Tamil traditions while embracing modern comfort and technology. From the heart of Tirupur, 
            we serve with dedication and respect for our cultural values.
          </p>
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-float">
              <Car className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">5000+</h3>
            <p className="text-gray-600 font-medium">Happy Customers</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">24/7</h3>
            <p className="text-gray-600 font-medium">Service Hours</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">10+</h3>
            <p className="text-gray-600 font-medium">Years Experience</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">100%</h3>
            <p className="text-gray-600 font-medium">Safe Rides</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
