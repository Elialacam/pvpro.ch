import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

const citySlug = 'aargau';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Kanton nicht gefunden' };

  return {
    title: `Solaranlage Aargau AG - Stadt Aarau Bonus & Solaroffensive | PVPro`,
    description: `Solaranlage Aargau: Sichern Sie sich bis zu 8.000 CHF Förderung (Bund + Stadt Aarau). Vergleichen Sie 3 geprüfte Solarteure aus Ihrer Region. Kostenlos & unabhängig.`,
    alternates: {
      canonical: 'https://pvpro.ch/solaranlage-aargau',
    },
  };
}

export default function AargauPage() {
  const city = getCityBySlug(citySlug);
  const content = cityContents[citySlug];

  if (!city || !content) {
    notFound();
  }

  return <UniqueCityPage city={city} content={content} accentColor="red" />;
}
