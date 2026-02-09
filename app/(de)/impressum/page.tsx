import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen zu PVPro.',
};

export default function ImpressumPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-display font-medium tracking-normal text-gray-900 mb-8">Impressum</h1>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-display font-medium tracking-normal text-gray-900 mt-8 mb-4">Angaben gemäss Art. 5 DSG</h2>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-gray-900 font-display font-semibold mb-4">PVPro</p>
            <p className="text-gray-600 mb-2">Musterstrasse 123</p>
            <p className="text-gray-600 mb-2">8000 Zürich</p>
            <p className="text-gray-600 mb-2">Schweiz</p>
            <p className="text-gray-600 mb-2">
              <strong>Telefon:</strong> +41 77 442 00 59
            </p>
            <p className="text-gray-600 mb-2">
              <strong>E-Mail:</strong> info@pvpro.ch
            </p>
            <p className="text-gray-600">
              <strong>Website:</strong> www.pvpro.ch
            </p>
          </div>

          <h2 className="text-2xl font-display font-medium tracking-normal text-gray-900 mt-8 mb-4">Vertretungsberechtigte Person</h2>
          <p className="text-gray-600 mb-6">Max Mustermann, Geschäftsführer</p>

          <h2 className="text-2xl font-display font-medium tracking-normal text-gray-900 mt-8 mb-4">Handelsregister</h2>
          <p className="text-gray-600 mb-6">
            Handelsregister-Nummer: CHE-123.456.789<br />
            Handelsregisteramt: Zürich
          </p>

          <h2 className="text-2xl font-display font-medium tracking-normal text-gray-900 mt-8 mb-4">Mehrwertsteuer-Nummer</h2>
          <p className="text-gray-600 mb-6">CHE-123.456.789 MWST</p>

          <h2 className="text-2xl font-display font-medium tracking-normal text-gray-900 mt-8 mb-4">Haftungsausschluss</h2>

          <h3 className="text-xl font-display font-medium tracking-normal text-gray-900 mt-6 mb-3">Haftung für Inhalte</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
            Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäss Art. 55
            Abs. 2 FMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch
            nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h3 className="text-xl font-display font-medium tracking-normal text-gray-900 mt-6 mb-3">Haftung für Links</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
            können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
            der Verlinkung auf mögliche Rechtsverstösse überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
            nicht erkennbar.
          </p>

          <h3 className="text-xl font-display font-medium tracking-normal text-gray-900 mt-6 mb-3">Urheberrecht</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Schweizer Urheberrecht.
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
            nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>

          <h2 className="text-2xl font-display font-medium tracking-normal text-gray-900 mt-8 mb-4">Streitbeilegung</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Unsere E-Mail-Adresse
            finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="text-2xl font-display font-medium tracking-normal text-gray-900 mt-8 mb-4">Konzeption und Design</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            PVPro<br />
            Zürich, Schweiz
          </p>

          <h2 className="text-2xl font-display font-medium tracking-normal text-gray-900 mt-8 mb-4">Technische Umsetzung</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Next.js 14 mit TypeScript<br />
            Hosting: Vercel
          </p>
        </div>
      </div>
    </section>
  );
}
