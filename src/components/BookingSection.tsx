import { useState } from "react";
import { MapPin, Navigation, Calendar as CalendarIcon, Car, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    datetime: "",
    cabType: "Toyota Etios (Sedan)"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the datetime
    const formattedDate = formData.datetime 
      ? new Date(formData.datetime).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) 
      : 'Not specified';

    // Construct the WhatsApp message with proper newline characters
    const rawMessage = `*New Booking Request*\n\n*Pickup Location:* ${formData.pickup}\n*Destination:* ${formData.destination}\n*Date & Time:* ${formattedDate}\n*Cab Type:* ${formData.cabType}`;
    
    // Properly encode the entire message so characters like '&' don't break the URL
    const encodedMessage = encodeURIComponent(rawMessage);
    
    // Open WhatsApp
    window.open(`https://wa.me/919786223334?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="booking" className="py-20 relative bg-[#f8f9fa] overflow-hidden">
      {/* Light theme background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4A017]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Book Your <span className="text-[#D4A017]">Premium Ride</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience the comfort of our heritage cabs. Fill out the details below to reserve your journey across South India.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Pickup Location */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4A017]" />
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="pickup"
                  placeholder="Enter pickup point..."
                  value={formData.pickup}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] transition-all shadow-sm"
                />
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#D4A017]" />
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  placeholder="Where to?"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] transition-all shadow-sm"
                />
              </div>

              {/* Date & Time */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-[#D4A017]" />
                  Date & Time
                </label>
                <input
                  type="datetime-local"
                  name="datetime"
                  value={formData.datetime}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] transition-all shadow-sm custom-datetime-input-light"
                  style={{ colorScheme: "light" }}
                />
              </div>

              {/* Cab Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#D4A017]" />
                  Cab Type
                </label>
                <select
                  name="cabType"
                  value={formData.cabType}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-900 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] transition-all appearance-none shadow-sm cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                >
                  <option value="Toyota Etios (Sedan)" className="bg-white text-gray-900">Toyota Etios (Sedan - 4+1 Seats)</option>
                  <option value="Swift (Hatchback)" className="bg-white text-gray-900">Swift (Hatchback - 4+1 Seats)</option>
                  <option value="Tata Zest (Sedan)" className="bg-white text-gray-900">Tata Zest (Sedan - 4+1 Seats)</option>
                  <option value="Innova (SUV)" className="bg-white text-gray-900">Innova (SUV - 7+1 Seats)</option>
                  <option value="Crysta (Premium SUV)" className="bg-white text-gray-900">Crysta (Premium SUV - 7+1 Seats)</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10 flex justify-center">
              <Button 
                type="submit" 
                className="w-full md:w-auto min-w-[250px] bg-[#7c1a1a] hover:bg-[#5a1212] text-white px-10 py-7 rounded-xl text-lg font-bold shadow-[0_8px_20px_rgba(124,26,26,0.25)] transition-all duration-300 transform hover:-translate-y-1 group"
              >
                Confirm Booking
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
