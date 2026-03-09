import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { business } from '../config/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {business.businessName}
            </h3>
            <p className="text-gray-400">
              Premium salon services dedicated to your beauty and confidence
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href={`tel:${business.phone}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {business.phone}
                </a>
              </li>
              <li>
                <p>
                  {business.address}
                  <br />
                  {business.city}
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href={business.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={business.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href={business.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {currentYear} {business.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
