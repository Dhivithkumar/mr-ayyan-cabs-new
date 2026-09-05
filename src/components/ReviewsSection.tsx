import { Star, MessageSquare, ExternalLink, Quote } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

export const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Karthik Raja",
      location: "Tirupur",
      rating: 5,
      date: "2 days ago",
      comment: "Booked Etios for Coimbatore airport drop at 4 AM. Driver arrived 10 mins early! Super clean AC cab and driver was very professional. Highly recommended!"
    },
    {
      id: 2,
      name: "Senthil Kumar",
      location: "Avinashi",
      rating: 5,
      date: "1 week ago",
      comment: "Regular customer for Tirupur to Chennai business trips. Best outstation taxi service with honest distance billing and zero hidden charges."
    },
    {
      id: 3,
      name: "Priya Ramachandran",
      location: "Perumanallur",
      rating: 5,
      date: "2 weeks ago",
      comment: "Booked Innova Crysta for family temple trip to Madurai. Driver was very courteous, drove safely on highways, and cab was extremely comfortable."
    },
    {
      id: 4,
      name: "Vijay Anand",
      location: "Palladam",
      rating: 5,
      date: "3 weeks ago",
      comment: "Very prompt pickup for local Tirupur garment unit visits. Driver knows all shortcut routes to avoid textile traffic. Great experience!"
    },
    {
      id: 5,
      name: "Divya Bharathi",
      location: "Dharapuram",
      rating: 5,
      date: "1 month ago",
      comment: "Used Mr Ayyan Cabs for Ooty weekend tour. Exceptional service! Reasonable pricing, excellent driving skill in hill station hairpin bends."
    },
    {
      id: 6,
      name: "Manoj Kumar",
      location: "Tirupur Junction",
      rating: 5,
      date: "1 month ago",
      comment: "Instant WhatsApp booking and polite customer support. Taxi arrived within 15 minutes of call near Tirupur Railway Station."
    },
    {
      id: 7,
      name: "Subhashini N.",
      location: "Kangeyam",
      rating: 5,
      date: "2 months ago",
      comment: "Punctual airport pickup from CJB late night. Felt very safe traveling with family. Clean seat covers and smooth AC drive."
    },
    {
      id: 8,
      name: "Ramesh V.",
      location: "Kovilpalayam",
      rating: 5,
      date: "2 months ago",
      comment: "Transparent tariff and hassle-free service. No surge pricing like app cabs. Mr Ayyan Cabs is my go-to choice in Tirupur."
    },
    {
      id: 9,
      name: "Gokul Krishnan",
      location: "Mangalam",
      rating: 5,
      date: "3 months ago",
      comment: "Booked Swift for local city errands and station drop. Driver was helpful with luggage and vehicle was spotless."
    },
    {
      id: 10,
      name: "Anitha Sundaram",
      location: "Veerapandi",
      rating: 5,
      date: "3 months ago",
      comment: "Excellent service with traditional hospitality! Drivers are respectful and cars are well maintained. 5 stars without doubt!"
    }
  ];

  // Doubled array for seamless infinite marquee loop
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gray-50/90 border-t border-gray-200/80 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-[#D4A017] tracking-tight font-heading">
            Feedback &amp; Reviews
          </h2>
        </ScrollReveal>

      </div>

      {/* Moving Right-to-Left Ticker Container */}
      <ScrollReveal animation="fade" delay={0.1} className="w-full overflow-hidden relative py-4">
        {/* Subtle Gradient Fades on Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-gray-50/90 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-gray-50/90 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-5 px-4">
          {marqueeReviews.map((item, idx) => (
            <div 
              key={idx}
              className="w-80 sm:w-96 shrink-0 bg-white rounded-3xl p-6 border border-gray-200/80 shadow-[0_10px_25px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-amber-400/40" />
                </div>

                {/* Review Comment */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium mb-4 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-gray-900 font-heading">{item.name}</h3>
                  <span className="text-[11px] font-medium text-amber-800">{item.location}</span>
                </div>
                <span className="text-[10px] text-gray-400 font-mono">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Static "Review Us on Google" Button Below */}
      <ScrollReveal animation="zoom-in" delay={0.2} className="container mx-auto px-4 mt-8 text-center">
        <a
          href="https://g.page/r/Cb4-2nmu8AToEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 bg-[#D4A017] hover:bg-[#b88910] text-black font-extrabold px-8 py-4 rounded-2xl text-sm sm:text-base transition-all shadow-lg hover:shadow-xl font-heading active:scale-98 group"
        >
          <MessageSquare className="w-5 h-5 fill-black/20" />
          <span>Review Us on Google</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </ScrollReveal>

    </section>
  );
};

export default ReviewsSection;
