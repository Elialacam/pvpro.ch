import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Users, Shield, Star, MapPin, Phone, Mail } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chi siamo – PVPro.ch | Piattaforma solare svizzera indipendente',
  description: 'Scopri PVPro.ch – la piattaforma svizzera indipendente che mette in contatto i proprietari con installatori fotovoltaici certificati.',
  alternates: {
    canonical: 'https://pvpro.ch/it/chi-siamo',
    languages: {
      'de-CH': 'https://pvpro.ch/ueber-uns',
      'fr-CH': 'https://pvpro.ch/fr/a-propos',
      'en-CH': 'https://pvpro.ch/en/about-us',
      'it-CH': 'https://pvpro.ch/it/chi-siamo',
      'x-default': 'https://pvpro.ch/ueber-uns',
    },
  },
};

const values = [
  {
    icon: Shield,
    title: 'Indipendenza',
    text: "Non siamo legati a nessun installatore. Le nostre raccomandazioni si basano esclusivamente su qualità, prezzo e valutazioni dei clienti.",
  },
  {
    icon: Users,
    title: 'Partner certificati',
    text: "Ogni installatore nella nostra rete viene sottoposto a una verifica accurata: certificazioni, referenze, assicurazioni e feedback dei clienti.",
  },
  {
    icon: Star,
    title: 'Trasparenza',
    text: "Nessun costo nascosto, nessun obbligo. Ricevi prezzi reali da installatori reali nella tua regione.",
  },
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

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/it" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">Chi siamo</span>
        </nav>

        {/* Hero */}
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
              In un mercato spesso poco trasparente e difficile da confrontare, facciamo chiarezza. Ti mettiamo in contatto con fino a 3 installatori certificati della tua regione e lasciamo che le offerte parlino da sole.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/team-new.png"
              alt="Il team PVPro"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-24">
          {stats.map((s) => (
            <div key={s.label} className="text-center rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
              <p className="text-3xl sm:text-4xl font-bold text-[#F97316] mb-2">{s.value}</p>
              <p className="text-sm text-gray-600 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">La nostra missione</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-5">
              Rendiamo l'energia solare accessibile a tutti
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Passare all'energia solare è uno dei migliori investimenti che un proprietario possa fare. Ma il percorso per arrivarci è spesso complicato. PVPro rende questo passo semplice, veloce e sicuro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* How we work */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="/images/hero-family-solar.png"
              alt="Famiglia con impianto solare"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Come lavoriamo</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
              I tuoi interessi al primo posto
            </h2>
            <div className="flex flex-col gap-5">
              {[
                { title: 'Servizio gratuito', text: "Il nostro servizio è 100% gratuito per i proprietari. Ci finanziamo esclusivamente con le commissioni degli installatori — senza costi aggiuntivi per te." },
                { title: 'Nessun obbligo', text: "Decidi tu se e quale offerta accettare. Nessuna pressione, nessun ordine minimo, nessuna penale contrattuale." },
                { title: 'Qualità verificata', text: "Verifichiamo ogni installatore prima di ammetterlo nella rete. Certificati, referenze, prova assicurativa e valutazioni dei clienti sono obbligatori." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-2xl border border-gray-100 p-8 sm:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contatto</h2>
          <div className="flex flex-col gap-4 text-sm max-w-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#F97316] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Indirizzo</p>
                <p className="font-semibold text-gray-800">Via Santi Pietro e Paolo 16<br />6953 Lugaggia, Svizzera</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#F97316] flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">E-mail</p>
                <a href="mailto:anfrage@pvpro.ch" className="font-semibold text-gray-800 hover:text-[#F97316] transition-colors">anfrage@pvpro.ch</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#F97316] flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Telefono</p>
                <a href="tel:+41779770750" className="font-semibold text-gray-800 hover:text-[#F97316] transition-colors">+41 77 977 07 50</a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Pronti per il vostro impianto solare?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Richiedi ora gratuitamente e senza impegno fino a 3 preventivi.
          </p>
          <Link
            href="/it/richiesta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Richiedere un preventivo gratuito →
          </Link>
        </div>

      </div>
    </main>
  );
}
