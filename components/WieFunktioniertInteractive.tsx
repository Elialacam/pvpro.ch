'use client';

import { useState } from 'react';
import { Sun, Zap, ArrowRight, Battery, Home, Wifi, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    num: '01',
    icon: Sun,
    title: 'Sonnenlicht trifft auf die Module',
    body: 'Die Solarmodule auf Ihrem Dach bestehen aus vielen kleinen Solarzellen. Sobald Sonnenstrahlen auf sie treffen, wird Energie freigesetzt — rund um die Uhr, auch bei bewölktem Himmel.',
    color: '#FBBF24',
    bg: '#FFFBEB',
  },
  {
    num: '02',
    icon: Zap,
    title: 'Solarzellen erzeugen Gleichstrom',
    body: 'Durch den photoelektrischen Effekt wird das Licht direkt in elektrische Energie umgewandelt. Es entsteht Gleichstrom (DC) — wie bei einer Batterie.',
    color: '#F97316',
    bg: '#FFF7ED',
  },
  {
    num: '03',
    icon: ArrowRight,
    title: 'Wechselrichter macht den Strom nutzbar',
    body: 'Da Haushaltsgeräte mit Wechselstrom (AC) laufen, wandelt der Wechselrichter den Gleichstrom um. Dieses Gerät ist das Herzstück Ihrer Anlage.',
    color: '#10B981',
    bg: '#F0FDF4',
  },
  {
    num: '04',
    icon: Home,
    title: 'Strom wird im Haus genutzt',
    body: 'Der umgewandelte Strom versorgt Ihre Geräte, Ihre Beleuchtung und Ihre Wärmepumpe — direkt aus Ihrer eigenen Produktion, ohne Kosten.',
    color: '#3B82F6',
    bg: '#EFF6FF',
  },
  {
    num: '05',
    icon: Battery,
    title: 'Überschuss wird gespeichert oder eingespeist',
    body: 'Produzieren Sie mehr Strom als Sie verbrauchen, wird er in einem Batteriespeicher gespeichert — oder ins öffentliche Netz eingespeist und vergütet.',
    color: '#8B5CF6',
    bg: '#F5F3FF',
  },
];

const komponenten = [
  {
    icon: '☀️',
    name: 'Solarmodule',
    desc: 'Erzeugen Gleichstrom aus Sonnenlicht. Moderne Module erreichen Wirkungsgrade von bis zu 22%.',
    fact: 'Lebensdauer: 25–30 Jahre',
  },
  {
    icon: '⚡',
    name: 'Wechselrichter',
    desc: 'Wandelt Gleichstrom (DC) in Wechselstrom (AC) um, den Ihre Geräte verwenden können.',
    fact: 'Herzstück der Anlage',
  },
  {
    icon: '📊',
    name: 'Stromzähler',
    desc: 'Misst genau, wie viel Strom Sie verbrauchen und wie viel Sie ins Netz einspeisen.',
    fact: 'Zweirichtungszähler',
  },
  {
    icon: '🔋',
    name: 'Batteriespeicher',
    desc: 'Optional, aber empfohlen: Speichert überschüssigen Solarstrom für die Nacht oder bewölkte Tage.',
    fact: 'Kapazität: 5–20 kWh',
  },
];

