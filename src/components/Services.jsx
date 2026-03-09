import { business } from '../config/business';

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium salon services tailored to enhance your natural beauty and boost your confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {business.services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 border-t-4 border-amber-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.name}
              </h3>
              <p className="text-3xl font-bold text-amber-700 mb-6">
                {service.price}
              </p>
              <a
                href="#booking"
                className="inline-block px-6 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors font-semibold"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
