'use client';

import { CheckCircle, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

const heroContent: Record<Locale, {
  title: string;
  subtitle: string;
  description: string;
  checkmarks: string[];
  cta: string;
}> = {
  de: {
    title: 'Solaranlagen in der Schweiz vergleichen:',
    subtitle: 'geprüfte Anbieter & Förder-Check',
    description: 'Wir analysieren Ihr Dach, prüfen verfügbare Förderungen und vermitteln geprüfte Solarteure aus Ihrer Region.',
    checkmarks: ['Geprüfte Schweizer Solarteure', 'Kantonale Angebote vergleichen', 'Kostenlos & unverbindlich', 'Keine Werbeanrufe'],
    cta: 'Jetzt Angebote vergleichen',
  },
  fr: {
    title: 'Comparer les installations solaires en Suisse :',
    subtitle: 'fournisseurs certifiés & vérification des subventions',
    description: 'Nous analysons votre toit, vérifions les subventions disponibles et vous mettons en relation avec des installateurs certifiés de votre région.',
    checkmarks: ['Installateurs suisses certifiés', 'Comparer les offres cantonales', 'Gratuit et sans engagement', 'Pas d\'appels publicitaires'],
    cta: 'Comparer les offres maintenant',
  },
  en: {
    title: 'Compare solar panels in Switzerland:',
    subtitle: 'certified providers & subsidy check',
    description: 'We analyze your roof, check available subsidies and connect you with certified solar installers from your region.',
    checkmarks: ['Certified Swiss installers', 'Compare cantonal offers', 'Free & no obligation', 'No sales calls'],
    cta: 'Compare quotes now',
  },
  it: {
    title: 'Confronta impianti solari in Svizzera:',
    subtitle: 'fornitori certificati & verifica incentivi',
    description: 'Analizziamo il tuo tetto, verifichiamo i sussidi disponibili e ti mettiamo in contatto con installatori certificati della tua regione.',
    checkmarks: ['Installatori svizzeri certificati', 'Confronta offerte cantonali', 'Gratuito e senza impegno', 'Nessuna chiamata pubblicitaria'],
    cta: 'Confronta le offerte ora',
  },
};

const ctaHref: Record<Locale, string> = {
  de: '/anfrage',
  fr: '/anfrage',
  en: '/anfrage',
  it: '/anfrage',
};

export default function Hero() {
  const locale = useLocale();
  const content = heroContent[locale] || heroContent.de;
  const href = ctaHref[locale] || '/anfrage';

  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-6 sm:py-8 md:py-20">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-semibold tracking-tight text-gray-900 mb-2 leading-tight">
            {content.title}{' '}
            <span className="text-primary">{content.subtitle}</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 mt-4">{content.description}</p>

          <div className="flex flex-col gap-4 mb-8">
            {content.checkmarks.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium text-lg">{c}</span>
              </div>
            ))}
          </div>

          <Link
            href={href}
            className="btn-primary py-4 px-8 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-2 w-fit mb-8"
          >
            {content.cta}
            <ChevronRight className="w-5 h-5" />
          </Link>

          <div className="flex items-center">
            <Image src="/badges/logos-row.png" alt="Premium Solar Quality - Swiss Made - Trustpilot"
              width={320} height={60} className="object-contain" style={{ width: '280px', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
