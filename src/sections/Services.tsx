import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X, Monitor, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceHighlights = [
  {
    icon: Monitor,
    title: 'Digital Concierge',
    description: 'AI-powered virtual assistance for seamless navigation through local apps and services',
  },
  {
    icon: Users,
    title: 'Expert Ground Hosts',
    description: 'Professional bilingual companions with first-aid knowledge for your safety',
  },
  {
    icon: Heart,
    title: 'Wellness Integration',
    description: 'Curated TCM experiences and VIP medical access throughout your journey',
  },
];

export default function Services() {
  const [showOnline, setShowOnline] = useState(false);
  const [showOffline, setShowOffline] = useState(false);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className={`inline-block px-4 py-1.5 bg-[#B8860B]/10 text-[#B8860B] rounded-full text-sm font-medium mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Services
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2416] mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Comprehensive Travel Support
          </h2>
          <p
            className={`text-lg text-[#6B5B4F] max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            From pre-departure digital preparation to on-ground exclusive concierge, 
            we ensure every moment of your journey is seamless
          </p>
        </div>

        {/* Service Highlights */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {serviceHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={highlight.title}
                className={`text-center p-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-[#B8860B]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#B8860B]" />
                </div>
                <h3 className="text-lg font-bold text-[#2C2416] mb-2">{highlight.title}</h3>
                <p className="text-sm text-[#6B5B4F]">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        {/* Service Buttons */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before Travel - Online Support */}
          <div
            className={`relative group transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-[#E8DCC8]">
              <div className="w-16 h-16 bg-[#C9A227]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#C9A227]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2C2416] mb-3">Pre-Trip Support</h3>
              <p className="text-[#6B5B4F] mb-6 flex-grow">
                Digital entry declarations, payment verification, 12306 railway integration, 
                VIP attraction booking, eSIM/SIM deployment, and comprehensive online assistance
              </p>
              <Button
                onClick={() => setShowOnline(true)}
                className="bg-[#C9A227] hover:bg-[#B8961F] text-white w-full py-4 rounded-xl font-semibold"
              >
                View Online Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* After Arrival - Offline Support */}
          <div
            className={`relative group transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-[#E8DCC8]">
              <div className="w-16 h-16 bg-[#B8860B]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#B8860B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2C2416] mb-3">On-Ground Concierge</h3>
              <p className="text-[#6B5B4F] mb-6 flex-grow">
                Luxury business fleet, real-time translation devices, professional medical escort, 
                VIP hospital green channels, TCM recovery, and exclusive ground services
              </p>
              <Button
                onClick={() => setShowOffline(true)}
                className="bg-[#B8860B] hover:bg-[#9A7209] text-white w-full py-4 rounded-xl font-semibold"
              >
                View Ground Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Online Service Modal */}
      {showOnline && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C2416]/80 backdrop-blur-sm p-4"
          onClick={() => setShowOnline(false)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] overflow-auto bg-[#FAF6F0] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowOnline(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-[#E8DCC8] hover:bg-[#D4A574] rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-[#2C2416]" />
            </button>
            <img 
              src="/service-online.png" 
              alt="Online Services" 
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Offline Service Modal */}
      {showOffline && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C2416]/80 backdrop-blur-sm p-4"
          onClick={() => setShowOffline(false)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] overflow-auto bg-[#FAF6F0] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowOffline(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-[#E8DCC8] hover:bg-[#D4A574] rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-[#2C2416]" />
            </button>
            <img 
              src="/service-offline.png" 
              alt="Offline Services" 
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
