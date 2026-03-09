import { useState } from 'react';
import { business } from '../config/business';
import { supabase } from '../lib/supabaseClient';

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
    <section id="booking" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-600">
            Reserve your spot and let us pamper you
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {message.text && (
            <div
              className={`mb-6 p-4 rounded-lg ${
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
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent bg-white"
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
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="appointment_date"
                  value={formData.appointment_date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Time
                </label>
                <input
                  type="time"
                  name="appointment_time"
                  value={formData.appointment_time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Booking...' : 'Confirm Booking'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center mb-4">
              Prefer to book directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${business.phone}`}
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-semibold text-center"
              >
                Call Us
              </a>
              <a
                href={business.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
