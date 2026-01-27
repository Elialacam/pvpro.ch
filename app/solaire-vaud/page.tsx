import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

const citySlug = 'vaud';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Canton non trouvé' };
  return {
    title: `Installation Solaire Vaud VD - Devis Gratuits | PVPro`,
    description: `Installation solaire en Vaud: Comparez gratuitement les devis d'installateurs certifiés.`,
  };
}

export default function Page() {
  const city = getCityBySlug(citySlug);
  const content = cityContents[citySlug];
  if (!city || !content) notFound();
  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
