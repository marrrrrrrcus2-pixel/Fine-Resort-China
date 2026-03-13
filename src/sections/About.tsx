import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const routeHighlights = [
  {
    icon: 'hospital',
    title: 'VIP Medical Access',
    description: 'Green channels at top-tier hospitals with professional escort',
  },
  {
    icon: 'leaf',
    title: 'TCM Wellness',
    description: 'Authentic traditional Chinese medicine treatments and recovery',
  },
  {
    icon: 'landmark',
    title: 'Cultural Immersion',
    description: 'Classical gardens, historical sites, and heritage experiences',
  },
];

export default function About() {
  const [showYangtze, setShowYangtze] = useState(false);
  const [showBay, setShowBay] = useState(false);
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
    <section id="routes" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-[#B8860B]/10 text-[#B8860B] rounded-full text-sm font-medium mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Selected Touring Routes
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2416] mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Curated Journey Experiences
          </h2>
          <p
            className={`text-lg text-[#6B5B4F] max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Six-day itineraries blending Western clinical precision with traditional Chinese wellness and cultural heritage
          </p>
        </div>

        {/* Route Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Yangtze River Delta Route */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative group cursor-pointer" onClick={() => setShowYangtze(true)}>
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
                    6 Days
                  </span>
                  <h3 className="text-3xl font-bold mb-2">Yangtze Delta</h3>
                  <p className="text-white/80 text-lg">Elite Wellness Journey</p>
                </div>
                <p className="text-white/70 mb-8">
                  A six-day premium journey through China's Yangtze River Delta, 
                  blending Western clinical precision medicine with traditional Chinese wellness and cultural restoration
                </p>
                <div className="flex items-center gap-2 text-[#F7C59F] font-semibold group-hover:gap-4 transition-all">
                  <span>View Detailed Itinerary</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* China Bay Area Route */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative group cursor-pointer" onClick={() => setShowBay(true)}>
              <div className="bg-gradient-to-br from-[#8B6914] to-[#C4A35A] rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
                    6 Days
                  </span>
                  <h3 className="text-3xl font-bold mb-2">China Bay Area</h3>
                  <p className="text-white/80 text-lg">Heritage & Wellness</p>
                </div>
                <p className="text-white/70 mb-8">
                  Lingnan cultural heritage and wellness journey covering Hong Kong, Shenzhen, 
                  Shantou, and Guangzhou with premium high-speed rail luxury experiences
                </p>
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                  <span>View Detailed Itinerary</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Route Highlights */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {routeHighlights.map((highlight) => (
            <div key={highlight.title} className="text-center">
              <div className="w-12 h-12 bg-[#B8860B]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                {highlight.icon === 'hospital' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#B8860B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"/><path d="M12 11v6"/><path d="M9 14h6"/></svg>
                )}
                {highlight.icon === 'leaf' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#B8860B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                )}
                {highlight.icon === 'landmark' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#B8860B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                )}
              </div>
              <h4 className="font-semibold text-[#2C2416] mb-1">{highlight.title}</h4>
              <p className="text-sm text-[#6B5B4F]">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Yangtze Route Modal */}
      {showYangtze && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C2416]/80 backdrop-blur-sm p-4"
          onClick={() => setShowYangtze(false)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] overflow-auto bg-[#FAF6F0] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowYangtze(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-[#E8DCC8] hover:bg-[#D4A574] rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-[#2C2416]" />
            </button>
            <img 
              src="/route-yangtze.png" 
              alt="Yangtze Delta Route" 
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Bay Area Route Modal */}
      {showBay && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C2416]/80 backdrop-blur-sm p-4"
          onClick={() => setShowBay(false)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] overflow-auto bg-[#FAF6F0] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowBay(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-[#E8DCC8] hover:bg-[#D4A574] rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-[#2C2416]" />
            </button>
            <img 
              src="/route-bay.png" 
              alt="China Bay Area Route" 
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
