import { useLanguage } from '../i18n/index';
import { FileText, ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  const { language } = useLanguage();

  const content = language === 'ro' ? {
    title: 'Termeni și Condiții',
    lastUpdated: 'Ultima actualizare: 17 Ianuarie 2026',
    sections: [
      {
        title: '1. Acceptarea Termenilor',
        content: `Prin descărcarea, instalarea sau utilizarea aplicației mobile SuntOK ("Aplicația"), sunteți de acord să fiți obligat de acești Termeni și Condiții ("Termeni"). Dacă nu sunteți de acord cu acești Termeni, vă rugăm să nu utilizați Aplicația.

Acești Termeni constituie un acord legal între dumneavoastră ("Utilizator", "dumneavoastră") și SuntOK ("Compania", "noi", "nouă", "al nostru") privind utilizarea Aplicației și a serviciilor conexe.

Ne rezervăm dreptul de a modifica acești Termeni în orice moment. Continuarea utilizării Aplicației după astfel de modificări constituie acceptarea noilor Termeni.`
      },
      {
        title: '2. Descrierea Serviciului',
        content: `SuntOK este o aplicație de check-in zilnic pentru siguranță care permite utilizatorilor să:

• Efectueze un check-in zilnic pentru a indica faptul că sunt în siguranță
• Desemneze un contact de urgență care va fi notificat dacă utilizatorul nu efectuează check-in
• Primească notificări de memento pentru check-in zilnic

IMPORTANT: SuntOK NU este un serviciu de urgență. Aplicația este concepută ca un instrument suplimentar de siguranță și nu înlocuiește serviciile de urgență (112), dispozitivele medicale de alertă sau îngrijirea profesională.

În caz de urgență medicală sau de siguranță, sunați întotdeauna serviciile de urgență imediat.`
      },
      {
        title: '3. Eligibilitate',
        content: `Pentru a utiliza Aplicația, trebuie să:

• Aveți cel puțin 16 ani
• Aveți capacitatea legală de a încheia un contract obligatoriu
• Nu fiți o persoană căreia i s-a interzis utilizarea Aplicației conform legilor aplicabile

Prin utilizarea Aplicației, declarați și garantați că îndepliniți toate cerințele de eligibilitate. Dacă utilizați Aplicația în numele unei alte persoane (cum ar fi un părinte în vârstă), declarați că aveți autoritatea legală de a o face și că persoana respectivă a consimțit.`
      },
      {
        title: '4. Contul Utilizatorului',
        content: `a) Crearea Contului: Aplicația utilizează autentificare anonimă. Nu este necesar să creați un cont cu email sau parolă.

b) Securitatea Contului: Sunteți responsabil pentru menținerea securității dispozitivului dumneavoastră și a accesului la Aplicație. Nu suntem răspunzători pentru nicio pierdere care rezultă din accesul neautorizat la contul sau dispozitivul dumneavoastră.

c) Acuratețea Informațiilor: Sunteți de acord să furnizați informații exacte și actuale, în special numărul de telefon al contactului de urgență. Informațiile inexacte pot duce la eșecul notificărilor.`
      },
      {
        title: '5. Utilizare Acceptabilă',
        content: `Sunteți de acord să utilizați Aplicația doar în scopuri legale și în conformitate cu acești Termeni. Sunteți de acord să NU:

• Utilizați Aplicația în scopuri ilegale sau neautorizate
• Încălcați orice legi locale, de stat, naționale sau internaționale
• Furnizați informații false sau înșelătoare
• Vă dați drept o altă persoană sau entitate
• Interferați cu sau perturbați funcționarea Aplicației
• Încercați să obțineți acces neautorizat la sistemele noastre
• Utilizați Aplicația pentru a transmite viruși sau cod malițios
• Colectați sau stocați date personale ale altor utilizatori
• Utilizați Aplicația pentru hărțuire, abuz sau vătămare

Ne rezervăm dreptul de a vă suspenda sau încheia accesul la Aplicație pentru încălcarea acestor termeni.`
      },
      {
        title: '6. Serviciul de Notificare de Urgență',
        content: `a) Funcționare: Dacă nu efectuați check-in în Aplicație timp de 48 de ore consecutive, vom trimite o notificare SMS către contactul dumneavoastră de urgență desemnat.

b) Limitări: Înțelegeți și sunteți de acord că:
• Notificările SMS depind de rețelele de telecomunicații și pot fi întârziate sau eșua
• Trebuie să aveți un contact de urgență valid configurat pentru ca notificările să funcționeze
• Contactul de urgență trebuie să aibă un telefon capabil să primească SMS
• Nu garantăm livrarea sau timpul de livrare al notificărilor SMS
• Compania nu este responsabilă pentru acțiunile sau inacțiunile contactului dumneavoastră de urgență

c) Consimțământul Contactului de Urgență: Prin desemnarea unui contact de urgență, declarați că ați obținut consimțământul acestuia pentru a primi notificări SMS în numele dumneavoastră.`
      },
      {
        title: '7. Drepturi de Proprietate Intelectuală',
        content: `a) Proprietatea Noastră: Aplicația, inclusiv tot conținutul, caracteristicile și funcționalitățile sale (inclusiv, dar fără a se limita la, informații, software, text, afișaje, imagini, video, audio și designul acestora) este deținută de Companie, licențiatorii săi sau alți furnizori de astfel de materiale și este protejată de legile drepturilor de autor, mărcilor comerciale, brevetelor, secretelor comerciale și alte legi de proprietate intelectuală.

b) Licență Limitată: Vă acordăm o licență limitată, neexclusivă, netransferabilă și revocabilă pentru a descărca, instala și utiliza Aplicația pentru uz personal, necomercial, supusă acestor Termeni.

c) Restricții: Nu puteți:
• Copia, modifica sau distribui Aplicația
• Decomanda, dezasambla sau face inginerie inversă a Aplicației
• Elimina orice notificări de proprietate din Aplicație
• Utiliza Aplicația pentru a crea un produs sau serviciu concurent`
      },
      {
        title: '8. Declinarea Garanțiilor',
        content: `APLICAȚIA ESTE FURNIZATĂ "CA ATARE" ȘI "DUPĂ DISPONIBILITATE", FĂRĂ GARANȚII DE NICIUN FEL, FIE EXPRESS SAU IMPLICIT.

ÎN MĂSURA MAXIMĂ PERMISĂ DE LEGE, DECLINĂM TOATE GARANȚIILE, INCLUSIV, DAR FĂRĂ A SE LIMITA LA:
• Garanții implicite de comercializare
• Adecvare pentru un anumit scop
• Neîncălcare
• Funcționare neîntreruptă sau fără erori
• Acuratețea sau fiabilitatea informațiilor

NU GARANTĂM CĂ:
• Aplicația va îndeplini cerințele dumneavoastră
• Aplicația va fi disponibilă în orice moment sau locație
• Orice erori sau defecte vor fi corectate
• Aplicația este lipsită de viruși sau componente dăunătoare`
      },
      {
        title: '9. Limitarea Răspunderii',
        content: `ÎN MĂSURA MAXIMĂ PERMISĂ DE LEGEA APLICABILĂ:

a) ÎN NICIUN CAZ COMPANIA, AFILIAȚII, LICENȚIATORII, FURNIZORII DE SERVICII, ANGAJAȚII, AGENȚII, FUNCȚIONARII SAU DIRECTORII SĂI NU VOR FI RĂSPUNZĂTORI PENTRU DAUNE INDIRECTE, INCIDENTALE, SPECIALE, CONSECINȚIALE SAU PUNITIVE, INCLUSIV, DAR FĂRĂ A SE LIMITA LA:
• Pierderea de profit sau venituri
• Pierderea de date
• Pierderea utilizării
• Pierderea bunăvoinței
• Orice altă pierdere intangibilă

b) RĂSPUNDEREA NOASTRĂ TOTALĂ PENTRU ORICE RECLAMAȚII LEGATE DE ACEȘTI TERMENI SAU APLICAȚIE NU VA DEPĂȘI SUMA PE CARE AȚI PLĂTIT-O PENTRU APLICAȚIE ÎN ULTIMELE 12 LUNI (SAU 50 EUR DACĂ NU AȚI EFECTUAT NICIO PLATĂ).

c) LIMITĂRILE DE MAI SUS SE APLICĂ CHIAR DACĂ REMEDIEREA NU ÎȘI ATINGE SCOPUL ESENȚIAL.`
      },
      {
        title: '10. Despăgubire',
        content: `Sunteți de acord să apărați, despăgubiți și să exonerați Compania și afiliații, licențiatorii și furnizorii de servicii ai acesteia, precum și funcționarii, directorii, angajații, contractorii, agenții, licențiatorii, furnizorii, succesorii și cesionarii acestora de și împotriva oricăror reclamații, răspunderi, daune, judecăți, premii, pierderi, costuri, cheltuieli sau onorarii (inclusiv onorarii rezonabile de avocat) rezultate din sau legate de:

• Încălcarea de către dumneavoastră a acestor Termeni
• Utilizarea de către dumneavoastră a Aplicației
• Informațiile pe care le furnizați prin Aplicație
• Încălcarea oricărei legi sau a drepturilor unui terț`
      },
      {
        title: '11. Încetare',
        content: `a) Încetare de către Dumneavoastră: Puteți înceta utilizarea Aplicației în orice moment prin dezinstalarea acesteia de pe dispozitivul dumneavoastră.

b) Încetare de către Noi: Ne rezervăm dreptul de a suspenda sau înceta accesul dumneavoastră la Aplicație în orice moment, din orice motiv, inclusiv, dar fără a se limita la încălcarea acestor Termeni.

c) Efectele Încetării: La încetare:
• Licența dumneavoastră de utilizare a Aplicației va fi revocată imediat
• Putem șterge datele contului și informațiile asociate
• Secțiunile care prin natura lor ar trebui să supraviețuiască încetării vor rămâne în vigoare`
      },
      {
        title: '12. Legea Aplicabilă și Soluționarea Litigiilor',
        content: `a) Legea Aplicabilă: Acești Termeni vor fi guvernați și interpretați în conformitate cu legile României, fără a ține cont de prevederile privind conflictul de legi.

b) Jurisdicție: Orice litigiu care rezultă din sau în legătură cu acești Termeni va fi supus jurisdicției exclusive a instanțelor din România.

c) Arbitraj: Pentru orice litigii care nu pot fi rezolvate amiabil, părțile sunt de acord să încerce mai întâi medierea înainte de a recurge la litigii.

d) Renunțare la Acțiune Colectivă: Sunteți de acord că orice litigii vor fi conduse doar pe bază individuală și nu într-o acțiune colectivă, consolidată sau reprezentativă.`
      },
      {
        title: '13. Prevederi Generale',
        content: `a) Întregul Acord: Acești Termeni constituie întregul acord între dumneavoastră și noi privind utilizarea Aplicației și înlocuiesc toate acordurile anterioare.

b) Renunțare: Niciun eșec sau întârziere a noastră în exercitarea oricărui drept sau remediu nu va constitui o renunțare la acel drept sau remediu.

c) Separabilitate: Dacă orice prevedere a acestor Termeni este considerată invalidă sau inaplicabilă, celelalte prevederi vor rămâne în vigoare.

d) Cesiune: Nu puteți cesiona sau transfera acești Termeni fără acordul nostru prealabil scris. Putem cesiona drepturile și obligațiile noastre fără restricții.

e) Forță Majoră: Nu vom fi răspunzători pentru niciun eșec sau întârziere în îndeplinirea obligațiilor noastre cauzate de circumstanțe în afara controlului nostru rezonabil.`
      },
      {
        title: '14. Informații de Contact',
        content: `Dacă aveți întrebări despre acești Termeni și Condiții, vă rugăm să ne contactați la:

SuntOK
Email: crisposoft@gmail.com
Locație: România, Uniunea Europeană

Prin utilizarea Aplicației SuntOK, confirmați că ați citit, înțeles și sunteți de acord să fiți obligat de acești Termeni și Condiții.`
      }
    ]
  } : {
    title: 'Terms of Service',
    lastUpdated: 'Last Updated: January 17, 2026',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: `By downloading, installing, or using the SuntOK mobile application (the "App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.

These Terms constitute a legal agreement between you ("User," "you," "your") and SuntOK ("Company," "we," "us," "our") regarding your use of the App and related services.

We reserve the right to modify these Terms at any time. Your continued use of the App following any such changes constitutes your acceptance of the new Terms.`
      },
      {
        title: '2. Description of Service',
        content: `SuntOK is a daily safety check-in application that allows users to:

• Perform a daily check-in to indicate they are safe
• Designate an emergency contact who will be notified if the user doesn't check in
• Receive reminder notifications for daily check-ins

IMPORTANT: SuntOK is NOT an emergency service. The App is designed as a supplementary safety tool and does not replace emergency services (911/112), medical alert devices, or professional care.

In case of a medical or safety emergency, always call emergency services immediately.`
      },
      {
        title: '3. Eligibility',
        content: `To use the App, you must:

• Be at least 16 years of age
• Have the legal capacity to enter into a binding contract
• Not be a person barred from using the App under applicable laws

By using the App, you represent and warrant that you meet all eligibility requirements. If you are using the App on behalf of another person (such as an elderly parent), you represent that you have the legal authority to do so and that such person has consented.`
      },
      {
        title: '4. User Account',
        content: `a) Account Creation: The App uses anonymous authentication. You are not required to create an account with an email or password.

b) Account Security: You are responsible for maintaining the security of your device and access to the App. We are not liable for any loss resulting from unauthorized access to your account or device.

c) Information Accuracy: You agree to provide accurate and current information, particularly your emergency contact's phone number. Inaccurate information may result in notification failures.`
      },
      {
        title: '5. Acceptable Use',
        content: `You agree to use the App only for lawful purposes and in accordance with these Terms. You agree NOT to:

• Use the App for any unlawful or unauthorized purpose
• Violate any local, state, national, or international law
• Provide false or misleading information
• Impersonate any person or entity
• Interfere with or disrupt the App's operation
• Attempt to gain unauthorized access to our systems
• Use the App to transmit viruses or malicious code
• Collect or store personal data of other users
• Use the App for harassment, abuse, or harm

We reserve the right to suspend or terminate your access to the App for violation of these terms.`
      },
      {
        title: '6. Emergency Notification Service',
        content: `a) Operation: If you do not check in on the App for 48 consecutive hours, we will send an SMS notification to your designated emergency contact.

b) Limitations: You understand and agree that:
• SMS notifications depend on telecommunications networks and may be delayed or fail
• You must have a valid emergency contact configured for notifications to work
• The emergency contact must have a phone capable of receiving SMS
• We do not guarantee delivery or timing of SMS notifications
• The Company is not responsible for actions or inactions of your emergency contact

c) Emergency Contact Consent: By designating an emergency contact, you represent that you have obtained their consent to receive SMS notifications on your behalf.`
      },
      {
        title: '7. Intellectual Property Rights',
        content: `a) Our Ownership: The App, including all content, features, and functionality (including but not limited to information, software, text, displays, images, video, audio, and the design thereof) is owned by the Company, its licensors, or other providers of such material and is protected by copyright, trademark, patent, trade secret, and other intellectual property laws.

b) Limited License: We grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App for your personal, non-commercial use, subject to these Terms.

c) Restrictions: You may not:
• Copy, modify, or distribute the App
• Reverse engineer, decompile, or disassemble the App
• Remove any proprietary notices from the App
• Use the App to create a competing product or service`
      },
      {
        title: '8. Disclaimer of Warranties',
        content: `THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.

TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
• Implied warranties of merchantability
• Fitness for a particular purpose
• Non-infringement
• Uninterrupted or error-free operation
• Accuracy or reliability of information

WE DO NOT WARRANT THAT:
• The App will meet your requirements
• The App will be available at any particular time or location
• Any errors or defects will be corrected
• The App is free of viruses or harmful components`
      },
      {
        title: '9. Limitation of Liability',
        content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:

a) IN NO EVENT SHALL THE COMPANY, ITS AFFILIATES, LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
• Loss of profits or revenue
• Loss of data
• Loss of use
• Loss of goodwill
• Any other intangible loss

b) OUR TOTAL LIABILITY FOR ANY CLAIMS RELATED TO THESE TERMS OR THE APP SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE APP IN THE PAST 12 MONTHS (OR €50 IF YOU HAVE NOT MADE ANY PAYMENT).

