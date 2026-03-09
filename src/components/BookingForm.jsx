import { useState } from 'react';
import { motion } from 'framer-motion';
import { business } from '../config/business';
import { supabase } from '../lib/supabaseClient';
import AnimatedSection from './AnimatedSection';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: business.services[0]?.name || '',
    appointment_date: '',
    appointment_time: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setMessage({ type: '', text: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, phone, service, appointment_date, appointment_time } = formData;

    if (!name || !phone || !service || !appointment_date || !appointment_time) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      setLoading(false);
      return;
    }

    const phoneRegex = /^\+?1?\d{9,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-()]/g, ''))) {
      setMessage({ type: 'error', text: 'Please enter a valid phone number' });
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from('appointments').insert([
        {
          name: name.trim(),
          phone: phone.trim(),
          service,
          appointment_date,
          appointment_time,
          status: 'pending',
        },
      ]);

      if (error) throw error;

      setMessage({
        type: 'success',
        text: 'Booking confirmed! We will contact you soon to confirm the appointment.',
      });
      setFormData({
        name: '',
        phone: '',
        service: business.services[0]?.name || '',
        appointment_date: '',
        appointment_time: '',
      });

      setTimeout(() => setMessage({ type: '', text: '' }), 5000);
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to book appointment. Please try again or call us directly.',
      });
      console.error('Booking error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-20 sm:py-32 bg-accent-light/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Reserve Your Spot</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Book Your Appointment
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Reserve your spot and let us create your perfect look
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
          className="bg-white rounded-sm shadow-lg p-10">
          {message.text && (
            <div
              className={`mb-6 p-4 rounded-sm ${
                message.type === 'success'
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-accent-light rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-accent-light rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-accent-light rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white text-foreground"
              >
                {business.services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} ({service.price})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Date
                </label>
                <input
                  type="date"
                  name="appointment_date"
                  value={formData.appointment_date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-accent-light rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Time
                </label>
                <input
                  type="time"
                  name="appointment_time"
                  value={formData.appointment_time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-accent-light rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-accent text-white rounded-sm hover:bg-opacity-90 transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Booking...' : 'Confirm Booking'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-accent-light">
            <p className="text-muted text-center mb-6 text-sm">
              Prefer to reach out directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${business.phone}`}
                className="px-6 py-2.5 bg-foreground text-white rounded-sm hover:bg-opacity-90 transition-all font-medium text-center text-sm"
              >
                Call Us
              </a>
              <a
                href={business.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-all font-medium text-center text-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
