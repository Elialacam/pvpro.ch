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
      { value: '25+', label: 'Geprüfte Partner' },
      { value: '20+', label: 'Jahre Erfahrung' },
      { value: '3',   label: 'Offerten, kostenlos' },
      { value: '100%', label: 'Unverbindlich' },
    ],
    imageAlt: 'PVPro Team – Schweizer Solarexperten',
  },
  fr: {
    eyebrow: 'Notre réseau',
    title: 'Entreprises certifiées. Prix réels. Zéro surprise.',
    description: "Nous travaillons exclusivement avec des installateurs suisses certifiés — soigneusement sélectionnés, régulièrement contrôlés et accompagnés personnellement.",
    stats: [
      { value: '25+', label: 'Partenaires certifiés' },
      { value: '20+', label: "Ans d'expérience" },
      { value: '3',   label: 'Devis gratuits' },
      { value: '100%', label: 'Sans engagement' },
    ],
    imageAlt: "Équipe PVPro – Experts solaires en Suisse",
  },
  en: {
    eyebrow: 'Our Network',
    title: 'Certified Companies. Real Prices. No Surprises.',
    description: 'We work exclusively with certified Swiss installers — carefully selected, regularly reviewed and personally supported.',
    stats: [
      { value: '25+', label: 'Certified Partners' },
      { value: '20+', label: 'Years Experience' },
      { value: '3',   label: 'Free Quotes' },
      { value: '100%', label: 'No Obligation' },
    ],
    imageAlt: 'PVPro Team – Swiss Solar Experts',
  },
  it: {
    eyebrow: 'Il nostro network',
    title: 'Aziende certificate. Prezzi reali. Nessuna sorpresa.',
    description: 'Lavoriamo esclusivamente con installatori svizzeri certificati — selezionati con cura, verificati regolarmente e accompagnati personalmente.',
    stats: [
      { value: '25+', label: 'Partner certificati' },
      { value: '20+', label: 'Anni di esperienza' },
      { value: '3',   label: 'Preventivi gratuiti' },
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
    <section className="relative overflow-hidden bg-[#0f172a]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[540px]">

          {/* Left — text + stats */}
          <div className="flex flex-col justify-center py-16 lg:py-20 pr-0 lg:pr-16 order-2 lg:order-1">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-[#F97316] text-sm font-bold uppercase tracking-widest mb-5">
              <span className="block w-6 h-px bg-[#F97316]" />
              {c.eyebrow}
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              {c.title}
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg">
              {c.description}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {c.stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl px-5 py-4 border border-white/10"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <div className="text-3xl font-black text-white leading-none mb-1">{s.value}</div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo bleeds to edge */}
          <div className="relative order-1 lg:order-2 min-h-[320px] lg:min-h-0">
            {/* Gradient fade left on desktop */}
            <div className="absolute inset-y-0 left-0 w-24 z-10 hidden lg:block"
              style={{ background: 'linear-gradient(to right, #0f172a, transparent)' }} />
            {/* Gradient fade top on mobile */}
            <div className="absolute inset-x-0 bottom-0 h-24 z-10 lg:hidden"
              style={{ background: 'linear-gradient(to top, #0f172a, transparent)' }} />
            <Image
              src={c.image || '/team-new.webp'}
              alt={c.imageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
