import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight, Wrench, Clock, Sun } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Solaranlage installieren lassen Schweiz 2026 – Anbieter & Kosten | PVPro.ch',
  description: 'Solaranlage installieren lassen in der Schweiz: Finden Sie zertifizierte Anbieter in Ihrer Region. Kostenlose Offerten vergleichen und bis zu 30% sparen mit PVPro.ch.',
  alternates: {
    canonical: 'https://www.pvpro.ch/solaranlage-installieren-schweiz',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-installieren-schweiz',
      'fr-CH': 'https://www.pvpro.ch/fr/installer-panneau-solaire-suisse',
      'en': 'https://www.pvpro.ch/en/solar-panel-installation-switzerland',
      'it-CH': 'https://www.pvpro.ch/it/installare-impianto-solare-svizzera',
      'x-default': 'https://www.pvpro.ch/solaranlage-installieren-schweiz',
    },
  },
  openGraph: {
    title: 'Solaranlage installieren lassen Schweiz 2026 – Anbieter & Kosten',
    description: 'Solaranlage installieren lassen in der Schweiz: zertifizierte Anbieter, Kosten und kostenlose Offerten.',
    url: 'https://www.pvpro.ch/solaranlage-installieren-schweiz',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Wie lange dauert die Installation einer Solaranlage für ein Einfamilienhaus?',
    answer: 'Die eigentliche Montage dauert bei einem Einfamilienhaus typischerweise 1 bis 3 Tage. Dazu kommt eine Vorlaufzeit von 4 bis 12 Wochen ab Auftragserteilung.',
  },
  {
    question: 'Muss ich bei der Installation anwesend sein?',
    answer: 'Nicht zwingend. Es empfiehlt sich jedoch, am ersten Tag und bei der Inbetriebnahme dabei zu sein, um alles zu verstehen und Fragen zu stellen.',
  },
  {
    question: 'Wer kümmert sich um die Anmeldung bei der Gemeinde?',
    answer: 'In der Regel übernimmt der Installateur die Meldung oder das Baugesuch bei der Gemeinde sowie die Anmeldung der Einmalvergütung bei Pronovo.',
  },
  {
    question: 'Kann ich eine Solaranlage selbst installieren?',
    answer: 'In der Schweiz muss die elektrische Installation zwingend von einem zertifizierten Elektriker durchgeführt werden. Die Montage der Module kann theoretisch selbst gemacht werden, ist aber aus Sicherheitsgründen nicht empfohlen.',
  },
  {
    question: 'Was passiert nach der Installation?',
    answer: 'Nach der Inbetriebnahme wird die Anlage beim lokalen Netzbetreiber angemeldet. Der Installateur stellt sicher, dass alles korrekt funktioniert und erklärt Ihnen die Bedienung.',
  },
  {
    question: 'Wie finde ich den besten Installateur in meiner Region?',
    answer: 'PVPro.ch vermittelt Ihnen kostenlos bis zu 3 zertifizierte Installateure aus Ihrer Region — so können Sie Preise und Leistungen direkt vergleichen.',
  },
];

const steps = [
  {
    n: '1',
    title: 'Beratung und Offerte',
    text: 'Ein zertifizierter Installateur besucht Ihr Dach, bewertet die Ausrichtung, Neigung und Fläche und erstellt eine massgeschneiderte Offerte.',
  },
  {
    n: '2',
    title: 'Planung und Bewilligung',
    text: 'Der Installateur übernimmt die Meldung bei der Gemeinde oder — bei bewilligungspflichtigen Anlagen — das Baugesuch.',
  },
  {
    n: '3',
    title: 'Materialbeschaffung',
    text: 'Module, Wechselrichter, Montagesystem und allfälliger Batteriespeicher werden bestellt und geliefert.',
  },
  {
    n: '4',
    title: 'Montage',
    text: 'Die eigentliche Installation dauert bei einem Einfamilienhaus typischerweise 1 bis 3 Tage. Das Montageteam befestigt die Module, verlegt die Kabel und installiert den Wechselrichter.',
  },
  {
    n: '5',
    title: 'Inbetriebnahme und Anmeldung',
    text: 'Nach der Installation wird die Anlage in Betrieb genommen und beim lokalen Netzbetreiber angemeldet. Der Installateur übernimmt die Anmeldung der Einmalvergütung (EIV) bei Pronovo.',
  },
];

