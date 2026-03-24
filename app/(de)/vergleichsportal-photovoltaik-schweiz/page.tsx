import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight, Star, BarChart2, Users } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Vergleichsportal Photovoltaik Schweiz 2026 – Anbieter vergleichen & sparen | PVPro.ch',
  description: 'Vergleichen Sie Photovoltaik Anbieter in der Schweiz kostenlos. PVPro.ch ist das führende Schweizer Vergleichsportal für Solaranlagen – bis zu 3 Offerten von zertifizierten Installateuren.',
  alternates: {
    canonical: 'https://www.pvpro.ch/vergleichsportal-photovoltaik-schweiz',
    languages: {
      'de-CH': 'https://www.pvpro.ch/vergleichsportal-photovoltaik-schweiz',
      'fr-CH': 'https://www.pvpro.ch/fr/comparateur-photovoltaique-suisse',
      'en': 'https://www.pvpro.ch/en/solar-comparison-portal-switzerland',
      'it-CH': 'https://www.pvpro.ch/it/comparatore-fotovoltaico-svizzera',
      'x-default': 'https://www.pvpro.ch/vergleichsportal-photovoltaik-schweiz',
    },
  },
  openGraph: {
    title: 'Vergleichsportal Photovoltaik Schweiz 2026 – Anbieter vergleichen & sparen',
    description: 'Vergleichen Sie Photovoltaik Anbieter in der Schweiz kostenlos. Bis zu 3 Offerten von zertifizierten Installateuren.',
    url: 'https://www.pvpro.ch/vergleichsportal-photovoltaik-schweiz',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Ist PVPro.ch wirklich kostenlos?',
    answer: 'Ja, für Hausbesitzer ist der Service vollständig kostenlos und unverbindlich. Wir finanzieren uns über eine Vermittlungsgebühr, die die Installateure bezahlen — nicht Sie.',
  },
  {
    question: 'Wie viele Offerten erhalte ich?',
    answer: 'Sie erhalten bis zu 3 massgeschneiderte Offerten von geprüften lokalen Installateuren. So haben Sie direkt eine Vergleichsbasis.',
  },
  {
    question: 'Wer sind die Installateure im PVPro-Netzwerk?',
    answer: 'Wir arbeiten mit über 500 zertifizierten Schweizer Fachbetrieben zusammen. Jeder Installateur wird vor der Aufnahme ins Netzwerk geprüft.',
  },
  {
    question: 'Kann ich PVPro.ch auch für ein Mehrfamilienhaus nutzen?',
    answer: 'Ja, wir vermitteln Offerten für Einfamilienhäuser, Mehrfamilienhäuser und Gewerbegebäude in der ganzen Schweiz.',
  },
  {
    question: 'Wie lange dauert es, bis ich Offerten erhalte?',
    answer: 'In den meisten Fällen erhalten Sie die ersten Offerten innerhalb von 24 bis 48 Stunden nach Ihrer Anfrage.',
  },
  {
    question: 'Muss ich mich zu etwas verpflichten?',
    answer: 'Nein. Sie können die Offerten vergleichen und frei entscheiden — ohne jede Verpflichtung.',
  },
];

const reasons = [
  {
    title: 'Preistransparenz',
    text: 'Sie sehen sofort, was eine Anlage in Ihrer Region wirklich kostet',
  },
  {
    title: 'Qualitätsvergleich',
    text: 'Nur zertifizierte Installateure mit nachgewiesener Erfahrung',
  },
  {
    title: 'Zeitersparnis',
    text: 'Statt selbst zu recherchieren, erhalten Sie alles auf einen Blick',
  },
];

const criteria = [
  { title: 'Zertifizierung', text: 'Achten Sie auf Betriebe mit anerkannten Qualifikationen (z.B. electrosuisse, Swissolar)' },
  { title: 'Lokale Erfahrung', text: 'Ein Installateur aus Ihrer Region kennt die kantonalen Förderungen und Bewilligungsverfahren' },
  { title: 'Referenzen', text: 'Fragen Sie nach abgeschlossenen Projekten in Ihrer Gemeinde' },
  { title: 'Garantien', text: 'Seriöse Anbieter bieten klare Garantien auf Module, Wechselrichter und Montage' },
  { title: 'Transparente Preise', text: 'Keine versteckten Kosten — alles schriftlich in der Offerte' },
];

