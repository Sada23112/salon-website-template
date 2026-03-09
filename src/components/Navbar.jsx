import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { business } from '../config/business';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Booking', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img
              src={business.logoUrl}
              alt={`${business.businessName} logo`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">
              {business.businessName}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-amber-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-2 text-gray-700 hover:text-amber-700 transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">{business.phone}</span>
            </a>
            <a
              href="#booking"
              className="px-6 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors font-medium"
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
          <div className="md:hidden pb-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-amber-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${business.phone}`}
              className="block px-4 py-2 text-gray-700 hover:bg-amber-50 transition-colors"
            >
              {business.phone}
            </a>
            <a
              href="#booking"
              className="block m-4 px-6 py-2 bg-amber-700 text-white rounded-lg text-center hover:bg-amber-800 transition-colors font-medium"
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
