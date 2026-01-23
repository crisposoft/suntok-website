import { useLanguage } from '../i18n/index';
import { ArrowLeft, Check, X, Crown, Zap } from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <a 
            href="#/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">{t.pricingPage.backToHome}</span>
          </a>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Crown className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">{t.pricingPage.title}</h1>
              <p className="text-white/80">{t.pricingPage.subtitle}</p>
            </div>
          </div>
          <p className="text-white/90 max-w-2xl mt-4">{t.pricingPage.description}</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className={`font-medium transition-colors ${!isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
            {t.pricingPage.monthly}
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-16 h-8 rounded-full transition-colors ${
              isYearly ? 'bg-primary-500' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                isYearly ? 'translate-x-9' : 'translate-x-1'
              }`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`font-medium transition-colors ${isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
              {t.pricingPage.yearly}
            </span>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
              {t.pricingPage.savePercent}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{t.pricingPage.free.name}</h3>
                <p className="text-sm text-gray-500">{t.pricingPage.free.tagline}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">{t.pricingPage.free.price}</span>
              <span className="text-gray-500 ml-2">{t.pricingPage.free.period}</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{t.pricingPage.free.feature1}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{t.pricingPage.free.feature2}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{t.pricingPage.free.feature3}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{t.pricingPage.free.feature4}</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{t.pricingPage.free.notIncluded1}</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{t.pricingPage.free.notIncluded2}</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{t.pricingPage.free.notIncluded3}</span>
              </li>
            </ul>

            <a
              href="#download"
              className="block w-full text-center bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
            >
              {t.pricingPage.free.cta}
            </a>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl shadow-xl p-8 relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
              {t.pricingPage.premium.badge}
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.pricingPage.premium.name}</h3>
                  <p className="text-sm text-white/70">{t.pricingPage.premium.tagline}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {isYearly ? t.pricingPage.premium.priceYearly : t.pricingPage.premium.priceMonthly}
                </span>
                <span className="text-white/70 ml-2">
                  {isYearly ? t.pricingPage.premium.periodYearly : t.pricingPage.premium.periodMonthly}
                </span>
                {isYearly && (
                  <div className="text-white/60 text-sm mt-1">
                    {t.pricingPage.premium.yearlyNote}
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{t.pricingPage.premium.feature1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{t.pricingPage.premium.feature2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{t.pricingPage.premium.feature3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{t.pricingPage.premium.feature4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{t.pricingPage.premium.feature5}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{t.pricingPage.premium.feature6}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{t.pricingPage.premium.feature7}</span>
                </li>
              </ul>

              <a
                href="#download"
                className="block w-full text-center bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg"
              >
                {t.pricingPage.premium.cta}
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">{t.pricingPage.faq.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">{t.pricingPage.faq.q1}</h3>
              <p className="text-gray-600 text-sm">{t.pricingPage.faq.a1}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">{t.pricingPage.faq.q2}</h3>
              <p className="text-gray-600 text-sm">{t.pricingPage.faq.a2}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">{t.pricingPage.faq.q3}</h3>
              <p className="text-gray-600 text-sm">{t.pricingPage.faq.a3}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">{t.pricingPage.faq.q4}</h3>
              <p className="text-gray-600 text-sm">{t.pricingPage.faq.a4}</p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} SuntOK. {t.pricingPage.allRightsReserved}</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
