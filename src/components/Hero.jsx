import { MessageCircle } from 'lucide-react';
import { business } from '../config/business';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={business.heroImage}
        alt="Salon interior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
          {business.heroHeadline}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-100 mb-8">
          {business.heroSubtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="px-8 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors font-semibold text-lg"
          >
            Book Appointment
          </a>
          <a
            href={business.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
