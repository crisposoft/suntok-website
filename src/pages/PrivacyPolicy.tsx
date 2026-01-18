import { useLanguage } from '../i18n/index';
import { Shield, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const content = language === 'ro' ? {
    title: 'Politica de Confidențialitate',
    lastUpdated: 'Ultima actualizare: 17 Ianuarie 2026',
    sections: [
      {
        title: '1. Introducere',
        content: `Bine ați venit la SuntOK ("noi", "nouă" sau "al nostru"). Ne angajăm să protejăm confidențialitatea dumneavoastră și să asigurăm securitatea datelor personale. Această Politică de Confidențialitate explică modul în care colectăm, utilizăm, divulgăm și protejăm informațiile dumneavoastră atunci când utilizați aplicația noastră mobilă SuntOK ("Aplicația").

Vă rugăm să citiți cu atenție această politică. Prin accesarea sau utilizarea Aplicației noastre, confirmați că ați citit, înțeles și sunteți de acord să fiți obligat de toți termenii acestei Politici de Confidențialitate.`
      },
      {
        title: '2. Informațiile pe Care le Colectăm',
        content: `Colectăm următoarele tipuri de informații:

a) Informații Furnizate Direct de Dumneavoastră:
• Numele dumneavoastră (opțional)
• Numărul de telefon al contactului de urgență
• Numele contactului de urgență (opțional)

b) Informații Colectate Automat:
• Marcaje temporale ale check-in-urilor
• Identificatori ai dispozitivului (pentru autentificare anonimă)
• Date de utilizare a aplicației

c) Informații pe Care NU le Colectăm:
• Date de localizare
• Fotografii sau media
• Contacte din dispozitiv (în afara celor furnizate de dumneavoastră)
• Informații financiare`
      },
      {
        title: '3. Cum Utilizăm Informațiile Dumneavoastră',
        content: `Utilizăm informațiile colectate pentru:

• Furnizarea și menținerea funcționalității Aplicației
• Trimiterea notificărilor SMS către contactul dumneavoastră de urgență atunci când nu efectuați check-in timp de 48 de ore
• Îmbunătățirea și optimizarea Aplicației noastre
• Răspunsul la solicitările dumneavoastră sau comunicarea cu dumneavoastră
• Respectarea obligațiilor legale

NU utilizăm datele dumneavoastră pentru:
• Publicitate sau marketing
• Vânzarea către terți
• Crearea de profiluri sau urmărire`
      },
      {
        title: '4. Partajarea și Divulgarea Datelor',
        content: `Putem partaja informațiile dumneavoastră în următoarele circumstanțe limitate:

a) Cu Contactul Dumneavoastră de Urgență: Atunci când nu efectuați check-in timp de 48 de ore consecutive, vom trimite o notificare SMS către contactul de urgență desemnat de dumneavoastră, conținând numele dumneavoastră și o alertă că nu ați efectuat check-in.

b) Furnizori de Servicii: Utilizăm următorii furnizori terți:
• Firebase (Google) pentru autentificare și stocare de date
• MessengerOS pentru livrarea notificărilor SMS

c) Cerințe Legale: Putem divulga informațiile dumneavoastră dacă ni se solicită prin lege sau ca răspuns la solicitări legale valide din partea autorităților publice.

NU vindem, închiriem sau comercializăm informațiile dumneavoastră personale către terți.`
      },
      {
        title: '5. Securitatea Datelor',
        content: `Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră personale, inclusiv:

• Criptare în tranzit (HTTPS/TLS)
• Criptare în repaus pentru datele stocate
• Controale de acces și autentificare
• Audituri regulate de securitate
• Minimizarea datelor

Cu toate acestea, nicio metodă de transmisie prin internet sau stocare electronică nu este 100% sigură. Deși ne străduim să folosim mijloace acceptabile comercial pentru a proteja datele dumneavoastră personale, nu putem garanta securitatea absolută a acestora.`
      },
      {
        title: '6. Păstrarea Datelor',
        content: `Păstrăm datele dumneavoastră personale doar atât timp cât este necesar pentru a îndeplini scopurile pentru care le-am colectat, inclusiv în scopul satisfacerii oricăror cerințe legale, contabile sau de raportare.

• Datele contului: Păstrate până când vă ștergeți contul
• Istoricul check-in-urilor: Păstrat timp de 90 de zile
• Datele contactului de urgență: Păstrate până când le eliminați sau vă ștergeți contul

Puteți solicita ștergerea datelor dumneavoastră în orice moment contactându-ne la adresa de email furnizată mai jos.`
      },
      {
        title: '7. Drepturile Dumneavoastră',
        content: `Conform legislației aplicabile privind protecția datelor, aveți următoarele drepturi:

• Dreptul de Acces: Puteți solicita o copie a datelor personale pe care le deținem despre dumneavoastră
• Dreptul la Rectificare: Puteți solicita corectarea datelor inexacte
• Dreptul la Ștergere: Puteți solicita ștergerea datelor dumneavoastră
• Dreptul la Portabilitatea Datelor: Puteți solicita datele într-un format structurat, utilizat în mod obișnuit
• Dreptul de a Vă Opune: Puteți să vă opuneți anumitor tipuri de prelucrare
• Dreptul de a Vă Retrage Consimțământul: Când prelucrarea se bazează pe consimțământ

Pentru a vă exercita oricare dintre aceste drepturi, vă rugăm să ne contactați la crisposoft@gmail.com.`
      },
      {
        title: '8. Confidențialitatea Copiilor',
        content: `Aplicația noastră nu este destinată copiilor sub 16 ani. Nu colectăm cu bună știință informații de identificare personală de la copii sub 16 ani. Dacă sunteți părinte sau tutore și aflați că copilul dumneavoastră ne-a furnizat date personale, vă rugăm să ne contactați. Dacă aflăm că am colectat date personale de la copii fără verificarea consimțământului parental, luăm măsuri pentru a elimina acele informații de pe serverele noastre.`
      },
      {
        title: '9. Transferuri Internaționale de Date',
        content: `Informațiile dumneavoastră pot fi transferate către — și menținute pe — computere situate în afara statului, provinciei, țării sau altei jurisdicții guvernamentale unde legile privind protecția datelor pot diferi de cele din jurisdicția dumneavoastră.

Ne asigurăm că toate transferurile de date sunt efectuate în conformitate cu legile aplicabile și că sunt implementate garanții adecvate, inclusiv Clauze Contractuale Standard unde este necesar.`
      },
      {
        title: '10. Modificări ale Acestei Politici de Confidențialitate',
        content: `Ne rezervăm dreptul de a actualiza sau modifica această Politică de Confidențialitate în orice moment. Vă vom notifica despre orice modificări prin postarea noii Politici de Confidențialitate în Aplicație și actualizarea datei "Ultima actualizare".

Continuarea utilizării Aplicației după postarea oricăror modificări constituie acceptarea acelor modificări.`
      },
      {
        title: '11. Contactați-ne',
        content: `Dacă aveți întrebări despre această Politică de Confidențialitate sau practicile noastre privind datele, vă rugăm să ne contactați la:

SuntOK
Email: crisposoft@gmail.com
Locație: România, Uniunea Europeană

Pentru plângeri legate de protecția datelor, aveți și dreptul de a depune o plângere la autoritatea locală de supraveghere a protecției datelor (ANSPDCP în România).`
      }
    ]
  } : {
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: January 17, 2026',
    sections: [
      {
        title: '1. Introduction',
        content: `Welcome to SuntOK ("we," "us," or "our"). We are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application SuntOK (the "App").

Please read this policy carefully. By accessing or using our App, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.`
      },
      {
        title: '2. Information We Collect',
        content: `We collect the following types of information:

a) Information You Provide Directly:
• Your name (optional)
• Emergency contact phone number
• Emergency contact name (optional)

b) Information Collected Automatically:
• Check-in timestamps
• Device identifiers (for anonymous authentication)
• App usage data

c) Information We Do NOT Collect:
• Location data
• Photos or media
• Device contacts (other than those you provide)
• Financial information`
      },
      {
        title: '3. How We Use Your Information',
        content: `We use the information we collect to:

• Provide and maintain the App's functionality
• Send SMS notifications to your emergency contact when you haven't checked in for 48 hours
• Improve and optimize our App
• Respond to your inquiries or communicate with you
• Comply with legal obligations

We do NOT use your data for:
• Advertising or marketing
• Selling to third parties
• Profiling or tracking`
      },
      {
        title: '4. Data Sharing and Disclosure',
        content: `We may share your information in the following limited circumstances:

a) With Your Emergency Contact: When you haven't checked in for 48 consecutive hours, we will send an SMS notification to your designated emergency contact containing your name and an alert that you haven't checked in.

b) Service Providers: We use the following third-party providers:
• Firebase (Google) for authentication and data storage
• MessengerOS for SMS notification delivery

c) Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities.

We do NOT sell, rent, or trade your personal information to third parties.`
      },
      {
        title: '5. Data Security',
        content: `We implement appropriate technical and organizational measures to protect your personal data, including:

• Encryption in transit (HTTPS/TLS)
• Encryption at rest for stored data
• Access controls and authentication
• Regular security audits
• Data minimization practices

However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.`
      },
      {
        title: '6. Data Retention',
        content: `We retain your personal data only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.

• Account data: Retained until you delete your account
• Check-in history: Retained for 90 days
• Emergency contact data: Retained until you remove it or delete your account

You may request deletion of your data at any time by contacting us at the email address provided below.`
      },
      {
        title: '7. Your Rights',
        content: `Under applicable data protection laws, you have the following rights:

• Right to Access: You can request a copy of the personal data we hold about you
• Right to Rectification: You can request correction of inaccurate data
• Right to Erasure: You can request deletion of your data
• Right to Data Portability: You can request your data in a structured, commonly used format
• Right to Object: You can object to certain types of processing
• Right to Withdraw Consent: Where processing is based on consent

To exercise any of these rights, please contact us at crisposoft@gmail.com.`
      },
      {
        title: '8. Children\'s Privacy',
        content: `Our App is not intended for children under the age of 16. We do not knowingly collect personally identifiable information from children under 16. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.`
      },
      {
        title: '9. International Data Transfers',
        content: `Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.

We ensure that all data transfers are conducted in compliance with applicable laws and that appropriate safeguards are in place, including Standard Contractual Clauses where necessary.`
      },
      {
        title: '10. Changes to This Privacy Policy',
        content: `We reserve the right to update or change this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy in the App and updating the "Last Updated" date.

Your continued use of the App after the posting of any changes constitutes acceptance of those changes.`
      },
      {
        title: '11. Contact Us',
        content: `If you have any questions about this Privacy Policy or our data practices, please contact us at:

SuntOK
Email: crisposoft@gmail.com
Location: Romania, European Union

For data protection complaints, you also have the right to lodge a complaint with your local data protection supervisory authority (ANSPDCP in Romania).`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <a 
            href="#/"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">{language === 'ro' ? 'Înapoi la pagina principală' : 'Back to Home'}</span>
          </a>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{content.title}</h1>
              <p className="text-gray-500 text-sm">{content.lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 sm:p-12">
            {content.sections.map((section, index) => (
              <div key={index} className={index > 0 ? 'mt-10' : ''}>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} SuntOK. {language === 'ro' ? 'Toate drepturile rezervate.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
