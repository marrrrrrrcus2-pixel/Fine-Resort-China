import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'marrrrrrrcus@163.com',
    href: 'mailto:marrrrrrrcus@163.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+86 15312036203',
    href: 'tel:+8615312036203',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Shanghai, China',
    href: '#',
  },
];

const countries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Japan',
  'South Korea',
  'Singapore',
  'Malaysia',
  'Thailand',
  'Italy',
  'Spain',
  'Netherlands',
  'Other',
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Message sent! We will get back to you soon.');

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/contact-bg-new.png"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0]/90 via-[#FAF6F0]/70 to-[#FAF6F0]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-[#B8860B]/20 text-[#B8860B] rounded-full text-sm font-medium mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Contact Us
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2416] mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Start Your Journey
          </h2>
          <p
            className={`text-lg text-[#6B5B4F] max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Contact our VIP Travel Advisory Team to finalize your bespoke itinerary
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Contact Info */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                    style={{
                      animationDelay: `${400 + index * 100}ms`,
                    }}
                  >
                    <div className="w-12 h-12 bg-[#B8860B]/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#B8860B] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#B8860B] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-sm text-[#6B5B4F] mb-1">
                        {item.label}
                      </div>
                      <div className="font-medium text-[#2C2416] group-hover:text-[#B8860B] transition-colors duration-300">
                        {item.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Working Hours */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DCC8]">
              <h4 className="font-semibold text-[#2C2416] mb-4">Working Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6B5B4F]">VIP Concierge</span>
                  <span className="font-medium text-[#2C2416]">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B5B4F]">Phone Support</span>
                  <span className="font-medium text-[#2C2416]">9:00 - 21:00 CST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B5B4F]">Email Response</span>
                  <span className="font-medium text-[#2C2416]">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 space-y-6 border border-[#E8DCC8]"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#2C2416]">
                    Name <span className="text-[#B8860B]">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    required
                    className="bg-[#FAF6F0] border-[#E8DCC8] text-[#2C2416] placeholder:text-[#A09080] rounded-xl h-12 focus:border-[#B8860B] focus:ring-[#B8860B]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#2C2416]">
                    Email <span className="text-[#B8860B]">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-[#FAF6F0] border-[#E8DCC8] text-[#2C2416] placeholder:text-[#A09080] rounded-xl h-12 focus:border-[#B8860B] focus:ring-[#B8860B]/20"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#2C2416]">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 234 567 8900"
                    className="bg-[#FAF6F0] border-[#E8DCC8] text-[#2C2416] placeholder:text-[#A09080] rounded-xl h-12 focus:border-[#B8860B] focus:ring-[#B8860B]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-[#2C2416]">
                    Country/Region
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-[#FAF6F0] border-[#E8DCC8] text-[#2C2416] rounded-xl h-12 focus:border-[#B8860B] focus:ring-[#B8860B]/20">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#2C2416]">
                  Message <span className="text-[#B8860B]">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your travel plans and requirements..."
                  required
                  rows={5}
                  className="bg-[#FAF6F0] border-[#E8DCC8] text-[#2C2416] placeholder:text-[#A09080] rounded-xl resize-none focus:border-[#B8860B] focus:ring-[#B8860B]/20"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full h-14 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-[#2EC4B6] hover:bg-[#2EC4B6]'
                    : 'bg-[#B8860B] hover:bg-[#9A7209]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Sent Successfully
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
