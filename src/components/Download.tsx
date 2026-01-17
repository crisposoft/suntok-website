import { Apple, Play } from 'lucide-react';
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-900 transition-all hover:scale-105"
            >
              <Apple className="w-8 h-8" />
              <div className="text-left">
                <p className="text-xs text-gray-400">{t.download.downloadOnThe}</p>
                <p className="text-lg font-semibold">{t.download.appStore}</p>
              </div>
            </a>
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-900 transition-all hover:scale-105"
            >
              <Play className="w-8 h-8" />
              <div className="text-left">
                <p className="text-xs text-gray-400">{t.download.getItOn}</p>
                <p className="text-lg font-semibold">{t.download.googlePlay}</p>
              </div>
            </a>
          </div>

          {/* QR Code */}
          <div className="inline-flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-3xl p-6">
            <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mb-4">
              {/* Placeholder QR Code */}
              <svg viewBox="0 0 100 100" className="w-24 h-24">
                <rect x="10" y="10" width="25" height="25" fill="#000" />
                <rect x="65" y="10" width="25" height="25" fill="#000" />
                <rect x="10" y="65" width="25" height="25" fill="#000" />
                <rect x="40" y="40" width="20" height="20" fill="#000" />
                <rect x="15" y="15" width="15" height="15" fill="#fff" />
                <rect x="70" y="15" width="15" height="15" fill="#fff" />
                <rect x="15" y="70" width="15" height="15" fill="#fff" />
                <rect x="20" y="20" width="5" height="5" fill="#000" />
                <rect x="75" y="20" width="5" height="5" fill="#000" />
                <rect x="20" y="75" width="5" height="5" fill="#000" />
                <rect x="65" y="65" width="10" height="10" fill="#000" />
                <rect x="80" y="65" width="10" height="10" fill="#000" />
                <rect x="65" y="80" width="10" height="10" fill="#000" />
              </svg>
            </div>
            <p className="text-white/80 text-sm">{t.download.scanToDownload}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
