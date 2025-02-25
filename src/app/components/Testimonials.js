import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "CEO, TechGrowth Ltd",
      content:
        "Partnering with Profici transformed our business. Their fractional C-suite services provided the expertise we needed to scale without the overhead of full-time executives.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoSolutions",
      content:
        "The strategic guidance from Profici's team helped us double our revenue in just 18 months. Their hands-on approach and deep business acumen made all the difference.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Director, Innovation Hub",
      content:
        "What sets Profici apart is their ability to truly understand your business and provide tailored solutions. They're not just consultants; they're growth partners.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Partners Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Don't just take our word for it. Here's what business leaders say
            about their experience with Profici.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="mt-4">
                <p className="text-lg text-gray-600 italic">
                  "{testimonial.content}"
                </p>
              </blockquote>
              <div className="mt-6">
                <p className="text-base font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
