import { Metadata } from 'next';
import { getCityBySlug, cities } from '@/lib/cities';
import { cityContents, CityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateStaticParams() {
  return cities
    .filter(city => city.language === 'fr')
    .map((city) => ({
      city: city.slug,
    }));
}

interface PageProps {
  params: { city: string };
}

const generateGenericContent = (slug: string, name: string, language: string, canton: string): CityContent => {
  return {
    slug,
    heroHeadline: `Installation Solaire à ${name}`,
    heroSubheadline: `Économisez jusqu'à 30% à ${name}`,
    heroDescription: `Trouvez les meilleurs installateurs solaires à ${name}.`,
    whySolarTitle: `Pourquoi le solaire à ${name}?`,
    whySolarIntro: `La région de ${name} offre des conditions excellentes.`,
    whySolarReasons: [{ title: 'Haut Rendement', description: 'Profitez de la baisse des coûts.' }],
    cityFactsTitle: `Faits sur le solaire à ${name}`,
    cityFactsParagraphs: [`${name} dans le Canton de ${canton} est idéal per le photovoltaïque.`],
    pricing: { min: 9000, max: 25000, typical5kw: { min: 9000, max: 12000 }, afterSubsidy5kw: { min: 6500, max: 8500 }, roiYears: '8-12' },
    incentives: { title: 'Subventions', description: 'Aperçu', programs: [{ name: 'Pronovo', amount: '30%', description: 'RU' }] },
    caseStudies: [{ name: 'Projet', location: name, systemSize: '6 kWp', cost: '11k', savings: '2k', payback: '5y', quote: 'Génial!' }],
    faqs: [
      { question: 'Est-ce rentable?', answer: 'Oui, absolument.' },
      { question: 'Coût?', answer: 'Dès 9000 CHF.' },
      { question: 'Subventions?', answer: 'Jusqu\'à 30%.' },
      { question: 'Durée?', answer: '3-4 mois.' },
      { question: 'Entretien?', answer: 'Minimal.' },
      { question: 'Batterie?', answer: 'Recommandé.' },
      { question: 'Hiver?', answer: 'Fonctionne.' },
      { question: 'Offres?', answer: 'Gratuit.' }
    ],
    testimonial: { initials: 'JS', name: 'J. Schmidt', quote: 'Parfait!' }
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return { title: 'Ville non trouvée' };
  return { title: `Installation Solaire ${city.name} - Comparez les devis | PV Pro` };
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();
  const content = cityContents[params.city] || generateGenericContent(city.slug, city.name, city.language, city.canton);
  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
