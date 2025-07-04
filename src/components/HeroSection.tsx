
import { useState, useEffect } from "react";
import { Phone, MessageCircle, Instagram, Car, Wifi, Camera, Gift, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logo from '../assets/mr_ayyan_cabs_logo.png';

const HeroSection = () => {
  const whatsappMessage = "Hi ! Mr Ayyan Cabs . I want To Book a Cab . Can you Help me?";
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-8">
      {/* Clean Maroon-Green Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-secondary opacity-95 z-10"></div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Logo and Content */}
          <div className="text-white space-y-6">
            {/* Logo Section - New Ayyanar Logo */}
            <div className="flex items-center space-x-4 animate-fadeInUp">
              <div className="w-20 h-20 flex-shrink-0">
                <img 
                  src={logo}
                  alt="Mr Ayyan Cabs Logo" 
                  className="w-20 h-20 rounded-full animate-bounce-slow"
                   style={{
  width: '120px',
  height: '80px',
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'center',
  boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)'
  }}
                />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold font-tamil text-primary">Mr Ayyan Cabs</h1>
                <p className="text-lg text-primary/90">Tirupur</p>
              </div>
            </div>

            {/* Service Description */}
            <div className="animate-fadeInUp space-y-2" style={{ animationDelay: '0.2s' }}>
              <p className="text-base lg:text-lg text-white/90">Premium cab service at affordable rates</p>
              <h2 className="text-lg lg:text-xl font-tamil text-primary">
                மிக குறைந்த கட்டணத்தில் சேவை
              </h2>
            </div>

            {/* Social Media Buttons */}
            <div className="flex gap-3 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="sm" 
                className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-black font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => window.open('tel:+919786223334', '_blank')}
              >
                <Phone className="w-5 h-5" />
              </Button>
              <Button 
                size="sm" 
                className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => window.open(`https://wa.me/919786223334?text=${encodedMessage}`, '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button 
                size="sm" 
                className="w-12 h-12 rounded-full bg-pink-600 hover:bg-pink-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => window.open('https://instagram.com/mrayyan.cabs', '_blank')}
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                size="sm" 
                className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => window.open('https://facebook.com/mrayyancabs', '_blank')}
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                size="sm" 
                className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => window.open('https://youtube.com/@mrayyancabs', '_blank')}
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>

            {/* Premium Services Section */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-primary/20 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-primary font-semibold mb-4 text-center">✨ Premium Services Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Card className="bg-black/40 border-primary/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="animate-float">
                      <Wifi className="w-8 h-8 text-primary mx-auto mb-2" />
                    </div>
                    <p className="text-primary font-medium">Free Wi-Fi</p>
                    <p className="text-xs text-gray-300">Stay connected</p>
                  </CardContent>
                </Card>
                <Card className="bg-black/40 border-secondary/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="animate-float" style={{ animationDelay: '0.5s' }}>
                      <Camera className="w-8 h-8 text-secondary mx-auto mb-2" />
                    </div>
                    <p className="text-secondary font-medium">Free Photoshoot</p>
                    <p className="text-xs text-gray-300">Tourist places</p>
                  </CardContent>
                </Card>
                <Card className="bg-black/40 border-accent/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="animate-float" style={{ animationDelay: '1s' }}>
                      <Gift className="w-8 h-8 text-accent mx-auto mb-2" />
                    </div>
                    <p className="text-accent font-medium">Trip Gifts</p>
                    <p className="text-xs text-gray-300">Long journeys</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-sm font-tamil text-white/90 text-center">
                பாதுகாப்பான பயணம் மற்றும் அனுபவமுள்ள ஓட்டுநர்களை கொண்டு இயக்கப்படுகிறது
              </p>
            </div>
          </div>

          {/* Right Side - Decorative Element */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-[spin_20s_linear_infinite] opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Car className="w-24 h-24 text-primary animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;