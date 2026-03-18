import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Users, Shield, Star, MapPin, Phone, Mail } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chi siamo – PVPro.ch | Piattaforma svizzera di confronto solare',
  description: 'Scopri PVPro.ch – la piattaforma svizzera indipendente che mette in contatto i proprietari con installatori fotovoltaici certificati.',
  alternates: { canonical: 'https://www.pvpro.ch/it/chi-siamo' },
};

const values = [
  { icon: Shield, title: 'Indipendenza', text: 'Non siamo legati a nessun installatore. Le nostre raccomandazioni si basano esclusivamente su qualità, prezzo e valutazioni dei clienti.' },
  { icon: Users,  title: 'Partner certificati', text: 'Ogni installatore nella nostra rete viene sottoposto a una verifica accurata: certificazioni, referenze, assicurazioni e feedback dei clienti.' },
  { icon: Star,   title: 'Trasparenza', text: 'Nessun costo nascosto, nessun obbligo. Ricevi prezzi reali da installatori reali nella tua regione.' },
];

const stats = [
  { value: "10'000+", label: 'Clienti soddisfatti' },
  { value: '500+',    label: 'Installatori certificati' },
  { value: '15+',     label: 'Anni di esperienza' },
  { value: '26',      label: 'Cantoni svizzeri' },
];

export default function ChiSiamoPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/it" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">Chi siamo</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">La nostra storia</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              La piattaforma solare svizzera indipendente
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              PVPro.ch è stata fondata con una missione chiara: aiutare i proprietari svizzeri a trovare il miglior impianto solare al miglior prezzo — in modo semplice, trasparente e gratuito.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              In un mercato spesso opaco e difficile da confrontare, facciamo chiarezza. Ti mettiamo in contatto con fino a 3 installatori certificati della tua regione e lasciamo che le offerte parlino da sole.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/asset-beratung-indoor-1.png" alt="Il team PVPro" width={700} height={500} className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Cosa ci distingue</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">I nostri valori</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-6 h-6 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl p-10 sm:p-16 mb-16" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Azienda</p>
              <h2 className="text-2xl font-bold text-white mb-4">NOBA Media Sagl</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                PVPro.ch è gestito da NOBA Media Sagl, una società svizzera iscritta nel registro di commercio del Canton Ticino.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />Via Santi Pietro e Paolo 16, 6953 Lugaggia, Svizzera
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />+41 77 977 07 50
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />anfrage@pvpro.ch
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: 'UID', value: 'CHE-236.020.113' },
                { label: 'RC', value: 'CH-501.4.029.665-0, Cantone Ticino' },
                { label: 'Direttore', value: 'Elia Alacam' },
                { label: 'Sede', value: 'Capriasca (TI)' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 rounded-xl px-5 py-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest w-24 flex-shrink-0 pt-0.5">{item.label}</span>
                  <span className="text-sm text-gray-300">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Inizia gratuitamente ora</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">Ottieni fino a 3 preventivi da installatori certificati nella tua regione.</p>
          <Link href="/anfrage" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Ottieni preventivi gratuiti →
          </Link>
        </div>
      </div>
    </main>
  );
}
