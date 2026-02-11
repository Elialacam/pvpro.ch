import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von PVPro - Informationen zum Umgang mit Ihren personenbezogenen Daten.',
};

export default function DatenschutzPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-sans font-semibold tracking-normal text-gray-900 mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            Stand: Februar 2026
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">1. Verantwortlicher</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            NOBA Media Sagl<br />
            Via Santi Pietro e Paolo 16<br />
            6953 Lugaggia<br />
            Schweiz<br />
            <br />
            E-Mail: anfrage@pvpro.ch<br />
            Telefon: +41 77 442 00 59
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Dienstleistungen
            erforderlich ist oder Sie uns Ihre Einwilligung erteilt haben. Die Rechtsgrundlagen richten sich nach dem Schweizer
            Datenschutzgesetz (nDSG) sowie, sofern anwendbar, der EU-Datenschutz-Grundverordnung (DSGVO).
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">2.1 Kontaktformular / Offertanfrage</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Bei der Nutzung unseres Kontaktformulars erheben wir folgende Daten:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Vorname und Nachname</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer</li>
            <li>Adresse (Strasse, PLZ, Ort)</li>
            <li>Angaben zu Ihrer Immobilie (Eigentümer/Mieter, Gebäudetyp, Dachform)</li>
            <li>Interesse an Batteriespeicher</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Diese Daten werden verwendet, um Ihnen passende Angebote von Solarinstallateuren zu vermitteln.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">2.2 Server-Logdateien</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Unser Webhosting-Provider (Vercel Inc.) erhebt und speichert automatisch Informationen in Server-Logdateien,
            die Ihr Browser automatisch übermittelt. Dies sind:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>IP-Adresse (anonymisiert)</li>
            <li>Uhrzeit der Serveranfrage</li>
          </ul>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">3. Drittanbieter und Datenverarbeitung</h2>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.1 Web3Forms</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Zur Verarbeitung von Formularanfragen nutzen wir den Dienst Web3Forms. Ihre eingegebenen Daten werden über
            deren Server verarbeitet und an uns per E-Mail weitergeleitet. Weitere Informationen finden Sie unter:{' '}
            <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              web3forms.com/privacy
            </a>
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.2 Resend</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Für den Versand von Bestätigungs-E-Mails nutzen wir den E-Mail-Dienst Resend. Dabei wird Ihre E-Mail-Adresse
            an den Dienstanbieter übermittelt. Weitere Informationen finden Sie unter:{' '}
            <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              resend.com/legal/privacy-policy
            </a>
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.3 Google Maps</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Wir nutzen die Google Maps API zur Adressvervollständigung im Kontaktformular. Dabei können Daten an
            Google LLC, USA, übertragen werden. Weitere Informationen:{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              policies.google.com/privacy
            </a>
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.4 Vercel (Hosting)</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Diese Website wird bei Vercel Inc. gehostet. Vercel kann dabei automatisch Server-Logdateien erheben.
            Weitere Informationen:{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              vercel.com/legal/privacy-policy
            </a>
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">4. Cookies und Tracking</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Unsere Website verwendet ein Cookie-Consent-Banner. Tracking-Dienste werden erst nach Ihrer ausdrücklichen
            Einwilligung aktiviert. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie Ihre Browser-Cookies
            löschen und die Seite neu laden.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.1 Google Analytics</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Wir verwenden Google Analytics 4 (Mess-ID: G-ZE1BS0ZGK9) zur statistischen Auswertung der Website-Nutzung.
            Google Analytics wird erst nach Ihrer Einwilligung im Cookie-Banner (Kategorie «Analyse») aktiviert.
            Anbieter: Google Ireland Ltd. Daten können in die USA übertragen werden.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.2 Google Ads</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Wir verwenden Google Ads Conversion Tracking (ID: AW-17901154625), um die Wirksamkeit unserer Werbeanzeigen
            zu messen. Dieses Tracking wird erst nach Ihrer Einwilligung im Cookie-Banner (Kategorie «Marketing») aktiviert.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.3 Meta Pixel (Facebook)</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Wir verwenden das Meta Pixel (ID: 1848326999213371) zur Messung der Wirksamkeit von Werbeanzeigen auf Facebook
            und Instagram. Das Meta Pixel wird erst nach Ihrer Einwilligung im Cookie-Banner (Kategorie «Marketing») aktiviert.
            Anbieter: Meta Platforms Ireland Ltd. Daten können in die USA übertragen werden.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.4 Microsoft Clarity</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Wir verwenden Microsoft Clarity (Projekt-ID: u1ur4kb2kq) zur Analyse des Nutzerverhaltens (Heatmaps, Sitzungsaufzeichnungen).
            Clarity wird erst nach Ihrer Einwilligung im Cookie-Banner (Kategorie «Analyse») aktiviert.
            Anbieter: Microsoft Corporation. Weitere Informationen:{' '}
            <a href="https://privacy.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              privacy.microsoft.com
            </a>
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">5. Weitergabe von Daten</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Im Rahmen unserer Vermittlungsdienstleistung geben wir Ihre Kontaktdaten an bis zu 3 geprüfte Solarinstallateure
            in Ihrer Region weiter, damit diese Ihnen individuelle Angebote erstellen können. Eine Weitergabe erfolgt nur
            auf Grundlage Ihrer Anfrage.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">6. Speicherdauer</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies zur Erfüllung des jeweiligen Zwecks erforderlich
            ist oder gesetzliche Aufbewahrungsfristen bestehen.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">7. Ihre Rechte</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Recht auf Auskunft (Art. 25 nDSG)</li>
            <li>Recht auf Berichtigung (Art. 32 nDSG)</li>
            <li>Recht auf Löschung</li>
            <li>Recht auf Datenherausgabe und -übertragung (Art. 28 nDSG)</li>
            <li>Recht auf Widerspruch gegen die Datenbearbeitung</li>
            <li>Recht auf Widerruf der Einwilligung</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: anfrage@pvpro.ch
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Sie haben zudem das Recht, eine Beschwerde beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten
            (EDÖB) einzureichen.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">8. SSL-Verschlüsselung</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
            SSL/TLS-Verschlüsselung.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">9. Änderungen</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen, damit sie stets den aktuellen
            rechtlichen Anforderungen entspricht.
          </p>
        </div>
      </div>
    </section>
  );
}
