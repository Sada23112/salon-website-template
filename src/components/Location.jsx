import { MapPin, Clock, Phone } from 'lucide-react';
import { business } from '../config/business';

export default function Location() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Located in the heart of the city, easily accessible and always welcoming
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-amber-700">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
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
                    className="inline-block mt-3 px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors font-semibold text-sm"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-amber-700">
              <div className="flex items-start gap-4">
                <Phone className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Contact
                  </h3>
                  <p className="text-gray-700">
                    <a
                      href={`tel:${business.phone}`}
                      className="hover:text-amber-700 transition-colors"
                    >
                      {business.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-amber-700">
              <div className="flex items-start gap-4">
                <Clock className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Hours
                  </h3>
                  <div className="space-y-2 text-gray-700 text-sm">
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
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={business.googleMapsEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon location map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
