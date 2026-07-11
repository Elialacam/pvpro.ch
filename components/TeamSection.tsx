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
    title: 'Über 15 Jahre Erfahrung im Dienst der Schweizer Photovoltaik',
    description: 'Mehr als 10.000 zufriedene Kundinnen und Kunden sowie ein Netzwerk von über 500 ausgewählten Partner-Installateuren in der ganzen Schweiz – für verlässliche, transparente und unverbindliche Lösungen.',
    imageAlt: 'Das PVPro Team - Ihr Partner für Solaranlagen in der Schweiz',
  },
  fr: {
    title: 'Plus de 15 ans d\'expérience au service du photovoltaïque suisse',
    description: 'Plus de 10.000 clients satisfaits et un réseau de plus de 500 installateurs partenaires sélectionnés dans toute la Suisse – pour des solutions fiables, transparentes et sans engagement.',
    imageAlt: 'L\'équipe PVPro - Votre partenaire pour les installations solaires en Suisse',
  },
  en: {
    title: 'Over 15 Years of Experience Serving Swiss Photovoltaics',
    description: 'More than 10,000 satisfied customers and a network of over 500 selected partner installers throughout Switzerland – for reliable, transparent and no-obligation solutions.',
    imageAlt: 'The PVPro Team - Your Partner for Solar Systems in Switzerland',
  },
  it: {
    title: 'Il tuo partner locale per il fotovoltaico in Ticino',
    description: 'Ti accompagniamo in ogni fase — dal primo preventivo alla messa in funzione del tuo impianto. Lavoriamo solo con installatori certificati del Ticino: hai sempre un interlocutore vicino a casa, che conosce il territorio, le pratiche e gli incentivi cantonali.',
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
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={content.image || '/team-new.webp'}
                alt={content.imageAlt}
                width={content.imageWidth || 800}
                height={content.imageHeight || 450}
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
