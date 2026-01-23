'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import SolarForm from './SolarForm';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

// Hero content per locale
const heroContent: Record<Locale, {
  title: string;
  subtitle: string;
  subtitleHighlight: string;
  description: string;
  checkmarks: string[];
}> = {
  de: {
    title: 'PVPro Schweiz',
    subtitle: 'Solaranlagen vergleichen.',
    subtitleHighlight: 'Klar. Unabhängig.',
    description: 'Wir analysieren Ihr Dach und vermitteln geprüfte Solarteure aus Ihrer Region.',
    checkmarks: [
      'Geprüfte Schweizer Solarteure',
      'Transparente Preise',
      'Kostenlos & unverbindlich',
    ],
  },
  fr: {
    title: 'PVPro Suisse',
    subtitle: 'Comparer les installations solaires.',
    subtitleHighlight: 'Clair. Indépendant.',
    description: 'Nous analysons votre toit et vous mettons en relation avec des installateurs certifiés de votre région.',
    checkmarks: [
      'Installateurs suisses certifiés',
      'Prix transparents',
      'Gratuit et sans engagement',
    ],
  },
  en: {
    title: 'PVPro Switzerland',
    subtitle: 'Compare solar systems.',
    subtitleHighlight: 'Clear. Independent.',
    description: 'We analyze your roof and connect you with certified installers from your region.',
    checkmarks: [
      'Certified Swiss installers',
      'Transparent prices',
      'Free & no obligation',
    ],
  },
  it: {
    title: 'PVPro Svizzera',
    subtitle: 'Confronta impianti solari.',
    subtitleHighlight: 'Chiaro. Indipendente.',
    description: 'Analizziamo il tuo tetto e ti mettiamo in contatto con installatori certificati della tua regione.',
    checkmarks: [
      'Installatori svizzeri certificati',
      'Prezzi trasparenti',
      'Gratuito e senza impegno',
    ],
  },
};

export default function Hero() {
  const locale = useLocale();
  const content = heroContent[locale] || heroContent.de;

  return (
    <section className="bg-gradient-to-b from-primary-50 to-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <div className="lg:pt-8">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
              {content.title}
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              {content.subtitle}{' '}
              <span className="text-primary">{content.subtitleHighlight}</span>
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {content.description}
            </p>

            {/* Trust Checkmarks */}
            <div className="flex flex-col gap-4 mb-8">
              {content.checkmarks.map((checkmark, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">{checkmark}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges - Logos */}
            <div className="flex items-center gap-4 flex-wrap">
              <Image
                src="/badges/swiss-quality.webp"
                alt="Swiss Quality"
                width={70}
                height={70}
                className="object-contain"
              />
              <Image
                src="/badges/proven-expert.webp"
                alt="Proven Expert"
                width={70}
                height={70}
                className="object-contain"
              />
              <Image
                src="/badges/datenschutz.webp"
                alt="Qualitätssiegel Datenschutz"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <SolarForm />
            {/* Trustpilot under form, outside white background */}
            <div className="flex justify-center mt-6">
              <Image
                src="/badges/trustpilot.svg"
                alt="Trustpilot - Hervorragend"
                width={220}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
