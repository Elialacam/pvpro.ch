import { Metadata } from 'next';
import { getCityBySlug, cities } from '@/lib/cities';
import { cityContents, CityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateStaticParams() {
  return cities
    .filter(city => city.language === 'de')
    .map((city) => ({
      city: city.slug,
    }));
}

interface PageProps {
  params: { city: string };
}

const generateGenericContent = (slug: string, name: string, language: string, canton: string): CityContent => {
  const isDe = language === 'de';
  const isFr = language === 'fr';
  const isIt = language === 'it';
  return {
    slug,
    heroHeadline: isDe ? `Solaranlage in ${name}` : isFr ? `Installation Solaire à ${name}` : `Impianto Fotovoltaico a ${name}`,
    heroSubheadline: isDe ? `Bis zu 30% sparen in ${name}` : isFr ? `Économisez fino al 30% à ${name}` : `Risparmia fino al 30% a ${name}`,
    heroDescription: isDe ? `Finden Sie die besten Solarteure in ${name}.` : isFr ? `Trouvez les meilleurs installateurs à ${name}.` : `Trova i migliori installatori a ${name}.`,
    whySolarTitle: isDe ? `Warum Solar in ${name}?` : isFr ? `Pourquoi le solaire à ${name}?` : `Perché il solare a ${name}?`,
    whySolarIntro: `Die Region ${name} bietet hervorragende Bedingungen.`,
    whySolarReasons: [{ title: 'Hohe Rendite', description: 'Profitieren Sie von sinkenden Stromkosten.' }],
    cityFactsTitle: `Fakten zu Solar in ${name}`,
    cityFactsParagraphs: [`${name} im Kanton ${canton} ist ein idealer Standort per Photovoltaik.`],
    pricing: { min: 9000, max: 25000, typical5kw: { min: 9000, max: 12000 }, afterSubsidy5kw: { min: 6500, max: 8500 }, roiYears: '8-12' },
    incentives: { title: 'Förderungen', description: 'Übersicht', programs: [{ name: 'Pronovo', amount: '30%', description: 'EIV' }] },
    caseStudies: [{ name: 'Project', location: name, systemSize: '6 kWp', cost: '11k', savings: '2k', payback: '5y', quote: 'Top!' }],
    faqs: [
      { question: 'Lohnt es sich?', answer: 'Ja, absolut.' },
      { question: 'Kosten?', answer: 'Ab 9000 CHF.' },
      { question: 'Förderung?', answer: 'Bis zu 30%.' },
      { question: 'Dauer?', answer: '3-4 Monate.' },
      { question: 'Wartung?', answer: 'Minimal.' },
      { question: 'Speicher?', answer: 'Empfehlenswert.' },
      { question: 'Winter?', answer: 'Funktioniert.' },
      { question: 'Offerten?', answer: 'Kostenlos.' }
    ],
    testimonial: { initials: 'JS', name: 'J. Schmidt', quote: 'Perfekt!' }
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return { title: 'Stadt nicht gefunden' };
  return { title: `Solaranlage ${city.name} - Offerten vergleichen | PV Pro` };
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();
  const content = cityContents[params.city] || generateGenericContent(city.slug, city.name, city.language, city.canton);
  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
