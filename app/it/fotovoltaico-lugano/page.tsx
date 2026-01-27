import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents, CityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

const citySlug = 'lugano';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Città non trovata' };

  return {
    title: `Impianto Fotovoltaico Lugano - Risparmia con il Sole del Ticino | PVPro`,
    description: `Fotovoltaico a Lugano: Sfrutta l'irraggiamento solare del Ticino. Confronta 3 preventivi gratuiti da installatori locali. Incentivi cantonali 2026 inclusi.`,
    alternates: {
      canonical: 'https://pvpro.ch/it/fotovoltaico-lugano',
    },
  };
}

export default function LuganoPage() {
  const city = getCityBySlug(citySlug) || { name: 'Lugano', slug: 'lugano', canton: 'TI', language: 'it' as const };
  const content = cityContents[citySlug];

  if (!content) {
    notFound();
  }

  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