const durationRows = [
  { size: '5–8 kWp (kleines EFH)', duration: '1–2 Tage' },
  { size: '8–12 kWp (Standard EFH)', duration: '2–3 Tage' },
  { size: '12–30 kWp (Mehrfamilienhaus)', duration: '3–5 Tage' },
  { size: '30+ kWp (Gewerbe)', duration: '1–2 Wochen' },
];

const costRows = [
  { size: '5 kWp', cost: "13'000 – 18'000 CHF" },
  { size: '8 kWp', cost: "18'000 – 25'000 CHF" },
  { size: '10 kWp', cost: "22'000 – 30'000 CHF" },
];

const criteria = [
  { title: 'Zertifizierung', text: 'Ist der Betrieb anerkannt und hat er nachgewiesene Erfahrung?' },
  { title: 'Lokalität', text: 'Ein regionaler Installateur kennt die kantonalen Vorschriften und Förderungen' },
  { title: 'Referenzen', text: 'Hat er vergleichbare Projekte in Ihrer Region abgeschlossen?' },
  { title: 'Garantien', text: 'Welche Garantien bietet er auf Montage, Module und Wechselrichter?' },
  { title: 'Preis-Leistungs-Verhältnis', text: 'Nur durch den Vergleich mehrerer Angebote sehen Sie, ob ein Preis fair ist' },
];