function ProductionCalc() {
  const [kwp, setKwp] = useState(8);
  const [hasEv, setHasEv] = useState(false);
  const [hasHeatpump, setHasHeatpump] = useState(false);

  const yearlyKwh = Math.round(kwp * 1000);
  const dailyKwh = (yearlyKwh / 365).toFixed(0);
  const savedChf = Math.round(yearlyKwh * 0.22);
  const evCoverage = hasEv ? Math.round((yearlyKwh / 2500) * 100) : null;
  const heatCoverage = hasHeatpump ? Math.round((yearlyKwh / 3000) * 100) : null;

  return (
    <div className="rounded-3xl border border-gray-100 shadow-sm bg-white p-7 sm:p-10">
      <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-1">Interaktiv</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Wie viel Strom produziert meine Anlage?</h2>
      <p className="text-gray-500 text-sm mb-8">Schieben Sie den Regler, um die Jahresproduktion zu sehen.</p>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold text-gray-700">Anlagengrösse</span>
          <span className="px-3 py-1 rounded-full text-sm font-bold text-white" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            {kwp} kWp
          </span>
        </div>
        <input
          type="range" min={3} max={20} step={1} value={kwp}
          onChange={(e) => setKwp(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer slider-orange"
          style={{ background: `linear-gradient(to right, #F97316 ${((kwp - 3) / 17) * 100}%, #e5e7eb ${((kwp - 3) / 17) * 100}%)` }}
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>3 kWp (klein)</span>
          <span>20 kWp (gross)</span>
        </div>
      </div>

      <div className="flex gap-3 mb-8 flex-wrap">
        <button
          onClick={() => setHasEv(!hasEv)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border transition-all ${hasEv ? 'border-[#F97316] bg-orange-50 text-[#F97316]' : 'border-gray-200 text-gray-500'}`}
        >
          <span>🚗</span> E-Auto
        </button>
        <button
          onClick={() => setHasHeatpump(!hasHeatpump)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border transition-all ${hasHeatpump ? 'border-[#F97316] bg-orange-50 text-[#F97316]' : 'border-gray-200 text-gray-500'}`}
        >
          <span>♨️</span> Wärmepumpe
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        <div className="rounded-2xl bg-gray-50 p-4 text-center">
          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Pro Jahr</p>
          <p className="text-2xl font-bold text-gray-900">{yearlyKwh.toLocaleString('de-CH')}</p>
          <p className="text-xs text-gray-500">kWh</p>
        </div>
        <div className="rounded-2xl bg-gray-50 p-4 text-center">
          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Pro Tag ⌀</p>
          <p className="text-2xl font-bold text-gray-900">{dailyKwh}</p>
          <p className="text-xs text-gray-500">kWh</p>
        </div>
        <div className="rounded-2xl bg-orange-50 border border-orange-100 p-4 text-center col-span-2 sm:col-span-1">
          <p className="text-xs text-[#F97316] mb-1 uppercase tracking-wide font-bold">Ersparnis/Jahr</p>
          <p className="text-2xl font-bold text-[#F97316]">~{savedChf.toLocaleString('de-CH')}</p>
          <p className="text-xs text-gray-500">CHF</p>
        </div>
      </div>

      {(hasEv || hasHeatpump) && (
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 space-y-3">
          {hasEv && evCoverage !== null && (
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">E-Auto-Ladebedarf gedeckt</span>
                <span className="font-bold text-gray-900">{Math.min(evCoverage, 100)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 rounded-full bg-[#F97316] transition-all duration-500" style={{ width: `${Math.min(evCoverage, 100)}%` }} />
              </div>
            </div>
          )}
          {hasHeatpump && heatCoverage !== null && (
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Wärmepumpenbedarf gedeckt</span>
                <span className="font-bold text-gray-900">{Math.min(heatCoverage, 100)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 rounded-full bg-blue-500 transition-all duration-500" style={{ width: `${Math.min(heatCoverage, 100)}%` }} />
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
        <Link
          href="/anfrage"
          className="flex-1 text-center py-3.5 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
          style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
        >
          Kostenlose Offerte anfordern →
        </Link>
        <Link
          href="/solaranlage-kosten"
          className="flex-1 text-center py-3.5 rounded-full font-bold text-gray-700 text-sm border border-gray-200 hover:border-[#F97316] hover:text-[#F97316] transition-colors"
        >
          Kosten berechnen
        </Link>
      </div>
    </div>
  );
}

const faqs = [
  { q: 'Wie funktioniert eine Solaranlage einfach erklärt?', a: 'Solarmodule erzeugen aus Sonnenlicht Gleichstrom. Ein Wechselrichter wandelt diesen in nutzbaren Wechselstrom um, der direkt im Haushalt verwendet oder ins Netz eingespeist wird.' },
  { q: 'Was ist der Unterschied zwischen Photovoltaik und Solaranlage?', a: 'Photovoltaik erzeugt Strom aus Licht. Solarthermie dagegen erzeugt Wärme (z.B. für Warmwasser). Im Alltag wird "Solaranlage" meist als Synonym für Photovoltaik verwendet.' },
  { q: 'Was bringt ein 800 Watt Solarmodul am Tag?', a: 'Ein 800-Watt-System produziert im Sommer etwa 2–4 kWh pro Tag. Im Winter ist die Produktion deutlich geringer, da die Tage kürzer und die Sonne tiefer steht.' },
  { q: 'Kann ein Solarpanel einen Kühlschrank betreiben?', a: 'Ja, ein Solarpanel kann einen Kühlschrank betreiben — aber meist nicht dauerhaft alleine. Dafür ist ein grösseres System oder ein Speicher notwendig.' },
  { q: 'Ist man mit Photovoltaik autark?', a: 'Nicht vollständig. Ohne Speicher und im Winter bleibt man teilweise auf Strom aus dem Netz angewiesen. Mit einem grossen Batteriespeicher kann man jedoch sehr hohe Eigenversorgungsgrade erreichen.' },
  { q: 'Wie gross muss eine Solaranlage sein, um ein Auto zu laden?', a: 'Für ein Elektroauto benötigt man etwa 2–4 kWp zusätzliche Leistung, je nach Fahrverhalten und jährlichem Verbrauch (ca. 2\'000 – 3\'000 kWh/Jahr).' },
  { q: 'Was bringt eine Solaranlage im Winter?', a: 'Im Winter produziert eine Solaranlage deutlich weniger Strom — aber nicht nichts. Kürzere Tage und tiefere Sonnenwinkel reduzieren die Produktion, Strom wird aber weiterhin erzeugt.' },
  { q: 'Wie lange reicht ein 10 kWh Speicher?', a: 'Ein 10-kWh-Speicher deckt je nach Haushalt den Abend und die Nacht ab. Bei hohem Verbrauch (z.B. Wärmepumpe) wird er schneller entladen.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="font-bold text-gray-900 text-sm sm:text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#F97316] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 text-gray-500 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function WieFunktioniertInteractive() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* Steps */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-2">Schritt für Schritt</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Wie funktioniert eine Solaranlage?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Step nav */}
            <div className="space-y-3">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = activeStep === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`w-full text-left rounded-2xl p-5 border transition-all duration-200 ${isActive ? 'border-transparent shadow-md' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                    style={isActive ? { background: step.bg, borderColor: step.color + '40' } : {}}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                        style={{ background: isActive ? step.color : '#f3f4f6' }}>
                        <Icon className="w-5 h-5" style={{ color: isActive ? 'white' : '#9ca3af' }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: isActive ? step.color : '#9ca3af' }}>
                            Schritt {step.num}
                          </span>
                        </div>
                        <p className="font-bold text-gray-900 text-sm sm:text-base">{step.title}</p>
                        {isActive && <p className="text-gray-500 text-sm mt-2 leading-relaxed">{step.body}</p>}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            {/* Active step detail visual */}
            <div className="sticky top-28">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100" style={{ background: steps[activeStep].bg }}>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: steps[activeStep].color }}>
                      {(() => { const Icon = steps[activeStep].icon; return <Icon className="w-6 h-6 text-white" />; })()}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: steps[activeStep].color }}>
                        Schritt {steps[activeStep].num}
                      </p>
                      <p className="font-bold text-gray-900">{steps[activeStep].title}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{steps[activeStep].body}</p>
                  <div className="flex gap-1">
                    {steps.map((_, i) => (
                      <button key={i} onClick={() => setActiveStep(i)}
                        className="h-1.5 rounded-full transition-all duration-300"
                        style={{ width: activeStep === i ? 32 : 8, background: activeStep === i ? steps[activeStep].color : '#d1d5db' }}
                      />
                    ))}
                  </div>
                </div>
                {activeStep === 4 && (
                  <div className="border-t border-gray-100 bg-white/60 px-8 py-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white border border-gray-100 p-3 text-center">
                        <p className="text-xs text-gray-400 mb-0.5">Einspeisung</p>
                        <p className="font-bold text-gray-900 text-sm">Vergütung durch Netzbetreiber</p>
                      </div>
                      <div className="rounded-xl bg-white border border-gray-100 p-3 text-center">
                        <p className="text-xs text-gray-400 mb-0.5">Speicher</p>
                        <p className="font-bold text-gray-900 text-sm">Für Abend & Nacht</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Komponenten */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-2">Aufbau</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Welche Komponenten hat eine Solaranlage?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {komponenten.map((k) => (
              <div key={k.name} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4 block">{k.icon}</span>
                <h3 className="font-bold text-gray-900 text-base mb-2">{k.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{k.desc}</p>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-[#F97316]">{k.fact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rechner */}
      <section id="rechner" className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <ProductionCalc />
          </div>
        </div>
      </section>

      {/* Quick facts Q&A */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-2">Auf einen Blick</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Häufige Fragen kurz beantwortet</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { q: 'Produziert sie auch im Winter?', a: 'Ja — deutlich weniger, aber weiterhin Strom. Moderne Anlagen erzeugen auch bei Bewölkung Energie.' },
              { q: 'Kann ich ein E-Auto laden?', a: 'Ja. Mit ca. 2–4 kWp Zusatzleistung decken Sie den Grossteil des Ladbedarfs Ihres Elektroautos.' },
              { q: 'Bin ich damit autark?', a: 'Nicht vollständig — aber mit einem Speicher können Sie bis zu 70–80% Eigenversorgung erreichen.' },
              { q: 'Wie viel produziert 1 Modul täglich?', a: 'Ein 400-Watt-Modul erzeugt im Sommer ca. 1–2 kWh/Tag. Im Winter entsprechend weniger.' },
              { q: 'Was kostet eine 10-kWp-Anlage?', a: "Zwischen 20'000 und 35'000 CHF vor Förderungen. Die EIV-Vergütung reduziert die Kosten deutlich." },
              { q: 'Wann amortisiert sie sich?', a: 'Bei einem typischen Schweizer Haushalt in 8–12 Jahren — je nach Eigenverbrauch und Strompreis.' },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
                <p className="font-bold text-gray-900 text-sm mb-2 flex items-start gap-2">
                  <span className="text-[#F97316] font-black flex-shrink-0">Q</span> {item.q}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed pl-5">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Häufig gestellte Fragen</h2>
            <div className="rounded-2xl border border-gray-100 shadow-sm bg-white px-6">
              {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
