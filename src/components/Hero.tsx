import { ArrowRight, Shield, Heart, Bell } from 'lucide-react';
import { useLanguage } from '../i18n/index';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-orange-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield size={16} />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              {t.hero.title1}
              <br />
              <span className="text-gradient">{t.hero.title2}</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#download"
                className="group inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/30 hover:shadow-primary-500/40 hover:scale-105"
              >
                {t.hero.downloadFree}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all border border-gray-200 shadow-lg"
              >
                {t.hero.seeHowItWorks}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="text-green-500" size={20} />
                <span className="text-sm font-medium">{t.hero.private}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-red-500" size={20} />
                <span className="text-sm font-medium">{t.hero.peaceOfMind}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="text-primary-500" size={20} />
                <span className="text-sm font-medium">{t.hero.instantAlerts}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Phone Frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Phone Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-white flex items-center justify-center">
                    <div className="w-20 h-6 bg-gray-900 rounded-full" />
                  </div>

                  {/* App Content */}
                  <div className="pt-16 px-6 pb-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-primary-500 mb-1">{t.hero.appName}</h2>
                      <p className="text-gray-500 text-sm">{t.hero.appSubtitle}</p>
                    </div>

                    {/* User Info */}
                    <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t.hero.yourName}</p>
                      <p className="text-gray-800 font-medium">{t.hero.userName}</p>
                    </div>

                    {/* Emergency Contact */}
                    <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t.hero.emergencyContact}</p>
                      <p className="text-gray-800 font-medium">{t.hero.contactName}</p>
                      <p className="text-gray-500 text-sm">{t.hero.contactPhone}</p>
                    </div>

                    {/* Check-in Button */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <button className="w-40 h-40 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-xl shadow-primary-500/40 hover:scale-105 transition-transform">
                        <span className="text-white text-2xl font-bold">{t.hero.imOkButton}</span>
                      </button>
                      <p className="text-gray-500 text-sm mt-4">{t.hero.lastCheckIn}</p>
                    </div>

                    {/* Reminder */}
                    <div className="bg-primary-50 rounded-2xl p-3 mt-4">
                      <p className="text-primary-700 text-xs text-center">
                        {t.hero.reminder}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {t.hero.checkedIn}
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-100">
                <p className="text-xs text-gray-500">{t.hero.emergencyContact}</p>
                <p className="text-sm font-semibold text-gray-800">{t.hero.notifiedInstantly}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
