import { MessageCircle, ArrowRight } from 'lucide-react';
import { business } from '../config/business';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <img
        src={business.heroImage}
        alt="Salon interior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/35"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center py-20">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">Welcome to Excellence</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight text-balance">
          {business.heroHeadline}
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          {business.heroSubtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#booking"
            className="px-8 py-3.5 bg-accent text-white rounded-sm hover:bg-opacity-90 transition-all font-medium flex items-center gap-2 group"
          >
            Book Appointment
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={business.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white rounded-sm hover:bg-white/20 transition-all font-medium flex items-center justify-center gap-2 border border-white/20"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
