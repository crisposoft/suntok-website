import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../i18n/index';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t.testimonials.testimonial1Name,
      role: t.testimonials.testimonial1Role,
      content: t.testimonials.testimonial1,
      rating: 5,
      avatar: '👩',
    },
    {
      name: t.testimonials.testimonial2Name,
      role: t.testimonials.testimonial2Role,
      content: t.testimonials.testimonial2,
      rating: 5,
      avatar: '👴',
    },
    {
      name: t.testimonials.testimonial3Name,
      role: t.testimonials.testimonial3Role,
      content: t.testimonials.testimonial3,
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: t.testimonials.testimonial4Name,
      role: t.testimonials.testimonial4Role,
      content: t.testimonials.testimonial4,
      rating: 5,
      avatar: '👨',
    },
  ];

  const stats = [
    { number: '10K+', label: t.testimonials.activeUsers },
    { number: '99.9%', label: t.testimonials.uptime },
    { number: '50K+', label: t.testimonials.dailyCheckIns },
    { number: '4.9★', label: t.testimonials.appRating },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.testimonials.title1} <span className="text-gradient">{t.testimonials.title2}</span>
          </h2>
          <p className="text-lg text-gray-600">
            {t.testimonials.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-primary-500 mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
