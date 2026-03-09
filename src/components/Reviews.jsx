import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Client',
      text: 'Absolutely love the results! The team is professional and the salon has such a welcoming atmosphere. I always leave feeling pampered and beautiful.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Regular Client',
      text: 'Best salon experience ever. The stylists really listen to what you want and deliver beyond expectations. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Jessica Lee',
      role: 'Client',
      text: 'From the moment I walked in, I felt at home. The attention to detail and quality of service is unmatched. Worth every penny!',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real testimonials from our happy customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 border-l-4 border-amber-700"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
