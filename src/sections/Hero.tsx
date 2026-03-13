import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 500);
      const translateY = scrollY * 0.3;
      contentRef.current.style.opacity = String(opacity);
      contentRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/navbar-bg.png"
          alt="Shanghai Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF6F0]/70 via-[#FAF6F0]/50 to-[#E8DCC8]/60" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#C9A227]/15 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-[#B8860B]/15 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#D4A574]/30 animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        style={{ transition: 'opacity 0.1s linear' }}
      >
        <div className="text-center space-y-8">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF6F0]/90 backdrop-blur-sm rounded-full shadow-lg animate-fade-in"
            style={{ animationDelay: '300ms' }}
          >
            <span className="w-2 h-2 bg-[#B8860B] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[#2C2416]">
              Premium Travel Experiences
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C2416] leading-tight">
            <span
              className="block animate-slide-up"
              style={{ animationDelay: '500ms' }}
            >
              Unlocking
            </span>
            <span
              className="block animate-slide-up"
              style={{ animationDelay: '600ms' }}
            >
              <span className="text-[#B8860B]">Amazing China</span>
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-lg text-[#6B5B4F] max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: '900ms' }}
          >
            Discover the extraordinary blend of ancient heritage and modern luxury. 
            From wellness retreats to cultural immersions, we craft unforgettable journeys 
            through the heart of China.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 animate-scale-in"
            style={{ animationDelay: '1100ms' }}
          >
            <Button
              onClick={scrollToServices}
              size="lg"
              className="bg-[#B8860B] hover:bg-[#9A7209] text-white px-8 py-6 rounded-full font-semibold text-lg btn-magnetic shadow-xl shadow-[#B8860B]/30 animate-pulse-soft"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white px-8 py-6 rounded-full font-semibold text-lg btn-magnetic bg-[#FAF6F0]/80 backdrop-blur-sm"
              onClick={() => {
                const element = document.querySelector('#routes');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Selected Routes
            </Button>
          </div>

          {/* Stats */}
          <div
            className="flex justify-center gap-12 pt-4 animate-fade-in"
            style={{ animationDelay: '1300ms' }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#B8860B]">6-Day</div>
              <div className="text-sm text-[#6B5B4F]">Premium Itineraries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#B8860B]">24/7</div>
              <div className="text-sm text-[#6B5B4F]">Concierge Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#B8860B]">VIP</div>
              <div className="text-sm text-[#6B5B4F]">Medical Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={scrollToServices}
          className="flex flex-col items-center gap-2 text-[#6B5B4F] hover:text-[#B8860B] transition-colors"
        >
          <span className="text-sm font-medium">Scroll to Explore</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
