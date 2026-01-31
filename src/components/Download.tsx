import { useLanguage } from '../i18n/index';

const Download = () => {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-20 lg:py-32 bg-gradient-to-br from-primary-500 via-primary-600 to-orange-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <span>{t.download.badge}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.download.title}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            {t.download.description}
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://apps.apple.com/ro/app/suntok/id6757980654"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="/badges/app-store-badge.svg"
                alt={t.download.appStore}
                className="h-14 sm:h-16"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.crisposoft.suntok"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="/badges/google-play-badge.svg"
                alt={t.download.googlePlay}
                className="h-14 sm:h-16"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
