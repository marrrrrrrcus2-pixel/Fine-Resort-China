import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Selected Routes', href: '#routes' },
  { label: 'Pre-Trip Support', href: '#services' },
  { label: 'On-Ground Concierge', href: '#services' },
  { label: 'Wellness Services', href: '#services' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF6F0]/95 backdrop-blur-lg shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
      style={{
        transitionTimingFunction: 'var(--ease-expo-out)',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/navbar-bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0]/80 via-[#FAF6F0]/60 to-[#FAF6F0]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                isScrolled ? 'bg-[#B8860B]' : 'bg-[#B8860B]/90'
              }`}
            >
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span
              className={`font-bold text-lg transition-colors duration-300 ${
                isScrolled ? 'text-[#2C2416]' : 'text-[#2C2416]'
              }`}
            >
              Fine Resort China
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <button
                key={link.href + index}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium link-underline transition-all duration-300 text-[#2C2416] hover:text-[#B8860B]`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-[#B8860B] hover:bg-[#9A7209] text-white px-6 py-2 rounded-full font-medium btn-magnetic"
            >
              Inquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[#E8DCC8] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#2C2416]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2C2416]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
          style={{
            transitionTimingFunction: 'var(--ease-expo-out)',
          }}
        >
          <div className="bg-[#FAF6F0]/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href + link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-[#2C2416] hover:bg-[#E8DCC8] rounded-xl transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-[#B8860B] hover:bg-[#9A7209] text-white mt-2 rounded-xl"
            >
              Inquire Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
