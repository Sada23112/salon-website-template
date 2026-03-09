import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { business } from '../config/business';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Booking', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll shadow effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-background transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img
              src={business.logoUrl}
              alt={`${business.businessName} logo`}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-accent"
            />
            <span className="text-lg font-serif font-bold text-foreground hidden sm:inline">
              {business.businessName}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted hover:text-accent transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm"
            >
              <Phone size={16} />
              <span>{business.phone}</span>
            </a>
            <a
              href="#booking"
              className="px-6 py-2.5 bg-accent text-white rounded-sm hover:bg-opacity-90 transition-all font-medium text-sm"
            >
              Book Now
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-accent-light">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2.5 text-muted hover:bg-accent-light hover:text-accent transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${business.phone}`}
              className="block px-4 py-2.5 text-muted hover:bg-accent-light hover:text-accent transition-colors text-sm"
            >
              {business.phone}
            </a>
            <a
              href="#booking"
              className="block m-4 px-6 py-2.5 bg-accent text-white rounded-sm text-center hover:bg-opacity-90 transition-all font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
