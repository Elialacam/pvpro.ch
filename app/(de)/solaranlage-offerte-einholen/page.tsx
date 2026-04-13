import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight, FileText, Clock, Coins } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Solaranlage Offerte einholen Schweiz 2026 – Kostenlos & unverbindlich | PVPro.ch',
  description: 'Kostenlose Offerten für Ihre Solaranlage in der Schweiz einholen. Bis zu 3 Angebote von zertifizierten Installateuren in Ihrer Region. Jetzt vergleichen und sparen.',
  alternates: {
    canonical: 'https://www.pvpro.ch/solaranlage-offerte-einholen',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-offerte-einholen',
      'fr-CH': 'https://www.pvpro.ch/fr/demander-offre-panneau-solaire',
      'en': 'https://www.pvpro.ch/en/get-solar-panel-quotes',
      'it-CH': 'https://www.pvpro.ch/it/richiedere-preventivo-solare',
      'x-default': 'https://www.pvpro.ch/solaranlage-offerte-einholen',
    },
  },
  openGraph: {
    title: 'Solaranlage Offerte einholen Schweiz 2026 – Kostenlos & unverbindlich',
    description: 'Kostenlose Offerten für Ihre Solaranlage in der Schweiz. Bis zu 3 Angebote von zertifizierten Installateuren.',
    url: 'https://www.pvpro.ch/solaranlage-offerte-einholen',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Wie viele Offerten erhalte ich über PVPro.ch?',
    answer: 'Sie erhalten bis zu 3 massgeschneiderte Offerten von zertifizierten Installateuren aus Ihrer Region. So haben Sie sofort eine Vergleichsbasis.',
  },
  {
    question: 'Wie schnell erhalte ich die Offerten?',
    answer: 'In den meisten Fällen erhalten Sie die ersten Offerten innerhalb von 24 bis 48 Stunden nach Ihrer Anfrage.',
  },
  {
    question: 'Bin ich nach der Anfrage zu etwas verpflichtet?',
    answer: 'Nein. Die Anfrage ist vollständig kostenlos und unverbindlich. Sie entscheiden frei, ob und welches Angebot Sie annehmen.',
  },
  {
    question: 'Erhalte ich Werbeanrufe nach meiner Anfrage?',
    answer: 'Nein. PVPro.ch garantiert, dass Sie keine unerwünschten Werbeanrufe erhalten. Nur die Installateure, die Ihnen ein Angebot schicken, nehmen Kontakt auf.',
  },
  {
    question: 'Kann ich auch für ein Mehrfamilienhaus Offerten einholen?',
    answer: 'Ja. PVPro.ch vermittelt Offerten für alle Gebäudetypen — Einfamilienhäuser, Mehrfamilienhäuser und Gewerbegebäude.',
  },
  {
    question: 'Was passiert, wenn mir keine Offerte gefällt?',
    answer: 'Sie sind zu nichts verpflichtet. Sie können alle Offerten ablehnen, ohne irgendwelche Kosten zu tragen.',
  },
];

const offerteInhalt = [
  'Anlagengrösse in kWp und Anzahl Module',
  'Modultyp und Hersteller mit technischen Daten',
  'Wechselrichter — Marke und Leistung',
  'Montagesystem — passend für Ihren Dachtyp',
  'Installationskosten separat ausgewiesen',
  'Geschätzte Jahresproduktion in kWh',
  'Förderung (EIV) bereits abgezogen oder separat ausgewiesen',
  'Garantien auf Module, Wechselrichter und Montage',
  'Amortisationszeit als Richtwert',
];

