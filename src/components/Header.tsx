import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../i18n/index';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.header.features, href: '#features' },
    { label: t.header.howItWorks, href: '#how-it-works' },
    { label: t.header.testimonials, href: '#testimonials' },
    { label: t.header.pricing, href: '#/pricing' },
    { label: t.header.contact, href: '#/contact' },
    { label: t.header.download, href: '#download' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ro' ? 'en' : 'ro');
    setIsLangMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#/" className="flex items-center gap-2">
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
            <span className="text-2xl font-bold text-primary-500">SuntOK</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary-500 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-primary-500 transition-colors font-medium"
              >
                <Globe size={18} />
                <span>{language.toUpperCase()}</span>
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[120px]">
                  <button
                    onClick={() => { setLanguage('ro'); setIsLangMenuOpen(false); }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${language === 'ro' ? 'text-primary-500 font-medium' : 'text-gray-700'}`}
                  >
                    🇷🇴 {t.language.ro}
                  </button>
                  <button
                    onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${language === 'en' ? 'text-primary-500 font-medium' : 'text-gray-700'}`}
                  >
                    🇬🇧 {t.language.en}
                  </button>
                </div>
              )}
            </div>

            <a
              href="#download"
              className="bg-primary-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25"
            >
              {t.header.getTheApp}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-gray-700 hover:text-primary-500 transition-colors"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            <button
              className="p-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-primary-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#download"
                className="bg-primary-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-600 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.header.getTheApp}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
