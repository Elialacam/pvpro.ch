import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Sun, Home, Building2, Battery, Calculator, TrendingUp, PiggyBank, ChevronRight, ArrowRight } from 'lucide-react';
import {
  ECONOMIC_FACTS,
  STORAGE_PRICE_NOTES,
  SYSTEM_PRICE_NOTES,
  formatChf,
  formatRangeForLocale,
  formatSwissNumber,
  getSourceNote,
} from '@/lib/facts';

const tenKwpGross = formatRangeForLocale(ECONOMIC_FACTS.systemCosts.bySize[10], 'CHF', 'de');
const tenKwpNet = `${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].min - ECONOMIC_FACTS.incentives.tenKwpApprox)} bis ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].max - ECONOMIC_FACTS.incentives.tenKwpApprox)} CHF`;

export const metadata: Metadata = pageMetadata({
  title: 'Solaranlage Kosten Schweiz – Preise und Förderungen',
  description: `Was kostet eine Solaranlage in der Schweiz? Eine 10-kWp-Anlage kostet brutto ${tenKwpGross}, ohne Speicher. Kosten pro kWp, Förderungen und Speicher. Kostenlose Offerten vergleichen.`,
  alternates: {
    canonical: 'https://www.pvpro.ch/solaranlage-kosten',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-kosten',
      'fr-CH': 'https://www.pvpro.ch/fr/cout-installation-solaire',
      'en-CH': 'https://www.pvpro.ch/en/solar-panel-costs',
      'it-CH': 'https://www.pvpro.ch/it/costi-impianto-solare',
      'x-default': 'https://www.pvpro.ch/solaranlage-kosten',
    },
  },
  openGraph: {
    title: 'Solaranlage Kosten Schweiz – Aktuelle Preise & Förderungen',
    description: `Aktuelle Preise für Solaranlagen in der Schweiz. 10 kWp kosten brutto ${tenKwpGross} und nach ungefährer RU ${tenKwpNet}.`,
    url: 'https://www.pvpro.ch/solaranlage-kosten',
    type: 'article',
    locale: 'de_CH',
    siteName: 'PvPro.ch',
  },
}, { path: '/solaranlage-kosten', locale: 'de' });

const costTable = [
  { size: '5 kWp', production: `${formatSwissNumber(5 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min)} bis ${formatSwissNumber(5 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max)} kWh`, price: formatRangeForLocale(ECONOMIC_FACTS.systemCosts.bySize[5], 'CHF', 'de'), area: `${formatSwissNumber(5 * ECONOMIC_FACTS.roofAreaM2PerKwp)} m²`, ideal: 'Kleines Haus' },
  { size: '8 kWp', production: `${formatSwissNumber(8 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min)} bis ${formatSwissNumber(8 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max)} kWh`, price: formatRangeForLocale(ECONOMIC_FACTS.systemCosts.bySize[8], 'CHF', 'de'), area: `${formatSwissNumber(8 * ECONOMIC_FACTS.roofAreaM2PerKwp)} m²`, ideal: 'Einfamilienhaus' },
  { size: '10 kWp', production: `${formatSwissNumber(10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min)} bis ${formatSwissNumber(10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max)} kWh`, price: tenKwpGross, area: `${formatSwissNumber(10 * ECONOMIC_FACTS.roofAreaM2PerKwp)} m²`, ideal: 'Grosses EFH / MFH' },
];

const storageTable = [
  { size: '5 kWh', price: formatRangeForLocale(ECONOMIC_FACTS.storageCosts.byCapacity[5], 'CHF', 'de') },
  { size: '10 kWh', price: formatRangeForLocale(ECONOMIC_FACTS.storageCosts.byCapacity[10], 'CHF', 'de') },
];

const costFactors = [
  {
    icon: Building2,
    title: 'Anlagengrösse',
    text: 'Grössere Anlagen haben meist geringere Kosten pro kWp, da die Installationskosten auf mehr Leistung verteilt werden.',
  },
  {
    icon: Home,
    title: 'Dachfläche',
    text: 'Je grösser die verfügbare Dachfläche, desto grösser kann die Anlage dimensioniert werden.',
  },
  {
    icon: Home,
    title: 'Dachtyp',
    text: 'Flachdächer oder komplizierte Dächer können höhere Montagekosten verursachen.',
  },
  {
    icon: Sun,
    title: 'Komponenten',
    text: 'Hochwertige Module oder Wechselrichter können den Preis nach oben beeinflussen, bieten aber längere Garantien.',
  },
];

