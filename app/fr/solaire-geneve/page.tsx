import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

const citySlug = 'geneve';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Ville non trouvée' };

  return {
    title: `Installation Solaire Genève GE - Subventions SIG 2026 | PVPro`,
    description: `Installation Solaire Genève: Profitez de la nouvelle prime SIG 2026 (25% bonus). Comparez 3 devis d'installateurs genevois certifiés. Amortissement en 8-12 ans.`,
    alternates: {
      canonical: 'https://pvpro.ch/solaire-geneve',
    },
  };
}

export default function GenevePage() {
  const city = getCityBySlug(citySlug);
  const content = cityContents[citySlug];

  if (!city || !content) {
    notFound();
  }

  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
