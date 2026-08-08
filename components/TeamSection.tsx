'use client';

import Image from 'next/image';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

const teamContent: Record<Locale, {
  eyebrow: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  imageAlt: string;
  image?: string;
}> = {
  de: {
    eyebrow: 'Unser Netzwerk',
    title: 'Geprüfte Fachbetriebe. Echte Preise. Keine Überraschungen.',
    description: 'Wir arbeiten ausschliesslich mit zertifizierten Schweizer Installateuren zusammen — sorgfältig ausgewählt, regelmässig überprüft und persönlich begleitet.',
    stats: [
      { value: '25+',  label: 'Geprüfte Partner' },
      { value: '20+',  label: 'Jahre Erfahrung' },
      { value: '3',    label: 'Offerten, kostenlos' },
      { value: '100%', label: 'Unverbindlich' },
    ],
    imageAlt: 'PVPro Team – Schweizer Solarexperten',
  },
  fr: {
    eyebrow: 'Notre réseau',
    title: 'Entreprises certifiées. Prix réels. Zéro surprise.',
    description: "Nous travaillons exclusivement avec des installateurs suisses certifiés — soigneusement sélectionnés, régulièrement contrôlés et accompagnés personnellement.",
    stats: [
      { value: '25+',  label: 'Partenaires certifiés' },
      { value: '20+',  label: "Ans d'expérience" },
      { value: '3',    label: 'Devis gratuits' },
      { value: '100%', label: 'Sans engagement' },
    ],
    imageAlt: 'Équipe PVPro – Experts solaires en Suisse',
  },
  en: {
    eyebrow: 'Our Network',
    title: 'Certified Companies. Real Prices. No Surprises.',
    description: 'We work exclusively with certified Swiss installers — carefully selected, regularly reviewed and personally supported.',
    stats: [
      { value: '25+',  label: 'Certified Partners' },
      { value: '20+',  label: 'Years Experience' },
      { value: '3',    label: 'Free Quotes' },
      { value: '100%', label: 'No Obligation' },
    ],
    imageAlt: 'PVPro Team – Swiss Solar Experts',
  },
  it: {
    eyebrow: 'Il nostro network',
    title: 'Aziende certificate. Prezzi reali. Nessuna sorpresa.',
    description: 'Lavoriamo esclusivamente con installatori svizzeri certificati — selezionati con cura, verificati regolarmente e accompagnati personalmente.',
    stats: [
      { value: '25+',  label: 'Partner certificati' },
      { value: '20+',  label: 'Anni di esperienza' },
      { value: '3',    label: 'Preventivi gratuiti' },
      { value: '100%', label: 'Senza impegno' },
    ],
    imageAlt: 'Team PVPro – Esperti solari in Ticino',
    image: '/team-ticino.webp',
  },
};

export default function TeamSection() {
  const locale = useLocale();
  const c = teamContent[locale] || teamContent.de;

  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-16 lg:py-20">
      {/* Decorative background dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Subtle orange glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: '#F97316' }}
      />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          {/* Left — text + stats (takes most of the space) */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-[#F97316] text-sm font-bold uppercase tracking-widest mb-5">
              <span className="block w-6 h-px bg-[#F97316]" />
              {c.eyebrow}
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5 max-w-xl">
              {c.title}
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg">
              {c.description}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {c.stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl px-5 py-4 border border-white/10 text-center"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <div className="text-3xl font-black text-white leading-none mb-1">{s.value}</div>
                  <div className="text-slate-400 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — small portrait card */}
          <div className="flex-shrink-0 flex justify-center lg:justify-end">
            <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
              {/* Inner gradient overlay at bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-16 z-10"
                style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.7), transparent)' }}
              />
              <Image
                src={c.image || '/team-new.webp'}
                alt={c.imageAlt}
                fill
                className="object-cover object-top"
                sizes="256px"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
