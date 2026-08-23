import { useState } from "react";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you provide cab service in Tirupur?",
      a: "Yes, Mr Ayyan Cabs provides local taxi booking, city transfers, airport pickup and drop, and outstation cab services across Tirupur, Avinashi, Palladam, Dharapuram, Kangeyam, and surrounding locations in Tirupur district."
    },
    {
      q: "How can I book a cab with Mr Ayyan Cabs?",
      a: "Booking is simple and fast. You can call us directly at +91 97862 23334 or click the WhatsApp button on our website to send your pickup point, destination, date, and preferred cab type. We provide instant booking confirmation."
    },
    {
      q: "Do you provide airport pickup and drop for Coimbatore Airport?",
      a: "Yes, we specialize in 24x7 airport taxi transfers between Tirupur and Coimbatore International Airport (CJB). Advance booking is available for early morning and late night flights."
    },
    {
      q: "Do you offer outstation cab services from Tirupur?",
      a: "Yes, we offer both one-way drop taxi service and outstation round-trip packages from Tirupur to major cities including Coimbatore, Chennai, Madurai, Salem, Erode, Bangalore, and tourist places like Ooty and Kodaikanal."
    },
    {
      q: "Can I book a cab in advance?",
      a: "Yes, we strongly recommend advance booking for airport transfers, early morning travel, and multi-day outstation journeys to ensure your cab arrives on time."
    },
    {
      q: "What types of vehicles are available in your fleet?",
      a: "Our well-maintained air-conditioned fleet includes sedan cabs (Toyota Etios, Tata Zest), hatchbacks (Maruti Swift), and 7-seater family SUVs (Toyota Innova and Innova Crysta)."
    },
    {
      q: "How can I contact Mr Ayyan Cabs?",
      a: "You can reach Mr Ayyan Cabs by calling our primary phone number +91 97862 23334 or via WhatsApp at +91 97862 23334."
    }
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const whatsappMessage = encodeURIComponent("Hi Mr Ayyan Cabs, I have a question about booking a cab.");

  // Generate FAQPage JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-white border-t border-gray-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-amber-600 font-bold text-xs sm:text-sm uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about booking a cab, airport taxi transfers, outstation routes, and vehicle options in Tirupur.
            </p>
          </div>

          <div className="space-y-4 mb-10">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 font-bold text-gray-900 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-600 transition-transform duration-200 shrink-0 ${openIndex === idx ? 'transform rotate-180' : ''}`} />
                </button>
                {openIndex === idx && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-200/60 pt-3 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="font-bold text-gray-900 text-base">Have more questions?</h3>
              <p className="text-xs text-gray-600 mt-0.5">Call or WhatsApp our team directly for instant support.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:+919786223334"
                className="bg-[#D4A017] hover:bg-[#b88910] text-black font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 fill-black" /> Call +91 97862 23334
              </a>
              <a
                href={`https://wa.me/919786223334?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
