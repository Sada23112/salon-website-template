import { MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { business } from '../config/business';
import AnimatedSection from './AnimatedSection';

export default function Location() {
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-accent-light/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-20">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Get In Touch</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Visit Our Salon
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Conveniently located and always ready to welcome you
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-white rounded-sm shadow-md p-8 border-l-4 border-accent hover:shadow-lg transition-shadow group">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Address
                  </h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {business.address}
                    <br />
                    {business.city}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${business.address}, ${business.city}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-accent text-white rounded-sm hover:bg-opacity-90 transition-all font-medium text-xs"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-white rounded-sm shadow-md p-8 border-l-4 border-accent hover:shadow-lg transition-shadow group">
              <div className="flex items-start gap-4">
                <Phone className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Contact
                  </h3>
                  <p className="text-muted text-sm">
                    <a
                      href={`tel:${business.phone}`}
                      className="hover:text-accent transition-colors font-medium"
                    >
                      {business.phone}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-white rounded-sm shadow-md p-8 border-l-4 border-accent hover:shadow-lg transition-shadow group">
              <div className="flex items-start gap-4">
                <Clock className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Hours
                  </h3>
                  <div className="space-y-2 text-muted text-sm">
                    <p>
                      <span className="font-semibold">Mon - Thu:</span>{' '}
                      {business.businessHours.monday}
                    </p>
                    <p>
                      <span className="font-semibold">Friday:</span>{' '}
                      {business.businessHours.friday}
                    </p>
                    <p>
                      <span className="font-semibold">Saturday:</span>{' '}
                      {business.businessHours.saturday}
                    </p>
                    <p>
                      <span className="font-semibold">Sunday:</span>{' '}
                      {business.businessHours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            className="rounded-sm overflow-hidden shadow-lg">
            <iframe
              src={business.googleMapsEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon location map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
