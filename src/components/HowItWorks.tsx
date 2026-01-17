import { Download, UserPlus, Phone, CheckCircle } from 'lucide-react';
import { useLanguage } from '../i18n/index';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Download,
      step: '01',
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
    },
    {
      icon: UserPlus,
      step: '02',
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
    },
    {
      icon: Phone,
      step: '03',
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
    },
    {
      icon: CheckCircle,
      step: '04',
      title: t.howItWorks.step4Title,
      description: t.howItWorks.step4Desc,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.howItWorks.title1} <span className="text-gradient">{t.howItWorks.title2}</span>
          </h2>
          <p className="text-lg text-gray-600">
            {t.howItWorks.description}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Step Number Circle */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl shadow-primary-500/10 border-2 border-primary-100 group-hover:border-primary-300 transition-colors">
                      <step.icon className="w-8 h-8 text-primary-500" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/30 hover:shadow-primary-500/40 hover:scale-105"
          >
            {t.howItWorks.getStarted}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
