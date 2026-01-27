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
  if (!city) return { title: 'Ville non trouvée' };

  return {
    title: `Installation Solaire Vaud VD - Bonus Isolation 2026 | PVPro`,
    description: `Solaire Vaud: Bénéficiez du bonus isolation M-01 et des subventions S04 pour le patrimoine. Comparez les meilleurs installateurs vaudois. Devis gratuits.`,
    alternates: {
      canonical: 'https://pvpro.ch/solaire-vaud',
    },
  };
}

export default function VaudPage() {
  const city = getCityBySlug(citySlug);
  const content = cityContents[citySlug];

  if (!city || !content) {
    notFound();
  }

  return <UniqueCityPage city={city} content={content} accentColor="green" />;
}
