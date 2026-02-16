'use client';

import { CheckCircle, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import SolarForm from './SolarForm';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

// Hero content per locale
const heroContent: Record<Locale, {
  title: string;
  subtitle: string;
  description: string;
  checkmarks: string[];
  cta: string;
}> = {
  de: {
    title: 'Solaranlagen in der Schweiz vergleichen:',
    subtitle: 'geprüfte Anbieter & Angebote',
    description: 'Wir analysieren Ihr Dach, prüfen verfügbare Förderungen und vermitteln geprüfte Solarteure aus Ihrer Region.',
    checkmarks: [
      'Geprüfte Schweizer Solarteure',
      'Kantonale Angebote vergleichen',
      'Kostenlos & unverbindlich',
      'Keine Werbeanrufe',
    ],
    cta: 'Jetzt Angebote vergleichen',
  },
  fr: {
    title: 'Comparer les installations solaires en Suisse :',
    subtitle: 'fournisseurs certifiés & offres',
    description: 'Nous analysons votre toit, vérifions les subventions disponibles et vous mettons en relation avec des installateurs certifiés de votre région.',
    checkmarks: [
      'Installateurs suisses certifiés',
      'Comparer les offres cantonales',
      'Gratuit et sans engagement',
      'Pas d\'appels publicitaires',
    ],
    cta: 'Comparer les offres maintenant',
  },
  en: {
    title: 'Compare solar systems in Switzerland:',
    subtitle: 'certified providers & quotes',
    description: 'We analyze your roof, check available subsidies and connect you with certified solar installers from your region.',
    checkmarks: [
      'Certified Swiss installers',
      'Compare cantonal offers',
      'Free & no obligation',
      'No sales calls',
    ],
    cta: 'Compare quotes now',
  },
  it: {
    title: 'Confronta impianti solari in Svizzera:',
    subtitle: 'fornitori certificati & offerte',
    description: 'Analizziamo il tuo tetto, verifichiamo i sussidi disponibili e ti mettiamo in contatto con installatori certificati della tua regione.',
    checkmarks: [
      'Installatori svizzeri certificati',
      'Confronta offerte cantonali',
      'Gratuito e senza impegno',
      'Nessuna chiamata pubblicitaria',
    ],
    cta: 'Confronta le offerte ora',
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-semibold tracking-tight text-gray-900 mb-2 leading-tight">
              {content.title}{' '}
              <span className="text-primary">{content.subtitle}</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 mt-4">
              {content.description}
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {content.checkmarks.map((checkmark, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">{checkmark}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('formular')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              className="btn-primary py-4 px-8 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-2 w-fit mb-8"
            >
              {content.cta}
              <ChevronRight className="w-5 h-5" />
            </button>

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
            <div className="flex justify-center mt-3 px-4">
              <Image
                src="/badges/trust-badges.png"
                alt="100% Kostenlos - Förderungen Geprüft - DSGVO-Konform - Keine Werbeanrufe"
                width={240}
                height={30}
                className="object-contain"
                style={{ width: '240px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
