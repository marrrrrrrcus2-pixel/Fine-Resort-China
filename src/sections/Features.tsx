import { useEffect, useRef, useState } from 'react';
import { Car, Building2, Stethoscope, HeartPulse, Utensils, Sparkles, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: Car,
    title: 'Exclusive Business Fleet',
    description: 'Premium luxury vans (max 5 passengers) with dedicated English-speaking ground host, ensuring comfortable and safe transportation throughout your journey.',
    color: '#B8860B',
  },
  {
    icon: Building2,
    title: 'Wellness Hotels',
    description: 'Carefully selected hotels with integrated wellness facilities, offering a perfect blend of comfort and health-focused amenities for your restorative stay.',
    color: '#C9A227',
  },
  {
    icon: Stethoscope,
    title: 'TCM Experience',
    description: 'Authentic traditional Chinese medicine treatments including acupuncture, cupping, and herbal therapy guided by experienced practitioners.',
    color: '#8B6914',
  },
  {
    icon: HeartPulse,
    title: 'Bilingual First-Aid Staff',
    description: 'Professional companions equipped with first-aid knowledge, ensuring your safety and peace of mind throughout the entire journey.',
    color: '#B8860B',
  },
  {
    icon: Utensils,
    title: 'Gourmet Dining',
    description: 'Curated culinary experiences featuring authentic regional cuisines, from Michelin-recommended restaurants to traditional local delicacies.',
    color: '#C9A227',
  },
  {
    icon: Sparkles,
    title: 'Cultural Immersion',
    description: 'Exclusive access to classical gardens, heritage sites, and traditional arts experiences with expert local guides.',
    color: '#8B6914',
  },
  {
    icon: Shield,
    title: 'VIP Medical Access',
    description: 'Green-channel access to top-tier hospitals like PUMCH and FAHZU with professional medical escort services.',
    color: '#B8860B',
  },
  {
    icon: Clock,
    title: '24/7 Concierge',
    description: 'Round-the-clock virtual assistance using AI-powered tools to navigate local apps and handle any travel needs instantly.',
    color: '#C9A227',
  },
];

export default function Features() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => new Set([...prev, index]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#C9A227]/10 text-[#C9A227] rounded-full text-sm font-medium mb-4 animate-fade-in">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2416] mb-4 animate-slide-up">
            Premium Service Features
          </h2>
          <p className="text-lg text-[#6B5B4F] max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Exclusive services designed for discerning travelers seeking authentic China experiences
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={feature.title}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 cursor-default border border-[#E8DCC8] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                  transitionTimingFunction: 'var(--ease-expo-out)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <Icon
                    className="w-7 h-7 transition-colors duration-300"
                    style={{ color: feature.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#2C2416] mb-3 group-hover:text-[#B8860B] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#6B5B4F] text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ borderColor: `${feature.color}30` }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#6B5B4F] mb-6">
            Ready to embark on your premium China journey?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8860B] text-white rounded-full font-semibold hover:bg-[#9A7209] transition-all duration-300 btn-magnetic shadow-xl shadow-[#B8860B]/30"
          >
            Start Your Journey
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
