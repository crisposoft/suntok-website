import { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n/index';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'contact' | 'pricing' >('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/privacy-policy') {
        setCurrentPage('privacy');
        window.scrollTo(0, 0);
      } else if (hash === '#/terms-of-service') {
        setCurrentPage('terms');
        window.scrollTo(0, 0);
      } else if (hash === '#/contact') {
        setCurrentPage('contact');
        window.scrollTo(0, 0);
      } else if (hash === '#/pricing') {
        setCurrentPage('pricing');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <LanguageProvider>
      {currentPage === 'privacy' ? (
        <PrivacyPolicy />
      ) : currentPage === 'terms' ? (
        <TermsOfService />
      ) : currentPage === 'contact' ? (
        <Contact />
      ) : currentPage === 'pricing' ? (
        <Pricing />
      ) : (
        <div className="min-h-screen bg-white">
          <Header isScrolled={isScrolled} />
          <main>
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <Download />
          </main>
          <Footer />
        </div>
      )}
    </LanguageProvider>
  );
}

export default App;
