import { Heart, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/index';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t.header.features, href: '#features' },
    { label: t.header.howItWorks, href: '#how-it-works' },
    { label: t.header.testimonials, href: '#testimonials' },
    { label: t.header.download, href: '#download' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12l5 5L19 7" />
                </svg>
              </div>
              <span className="text-2xl font-bold">SuntOK</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://apps.apple.com/ro/app/suntok/id6757980654"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
                aria-label="App Store"
              >
                <img
                  src="/badges/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.crisposoft.suntok"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
                aria-label="Google Play"
              >
                <img
                  src="/badges/google-play-badge.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  <span>{t.footer.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span>{t.footer.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {t.footer.copyright.replace('{year}', currentYear.toString())}
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              {t.footer.privacyPolicy}
            </a>
            <a href="#/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
              {t.footer.termsOfService}
            </a>
          </div>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            {t.footer.madeWith} <Heart size={14} className="text-red-500" /> {t.footer.by}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
