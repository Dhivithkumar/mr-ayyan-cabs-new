import { Star, MessageSquare, Phone, ExternalLink } from "lucide-react";

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <span className="text-amber-600 font-bold text-xs sm:text-sm uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
            Customer Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Customer Feedback &amp; Reviews
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8">
            At Mr Ayyan Cabs, we strive to deliver punctual, reliable, and comfortable cab journeys across Tirupur and Tamil Nadu.
          </p>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10 max-w-2xl mx-auto">
            <div className="w-14 h-14 bg-amber-50 border border-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-7 h-7 text-amber-500 fill-amber-400" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">Have You Traveled With Mr Ayyan Cabs?</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Your honest feedback helps us maintain our service standards for local, airport, and outstation trips in Tirupur.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://www.google.com/search?q=Mr+Ayyan+Cabs+Tirupur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#b88910] text-black font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Review Us on Google
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="tel:+919786223334"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call +91 97862 23334
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
