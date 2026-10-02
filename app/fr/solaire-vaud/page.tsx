export const dynamic = "force-dynamic";
export const revalidate = 0;



import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents, CityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';
import { pageMetadata } from '@/lib/pageMetadata';


// This is a template for the city pages.
// We will use a script to populate all 20 pages with this logic.
const citySlug = 'vaud';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return pageMetadata({ title: 'Ville introuvable' }, { path: '/fr/solaire-vaud', locale: 'fr' });
  return pageMetadata({
    title: `Installation solaire ${city.name} ${city.canton} – Comparer les devis`,
    description: `Installation solaire à ${city.name} : comparez gratuitement jusqu’à 3 devis d’installateurs certifiés et découvrez les subventions disponibles.`,
  }, { path: '/fr/solaire-vaud', locale: 'fr' });
}

export default function CityPage() {
  const city = getCityBySlug(citySlug);
  if (!city) notFound();
  const content = cityContents[citySlug] || cityContents['zurich']; // Fallback to zurich for structure if missing
  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
