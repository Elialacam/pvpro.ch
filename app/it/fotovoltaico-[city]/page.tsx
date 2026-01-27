import { Metadata } from 'next';
import { getCityBySlug, cities } from '@/lib/cities';
import { cityContents, CityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateStaticParams() {
  return cities
    .filter(city => city.language === 'it')
    .map((city) => ({
      city: city.slug,
    }));
}

interface PageProps {
  params: { city: string };
}

const generateGenericContent = (slug: string, name: string, language: string, canton: string): CityContent => {
  return {
    slug,
    heroHeadline: `Impianto Fotovoltaico a ${name}`,
    heroSubheadline: `Risparmia fino al 30% a ${name}`,
    heroDescription: `Trova i migliori installatori solari a ${name}.`,
    whySolarTitle: `Perché il solare a ${name}?`,
    whySolarIntro: `La regione di ${name} offre condizioni eccellenti.`,
    whySolarReasons: [{ title: 'Alto Rendimento', description: 'Approfitta della riduzione dei costi.' }],
    cityFactsTitle: `Fatti sul solare a ${name}`,
    cityFactsParagraphs: [`${name} nel Canton ${canton} è ideale per il fotovoltaico.`],
    pricing: { min: 9000, max: 25000, typical5kw: { min: 9000, max: 12000 }, afterSubsidy5kw: { min: 6500, max: 8500 }, roiYears: '8-12' },
    incentives: { title: 'Sussidi', description: 'Panoramica', programs: [{ name: 'Pronovo', amount: '30%', description: 'RU' }] },
    caseStudies: [{ name: 'Progetto', location: name, systemSize: '6 kWp', cost: '11k', savings: '2k', payback: '5y', quote: 'Ottimo!' }],
    faqs: [
      { question: 'Conviene?', answer: 'Sì, assolutamente.' },
      { question: 'Costi?', answer: 'Da 9000 CHF.' },
      { question: 'Sussidi?', answer: 'Fino al 30%.' },
      { question: 'Durata?', answer: '3-4 mesi.' },
      { question: 'Manutenzione?', answer: 'Minima.' },
      { question: 'Batteria?', answer: 'Raccomandato.' },
      { question: 'Inverno?', answer: 'Funziona.' },
      { question: 'Preventivi?', answer: 'Gratuiti.' }
    ],
    testimonial: { initials: 'JS', name: 'J. Schmidt', quote: 'Perfetto!' }
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return { title: 'Città non trovata' };
  return { title: `Impianto Fotovoltaico ${city.name} - Confronta preventivi | PV Pro` };
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();
  const content = cityContents[params.city] || generateGenericContent(city.slug, city.name, city.language, city.canton);
  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
