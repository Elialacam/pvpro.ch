'use client';

import Image from 'next/image';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

// TeamSection content per locale
const teamContent: Record<Locale, {
  title: string;
  description: string;
  imageAlt: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}> = {
  de: {
    title: 'Erfahrene Schweizer Fachbetriebe für Ihre Photovoltaik',
    description: 'Ein Netzwerk aus über 25 geprüften Schweizer Fachbetrieben mit über 20 Jahren Erfahrung – für verlässliche, transparente und unverbindliche Lösungen. Jeder Partner wird sorgfältig ausgewählt und regelmässig überprüft: zertifizierte Installateure, saubere Montage und eine persönliche Beratung von der ersten Offerte bis zur fertigen Anlage.',
    imageAlt: 'Das PVPro Team - Ihr Partner für Solaranlagen in der Schweiz',
  },
  fr: {
    title: 'Des entreprises suisses expérimentées pour votre installation solaire',
    description: "Un réseau de plus de 25 entreprises suisses qualifiées avec plus de 20 ans d'expérience – pour des solutions fiables, transparentes et sans engagement. Chaque partenaire est soigneusement sélectionné et contrôlé régulièrement : installateurs certifiés, montage soigné et un accompagnement personnalisé du premier devis à l'installation terminée.",
    imageAlt: 'L\'équipe PVPro - Votre partenaire pour les installations solaires en Suisse',
  },
  en: {
    title: 'Experienced Swiss Companies for Your Photovoltaic System',
    description: 'A network of over 25 qualified Swiss companies with over 20 years of experience – for reliable, transparent and no-obligation solutions. Every partner is carefully selected and regularly reviewed: certified installers, clean workmanship and personal guidance from the first quote to the finished system.',
    imageAlt: 'The PVPro Team - Your Partner for Solar Systems in Switzerland',
  },
  it: {
    title: 'Aziende svizzere esperte per il tuo fotovoltaico',
    description: 'Una rete di oltre 25 aziende svizzere qualificate con oltre 20 anni di esperienza – per soluzioni affidabili, trasparenti e senza impegno.',
    imageAlt: 'Il team PVPro davanti a una casa con impianto fotovoltaico in Ticino',
    image: '/team-ticino.webp',
    imageWidth: 800,
    imageHeight: 800,
  },
};

export default function TeamSection() {
  const locale = useLocale();
  const content = teamContent[locale] || teamContent.de;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left side on desktop */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-6">
              {content.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Image - Right side on desktop */}
          <div className="order-1 lg:order-2">
            <div className={`relative rounded-2xl overflow-hidden shadow-xl ${content.image ? '' : 'max-w-sm mx-auto lg:mx-0'}`}>
              <Image
                src={content.image || '/team-new.webp'}
                alt={content.imageAlt}
                width={content.imageWidth || 720}
                height={content.imageHeight || 720}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