const steps = [
  {
    n: '1',
    title: 'Formular ausfüllen (2 Minuten)',
    text: 'Sie beschreiben Ihre Situation: Dachfläche, Stromverbrauch, Kanton, gewünschte Optionen wie Batteriespeicher oder Wärmepumpe.',
  },
  {
    n: '2',
    title: 'Offerten erhalten (24–48 Stunden)',
    text: 'Bis zu 3 zertifizierte Installateure aus Ihrer Region schicken Ihnen massgeschneiderte Angebote direkt zu.',
  },
  {
    n: '3',
    title: 'Vergleichen und entscheiden',
    text: 'Sie vergleichen Preise, Komponenten und Referenzen — und wählen frei. Keine Verpflichtung, kein Druck.',
  },
];

const buildingTypes = [
  {
    title: 'Einfamilienhaus',
    desc: 'die häufigste Anfrage, typisch 8–12 kWp',
    href: '/solaranlage-einfamilienhaus',
  },
  {
    title: 'Mehrfamilienhaus',
    desc: 'grössere Anlagen mit ZEV-Modell',
    href: '/solaranlage-mehrfamilienhaus',
  },
  {
    title: 'Gewerbegebäude',
    desc: 'auch für Firmen und Landwirtschaft',
    href: '/anfrage',
  },
];

export default function SolaranlageOfferteEinholenPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Offerte einholen</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <FileText className="w-3.5 h-3.5" /> Offerten &amp; Preise
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Offerten für Photovoltaikanlagen einholen in der Schweiz
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Wer eine Solaranlage kaufen möchte, sollte nie beim ersten Angebot unterschreiben. In der Schweiz können die{' '}
              <Link href="/solaranlage-kosten" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">Kosten</Link>{' '}
              für die gleiche Anlage je nach Installateur um mehrere tausend Franken variieren. PVPro.ch ermöglicht es Ihnen, kostenlos bis zu 3 Offerten von geprüften lokalen Installateuren einzuholen — in weniger als 2 Minuten.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Kostenlos', sub: 'kein Risiko, kein Versteck', note: 'vollständig gratis für Hausbesitzer' },
              { val: '24–48 Stunden', sub: 'bis zur ersten Offerte', note: 'schnelle Antwort von lokalen Fachbetrieben' },
              { val: "Bis zu 4'000 CHF", sub: 'mögliche Ersparnis durch Vergleich', note: 'je nach Grösse der Anlage' },
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

        {/* ── Warum mehrere Offerten ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Der entscheidende Vorteil</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Warum mehrere Offerten einholen?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Viele Hausbesitzer in der Schweiz machen denselben Fehler: Sie fragen nur einen Installateur an und akzeptieren das erste Angebot. Was die meisten nicht wissen ist, dass für exakt die gleiche Anlage — gleiche Module, gleicher Wechselrichter, gleiche Leistung — die Preise zwischen verschiedenen Installateuren um bis zu 4'000 Franken variieren können.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Der Grund dafür ist einfach: Installateure kalkulieren unterschiedlich, haben verschiedene Einkaufskonditionen und unterschiedliche Margen. Wer vergleicht, gewinnt.
            </p>
          </div>
          <div>
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-5">Beispiel — 10 kWp Anlage</p>
              <div className="space-y-4">
                {[
                  { label: 'Installateur A', price: "29'500 CHF", highlight: false },
                  { label: 'Installateur B', price: "26'800 CHF", highlight: false },
                  { label: 'Installateur C (günstigster)', price: "25'600 CHF", highlight: true },
                ].map(r => (
                  <div key={r.label} className={`flex justify-between items-center rounded-xl px-5 py-3 ${r.highlight ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-white/5'}`}>
                    <span className={`text-sm font-medium ${r.highlight ? 'text-orange-300' : 'text-white/70'}`}>{r.label}</span>
                    <span className={`font-bold ${r.highlight ? 'text-orange-400' : 'text-white'}`}>{r.price}</span>
                  </div>
                ))}
                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                  <span className="text-white/60 text-sm">Ersparnis durch Vergleich</span>
                  <span className="text-green-400 font-bold">bis zu 3'900 CHF</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Wie einfach ist es ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">In 3 Schritten</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Wie einfach ist es, Offerten einzuholen?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Früher bedeutete Offerten einholen: selbst recherchieren, anrufen, Termine vereinbaren, warten. Mit PVPro.ch geht das in 3 Schritten:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(step => (
              <div key={step.n} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                  {step.n}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-3">Schritt {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.n === '1' ? (
                    <>
                      Sie beschreiben Ihre Situation: Dachfläche, Stromverbrauch, Kanton, gewünschte Optionen wie{' '}
                      <Link href="/solaranlage-mit-speicher" className="text-[#F97316] hover:underline font-medium">Batteriespeicher</Link>{' '}
                      oder Wärmepumpe.
                    </>
                  ) : step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Was steht in einer guten Offerte ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <img loading="lazy" src="/images/asset-beratung-indoor-2.webp" alt="Solaranlage Offerte Schweiz" className="w-full h-72 object-cover rounded-3xl" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Checkliste</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Was steht in einer guten Offerte?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Eine seriöse Offerte für eine Solaranlage enthält immer folgende Punkte:
            </p>
            <ul className="space-y-3 mb-6">
              {offerteInhalt.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item.includes('EIV') ? (
                      <>
                        {'Förderung ('}
                        <Link href="/foerderungen" className="text-[#F97316] hover:underline font-medium">EIV</Link>
                        {') bereits abgezogen oder separat ausgewiesen'}
                      </>
                    ) : item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed">
                <strong>Tipp:</strong> Wenn eine Offerte diese Punkte nicht enthält, sollten Sie nachfragen — oder über PVPro.ch eine Offerte von einem unserer geprüften Partner einholen.
              </p>
            </div>
          </div>
        </section>

        {/* ── Was kostet es ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Transparenz</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Was kostet es, Offerten einzuholen?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <Coins className="w-6 h-6 text-[#F97316]" />, title: 'Kostenlos', text: 'Für Hausbesitzer ist das Einholen von Offerten vollständig kostenlos — keine versteckten Gebühren.' },
              { icon: <FileText className="w-6 h-6 text-[#F97316]" />, title: 'Kein Abo', text: 'Keine Abo-Kosten und keine Verpflichtung zur Auftragserteilung.' },
              { icon: <Clock className="w-6 h-6 text-[#F97316]" />, title: 'Wir finanzieren uns anders', text: 'Wir erhalten eine Vermittlungsgebühr vom beauftragten Installateur — nicht von Ihnen.' },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="flex justify-center mb-3">{c.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Gebäudetypen ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Alle Gebäudetypen</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Für welche Gebäudetypen kann ich Offerten einholen?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
              Über PVPro.ch können Sie Offerten für alle Gebäudetypen einholen:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {buildingTypes.map(b => (
              <Link key={b.title} href={b.href} className="group rounded-2xl p-8 text-center border border-gray-200 hover:border-orange-300 bg-white hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#F97316] transition-colors">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
                <p className="text-[#F97316] text-sm font-medium mt-3">Offerte einholen →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Jetzt kostenlos bis zu 3 Offerten einholen
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            In 2 Minuten Formular ausfüllen — und bis zu 3 Offerten von{' '}
            <Link href="/anfrage" className="text-[#F97316] hover:underline font-medium">zertifizierten Installateuren</Link>{' '}
            aus Ihrer Region erhalten. Kostenlos, unverbindlich, ohne Werbeanrufe.
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
              <Link href="/vergleichsportal-photovoltaik-schweiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Anbieter vergleichen
              </Link>
              <Link href="/solaranlage-installieren-schweiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Installation Schweiz
              </Link>
              <Link href="/foerderungen-kanton-zuerich" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Förderung Kanton Zürich
              </Link>
              <Link href="/photovoltaik-schweizer-klima" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solaranlage im Schweizer Klima
              </Link>
              <Link href="/photovoltaik-installation-schweiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Was passiert nach der Offerte?
              </Link>
              <Link href="/photovoltaik-komplettloesung-schweiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Offerte für Komplettlösung anfragen
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
