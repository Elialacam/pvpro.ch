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
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* Subtle orange radial glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.07] blur-3xl"
        style={{ background: '#fcb210' }}
      />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          {/* Left — text + stats */}
          <div className="flex-1 min-w-0">

            {/* Mobile header row: eyebrow + inline mini photo */}
            <div className="flex items-start gap-4 lg:block">
              <div className="flex-1 min-w-0">
                {/* Eyebrow */}
                <span className="inline-flex items-center gap-2 text-[#ffc812] text-sm font-bold uppercase tracking-widest mb-5">
                  <span className="block w-6 h-px bg-[#ffc812]" />
                  {c.eyebrow}
                </span>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5 max-w-xl">
                  {c.title}
                </h2>
              </div>

              {/* Mobile-only mini photo (hidden on lg+) */}
              <div className="flex-shrink-0 lg:hidden">
                <div className="relative w-24 h-28 rounded-2xl overflow-hidden border border-orange-100 shadow-md">
                  <div
                    className="absolute inset-x-0 bottom-0 h-8 z-10"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)' }}
                  />
                  <Image
                    src={c.image || '/team-new.webp'}
                    alt={c.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="96px"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg">
              {c.description}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {c.stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl px-5 py-4 border border-orange-100 bg-orange-50 text-center"
                >
                  <div className="text-3xl font-black text-gray-900 leading-none mb-1">{s.value}</div>
                  <div className="text-gray-500 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — desktop portrait card (hidden on mobile) */}
          <div className="hidden lg:flex flex-shrink-0 justify-end">
            <div className="relative w-64 h-72 rounded-3xl overflow-hidden border border-orange-100 shadow-xl">
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
