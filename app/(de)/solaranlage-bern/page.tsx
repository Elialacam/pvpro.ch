import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents, CityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

// This is a template for the city pages.
// We will use a script to populate all 20 pages with this logic.
const citySlug = 'bern';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Stadt nicht gefunden' };
  return {
    title: `Solaranlage ${city.name} ${city.canton} - Offerten vergleichen | PV Pro`,
    description: `Solaranlage in ${city.name}: Jetzt bis zu 3 Offerten von geprüften Solarteuren vergleichen. Sichern Sie sich Förderungen in ${city.name}. Unverbindlich & Kostenlos.`,
  };
}

export default function CityPage() {
  const city = getCityBySlug(citySlug);
  if (!city) notFound();
  const content = cityContents[citySlug] || cityContents['zurich']; // Fallback to zurich for structure if missing
  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
