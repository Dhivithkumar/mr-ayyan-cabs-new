import { useState } from "react";
import { MapPin, Navigation, Calendar as CalendarIcon, Car, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ui/ScrollReveal";
import { trackContactFormSubmit, trackBookingClick, trackCallClick } from "@/utils/analytics";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    datetime: "",
    tripType: "Local Ride",
    cabType: "Toyota Etios (Sedan)"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    trackContactFormSubmit();
    trackBookingClick('whatsapp_booking');

    const formattedDate = formData.datetime 
      ? new Date(formData.datetime).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) 
      : 'Not specified';

    const rawMessage = `*New Cab Booking Inquiry - Mr Ayyan Cabs*\n\n*Pickup Location:* ${formData.pickup}\n*Destination:* ${formData.destination}\n*Date & Time:* ${formattedDate}\n*Trip Type:* ${formData.tripType}\n*Cab Type:* ${formData.cabType}`;
    
    const encodedMessage = encodeURIComponent(rawMessage);
    window.open(`https://wa.me/919786223334?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="booking" className="py-12 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-t border-gray-200/80 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <ScrollReveal animation="fade-down" className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
          <h2 className="text-2xl md:text-5xl font-black text-[#D4A017] tracking-tight font-heading">
            Booking
          </h2>
        </ScrollReveal>

        {/* Form Container */}
        <ScrollReveal animation="fade-up" duration={0.85} className="max-w-4xl mx-auto bg-white border border-gray-200/80 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden p-5 sm:p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
              
              {/* Pickup Location */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2 font-heading">
                  <MapPin className="w-4 h-4 text-[#F59E0B]" />
                  Pickup Point in Tirupur
                </label>
                <input
                  type="text"
                  name="pickup"
                  placeholder="e.g. Railway Station, New Bus Stand, Avinashi Road"
                  value={formData.pickup}
                  onChange={handleChange}
                  required
                  inputMode="text"
                  autoCapitalize="words"
                  enterKeyHint="next"
                  className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-2.5 md:py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-sm font-medium"
                />
              </div>

              {/* Destination */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2 font-heading">
                  <Navigation className="w-4 h-4 text-[#F59E0B]" />
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  placeholder="e.g. Coimbatore Airport, Erode, Chennai, Ooty"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  inputMode="text"
                  autoCapitalize="words"
                  enterKeyHint="done"
                  className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-2.5 md:py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-sm font-medium"
                />
              </div>

              {/* Trip Type */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2 font-heading">
                  <Navigation className="w-4 h-4 text-[#F59E0B]" />
                  Trip Service Type
                </label>
                <select
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleChange}
                  className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-2.5 md:py-3.5 text-gray-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-sm font-medium cursor-pointer"
                >
                  <option value="Local Ride">Local Tirupur Cab</option>
                  <option value="Airport Taxi">Airport Pickup / Drop (Coimbatore CJB)</option>
                  <option value="Outstation One-Way">Outstation One-Way Drop</option>
                  <option value="Outstation Round Trip">Outstation Round Trip</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2 font-heading">
                  <CalendarIcon className="w-4 h-4 text-[#F59E0B]" />
                  Travel Date &amp; Time
                </label>
                <input
                  type="datetime-local"
                  name="datetime"
                  value={formData.datetime}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-2.5 md:py-3.5 text-gray-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-sm font-medium"
                  style={{ colorScheme: "light" }}
                />
              </div>

              {/* Cab Type */}
              <div className="space-y-1.5 md:space-y-2 md:col-span-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2 font-heading">
                  <Car className="w-4 h-4 text-[#F59E0B]" />
                  Select Vehicle Type
                </label>
                <select
                  name="cabType"
                  value={formData.cabType}
                  onChange={handleChange}
                  className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-2.5 md:py-3.5 text-gray-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-sm font-medium cursor-pointer"
                >
                  <option value="Toyota Etios (Sedan - 4+1)">Toyota Etios (Sedan - 4+1 Seats)</option>
                  <option value="Swift (Hatchback - 4+1)">Swift (Hatchback - 4+1 Seats)</option>
                  <option value="Baleno (Premium Hatchback - 4+1)">Baleno (Premium Hatchback - 4+1 Seats)</option>
                  <option value="Eeco (7 Seater Van - 6+1)">Eeco (7 Seater Van - 6+1 Seats)</option>
                  <option value="Ertiga (7 Seater MUV - 6+1)">Ertiga (7 Seater MUV - 6+1 Seats)</option>
                  <option value="Toyota Innova (SUV - 7+1)">Toyota Innova (SUV - 7+1 Seats)</option>
                  <option value="Toyota Innova Crysta (Premium SUV - 7+1)">Toyota Innova Crysta (Premium SUV - 7+1 Seats)</option>
                </select>
              </div>

            </div>

            {/* Actions */}
            <div className="pt-4 md:pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <Button 
                type="submit" 
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-5 md:py-4 rounded-xl text-[15px] md:text-base shadow-lg transition-all flex items-center justify-center gap-2 font-heading"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </Button>
              <a
                href="tel:+919786223334"
                onClick={() => trackCallClick()}
                className="w-full sm:w-auto bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold px-8 py-3.5 md:py-4 rounded-xl text-[15px] md:text-base gold-shadow transition-all flex items-center justify-center gap-2 text-center font-heading"
              >
                <Phone className="w-5 h-5 fill-black" />
                Call +91 97862 23334
              </a>
            </div>

          </form>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default BookingSection;
