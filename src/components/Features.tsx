import { Shield, Bell, Clock, Globe, Heart, Smartphone } from 'lucide-react';
import { useLanguage } from '../i18n/index';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Smartphone,
      title: t.features.oneTapCheckIn,
      description: t.features.oneTapCheckInDesc,
      color: 'bg-blue-500',
    },
    {
      icon: Bell,
      title: t.features.automaticAlerts,
      description: t.features.automaticAlertsDesc,
      color: 'bg-primary-500',
    },
    {
      icon: Shield,
      title: t.features.privacyFirst,
      description: t.features.privacyFirstDesc,
      color: 'bg-green-500',
    },
    {
      icon: Clock,
      title: t.features.dailyReminders,
      description: t.features.dailyRemindersDesc,
      color: 'bg-purple-500',
    },
    {
      icon: Globe,
      title: t.features.multiLanguage,
      description: t.features.multiLanguageDesc,
      color: 'bg-indigo-500',
    },
    {
      icon: Heart,
      title: t.features.peaceOfMind,
      description: t.features.peaceOfMindDesc,
      color: 'bg-red-500',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.features.title1}{' '}
            <span className="text-gradient">{t.features.title2}</span>
          </h2>
          <p className="text-lg text-gray-600">
            {t.features.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div
                className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