const faqs = [
  {
    question: 'Was kostet eine Photovoltaikanlage für ein Einfamilienhaus?',
    answer: `Eine Anlage mit 8 kWp kostet brutto ${formatRangeForLocale(ECONOMIC_FACTS.systemCosts.bySize[8], 'CHF', 'de')}, eine Anlage mit 10 kWp brutto ${tenKwpGross}. Die Preise gelten ohne Speicher.`,
  },
  {
    question: 'Wie viel kostet eine 10 kW Solaranlage in der Schweiz?',
    answer: `Eine Photovoltaikanlage mit 10 kWp kostet brutto ${tenKwpGross}. Nach Abzug der ungefähren RU von ${formatChf(ECONOMIC_FACTS.incentives.tenKwpApprox)} bleiben ${tenKwpNet}. Im Mittelland produziert sie ${formatSwissNumber(10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min)} bis ${formatSwissNumber(10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max)} kWh Strom pro Jahr.`,
  },
  {
    question: 'Wie viel Strom produziert eine Solaranlage?',
    answer: `Im Mittelland produziert eine Solaranlage ${formatRangeForLocale(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'kWh pro kWp und Jahr', 'de')}. Eine 10-kWp-Anlage erzeugt damit ${formatSwissNumber(10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min)} bis ${formatSwissNumber(10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max)} kWh jährlich.`,
  },
  {
    question: 'Lohnt sich eine Solaranlage in der Schweiz?',
    answer: `Ja. Im Mittelland liegt die Amortisationszeit bei ${formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'Jahren', 'de')}. Module halten typischerweise ${formatRangeForLocale(ECONOMIC_FACTS.moduleLifetimeYears, 'Jahre', 'de')}.`,
  },
  {
    question: 'Wie viele Solarmodule braucht ein Einfamilienhaus?',
    answer: 'Die Zahl der Module hängt von der gewünschten Anlagenleistung und der Leistung der gewählten Module ab.',
  },
  {
    question: 'Wie gross muss mein Dach für eine Solaranlage sein?',
    answer: `Für 1 kWp Leistung werden ungefähr ${formatSwissNumber(ECONOMIC_FACTS.roofAreaM2PerKwp)} m² Dachfläche benötigt. Eine 10-kWp-Anlage benötigt somit rund ${formatSwissNumber(10 * ECONOMIC_FACTS.roofAreaM2PerKwp)} m² geeignete Dachfläche.`,
  },
  {
    question: 'Welche Förderungen gibt es für Solaranlagen in der Schweiz?',
    answer: `In der Schweiz gibt es die RU vom Bund. Sie beträgt bis 30 kWp ${formatChf(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30)} pro kWp, zuzüglich Grundbeitrag. Zusätzlich bieten Kantone und Gemeinden eigene Förderprogramme.`,
  },
  {
    question: 'Was kostet eine Solaranlage mit Batteriespeicher?',
    answer: `Ein 5-kWh-Speicher kostet installiert ${formatRangeForLocale(ECONOMIC_FACTS.storageCosts.byCapacity[5], 'CHF', 'de')}, ein 10-kWh-Speicher ${formatRangeForLocale(ECONOMIC_FACTS.storageCosts.byCapacity[10], 'CHF', 'de')}.`,
  },
];