c) THE ABOVE LIMITATIONS APPLY EVEN IF THE REMEDY FAILS OF ITS ESSENTIAL PURPOSE.`
      },
      {
        title: '10. Indemnification',
        content: `You agree to defend, indemnify, and hold harmless the Company and its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:

• Your violation of these Terms
• Your use of the App
• Information you provide through the App
• Your violation of any law or the rights of a third party`
      },
      {
        title: '11. Termination',
        content: `a) Termination by You: You may terminate your use of the App at any time by uninstalling it from your device.

b) Termination by Us: We reserve the right to suspend or terminate your access to the App at any time, for any reason, including but not limited to violation of these Terms.

c) Effects of Termination: Upon termination:
• Your license to use the App will immediately be revoked
• We may delete your account data and associated information
• Sections that by their nature should survive termination will remain in effect`
      },
      {
        title: '12. Governing Law and Dispute Resolution',
        content: `a) Governing Law: These Terms shall be governed by and construed in accordance with the laws of Romania, without regard to conflict of law provisions.

b) Jurisdiction: Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Romania.

c) Arbitration: For any disputes that cannot be resolved amicably, the parties agree to first attempt mediation before resorting to litigation.

d) Class Action Waiver: You agree that any disputes will be conducted only on an individual basis and not in a class, consolidated, or representative action.`
      },
      {
        title: '13. General Provisions',
        content: `a) Entire Agreement: These Terms constitute the entire agreement between you and us regarding the use of the App and supersede all prior agreements.

b) Waiver: No failure or delay by us in exercising any right or remedy shall constitute a waiver of such right or remedy.

c) Severability: If any provision of these Terms is found invalid or unenforceable, the remaining provisions will continue in effect.

d) Assignment: You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations without restriction.

e) Force Majeure: We shall not be liable for any failure or delay in performing our obligations caused by circumstances beyond our reasonable control.`
      },
      {
        title: '14. Contact Information',
        content: `If you have any questions about these Terms of Service, please contact us at:

SuntOK
Email: crisposoft@gmail.com
Location: Romania, European Union

By using the SuntOK App, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.`
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
              <FileText className="w-6 h-6 text-white" />
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

export default TermsOfService;