const tableRows = [
  { label: 'Kosten für den Kunden', pvpro: 'Kostenlos', others: 'Oft versteckte Kosten' },
  { label: 'Installateure geprüft', pvpro: 'Ja, zertifiziert', others: 'Nicht immer' },
  { label: 'Lokale Fachbetriebe', pvpro: 'Ja, aus Ihrer Region', others: 'Oft überregional' },
  { label: 'Keine Werbeanrufe', pvpro: 'Garantiert', others: 'Nicht garantiert' },
  { label: 'Schweizer Plattform', pvpro: 'Ja', others: 'Oft ausländisch' },
];

export default function VergleichsportalPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Vergleichsportal Photovoltaik</span>
          </nav>

          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <BarChart2 className="w-3.5 h-3.5" /> Anbieter &amp; Vergleich
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Vergleichsportal für Photovoltaik Anlagen in der Schweiz
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Wer in der Schweiz eine Solaranlage installieren möchte, steht vor einer grossen Frage: Welcher Anbieter ist der richtige? Die Preise variieren stark, die Qualität noch mehr. PVPro.ch ist das unabhängige Schweizer Vergleichsportal, das Hausbesitzer mit{' '}
              <Link href="/anfrage" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">zertifizierten lokalen Installateuren</Link>{' '}
              verbindet — kostenlos und unverbindlich.
            </p>
          </div>

          {/* Stat boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Kostenlos & unverbindlich', sub: 'kein Risiko', note: 'für Hausbesitzer vollständig gratis' },
              { val: 'Bis zu 3 Offerten', sub: 'von zertifizierten Installateuren', note: 'massgeschneidert für Ihr Dach' },
              { val: '500+ Partner', sub: 'in der ganzen Schweiz', note: 'geprüfte Fachbetriebe in Ihrer Region' },
            ].map(s => (
              <div key={s.val} className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="text-xl font-bold text-white mb-0.5">{s.val}</p>
                <p className="text-[#F97316] text-sm font-semibold">{s.sub}</p>
                <p className="text-gray-500 text-xs mt-1">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── Warum vergleichen ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Warum vergleichen?</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Warum einen Anbietervergleich machen?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Viele Hausbesitzer kontaktieren nur einen einzigen Installateur und unterschreiben das erste Angebot. Das ist oft ein teurer Fehler. Für die gleiche Anlage können die Preise zwischen verschiedenen Installateuren um mehrere tausend Franken variieren.
            </p>
            <p className="text-gray-700 font-semibold mb-4">Ein Vergleich lohnt sich aus drei Gründen:</p>
            <ul className="space-y-4">
              {reasons.map(r => (
                <li key={r.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-gray-900">{r.title}:</strong> {r.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/asset-beratung-indoor-2.png"
              alt="Vergleich Photovoltaik Anbieter Schweiz"
              className="w-full h-72 object-cover rounded-3xl"
            />
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Wussten Sie?</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Wer mindestens 3 Offerten vergleicht, spart im Schnitt 15–25% gegenüber dem erstbesten Angebot — das sind bei einer typischen Anlage bis zu 5'000 CHF.
              </p>
            </div>
          </div>
        </section>

        {/* ── Wie funktioniert PVPro ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">So einfach geht's</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Wie funktioniert PVPro.ch als Vergleichsportal?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              PVPro.ch ist kein gewöhnliches Verzeichnis. Wir prüfen jeden Installateur in unserem Netzwerk und vermitteln nur zertifizierte Fachbetriebe aus Ihrer Region.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: '1',
                title: 'Formular ausfüllen',
                text: 'In 2 Minuten beschreiben Sie Ihr Dach, Ihren Stromverbrauch und Ihre Wünsche.',
              },
              {
                n: '2',
                title: 'Offerten erhalten',
                text: 'Bis zu 3 lokale Installateure senden Ihnen massgeschneiderte Angebote direkt zu.',
              },
              {
                n: '3',
                title: 'Vergleichen und wählen',
                text: 'Sie vergleichen Preise, Komponenten und Referenzen — und entscheiden frei.',
              },
            ].map(step => (
              <div key={step.n} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                  {step.n}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Schritt {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Welche Anbieter empfehlenswert ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/asset-installateur-dach-2.png"
              alt="Zertifizierter Photovoltaik Installateur Schweiz"
              className="w-full h-72 object-cover rounded-3xl object-top"
            />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Qualitätskriterien</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Welche Anbieter sind in der Schweiz empfehlenswert?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In der Schweiz gibt es Hunderte von Photovoltaik-Installateuren. Die Qualität variiert stark. Worauf sollten Sie achten?
            </p>
            <ul className="space-y-4 mb-6">
              {criteria.map(c => (
                <li key={c.title} className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-gray-900">{c.title}:</strong> {c.text.includes('Förderungen') ? (
                      <>
                        {c.text.split('Förderungen')[0]}
                        <Link href="/foerderungen" className="text-[#F97316] hover:underline font-medium">Förderungen</Link>
                        {c.text.split('Förderungen')[1].split('Bewilligungsverfahren')[0]}
                        <Link href="/bewilligungspflicht-solaranlage-schweiz" className="text-[#F97316] hover:underline font-medium">Bewilligungsverfahren</Link>
                        {c.text.split('Bewilligungsverfahren')[1]}
                      </>
                    ) : c.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed">
                <strong>PVPro.ch prüft all diese Kriterien für Sie</strong> und vermittelt nur Betriebe, die unsere Standards erfüllen.
              </p>
            </div>
          </div>
        </section>

        {/* ── Vergleichstabelle ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Der Unterschied</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Was unterscheidet PVPro.ch von anderen Vergleichsportalen?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-6 py-4 text-white/60 font-semibold w-2/5"></th>
                  <th className="px-6 py-4 text-white font-bold text-center">PVPro.ch</th>
                  <th className="px-6 py-4 text-white/60 font-semibold text-center">Andere Portale</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.label}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1.5 text-green-700 font-semibold">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {row.pvpro}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Users className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Jetzt kostenlos Anbieter vergleichen
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Füllen Sie unser Formular in 2 Minuten aus und erhalten Sie bis zu 3 Offerten von{' '}
            <Link href="/anfrage" className="text-[#F97316] hover:underline font-medium">zertifizierten Installateuren</Link>{' '}
            aus Ihrer Region — kostenlos und unverbindlich.
          </p>
          <Link
            href="/anfrage"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Kostenlose Offerte anfordern <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Häufige Fragen</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Häufig gestellte Fragen
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 text-sm select-none list-none">
                  {faq.question}
                  <span className="ml-4 text-[#F97316] flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">Weitere Informationen rund um Solaranlagen:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/solaranlage-kosten" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Kosten Solaranlage
              </Link>
              <Link href="/foerderungen" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Förderungen &amp; EIV
              </Link>
              <Link href="/solaranlage-einfamilienhaus" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Einfamilienhaus
              </Link>
              <Link href="/solaranlage-mehrfamilienhaus" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Mehrfamilienhaus
              </Link>
              <Link href="/solaranlage-installieren-schweiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Installateure in Ihrer Region
              </Link>
              <Link href="/solaranlage-offerte-einholen" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Offerten einholen und vergleichen
              </Link>
              <Link href="/photovoltaik-komplettloesung-schweiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Anbieter für Komplettlösungen
              </Link>
              <Link href="/foerderungen-kanton-zuerich" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Förderungen Kanton Zürich
              </Link>
              <Link href="/anfrage" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                Offerte anfragen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <FaqSchema faqs={faqs} />
    </main>
  );
}
