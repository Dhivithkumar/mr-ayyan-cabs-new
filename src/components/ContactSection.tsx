
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const whatsappMessage = "Hi ! Mr Ayyan Cabs . I want To Book a Cab . Can you Help me?";
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-tamil text-primary mb-4 animate-fadeInUp">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Get in touch with us for your travel needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <p className="text-muted-foreground">+91 97862 23334</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:border-green-400 transition-colors animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">WhatsApp</h4>
                <p className="text-muted-foreground">+91 97862 23334</p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-colors animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground">Tirupur, Tamil Nadu</p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Service Hours</h4>
                <p className="text-muted-foreground">24/7 Available</p>
              </CardContent>
            </Card>
          </div>

          {/* Ready to Book Section */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Book?</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Contact us now for instant booking and get the best cab service in Tirupur. 
              Our experienced drivers and well-maintained vehicles ensure a safe and comfortable journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('tel:+919786223334', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open(`https://wa.me/919786223334?text=${encodedMessage}`, '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
