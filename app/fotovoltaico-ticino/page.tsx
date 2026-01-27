import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

const citySlug = 'ticino';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Cantone non trovato' };

  return {
    title: `Impianto Fotovoltaico Ticino TI - Preventivi Gratuiti | PVPro`,
    description: `Impianto fotovoltaico in Ticino: Confronta gratuitamente i preventivi di installatori certificati.`,
  };
}

export default function Page() {
  const city = getCityBySlug(citySlug);
  const content = cityContents[citySlug];

  if (!city || !content) {
    notFound();
  }

  return <UniqueCityPage city={city} content={content} accentColor="orange" />;
}
