import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

const citySlug = 'schwyz';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Kanton nicht gefunden' };

  return {
    title: `Solaranlage Schwyz SZ - Kostenlose Offerten | PVPro`,
    description: `Solaranlage in Schwyz: Vergleichen Sie kostenlos Offerten von geprüften Solarteuren.`,
  };
}

export default function Page() {
  const city = getCityBySlug(citySlug);
  const content = cityContents[citySlug];

  if (!city || !content) {
    notFound();
  }

  return <UniqueCityPage city={city} content={content} accentColor="red" />;
}