export default function SolaranlageInstallierenPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solaranlage installieren</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Wrench className="w-3.5 h-3.5" /> Installation &amp; Anbieter
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Solaranlage installieren lassen in der Schweiz
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Eine Solaranlage ist eine langfristige Investition. Wer sie installieren lässt, sollte den richtigen Fachbetrieb wählen — denn Qualität, Preis und Service variieren stark. PVPro.ch verbindet Sie kostenlos mit geprüften Schweizer Installateuren aus Ihrer Region.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '1–3 Tage', sub: 'bis zur ersten Offerte', note: 'schnelle und unkomplizierte Vermittlung' },
              { val: '500+', sub: 'zertifizierte Installateure', note: 'geprüfte Fachbetriebe in der ganzen Schweiz' },
              { val: '25–30 Jahre', sub: 'Lebensdauer einer Anlage', note: 'langfristige Rendite für Ihr Zuhause' },
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

        {/* ── Was passiert bei der Installation ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Schritt für Schritt</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Was passiert bei der Installation einer Solaranlage?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Die Installation einer Photovoltaikanlage läuft in der Schweiz in der Regel in folgenden Schritten ab:
            </p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.n} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg z-10"
                    style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                    {step.n}
                  </div>
                  <div className="rounded-2xl p-6 flex-1" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                    <h3 className="font-bold text-gray-900 mb-2">Schritt {step.n} — {step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.n === '2' ? (
                        <>
                          Der Installateur übernimmt die Meldung bei der Gemeinde oder — bei bewilligungspflichtigen Anlagen — das Baugesuch. In den meisten Fällen ist eine Solaranlage auf dem Dach{' '}
                          <Link href="/bewilligungspflicht-solaranlage-schweiz" className="text-[#F97316] hover:underline font-medium">bewilligungsfrei</Link>.
                        </>
                      ) : step.n === '5' ? (
                        <>
                          Nach der Installation wird die Anlage in Betrieb genommen und beim lokalen Netzbetreiber angemeldet. Der Installateur übernimmt in der Regel auch die Anmeldung der{' '}
                          <Link href="/foerderungen" className="text-[#F97316] hover:underline font-medium">Einmalvergütung (EIV)</Link> bei Pronovo.
                        </>
                      ) : step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Wie lange dauert die Installation ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Zeitplanung</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Wie lange dauert die Installation?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Die Dauer hängt von der Grösse der Anlage ab. Die Vorlaufzeit — von der Offerte bis zur Montage — beträgt in der Schweiz aktuell zwischen 4 und 12 Wochen, je nach Auslastung des Installateurs und Verfügbarkeit der Komponenten.
            </p>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3 text-white/60 font-semibold">Anlagengrösse</th>
                    <th className="px-5 py-3 text-white font-bold text-center">Installationsdauer</th>
                  </tr>
                </thead>
                <tbody>
                  {durationRows.map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-3 text-gray-700 font-medium">{row.size}</td>
                      <td className="px-5 py-3 text-center">
                        <span className="inline-flex items-center gap-1.5 text-[#F97316] font-semibold">
                          <Clock className="w-3.5 h-3.5" /> {row.duration}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <img src="/images/asset-installateur-dach-2.png" alt="Solaranlage Installation Schweiz" className="w-full h-72 object-cover rounded-3xl object-top" />
          </div>
        </section>

        {/* ── Was kostet die Installation ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Kosten</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Was kostet die Installation einer Solaranlage?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Die Installationskosten sind im Gesamtpreis einer Solaranlage enthalten. Typische Richtwerte für ein{' '}
              <Link href="/solaranlage-einfamilienhaus" className="text-[#F97316] hover:underline font-medium">Einfamilienhaus</Link>:
            </p>
          </div>
          <div className="max-w-2xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-6 py-4 text-white/60 font-semibold">Anlagengrösse</th>
                  <th className="px-6 py-4 text-white font-bold text-center">Gesamtkosten inkl. Installation</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.size}</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-900">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-2xl mx-auto bg-orange-50 border border-orange-200 rounded-xl p-6">
            <p className="text-orange-800 text-sm leading-relaxed">
              Nach Abzug der Bundesförderung (<Link href="/foerderungen" className="text-[#F97316] hover:underline font-medium">Einmalvergütung EIV</Link>) reduzieren sich die{' '}
              <Link href="/solaranlage-kosten" className="text-[#F97316] hover:underline font-medium">Kosten</Link>{' '}
              um 300–400 CHF pro kWp. Durch den{' '}
              <Link href="/vergleichsportal-photovoltaik-schweiz" className="text-[#F97316] hover:underline font-medium">Vergleich mehrerer Offerten</Link>{' '}
              können Sie zusätzlich mehrere tausend Franken sparen.
            </p>
          </div>
        </section>

        {/* ── Worauf achten ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Checkliste</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Worauf achten bei der Wahl des Installateurs?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nicht jeder Installateur bietet die gleiche Qualität. Diese Punkte sollten Sie prüfen:
            </p>
            <ul className="space-y-4 mb-6">
              {criteria.map(c => (
                <li key={c.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-gray-900">{c.title}</strong> — {c.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>PVPro.ch prüft all diese Kriterien im Voraus</strong> — Sie erhalten nur Offerten von Betrieben, die unsere Standards erfüllen.
              </p>
            </div>
          </div>
          <div>
            <img src="/images/asset-beratung-indoor-2.png" alt="Installateur wählen Schweiz" className="w-full h-72 object-cover rounded-3xl" />
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Tipp</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Fragen Sie immer nach mindestens 3 Referenzprojekten in Ihrer Region und lassen Sie sich die Garantiebedingungen schriftlich bestätigen — bevor Sie unterschreiben.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Sun className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Jetzt Installateur in Ihrer Region finden
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Häufig gestellte Fragen</h2>
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
            <p className="text-gray-500 text-sm mb-4">Weitere Informationen:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/solaranlage-kosten" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Kosten Solaranlage
              </Link>
              <Link href="/foerderungen" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Förderungen &amp; EIV
              </Link>
              <Link href="/vergleichsportal-photovoltaik-schweiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Anbieter vergleichen
              </Link>
              <Link href="/solaranlage-offerte-einholen" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Kostenlose Offerten vergleichen
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
