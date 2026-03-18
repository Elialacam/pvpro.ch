import Link from 'next/link';
import { ChevronRight, CheckCircle, Sun, Home, Building2, Battery, Calculator } from 'lucide-react';
import { Metadata } from 'next';
import CtaAnfrage from '@/components/CtaAnfrage';

export const metadata: Metadata = {
  title: 'Costi impianto solare Svizzera 2026 – Quanto costa un impianto fotovoltaico? | PVPro',
  description: 'Quanto costa un impianto solare in Svizzera? Prezzi 2026: 15\'000 – 35\'000 CHF per una casa unifamiliare. Costi per kWp, incentivi e accumulo. Confronta offerte gratuitamente.',
  alternates: { canonical: 'https://www.pvpro.ch/it/costi-impianto-solare' },
};

const costTable = [
  { size: '5 kWp',  production: "4'500 – 5'000 kWh", price: "13'000 – 18'000 CHF", area: 'ca. 30 – 35 m²', ideal: 'Casa piccola' },
  { size: '8 kWp',  production: "7'500 – 8'000 kWh", price: "18'000 – 25'000 CHF", area: 'ca. 50 – 55 m²', ideal: 'Casa unifamiliare', highlight: true },
  { size: '10 kWp', production: "9'000 – 10'000 kWh", price: "22'000 – 30'000 CHF", area: 'ca. 62 – 68 m²', ideal: 'Casa grande / condominio' },
];

const costFactors = [
  { icon: Building2, title: 'Dimensione impianto', text: 'Gli impianti più grandi hanno un costo per kWp inferiore grazie alle economie di scala.' },
  { icon: Home,      title: 'Superficie del tetto', text: 'Più è grande la superficie disponibile, più grande può essere dimensionato l\'impianto.' },
  { icon: Home,      title: 'Tipo di tetto', text: 'I tetti piani o complessi possono comportare costi di montaggio più elevati.' },
  { icon: Sun,       title: 'Componenti', text: 'Moduli o inverter di alta qualità possono aumentare il prezzo ma offrono garanzie migliori.' },
];

const faqs = [
  { question: 'Quanto costa un impianto solare per una casa unifamiliare?', answer: "La maggior parte degli impianti solari per case unifamiliari in Svizzera costa tra 18'000 e 30'000 CHF dopo le deduzioni degli incentivi (RU). Per un impianto tipico da 8–10 kWp, questa è la fascia di prezzo abituale." },
  { question: 'Quanto costa un impianto da 10 kW in Svizzera?', answer: "Un impianto fotovoltaico da 10 kWp in Svizzera costa tipicamente tra 22'000 e 30'000 CHF. Dopo la deduzione della remunerazione unica (RU) della Confederazione, i costi netti possono essere notevolmente inferiori. Un tale impianto produce circa 9'000–10'000 kWh di elettricità all'anno." },
  { question: 'Quanta elettricità produce un impianto solare?', answer: "In Svizzera, un impianto solare produce circa 900–1'000 kWh per kWp all'anno. Un impianto da 10 kWp produce quindi circa 9'000–10'000 kWh annualmente." },
  { question: 'Vale la pena l\'energia solare in Svizzera?', answer: "Sì. Con il rincaro dell'energia elettrica e gli incentivi disponibili, la maggior parte degli impianti si ammortizza entro 10–15 anni, con una durata di vita di 25–30 anni." },
];

export default function CostiImpiantoSolarePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Costi impianto solare</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Calculator className="w-3.5 h-3.5" />Prezzi 2026
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Costo di un impianto solare in Svizzera
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
              La maggior parte delle case unifamiliari svizzere paga tra{' '}
              <strong className="text-white">15'000 e 35'000 CHF</strong> per un impianto fotovoltaico completo — a seconda della dimensione, del tipo di tetto e dei componenti scelti.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              {[
                { value: "1'400 – 2'200", unit: 'CHF/kWp', label: 'Costo medio' },
                { value: '300 – 400',     unit: 'CHF/kWp', label: 'Incentivo RU' },
                { value: '10 – 15',       unit: 'anni',    label: 'Ammortamento' },
              ].map(s => (
                <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="text-lg font-bold text-white">{s.value}</p>
                  <p className="text-xs text-orange-400 font-semibold">{s.unit}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Panoramica prezzi</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Prezzi per dimensione</h2>
          </div>
          <div className="overflow-x-auto rounded-3xl shadow-xl border border-gray-100 mb-6">
            <table className="w-full">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #1a2236, #0d1117)' }}>
                  {['Dimensione', 'Produzione annua', 'Prezzo (lordo)', 'Superficie richiesta', 'Ideale per'].map(h => (
                    <th key={h} className="px-5 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {costTable.map((row) => (
                  <tr key={row.size} className={`border-t ${row.highlight ? 'border-orange-100' : 'border-gray-100'}`}
                    style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #fff5eb)' } : {}}>
                    <td className="px-5 py-5 font-bold text-gray-900">
                      <div className="flex items-center gap-2">
                        {row.highlight && <span className="text-[10px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded-full">Popolare</span>}
                        {row.size}
                      </div>
                    </td>
                    <td className="px-5 py-5 text-gray-600">{row.production}</td>
                    <td className="px-5 py-5 font-bold text-[#F97316]">{row.price}</td>
                    <td className="px-5 py-5 text-gray-600">{row.area}</td>
                    <td className="px-5 py-5 text-gray-600">{row.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 text-center">Prezzi lordi prima degli incentivi. La remunerazione unica riduce i costi di 300–400 CHF/kWp.</p>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Fattori di costo</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Cosa influisce sul prezzo?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {costFactors.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl p-6 bg-white border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Vantaggi del solare</p>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">Perché investire?</h2>
              <div className="flex flex-col gap-3">
                {['Ridurre significativamente i costi dell\'energia', 'Aumentare l\'indipendenza energetica', 'Aumentare il valore immobiliare', 'Utilizzare energia sostenibile direttamente dal tetto', 'Incentivi federali e cantonali disponibili'].map(b => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                    <span className="text-gray-600">{b}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-2xl border border-orange-100" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <Battery className="w-5 h-5 text-[#F97316]" />
                  <p className="font-bold text-gray-900">Con sistema di accumulo</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Un sistema di accumulo a batteria aumenta l'autoconsumo fino al 70%. Costo aggiuntivo:{' '}
                  <strong className="text-gray-800">7'000 – 15'000 CHF</strong> a seconda della capacità.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Domande frequenti</p>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">FAQ sui costi</h2>
              <div className="flex flex-col gap-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-2xl border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-900 mb-2 text-sm">{faq.question}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <CtaAnfrage />
        </div>
      </section>
    </main>
  );
}
