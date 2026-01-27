import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

const citySlug = 'valais';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Ville non trouvée' };

  return {
    title: `Installation Solaire Valais VS - 2000+ heures de soleil | PVPro`,
    description: `Solaire en Valais: Profitez de l'ensoleillement exceptionnel des Alpes. Comparez 3 installateurs valaisans certifiés. Devis gratuits et sans engagement.`,
    alternates: {
      canonical: 'https://pvpro.ch/fr/solaire-valais',
    },
  };
}

export default function ValaisPage() {
  const city = getCityBySlug(citySlug);
  const content = cityContents[citySlug];

  if (!city || !content) {
    notFound();
  }

  return <UniqueCityPage city={city} content={content} accentColor="red" />;
}