export default function SolaranlageKostenPage() {
  return (
    <>
      {/* Schema.org: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Was kostet eine Solaranlage in der Schweiz? Aktuelle Preise 2026",
            "description": "Aktuelle Kosten für Solaranlagen in der Schweiz. 5–10 kWp Anlagen, Kosten pro kWp, Förderungen und Batteriespeicher.",
            "author": { "@type": "Organization", "name": "PvPro.ch" },
            "publisher": { "@type": "Organization", "name": "PvPro.ch", "url": "https://www.pvpro.ch" },
            "datePublished": "2025-01-01",
            "dateModified": new Date().toISOString().split('T')[0],
          })
        }}
      />
      {/* Schema.org: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            }))
          })
        }}
      />

      {/* Hero */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #fcb210 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-white/70">Solaranlage Kosten</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#fcb210]/10 border border-[#fcb210]/20 text-[#fcb210] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Sun className="w-3.5 h-3.5" /> Kosten & Förderungen
              </span>
              <h1 className="text-4xl sm:text-5xl font-sans font-bold text-white mb-6 leading-tight">
                Was kostet eine Solaranlage in der Schweiz?
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Die Kosten hängen hauptsächlich von der Grösse der Anlage, der Dachfläche und den verwendeten Komponenten ab.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Eine durchschnittliche Anlage für ein Einfamilienhaus hat eine Leistung von etwa <strong className="text-white">8 bis 10 kWp</strong>.
              </p>
              <Link href="#offerten" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg" style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}>
                Kostenlose Offerte anfordern <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8">
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Für ein typisches Einfamilienhaus liegen die Preise meist zwischen:
              </p>
              <div className="text-white">
                <div className="text-3xl sm:text-4xl font-bold text-[#fcb210] mb-3">{tenKwpGross}</div>
                <div className="text-white/50 text-xs uppercase tracking-wide">10 kWp brutto, ohne Speicher</div>
              </div>
            </div>
          </div>
          <p className="text-xs text-white/50 mt-6 leading-relaxed">{SYSTEM_PRICE_NOTES.de} {getSourceNote('de')}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/asset-haus-luftbild-2.webp"
                alt="Solaranlage auf Schweizer Einfamilienhaus – Luftaufnahme"
                width={700}
                height={500}
                sizes="(max-width: 1024px) 100vw, 896px"
                className="w-full h-64 sm:h-80 object-cover"
                loading="lazy"
              />
            </div>
        </div>
      </section>

      {/* Preistabelle */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-center text-gray-900 mb-4">
            Kosten einer Solaranlage für ein Einfamilienhaus
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Typische Preisbereiche für Photovoltaikanlagen in der Schweiz
          </p>

          {/* Desktop table */}
          <div className="hidden md:block max-w-4xl mx-auto mb-10 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">Anlagengrösse</th>
                  <th className="px-6 py-4 font-semibold">Stromproduktion pro Jahr</th>
                  <th className="px-6 py-4 font-semibold">Dachfläche (ca.)</th>
                  <th className="px-6 py-4 font-semibold">Kosten (ca.)</th>
                </tr>
              </thead>
              <tbody>
                {costTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.size}</td>
                    <td className="px-6 py-4 text-gray-700">{row.production}</td>
                    <td className="px-6 py-4 text-gray-700">{row.area}</td>
                    <td className="px-6 py-4 font-bold text-[#fcb210]">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4 mb-10">
            {costTable.map((row, i) => (
              <div key={i} className={`rounded-2xl p-5 border shadow-sm ${i === 1 ? 'border-[#fcb210]/30 bg-orange-50' : 'border-gray-100 bg-white'}`}>
                {i === 1 && (
                  <div className="bg-[#fcb210] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                    Beliebteste Grösse
                  </div>
                )}
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <span className="text-xl font-bold text-gray-900">{row.size}</span>
                  <span className="text-xl font-bold text-[#fcb210]">{row.price}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div><span className="font-medium">Produktion:</span> {row.production}</div>
                  <div><span className="font-medium">Dachfläche:</span> {row.area}</div>
                </div>
                <div className="text-xs text-gray-400 mt-2">Ideal für: {row.ideal}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 max-w-3xl mx-auto text-sm text-gray-600 text-center">
            Diese Preise enthalten normalerweise: <strong>Solarmodule, Wechselrichter, Montage und Installation.</strong> Der tatsächliche Preis hängt von Dachtyp, Ausrichtung und gewählten Komponenten ab.
          </div>
        </div>
      </section>

      {/* Kosten pro kWp */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-gray-900 mb-4">
              Kosten pro kWp in der Schweiz
            </h2>
            <p className="text-gray-600 mb-6">
              Die Kosten für eine Photovoltaikanlage werden häufig pro kWp (Kilowatt Peak) berechnet.
              In der Schweiz liegen die durchschnittlichen Kosten bei:
            </p>
            <div className="bg-white rounded-2xl border border-[#fcb210]/30 p-6 sm:p-8 text-center mb-6 shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-[#fcb210] mb-2">{formatRangeForLocale(ECONOMIC_FACTS.systemCosts.perKwp, 'CHF', 'de')} <span className="text-2xl">pro kWp</span></div>
              <p className="text-gray-600 text-sm mt-2">
                Der Preis pro kWp sinkt bei grösseren Anlagen, da Installationskosten besser verteilt werden können.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 kW Solaranlage – dedizierte Sektion für wichtige Google-Abfrage */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-gray-900 mb-4">
              Was kostet eine 10 kW Solaranlage in der Schweiz?
            </h2>
            <p className="text-gray-600 mb-6">
              Eine Photovoltaikanlage mit <strong>10 kWp Leistung</strong> kostet in der Schweiz typischerweise:
            </p>
            <div className="bg-orange-50 border border-[#fcb210]/20 rounded-2xl p-6 sm:p-8 mb-6">
              <div className="text-3xl sm:text-4xl font-bold text-[#fcb210] mb-3">{tenKwpGross}</div>
              <p className="text-gray-700 text-sm">Bruttokosten, ohne Speicher</p>
              <p className="text-green-700 font-bold mt-3">{tenKwpNet} netto nach ungefährer RU</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-[#fcb210] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Jährliche Stromproduktion</p>
                  <p className="text-gray-600">Eine 10-kWp-Anlage produziert im Mittelland ungefähr <strong>{formatSwissNumber(10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min)} bis {formatSwissNumber(10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max)} kWh Strom pro Jahr</strong>.</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-[#fcb210]/5 border border-[#fcb210]/20 rounded-2xl">
              <CheckCircle className="w-5 h-5 text-[#fcb210] flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm">
                Für eine 10-kWp-Anlage benötigen Sie rechnerisch rund <strong>{formatSwissNumber(10 * ECONOMIC_FACTS.roofAreaM2PerKwp)} m² Dachfläche</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solaranlage mit Speicher */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-gray-900 mb-4">
              Wie viel kostet eine Solaranlage mit Speicher?
            </h2>
            <p className="text-gray-600 mb-6">
              Ein Batteriespeicher erhöht die Kosten einer Solaranlage – er ermöglicht aber, mehr eigenen Strom zu nutzen und weniger ins Netz einzuspeisen.
            </p>

            <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100 text-gray-400 text-xs uppercase tracking-wider">
                    <th className="px-6 py-4 font-semibold">Speichergrösse</th>
                    <th className="px-6 py-4 font-semibold">Kosten (ca.)</th>
                  </tr>
                </thead>
                <tbody>
                  {storageTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-900 flex items-center gap-2">
                        <Battery className="w-4 h-4 text-[#fcb210]" />{row.size}
                      </td>
                      <td className="px-6 py-4 font-bold text-[#fcb210]">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-3 mb-6">
              {storageTable.map((row, i) => (
                <div key={i} className="flex flex-wrap gap-2 justify-between items-center bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <Battery className="w-4 h-4 text-[#fcb210]" />{row.size}
                  </div>
                  <span className="font-bold text-[#fcb210]">{row.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500">{STORAGE_PRICE_NOTES.de} {getSourceNote('de')}</p>

            <p className="text-gray-600 mb-4">
              Ein Speicher kann den Eigenverbrauch des selbst produzierten Stroms deutlich erhöhen.
            </p>
            <Link
              href="/solaranlage-mit-speicher"
              className="inline-flex items-center gap-2 text-[#fcb210] font-bold hover:underline"
            >
              → Mehr Informationen: Solaranlage mit Speicher
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              <Link href="/blog/lohnt-sich-solaranlage-schweiz-2026" className="text-[#fcb210] hover:underline">Lohnt sich eine Solaranlage 2026?</Link>
              {' '}·{' '}
              <Link href="/blog/solaranlage-steuerabzug-schweiz-2026" className="text-[#fcb210] hover:underline">Steuerabzug Solaranlage Schweiz 2026</Link>
              {' '}·{' '}
              <Link href="/blog/solaranlage-waermepumpe-kombinieren-schweiz" className="text-[#fcb210] hover:underline">Solaranlage + Wärmepumpe</Link>
              {' '}·{' '}
              <Link href="/blog/solaranlage-installateur-konkurs-garantie-schweiz" className="text-[#fcb210] hover:underline">Garantie und Schutz bei Insolvenz</Link>
              {' '}·{' '}
              <Link href="/blog/solaranlage-versicherung-schweiz" className="text-[#fcb210] hover:underline">Versicherungskosten für Solaranlagen</Link>
              {' '}·{' '}
              <Link href="/blog/chinesische-vs-europaeische-solarmodule-schweiz" className="text-[#fcb210] hover:underline">Kostenunterschied chinesische vs. europäische Module</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Kostenfaktoren */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-center text-gray-900 mb-4">
            Welche Faktoren beeinflussen die Kosten?
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Die wichtigsten Faktoren, die den Preis einer Solaranlage in der Schweiz bestimmen
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {costFactors.map((f, i) => (
              <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
                <f.icon className="w-10 h-10 p-2 rounded-xl bg-[#fcb210]/10 text-[#fcb210] mb-4" />
                <h3 className="text-lg font-sans font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Förderungen */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-gray-900 mb-4">
              Förderungen für Solaranlagen in der Schweiz
            </h2>
            <p className="text-gray-600 mb-6">
              In der Schweiz unterstützt der Bund Photovoltaikanlagen mit der sogenannten <strong>Einmalvergütung (EIV)</strong>.
              Diese Förderung reduziert die Investitionskosten deutlich.
            </p>
            <div className="bg-orange-50 border border-[#fcb210]/20 rounded-2xl p-6 sm:p-8 mb-6">
              <div className="flex items-start gap-4">
                <PiggyBank className="w-10 h-10 text-[#fcb210] flex-shrink-0" />
                <div>
                  <p className="text-2xl font-bold text-[#fcb210] mb-1">{formatChf(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30)} pro kWp bis 30 kWp</p>
                  <p className="text-gray-700">Typische Förderbeträge des Bundes (EIV). Die Höhe hängt von der Anlagengrösse ab.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#fcb210]" />
                Rechenbeispiel: 10 kWp Anlage
              </h3>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2 justify-between">
                  <span className="text-gray-600">Bruttokosten</span>
                  <span className="font-medium">{tenKwpGross}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-between text-green-600">
                  <span>– RU Pronovo</span>
                  <span className="font-medium">– {formatChf(ECONOMIC_FACTS.incentives.tenKwpApprox)}</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex flex-col sm:flex-row gap-2 justify-between">
                  <span className="font-semibold text-gray-900">Nettokosten nach ungefährer RU</span>
                  <span className="font-bold text-xl text-[#fcb210]">{tenKwpNet}</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">Richtwert. Tatsächliche Förderungen je nach Kanton und Anlagengrösse.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Rechner CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto bg-orange-50 border border-[#fcb210]/20 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-6">
            <Calculator className="w-14 h-14 text-[#fcb210] flex-shrink-0" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Solar Rechner: Kosten berechnen</h3>
              <p className="text-gray-600 text-sm">
                Schätzen Sie die Kosten Ihrer Solaranlage anhand Ihrer Dachfläche und Ihres Stromverbrauchs.
              </p>
            </div>
            <Link href="/solarrechner" className="inline-flex items-center justify-center bg-gradient-to-br from-[#ffc812] to-[#fcb210] text-white px-6 py-3 rounded-full font-bold text-sm text-center hover:opacity-90 transition-opacity flex-shrink-0">
              Solar Rechner starten →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Offerte */}
      <section id="offerten" className="py-16 bg-gradient-to-r from-orange-50 to-amber-50 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mx-auto">
            <CtaAnfrage
              title="Jetzt kostenlose Offerten erhalten"
              subtitle="Vergleichen Sie bis zu 3 Angebote von geprüften Schweizer Solarteuren. In 2 Minuten fertig."
              ctaText="Kostenlose Offerte anfordern"
            />
            <p className="text-center text-sm text-gray-500 mt-4">
              Möchten Sie zuerst Anbieter vergleichen?{' '}
              <a href="/vergleichsportal-photovoltaik-schweiz" className="text-[#fcb210] hover:underline font-medium">Anbieter kostenlos vergleichen</a>
              {' '}·{' '}
              <a href="/solaranlage-installieren-schweiz" className="text-[#fcb210] hover:underline font-medium">Was kostet die Installation?</a>
              {' '}·{' '}
              <a href="/solaranlage-offerte-einholen" className="text-[#fcb210] hover:underline font-medium">Kostenlose Offerten einholen</a>
              {' '}·{' '}
              <a href="/photovoltaik-schweizer-klima" className="text-[#fcb210] hover:underline font-medium">Photovoltaik im Schweizer Klima</a>
              {' '}·{' '}
              <a href="/photovoltaik-wartung-kosten" className="text-[#fcb210] hover:underline font-medium">Wartungskosten im Überblick</a>
              {' '}·{' '}
              <a href="/solaranlagen-typen-vergleich" className="text-[#fcb210] hover:underline font-medium">Kosten je nach Modultyp</a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-center text-gray-900 mb-4">
            FAQ – Häufige Fragen zu Solaranlage Kosten
          </h2>
          <p className="text-center text-gray-600 mb-10">Antworten auf die häufigsten Fragen rund um die Kosten einer Solaranlage in der Schweiz</p>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-sans font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurz gesagt / Summary box */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-[#fcb210]/20 shadow-sm p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kurz gesagt</h2>
            <p className="text-gray-600 mb-4">Eine Solaranlage kostet in der Schweiz typischerweise:</p>
            <div className="text-3xl sm:text-4xl font-bold text-[#fcb210] mb-3">{tenKwpGross}</div>
            <p className="text-gray-600 text-sm mb-6">für ein Einfamilienhaus</p>
            <p className="text-gray-500 text-sm">
              Die genauen Kosten hängen von der Dachfläche, der Anlagengrösse und den möglichen Förderungen ab.
              Holen Sie sich unverbindlich 3 Offerten von geprüften Installateuren ein.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
