'use client';

import { ComposableMap, Geographies, Geography, Annotation } from 'react-simple-maps';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

const geoUrl = '/switzerland-topo.json';

// Price data for each region
const priceLabels = [
  { coordinates: [7.45, 47.55], price: "16'999 CHF", region: 'Basel' },
  { coordinates: [8.55, 47.38], price: "13'999 CHF", region: 'Zürich' },
  { coordinates: [9.35, 47.42], price: "17'499 CHF", region: 'Ostschweiz' },
  { coordinates: [7.45, 46.95], price: "13'999 CHF", region: 'Bern' },
  { coordinates: [8.3, 47.0], price: "17'999 CHF", region: 'Zentralschweiz' },
  { coordinates: [9.8, 46.8], price: "15'999 CHF", region: 'Graubünden' },
  { coordinates: [6.6, 46.55], price: "14'499 CHF", region: 'Westschweiz' },
  { coordinates: [8.95, 46.2], price: "18'999 CHF", region: 'Ticino' },
];

// SwissMap content per locale
const mapContent: Record<Locale, {
  title: string;
  description: string;
  features: string[];
  cta: string;
}> = {
  de: {
    title: 'Zahlen Sie nicht mehr als nötig für Ihre Solaranlage',
    description: 'Wir finden für Sie den zuverlässigsten Partner in Ihrer Region, indem wir reale Preise und zertifizierte Qualität vergleichen.',
    features: [
      'Durchschnittliche Preise basierend auf echten Angeboten',
      'Preise für typische 10 kWp Solaranlage',
      'Inklusive Installation und Anmeldung',
    ],
    cta: 'Jetzt Offerten vergleichen',
  },
  fr: {
    title: 'Ne payez pas plus que nécessaire pour votre installation solaire',
    description: 'Nous trouvons pour vous le partenaire le plus fiable de votre région en comparant les prix réels et la qualité certifiée.',
    features: [
      'Prix moyens basés sur des offres réelles',
      'Prix pour une installation solaire typique de 10 kWp',
      'Installation et enregistrement inclus',
    ],
    cta: 'Comparer les devis maintenant',
  },
  en: {
    title: 'Don\'t pay more than necessary for your solar system',
    description: 'We find the most reliable partner in your region for you by comparing real prices and certified quality.',
    features: [
      'Average prices based on real quotes',
      'Prices for typical 10 kWp solar system',
      'Including installation and registration',
    ],
    cta: 'Compare Quotes Now',
  },
  it: {
    title: 'Non paghi più del necessario per il tuo impianto solare',
    description: 'Troviamo per te il partner più affidabile nella tua regione confrontando i prezzi reali e la qualità certificata.',
    features: [
      'Prezzi medi basati su offerte reali',
      'Prezzi per un tipico impianto solare da 10 kWp',
      'Inclusa installazione e registrazione',
    ],
    cta: 'Confronta preventivi ora',
  },
};

export default function SwissMap() {
  const locale = useLocale();
  const content = mapContent[locale] || mapContent.de;

  const scrollToForm = () => {
    const formElement = document.getElementById('formular');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative -mx-4 sm:mx-0" style={{ padding: '10px 0' }}>
            <div className="scale-150 sm:scale-100 transform-gpu origin-center my-12 sm:my-0">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  center: [8.2, 46.8],
                  scale: 6800,
                }}
                width={700}
                height={500}
                style={{ width: '100%', height: 'auto' }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#F97316"
                        stroke="#FFFFFF"
                        strokeWidth={1}
                        onClick={scrollToForm}
                        style={{
                          default: { outline: 'none', cursor: 'pointer' },
                          hover: { fill: '#EA580C', outline: 'none', cursor: 'pointer' },
                          pressed: { fill: '#C2410C', outline: 'none' },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Price Labels - also clickable */}
                {priceLabels.map((label, index) => (
                  <Annotation
                    key={index}
                    subject={label.coordinates as [number, number]}
                    dx={0}
                    dy={0}
                    connectorProps={{}}
                  >
                    <g
                      transform="translate(-45, -16)"
                      onClick={scrollToForm}
                      style={{ cursor: 'pointer' }}
                    >
                      <rect
                        width="90"
                        height="28"
                        fill="white"
                        rx="4"
                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                      />
                      <text
                        x="45"
                        y="18"
                        textAnchor="middle"
                        fontSize="12"
                        fontWeight="bold"
                        fill="#1F2937"
                      >
                        {label.price}
                      </text>
                    </g>
                  </Annotation>
                ))}
              </ComposableMap>
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
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
            <a href="#formular" className="btn-primary inline-block mt-8">
              {content.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
