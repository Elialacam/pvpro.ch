'use client';

import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';
import dynamic from 'next/dynamic';

const TicinoMap = dynamic(() => import('@/components/TicinoMap'), {
  ssr: false,
  loading: () => <div className="min-h-[420px] rounded-2xl bg-gray-100 animate-pulse" />,
});

const SwitzerlandMap = dynamic(() => import('@/components/SwitzerlandMap'), {
  ssr: false,
  loading: () => <div className="min-h-[420px] rounded-2xl bg-gray-100 animate-pulse" />,
});

// SwissMap content per locale
const mapContent: Record<Locale, {
  title: string;
  description: string;
  features: string[];
  cta: string;
}> = {
  de: {
    title: 'Ihre Photovoltaikanlage zum richtigen Preis',
    description: 'Wir finden für Sie den zuverlässigsten Partner in Ihrem Kanton, indem wir reale Preise und zertifizierte Qualität vergleichen.',
    features: [
      'Durchschnittliche Preise basierend auf echten Angeboten',
      'Referenz: Standard-Anlage mit 10 kWp',
      'Installation und Formalitäten inklusive',
    ],
    cta: 'Jetzt Offerten vergleichen',
  },
  fr: {
    title: 'Votre installation photovoltaïque au juste prix',
    description: 'Nous trouvons pour vous le partenaire le plus fiable de votre canton en comparant les prix réels et la qualité certifiée.',
    features: [
      'Prix moyens basés sur des offres réelles',
      'Référence : installation standard de 10 kWp',
      'Installation et démarches incluses',
    ],
    cta: 'Comparer les devis maintenant',
  },
  en: {
    title: 'Your photovoltaic system at the right price',
    description: 'We find the most reliable partner in your canton for you by comparing real prices and certified quality.',
    features: [
      'Average prices based on real quotes',
      'Reference: standard 10 kWp system',
      'Installation and paperwork included',
    ],
    cta: 'Compare Quotes Now',
  },
  it: {
    title: 'Il tuo impianto fotovoltaico al prezzo giusto',
    description: 'Troviamo per te il partner più affidabile in Ticino confrontando i prezzi reali e la qualità certificata.',
    features: [
      'Prezzi medi basati su offerte reali',
      'Riferimento: impianto standard da 10 kWp',
      'Installazione e pratiche incluse',
    ],
    cta: 'Confronta preventivi ora',
  },
};

export default function SwissMap() {
  const locale = useLocale();
  const content = mapContent[locale] || mapContent.de;
  const isTicino = locale === 'it';

  const scrollToForm = () => {
    window.location.href = '/anfrage';
  };

  return (
    <section id="map-section" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative -mx-1 sm:mx-0" style={{ padding: '10px 0' }}>
            {isTicino ? (
              <TicinoMap />
            ) : (
              <SwitzerlandMap />
            )}
          </div>

          {/* Text Content */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-6">
              {content.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              {content.description}
            </p>
            <div className="space-y-4">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <button 
              onClick={scrollToForm}
              className="btn-primary inline-block mt-8"
            >
              {content.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
