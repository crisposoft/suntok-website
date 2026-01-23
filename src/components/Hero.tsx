import { ArrowRight, Shield, Heart, Bell, User, Users, Clock, MessageSquare, Settings, Crown, Check } from 'lucide-react';
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
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Phone Screen */}
                <div className="w-full h-full bg-gray-100 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 flex items-center justify-center z-10">
                    <div className="w-20 h-5 bg-gray-900 rounded-full" />
                  </div>

                  {/* App Content */}
                  <div className="pt-10 px-4 pb-4 h-full flex flex-col overflow-hidden">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-primary-500">{t.hero.appName}</h2>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <Crown size={16} className="text-primary-500" />
                        </div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <Settings size={16} className="text-gray-600" />
                        </div>
                      </div>
                    </div>

                    {/* Your Info Card */}
                    <div className="bg-amber-50 rounded-2xl p-3 mb-2 flex items-center justify-between border border-amber-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <User size={16} className="text-primary-500" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium text-sm">{t.hero.mockup.yourInfo}</p>
                          <p className="text-primary-500 text-xs">{t.hero.mockup.setupRequired}</p>
                        </div>
                      </div>
                      <span className="text-gray-400">›</span>
                    </div>

                    {/* Emergency Contact Card */}
                    <div className="bg-amber-50 rounded-2xl p-3 mb-4 flex items-center justify-between border border-amber-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <Users size={16} className="text-primary-500" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium text-sm">{t.hero.mockup.emergencyContact}</p>
                          <p className="text-primary-500 text-xs">{t.hero.mockup.setupRequired}</p>
                        </div>
                      </div>
                      <span className="text-gray-400">›</span>
                    </div>

                    {/* Check-in Button */}
                    <div className="flex-1 flex flex-col items-center justify-center -mt-2">
                      <div className="relative">
                        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-gray-200 flex items-center justify-center">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 bg-primary-500 rounded-full flex flex-col items-center justify-center shadow-lg">
                            <Check size={32} className="text-white mb-1" strokeWidth={3} />
                            <span className="text-white text-base sm:text-lg font-bold">{t.hero.mockup.suntOkButton}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Status */}
                      <div className="text-center mt-3">
                        <div className="flex items-center justify-center gap-1 text-primary-500 mb-1">
                          <Clock size={14} />
                          <span className="text-sm font-medium">{t.hero.mockup.noCheckIn}</span>
                        </div>
                        <p className="text-gray-500 text-xs">{t.hero.mockup.timeRemaining}: <span className="text-primary-500 font-medium">2d</span></p>
                        <p className="text-gray-400 text-xs">{t.hero.mockup.lastCheckIn}</p>
                      </div>
                    </div>

                    {/* Bottom Options */}
                    <div className="space-y-2 mt-2">
                      {/* Check-in Frequency */}
                      <div className="bg-white rounded-xl p-3 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Clock size={16} className="text-purple-500" />
                          </div>
                          <div>
                            <p className="text-gray-800 font-medium text-xs">{t.hero.mockup.checkInFrequency}</p>
                            <p className="text-gray-500 text-xs">{t.hero.mockup.twoDays}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Crown size={12} className="text-primary-500" />
                          <span className="text-gray-400">›</span>
                        </div>
                      </div>

                      {/* Emergency Message */}
                      <div className="bg-white rounded-xl p-3 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                            <MessageSquare size={16} className="text-primary-500" />
                          </div>
                          <div>
                            <p className="text-gray-800 font-medium text-xs">{t.hero.mockup.emergencyMessage}</p>
                            <p className="text-gray-500 text-xs">{t.hero.mockup.defaultMessage}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Crown size={12} className="text-primary-500" />
                          <span className="text-gray-400">›</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
