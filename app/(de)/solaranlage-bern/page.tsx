import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

const citySlug = 'bern';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Stadt nicht gefunden' };

  return {
    title: `Solaranlage Bern BE - Förderungen bis 5.000 CHF | PVPro`,
    description: `Solaranlage Bern: Profitieren Sie von der EWB-Förderung bis 5.000 CHF und der neuen Solarpflicht 2026. Vergleichen Sie 3 Offerten von Berner Solarteuren. Kostenlos & unabhängig.`,
    alternates: {
      canonical: 'https://pvpro.ch/solaranlage-bern',
    },
  };
}

export default function BernPage() {
  const city = getCityBySlug(citySlug);
  const content = cityContents[citySlug];

  if (!city || !content) {
    notFound();
  }

  return <UniqueCityPage city={city} content={content} accentColor="orange" />;
}
