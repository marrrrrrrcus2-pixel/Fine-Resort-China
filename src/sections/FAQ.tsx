import { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is included in the VIP medical escort service?',
    answer: 'Our professional medical escort service includes dedicated staff for groups of 8-10 people to navigate complex hospital procedures. We provide expert translation of technical medical terminology, manage real-name digital registration requirements, and ensure smooth communication between you and healthcare providers. Our team is experienced with top-tier hospitals like PUMCH (Beijing) and FAHZU (Zhejiang), providing green-channel access for seamless healthcare experiences.',
  },
  {
    question: 'How does the 24/7 Virtual Concierge work?',
    answer: 'Our AI-powered virtual concierge provides immediate logistical support using specialized assistants capable of navigating local apps and restricted areas. You can get instant help with booking modifications, translation needs, emergency assistance, and general travel inquiries at any time of day. The service bridges the digital divide, helping you overcome language barriers and navigate local services effortlessly.',
  },
  {
    question: 'What TCM treatments are available in your wellness programs?',
    answer: 'Our authentic TCM recovery programs include acupuncture, cupping therapy, herbal medicine consultations, sound healing therapy, and climate therapy at dedicated TCM sanatoriums in Hainan (Sanya) and Suzhou. All treatments are guided by experienced TCM practitioners and tailored to your individual health needs. The SANGHA Retreat offers a transformative wellness experience combining traditional practices with modern comfort.',
  },
  {
    question: 'Do you provide translation devices for the journey?',
    answer: 'Yes, we provide high-end handheld or wearable translation devices that offer instant, 92% accurate translation for signs and conversations. These devices bridge the language gap, helping you overcome the digital divide in local service apps and signage throughout your journey. Our ground hosts are also bilingual to assist with any complex communication needs.',
  },
  {
    question: 'What type of vehicles are included in the business fleet?',
    answer: 'Our luxury business fleet consists of premium vans (maximum 5 passengers) paired with a dedicated English-speaking ground host. All vehicles are equipped with comfortable seating, climate control, and WiFi. Your ground host ensures smooth transportation and can assist with any needs during transit, from restaurant recommendations to last-minute itinerary adjustments.',
  },
  {
    question: 'How do I book the 6-day wellness itinerary?',
    answer: 'You can book our premium 6-day itineraries (Yangtze Delta Elite Wellness or Lingnan Heritage & Wellness) by contacting our VIP Travel Advisory Team. Each itinerary includes VIP meet & greet, health screenings, cultural experiences, TCM treatments, luxury accommodations, and all ground transportation. Customizations are available upon request to tailor the experience to your specific interests and needs.',
  },
  {
    question: 'What makes your selected routes unique?',
    answer: 'Our curated routes blend Western clinical precision with traditional Chinese wellness and cultural heritage. The Yangtze Delta route combines modern medical facilities with classical gardens and TCM experiences, while the China Bay Area route explores Lingnan culture through Hong Kong, Shenzhen, Shantou, and Guangzhou. Both itineraries feature luxury high-speed rail travel, wellness-integrated hotels, and exclusive access to heritage sites.',
  },
  {
    question: 'Are meals included in the itinerary?',
    answer: 'Yes, our itineraries include curated gourmet dining experiences featuring authentic regional cuisines. From Michelin-recommended restaurants to traditional local delicacies, we ensure you experience the best of Chinese culinary culture. Dietary restrictions and preferences can be accommodated with advance notice.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-[#FAF6F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-[#B8860B]/10 text-[#B8860B] rounded-full text-sm font-medium mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            FAQ
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2416] transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-500 border border-[#E8DCC8] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isOpen ? 'shadow-lg border-[#D4A574]' : ''}`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                  transitionTimingFunction: 'var(--ease-expo-out)',
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAF6F0] transition-colors duration-300"
                >
                  <span className="font-semibold text-[#2C2416] pr-4 text-left">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#B8860B] text-white rotate-180'
                        : 'bg-[#E8DCC8] text-[#6B5B4F]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                  style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
                >
                  <div className="px-6 pb-6">
                    <p className="text-[#6B5B4F] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#6B5B4F] mb-4">
            Still have questions? We are here to help
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 text-[#B8860B] font-semibold hover:underline"
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
