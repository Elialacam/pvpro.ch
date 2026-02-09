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
            Stand: {new Date().toLocaleDateString('de-CH', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">1. Verantwortlicher</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            PVPro<br />
            Musterstrasse 123<br />
            8000 Zürich<br />
            Schweiz<br />
            <br />
            E-Mail: anfrage@pvpro.ch<br />
            Telefon: +41 77 442 00 59
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Dienstleistungen
            erforderlich ist oder Sie uns Ihre Einwilligung erteilt haben.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">2.1 Kontaktformular</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Bei der Nutzung unseres Kontaktformulars erheben wir folgende Daten:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Vorname und Nachname</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer (optional)</li>
            <li>Angaben zu Ihrer Immobilie (Typ, Standort, Dachbeschaffenheit)</li>
            <li>Angaben zu Ihrem Energiebedarf</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Diese Daten werden verwendet, um Ihnen passende Angebote von Solarinstallateuren zu vermitteln. Die Rechtsgrundlage
            ist Ihre Einwilligung gemäss Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 6 DSG (Schweiz).
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">2.2 Server-Logdateien</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Unser Webhosting-Provider erhebt und speichert automatisch Informationen in Server-Logdateien, die Ihr Browser
            automatisch übermittelt. Dies sind:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen ausschliesslich der Sicherstellung
            eines störungsfreien Betriebs der Website.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">3. Weitergabe von Daten</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Wir geben Ihre personenbezogenen Daten nur an Dritte weiter, wenn:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Sie uns Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 6 Abs. 1 lit. a DSGVO)</li>
            <li>Dies zur Vertragserfüllung erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO)</li>
            <li>Eine gesetzliche Verpflichtung zur Weitergabe besteht (Art. 6 Abs. 1 lit. c DSGVO)</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Im Rahmen unserer Vermittlungsdienstleistung geben wir Ihre Kontaktdaten an bis zu 3 geprüfte Solarinstallateure
            in Ihrer Region weiter, damit diese Ihnen individuelle Angebote erstellen können. Eine Weitergabe erfolgt nur mit
            Ihrer ausdrücklichen Einwilligung.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">4. Speicherdauer</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies zur Erfüllung des jeweiligen Zwecks erforderlich
            ist oder gesetzliche Aufbewahrungsfristen bestehen. Nach Zweckfortfall oder Ablauf der Aufbewahrungsfristen werden
            die Daten routinemässig gelöscht.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">5. Ihre Rechte</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Recht auf Auskunft (Art. 15 DSGVO, Art. 25 DSG)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO, Art. 32 DSG)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            <li>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: anfrage@pvpro.ch
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">6. SSL-Verschlüsselung</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung.
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://"
            wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">7. Cookies</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Unsere Website verwendet lokale Speicherfunktionen (LocalStorage), um Ihre Formulareingaben zwischenzuspeichern,
            damit diese bei versehentlichem Schliessen des Browsers nicht verloren gehen. Diese Daten werden nur lokal auf
            Ihrem Gerät gespeichert und nicht an unsere Server übertragen.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">8. Änderungen der Datenschutzerklärung</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen
            entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch
            gilt dann die neue Datenschutzerklärung.
          </p>
        </div>
      </div>
    </section>
  );
}
