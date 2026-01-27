import { useLanguage } from '../i18n/index';
import { FileText, ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  const { language } = useLanguage();

  const content = language === 'ro' ? {
    title: 'Termeni și Condiții',
    lastUpdated: 'Ultima actualizare: 27 Ianuarie 2026',
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
        title: '3. Versiuni Gratuite și Premium',
        content: `SuntOK oferă atât o versiune gratuită cât și o versiune premium (SuntOK Premium):

a) Versiunea Gratuită include:
• Check-in de bază pentru siguranță
• Un contact de urgență
• Frecvență fixă de check-in (2 zile)
• Notificări standard

b) Versiunea Premium (abonament) include toate funcțiile gratuite plus:
• Frecvențe personalizate de check-in (1-30 zile)
• Contacte de urgență multiple
• Mesaje de urgență personalizate
• Notificări prioritare
• Experiență fără reclame
• Suport prioritar`
      },
      {
        title: '4. Achiziții În Aplicație și Abonamente',
        content: `a) Abonamente Disponibile:
SuntOK Premium este disponibil prin următoarele opțiuni de abonament:
• Abonament Lunar: 4,99 RON/lună
• Abonament Anual: 49,99 RON/an (economisiți ~17%)

b) Procesarea Plăților:
• Toate plățile pentru abonamentele SuntOK Premium sunt procesate prin Apple App Store (pentru iOS) sau Google Play Store (pentru Android)
• Nu procesăm și nu stocăm informațiile dumneavoastră de plată direct
• Plata va fi debitată din contul Apple ID sau Google Play la confirmarea achiziției
• Toate prețurile includ taxele aplicabile conform locației dumneavoastră

c) Reînnoirea Abonamentului:
• Abonamentele se reînnoiesc automat la sfârșitul fiecărei perioade de facturare
• Contul dumneavoastră va fi debitat pentru reînnoire în termen de 24 de ore înainte de sfârșitul perioadei curente
• Puteți gestiona și anula abonamentele accesând setările contului dumneavoastră din App Store sau Google Play Store

d) Anulare:
• Puteți anula abonamentul în orice moment prin setările contului App Store sau Google Play Store
• Anularea intră în vigoare la sfârșitul perioadei curente de facturare
• Nu se acordă rambursări pentru perioadele parțiale de abonament
• După anulare, veți avea în continuare acces la funcțiile premium până la sfârșitul perioadei plătite

e) Modificări de Preț:
• Ne rezervăm dreptul de a modifica prețurile abonamentelor
• Veți fi notificat în avans despre orice modificări de preț
• Continuarea abonamentului după modificarea prețului constituie acceptarea noului preț`
      },
      {
        title: '5. Politica de Rambursare',
        content: `Toate achizițiile sunt procesate prin Apple App Store sau Google Play Store și sunt supuse politicilor lor de rambursare:

• Pentru iOS: Solicitările de rambursare trebuie făcute direct la Apple prin pagina lor "Raportează o problemă" sau contactând suportul Apple
• Pentru Android: Solicitările de rambursare trebuie făcute direct prin Google Play Store sau contactând suportul Google

Nu procesăm rambursări direct. Toate solicitările de rambursare sunt la discreția Apple sau Google conform propriilor lor politici.`
      },
      {
        title: '6. Perioade de Încercare Gratuite',
        content: `Putem oferi periodic perioade de încercare gratuită pentru SuntOK Premium:

• Perioadele de încercare gratuită oferă acces complet la funcțiile premium
• La sfârșitul perioadei de încercare, abonamentul se va converti automat într-un abonament plătit, cu excepția cazului în care îl anulați înainte de expirarea perioadei de încercare
• Anulați prin setările contului App Store sau Google Play Store pentru a evita debitarea
• Orice porțiune nefolosită a unei perioade de încercare gratuită va fi pierdută atunci când achiziționați un abonament`
      },
      {
        title: '7. Eligibilitate',
        content: `Pentru a utiliza Aplicația, trebuie să:

• Aveți cel puțin 16 ani
• Aveți capacitatea legală de a încheia un contract obligatoriu
• Nu fiți o persoană căreia i s-a interzis utilizarea Aplicației conform legilor aplicabile

Prin utilizarea Aplicației, declarați și garantați că îndepliniți toate cerințele de eligibilitate. Dacă utilizați Aplicația în numele unei alte persoane (cum ar fi un părinte în vârstă), declarați că aveți autoritatea legală de a o face și că persoana respectivă a consimțit.`
      },
      {
        title: '8. Contul Utilizatorului',
        content: `a) Crearea Contului: Aplicația utilizează autentificare anonimă. Nu este necesar să creați un cont cu email sau parolă.

b) Securitatea Contului: Sunteți responsabil pentru menținerea securității dispozitivului dumneavoastră și a accesului la Aplicație. Nu suntem răspunzători pentru nicio pierdere care rezultă din accesul neautorizat la contul sau dispozitivul dumneavoastră.

c) Acuratețea Informațiilor: Sunteți de acord să furnizați informații exacte și actuale, în special numărul de telefon al contactului de urgență. Informațiile inexacte pot duce la eșecul notificărilor.`
      },
      {
        title: '9. Utilizare Acceptabilă',
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
        title: '10. Serviciul de Notificare de Urgență',
        content: `a) Funcționare: Dacă nu efectuați check-in în Aplicație în intervalul configurat, vom trimite o notificare SMS către contactul dumneavoastră de urgență desemnat.

b) Limitări: Înțelegeți și sunteți de acord că:
• Notificările SMS depind de rețelele de telecomunicații și pot fi întârziate sau eșua
• Trebuie să aveți un contact de urgență valid configurat pentru ca notificările să funcționeze
• Contactul de urgență trebuie să aibă un telefon capabil să primească SMS
• Nu garantăm livrarea sau timpul de livrare al notificărilor SMS
• Compania nu este responsabilă pentru acțiunile sau inacțiunile contactului dumneavoastră de urgență

c) Consimțământul Contactului de Urgență: Prin desemnarea unui contact de urgență, declarați că ați obținut consimțământul acestuia pentru a primi notificări SMS în numele dumneavoastră.`
      },
      {
        title: '11. Drepturi de Proprietate Intelectuală',
        content: `a) Proprietatea Noastră: Aplicația, inclusiv tot conținutul, caracteristicile și funcționalitățile sale (inclusiv, dar fără a se limita la, informații, software, text, afișaje, imagini, video, audio și designul acestora) este deținută de Companie, licențiatorii săi sau alți furnizori de astfel de materiale și este protejată de legile drepturilor de autor, mărcilor comerciale, brevetelor, secretelor comerciale și alte legi de proprietate intelectuală.

b) Licență Limitată: Vă acordăm o licență limitată, neexclusivă, netransferabilă și revocabilă pentru a descărca, instala și utiliza Aplicația pentru uz personal, necomercial, supusă acestor Termeni.

c) Restricții: Nu puteți:
• Copia, modifica sau distribui Aplicația
• Decomanda, dezasambla sau face inginerie inversă a Aplicației
• Elimina orice notificări de proprietate din Aplicație
• Utiliza Aplicația pentru a crea un produs sau serviciu concurent`
      },
      {
        title: '12. Acordul Apple și Recunoașteri',
        content: `Această secțiune se aplică pentru utilizatorii care descarcă Aplicația din Apple App Store:

a) Recunoaștere: Recunoașteți că acești Termeni sunt încheiate între dumneavoastră și SuntOK, nu cu Apple Inc. ("Apple"). SuntOK, nu Apple, este singura responsabilă pentru Aplicație și conținutul acesteia.

b) Licență: Licența acordată pentru Aplicație este limitată la o licență netransferabilă de utilizare a Aplicației pe orice dispozitiv Apple deținut sau controlat de dumneavoastră, conform Regulilor de Utilizare din Termenii de Serviciu ai Apple App Store.

c) Întreținere și Suport: SuntOK este singura responsabilă pentru furnizarea oricăror servicii de întreținere și suport pentru Aplicație. Recunoașteți că Apple nu are nicio obligație de a furniza servicii de întreținere și suport pentru Aplicație.

d) Garanție: În cazul în care Aplicația nu respectă orice garanție aplicabilă, puteți notifica Apple, iar Apple vă va rambursa prețul de achiziție al Aplicației, dacă este cazul. În măsura maximă permisă de legea aplicabilă, Apple nu va avea nicio altă obligație de garanție pentru Aplicație.

e) Revendicări de Produs: SuntOK, nu Apple, este responsabilă pentru abordarea oricăror revendicări ale dumneavoastră sau ale unui terț legate de Aplicație sau de posesia și/sau utilizarea Aplicației de către dumneavoastră.

f) Proprietate Intelectuală: În cazul oricărei revendicări de către un terț că Aplicația sau posesia și utilizarea Aplicației de către dumneavoastră încalcă drepturile de proprietate intelectuală ale acelui terț, SuntOK, nu Apple, va fi singura responsabilă pentru investigarea, apărarea, soluționarea și descărcarea oricărei astfel de revendicări.

g) Conformitate Legală: Declarați și garantați că (i) nu vă aflați într-o țară supusă embargoului guvernului SUA sau care a fost desemnată de guvernul SUA drept țară "care susține terorismul"; și (ii) nu sunteți pe nicio listă a guvernului SUA cu părți interzise sau restricționate.

h) Beneficiar Terț: Recunoașteți și sunteți de acord că Apple și filialele Apple sunt beneficiari terți ai acestor Termeni și că, la acceptarea de către dumneavoastră a acestor Termeni, Apple va avea dreptul (și va fi considerat că a acceptat dreptul) de a aplica acești Termeni împotriva dumneavoastră ca beneficiar terț.`
      },
      {
        title: '13. Acordul Google Play și Recunoașteri',
        content: `Această secțiune se aplică pentru utilizatorii care descarcă Aplicația din Google Play Store:

a) Recunoaștere: Recunoașteți că acești Termeni sunt încheiate între dumneavoastră și SuntOK, nu cu Google LLC ("Google"). SuntOK, nu Google, este singura responsabilă pentru Aplicație și conținutul acesteia.

b) Achiziții: Toate achizițiile în aplicație și abonamentele sunt procesate prin sistemul de facturare Google Play și sunt supuse Termenilor de Serviciu Google Play.

c) Întreținere și Suport: SuntOK este singura responsabilă pentru suportul produsului și întreținerea Aplicației.

d) Licență: Licența acordată pentru Aplicație este supusă Termenilor de Serviciu Google Play.`
      },
      {
        title: '14. Declinarea Garanțiilor',
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
        title: '15. Limitarea Răspunderii',
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
        title: '16. Despăgubire',
        content: `Sunteți de acord să apărați, despăgubiți și să exonerați Compania și afiliații, licențiatorii și furnizorii de servicii ai acesteia, precum și funcționarii, directorii, angajații, contractorii, agenții, licențiatorii, furnizorii, succesorii și cesionarii acestora de și împotriva oricăror reclamații, răspunderi, daune, judecăți, premii, pierderi, costuri, cheltuieli sau onorarii (inclusiv onorii rezonabile de avocat) rezultate din sau legate de:

• Încălcarea de către dumneavoastră a acestor Termeni
• Utilizarea de către dumneavoastră a Aplicației
• Informațiile pe care le furnizați prin Aplicație
• Încălcarea oricărei legi sau a drepturilor unui terț`
      },
      {
        title: '17. Încetare',
        content: `a) Încetare de către Dumneavoastră: Puteți înceta utilizarea Aplicației în orice moment prin dezinstalarea acesteia de pe dispozitivul dumneavoastră. Pentru a anula un abonament, trebuie să îl anulați prin setările contului App Store sau Google Play Store înainte de dezinstalare.

b) Încetare de către Noi: Ne rezervăm dreptul de a suspenda sau înceta accesul dumneavoastră la Aplicație în orice moment, din orice motiv, inclusiv, dar fără a se limita la încălcarea acestor Termeni.

c) Efectele Încetării: La încetare:
• Licența dumneavoastră de utilizare a Aplicației va fi revocată imediat
• Putem șterge datele contului și informațiile asociate
• Abonamentele active vor continua până la sfârșitul perioadei curente de facturare, cu excepția cazului în care sunt anulate
• Secțiunile care prin natura lor ar trebui să supraviețuiască încetării vor rămâne în vigoare`
      },
      {
        title: '18. Legea Aplicabilă și Soluționarea Litigiilor',
        content: `a) Legea Aplicabilă: Acești Termeni vor fi guvernați și interpretați în conformitate cu legile României, fără a ține cont de prevederile privind conflictul de legi.

b) Jurisdicție: Orice litigiu care rezultă din sau în legătură cu acești Termeni va fi supus jurisdicției exclusive a instanțelor din România.

c) Arbitraj: Pentru orice litigii care nu pot fi rezolvate amiabil, părțile sunt de acord să încerce mai întâi medierea înainte de a recurge la litigii.

d) Renunțare la Acțiune Colectivă: Sunteți de acord că orice litigii vor fi conduse doar pe bază individuală și nu într-o acțiune colectivă, consolidată sau reprezentativă.`
      },
      {
        title: '19. Prevederi Generale',
        content: `a) Întregul Acord: Acești Termeni constituie întregul acord între dumneavoastră și noi privind utilizarea Aplicației și înlocuiesc toate acordurile anterioare.

b) Renunțare: Niciun eșec sau întârziere a noastră în exercitarea oricărui drept sau remediu nu va constitui o renunțare la acel drept sau remediu.

c) Separabilitate: Dacă orice prevedere a acestor Termeni este considerată invalidă sau inaplicabilă, celelalte prevederi vor rămâne în vigoare.

d) Cesiune: Nu puteți cesiona sau transfera acești Termeni fără acordul nostru prealabil scris. Putem cesiona drepturile și obligațiile noastre fără restricții.

e) Forță Majoră: Nu vom fi răspunzători pentru niciun eșec sau întârziere în îndeplinirea obligațiilor noastre cauzate de circumstanțe în afara controlului nostru rezonabil.`
      },
      {
        title: '20. Link-uri Importante',
        content: `Vă rugăm să consultați și următoarele documente:

• Politica de Confidențialitate: Disponibilă la https://suntok.app/#/privacy-policy
• Termeni și Condiții: Disponibili la https://suntok.app/#/terms-of-service
• Contact și Suport: Disponibil la https://suntok.app/#/contact`
      },
      {
        title: '21. Informații de Contact',
        content: `Dacă aveți întrebări despre acești Termeni și Condiții, achiziții în aplicație sau abonamente, vă rugăm să ne contactați la:

SuntOK
Dezvoltator: CRISPOSOFT S.R.L.
Email: crisposoft@gmail.com
Locație: România, Uniunea Europeană

Pentru probleme legate de abonament sau facturare:
• Utilizatori iOS: Contactați suportul Apple la https://support.apple.com
• Utilizatori Android: Contactați suportul Google Play la https://support.google.com/googleplay

Prin utilizarea Aplicației SuntOK, confirmați că ați citit, înțeles și sunteți de acord să fiți obligat de acești Termeni și Condiții.`
      }
    ]
  } : {
    title: 'Terms of Service',
    lastUpdated: 'Last Updated: January 27, 2026',
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
        title: '3. Free and Premium Versions',
        content: `SuntOK offers both a free version and a premium version (SuntOK Premium):

a) Free Version includes:
• Basic safety check-in
• One emergency contact
• Fixed check-in frequency (2 days)
• Standard notifications

b) Premium Version (subscription) includes all free features plus:
• Custom check-in frequencies (1-30 days)
• Multiple emergency contacts
• Custom emergency messages
• Priority notifications
• Ad-free experience
• Priority support`
      },
      {
        title: '4. In-App Purchases and Subscriptions',
        content: `a) Available Subscriptions:
SuntOK Premium is available through the following subscription options:
• Monthly Subscription: 4.99 RON/month
• Annual Subscription: 49.99 RON/year (save ~17%)

b) Payment Processing:
• All payments for SuntOK Premium subscriptions are processed through the Apple App Store (for iOS) or Google Play Store (for Android)
• We do not process or store your payment information directly
• Payment will be charged to your Apple ID or Google Play account upon confirmation of purchase
• All prices include applicable taxes based on your location

c) Subscription Renewal:
• Subscriptions automatically renew at the end of each billing period
• Your account will be charged for renewal within 24 hours prior to the end of the current period
• You can manage and cancel your subscriptions by going to your account settings in the App Store or Google Play Store

d) Cancellation:
• You may cancel your subscription at any time through the App Store or Google Play Store account settings
• Cancellation takes effect at the end of the current billing period
• No refunds are provided for partial subscription periods
• Upon cancellation, you will still have access to premium features until the end of your paid period

e) Price Changes:
• We reserve the right to change subscription prices
• You will be notified in advance of any price changes
• Continuing your subscription after the price change constitutes acceptance of the new price`
      },
      {
        title: '5. Refund Policy',
        content: `All purchases are processed through the Apple App Store or Google Play Store and are subject to their respective refund policies:

• For iOS: Refund requests must be made directly to Apple through their "Report a Problem" page or by contacting Apple Support
• For Android: Refund requests must be made directly through the Google Play Store or by contacting Google Support

We do not process refunds directly. All refund requests are at the discretion of Apple or Google according to their own policies.`
      },
      {
        title: '6. Free Trial Periods',
        content: `We may offer free trial periods for SuntOK Premium from time to time:

• Free trials provide full access to premium features
• At the end of the trial period, the subscription will automatically convert to a paid subscription unless you cancel before the trial expires
• Cancel through the App Store or Google Play Store account settings to avoid being charged
• Any unused portion of a free trial will be forfeited when you purchase a subscription`
      },
      {
        title: '7. Eligibility',
        content: `To use the App, you must:

• Be at least 16 years of age
• Have the legal capacity to enter into a binding contract
• Not be a person barred from using the App under applicable laws

By using the App, you represent and warrant that you meet all eligibility requirements. If you are using the App on behalf of another person (such as an elderly parent), you represent that you have the legal authority to do so and that such person has consented.`
      },
      {
        title: '8. User Account',
        content: `a) Account Creation: The App uses anonymous authentication. You are not required to create an account with an email or password.

b) Account Security: You are responsible for maintaining the security of your device and access to the App. We are not liable for any loss resulting from unauthorized access to your account or device.

c) Information Accuracy: You agree to provide accurate and current information, particularly your emergency contact's phone number. Inaccurate information may result in notification failures.`
      },
      {
        title: '9. Acceptable Use',
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
        title: '10. Emergency Notification Service',
        content: `a) Operation: If you do not check in on the App within the configured interval, we will send an SMS notification to your designated emergency contact.

b) Limitations: You understand and agree that:
• SMS notifications depend on telecommunications networks and may be delayed or fail
• You must have a valid emergency contact configured for notifications to work
• The emergency contact must have a phone capable of receiving SMS
• We do not guarantee delivery or timing of SMS notifications
• The Company is not responsible for actions or inactions of your emergency contact

c) Emergency Contact Consent: By designating an emergency contact, you represent that you have obtained their consent to receive SMS notifications on your behalf.`
      },
      {
        title: '11. Intellectual Property Rights',
        content: `a) Our Ownership: The App, including all content, features, and functionality (including but not limited to information, software, text, displays, images, video, audio, and the design thereof) is owned by the Company, its licensors, or other providers of such material and is protected by copyright, trademark, patent, trade secret, and other intellectual property laws.

b) Limited License: We grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App for your personal, non-commercial use, subject to these Terms.

c) Restrictions: You may not:
• Copy, modify, or distribute the App
• Reverse engineer, decompile, or disassemble the App
• Remove any proprietary notices from the App
• Use the App to create a competing product or service`
      },
      {
        title: '12. Apple Agreement and Acknowledgements',
        content: `This section applies to users who download the App from the Apple App Store:

a) Acknowledgement: You acknowledge that these Terms are entered into between you and SuntOK, not with Apple Inc. ("Apple"). SuntOK, not Apple, is solely responsible for the App and its content.

b) License: The license granted to you for the App is limited to a non-transferable license to use the App on any Apple device that you own or control, as permitted by the Usage Rules in the Apple App Store Terms of Service.

c) Maintenance and Support: SuntOK is solely responsible for providing any maintenance and support services for the App. You acknowledge that Apple has no obligation to provide maintenance and support services for the App.

d) Warranty: In the event that the App fails to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price of the App, if any. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the App.

e) Product Claims: SuntOK, not Apple, is responsible for addressing any claims by you or any third party relating to the App or your possession and/or use of the App.

f) Intellectual Property: In the event of any third-party claim that the App or your possession and use of the App infringes that third party's intellectual property rights, SuntOK, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such claim.

g) Legal Compliance: You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.

h) Third-Party Beneficiary: You acknowledge and agree that Apple, and Apple's subsidiaries, are third-party beneficiaries of these Terms, and that, upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary.`
      },
      {
        title: '13. Google Play Agreement and Acknowledgements',
        content: `This section applies to users who download the App from the Google Play Store:

a) Acknowledgement: You acknowledge that these Terms are entered into between you and SuntOK, not with Google LLC ("Google"). SuntOK, not Google, is solely responsible for the App and its content.

b) Purchases: All in-app purchases and subscriptions are processed through Google Play's billing system and are subject to the Google Play Terms of Service.

c) Maintenance and Support: SuntOK is solely responsible for product support and maintenance of the App.

d) License: The license granted to you for the App is subject to the Google Play Terms of Service.`
      },
      {
        title: '14. Declinarea Garanțiilor',
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
        title: '15. Limitation of Liability',
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
        title: '16. Indemnification',
        content: `You agree to defend, indemnify, and hold harmless the Company and its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:

• Your violation of these Terms
• Your use of the App
• Information you provide through the App
• Your violation of any law or the rights of a third party`
      },
      {
        title: '17. Termination',
        content: `a) Termination by You: You may terminate your use of the App at any time by uninstalling it from your device. To cancel a subscription, you must cancel it through the App Store or Google Play Store account settings before uninstalling.

b) Termination by Us: We reserve the right to suspend or terminate your access to the App at any time, for any reason, including but not limited to violation of these Terms.

c) Effects of Termination: Upon termination:
• Your license to use the App will immediately be revoked
• We may delete your account data and associated information
• Active subscriptions will continue until the end of the current billing period unless cancelled
• Sections that by their nature should survive termination will remain in effect`
      },
      {
        title: '18. Governing Law and Dispute Resolution',
        content: `a) Governing Law: These Terms shall be governed by and construed in accordance with the laws of Romania, without regard to conflict of law provisions.

b) Jurisdiction: Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Romania.

c) Arbitration: For any disputes that cannot be resolved amicably, the parties agree to first attempt mediation before resorting to litigation.

d) Class Action Waiver: You agree that any disputes will be conducted only on an individual basis and not in a class, consolidated, or representative action.`
      },
      {
        title: '19. General Provisions',
        content: `a) Entire Agreement: These Terms constitute the entire agreement between you and us regarding the use of the App and supersede all prior agreements.

b) Waiver: No failure or delay by us in exercising any right or remedy shall constitute a waiver of such right or remedy.

c) Severability: If any provision of these Terms is found invalid or unenforceable, the remaining provisions will continue in effect.

d) Assignment: You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations without restriction.

e) Force Majeure: We shall not be liable for any failure or delay in performing our obligations caused by circumstances beyond our reasonable control.`
      },
      {
        title: '20. Important Links',
        content: `Please also review the following documents:

• Privacy Policy: Available at https://suntok.app/#/privacy-policy
• Terms of Service: Available at https://suntok.app/#/terms-of-service
• Contact & Support: Available at https://suntok.app/#/contact`
      },
      {
        title: '21. Contact Information',
        content: `If you have any questions about these Terms of Service, in-app purchases, or subscriptions, please contact us at:

SuntOK
Developer: CRISPOSOFT S.R.L.
Email: crisposoft@gmail.com
Location: Romania, European Union

For subscription or billing issues:
• iOS Users: Contact Apple Support at https://support.apple.com
• Android Users: Contact Google Play Support at https://support.google.com/googleplay

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
