export const dynamic = "force-dynamic";
export const revalidate = 0;




import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents, CityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';
import { pageMetadata } from '@/lib/pageMetadata';

// This is a template for the city pages.
const citySlug = 'geneve';

export const metadata: Metadata = pageMetadata({
  title: 'Installation solaire Genève – Comparer les devis',
  description: 'Installation solaire à Genève : comparez gratuitement jusqu’à 3 devis d’installateurs certifiés et découvrez les subventions disponibles.',
}, { path: '/fr/solaire-geneve', locale: 'fr' });

export default function CityPage() {
  const city = getCityBySlug(citySlug);
  if (!city) notFound();
  const content = cityContents[citySlug] || cityContents['zurich'];
  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
