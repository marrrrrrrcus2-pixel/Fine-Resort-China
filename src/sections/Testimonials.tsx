import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    role: 'Medical Tourist from USA',
    avatar: '/avatar-1.jpg',
    content: 'The VIP medical escort service was exceptional. Having a professional bilingual companion navigate the hospital procedures for our group made the entire health screening process seamless. The green-channel access to PUMCH was truly world-class.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Richardson',
    role: 'Business Executive from UK',
    avatar: '/avatar-2.jpg',
    content: 'The real-time translation devices were a game-changer during our Yangtze Delta tour. Being able to communicate instantly with 92% accuracy made all the difference. The luxury vehicle with our dedicated ground host was the perfect combination of comfort and convenience.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rossi',
    role: 'Wellness Traveler from Italy',
    avatar: '/avatar-3.jpg',
    content: 'The TCM recovery program at SANGHA Retreat exceeded all expectations. From the climate therapy to the authentic acupuncture and sound healing sessions, every detail was thoughtfully arranged. This was truly a transformative wellness experience.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

  // Auto-play
  useEffect(() => {
    if (!isVisible) return;

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isVisible]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-[#C9A227]/20 text-[#8B6914] rounded-full text-sm font-medium mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Testimonials
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2416] transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            What Our Guests Say
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#B8860B] rounded-full flex items-center justify-center animate-float">
            <Quote className="w-6 h-6 text-white" />
          </div>

          {/* Slider Container */}
          <div className="bg-[#FAF6F0] rounded-3xl p-8 sm:p-12 pt-16 relative overflow-hidden border border-[#E8DCC8]">
            {/* Slides */}
            <div className="relative h-64 sm:h-48">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === activeIndex
                      ? 'opacity-100 translate-x-0'
                      : index < activeIndex
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                  style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
                >
                  <div className="text-center">
                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-[#C9A227] text-xl">
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-lg sm:text-xl text-[#2C2416] leading-relaxed mb-8 max-w-2xl mx-auto">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#E8DCC8] shadow-lg"
                      />
                      <div className="text-left">
                        <div className="font-bold text-[#2C2416]">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-[#6B5B4F]">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goToPrev}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#6B5B4F] hover:text-[#B8860B] hover:shadow-xl transition-all duration-300 btn-magnetic border border-[#E8DCC8]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-8 bg-[#B8860B]'
                        : 'bg-[#E8DCC8] hover:bg-[#D4A574]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#6B5B4F] hover:text-[#B8860B] hover:shadow-xl transition-all duration-300 btn-magnetic border border-[#E8DCC8]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div
          className={`mt-16 flex flex-wrap justify-center gap-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-2 text-[#6B5B4F]">
            <svg className="w-5 h-5 text-[#B8860B]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Verified Reviews</span>
          </div>
          <div className="flex items-center gap-2 text-[#6B5B4F]">
            <svg className="w-5 h-5 text-[#B8860B]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Real Travelers</span>
          </div>
          <div className="flex items-center gap-2 text-[#6B5B4F]">
            <svg className="w-5 h-5 text-[#B8860B]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Premium Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
