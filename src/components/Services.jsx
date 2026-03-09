import { business } from '../config/business';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="services" className="py-20 sm:py-32 bg-accent-light/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-20">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Our Expertise</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Premium Services
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Expertly crafted salon services designed to enhance your natural beauty and confidence
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {business.services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-white rounded-sm shadow-md hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300 p-8 border-l-4 border-accent group"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                {service.name}
              </h3>
              <p className="text-3xl font-serif font-bold text-accent mb-8">
                {service.price}
              </p>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-sm hover:bg-opacity-90 transition-all font-medium text-sm group-hover:gap-3"
              >
                Book Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
