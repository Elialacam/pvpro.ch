export const dynamic = "force-dynamic";
export const revalidate = 0;

import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

const citySlug = 'fribourg';

export const metadata: Metadata = {
  title: 'Installation solaire Canton de Fribourg – Comparez 3 offres 2026 | PVPro',
  description: "Panneau solaire à Fribourg : comparez jusqu'à 3 offres d'installateurs certifiés. Subventions RU fédérale + aide cantonale fribourgeoise. Gratuit & sans engagement.",
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/solaire-fribourg',
    languages: {
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-fribourg',
      'de-CH': 'https://www.pvpro.ch/solaranlage-freiburg',
      'x-default': 'https://www.pvpro.ch/solaranlage-freiburg',
    },
  },
};

export default function CityPage() {
  const city = getCityBySlug(citySlug);
  if (!city) notFound();
  const content = cityContents[citySlug] || cityContents['geneve'];
  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
