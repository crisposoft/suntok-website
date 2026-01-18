import { useLanguage } from '../i18n/index';
import { Mail, ArrowLeft, Send, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoSubject = encodeURIComponent(formData.subject || 'SuntOK Contact Form');
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:crisposoft@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <span className="font-medium">{t.contactPage.backToHome}</span>
          </a>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">{t.contactPage.title}</h1>
              <p className="text-white/80">{t.contactPage.subtitle}</p>
            </div>
          </div>
          <p className="text-white/90 max-w-2xl mt-4">{t.contactPage.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contactPage.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contactPage.form.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contactPage.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contactPage.form.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contactPage.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contactPage.form.subjectPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contactPage.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder={t.contactPage.form.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02]"
                >
                  <Send size={20} />
                  {t.contactPage.form.send}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t.contactPage.contactInfo.title}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t.contactPage.contactInfo.email}</p>
                    <a href="mailto:crisposoft@gmail.com" className="text-gray-900 font-medium hover:text-primary-500 transition-colors">
                      crisposoft@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t.contactPage.contactInfo.location}</p>
                    <p className="text-gray-900 font-medium">{t.contactPage.contactInfo.locationValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t.contactPage.contactInfo.hours}</p>
                    <p className="text-gray-900 font-medium">{t.contactPage.contactInfo.hoursValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t.contactPage.faq.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">{t.contactPage.faq.q1}</p>
                  <p className="text-sm text-gray-600 mt-1">{t.contactPage.faq.a1}</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">{t.contactPage.faq.q2}</p>
                  <p className="text-sm text-gray-600 mt-1">{t.contactPage.faq.a2}</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">{t.contactPage.faq.q3}</p>
                  <p className="text-sm text-gray-600 mt-1">{t.contactPage.faq.a3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} SuntOK. {t.contactPage.allRightsReserved}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
