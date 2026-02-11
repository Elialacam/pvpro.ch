import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen zu PVPro.',
};

export default function ImpressumPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-sans font-semibold tracking-normal text-gray-900 mb-8">Impressum</h1>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Angaben gemäss Art. 5 nDSG</h2>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-gray-900 font-sans font-bold mb-4">NOBA Media Sagl</p>
            <p className="text-gray-600 mb-2">Via Santi Pietro e Paolo 16</p>
            <p className="text-gray-600 mb-2">6953 Lugaggia</p>
            <p className="text-gray-600 mb-2">Schweiz</p>
            <p className="text-gray-600 mb-2">
              <strong>E-Mail:</strong> anfrage@pvpro.ch
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Telefon:</strong> +41 77 977 07 50
            </p>
            <p className="text-gray-600">
              <strong>Website:</strong> www.pvpro.ch
            </p>
          </div>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Rechtsform</h2>
          <p className="text-gray-600 mb-6">Gesellschaft mit beschränkter Haftung (GmbH / Sagl)</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Vertretungsberechtigte Person</h2>
          <p className="text-gray-600 mb-6">Elia Alacam, Geschäftsführer, mit Einzelunterschrift</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Handelsregister</h2>
          <p className="text-gray-600 mb-6">
            Handelsregister-Nummer: CH-501.4.029.665-0<br />
            Handelsregisteramt: Kanton Tessin<br />
            Sitz der Gesellschaft: Capriasca
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Unternehmens-Identifikationsnummer (UID)</h2>
          <p className="text-gray-600 mb-6">CHE-236.020.113</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Haftungsausschluss</h2>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">Haftung für Inhalte</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
            Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">Haftung für Links</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
            können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">Urheberrecht</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Schweizer Urheberrecht.
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Streitbeilegung</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Unsere E-Mail-Adresse
            finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </section>
  );
}
