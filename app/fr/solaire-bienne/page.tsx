export const dynamic = "force-dynamic";
export const revalidate = 0;

import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

const citySlug = 'bienne';

export const metadata: Metadata = {
  title: 'Installation solaire Biel/Bienne – Comparez 3 offres 2026 | PVPro',
  description: "Panneaux solaires à Bienne : comparez jusqu'à 3 offres certifiées. Triple subvention : RU fédérale + Canton de Berne + fonds énergie municipal. Gratuit & sans engagement.",
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/solaire-bienne',
    languages: {
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-bienne',
      'de-CH': 'https://www.pvpro.ch/solaranlage-biel',
      'x-default': 'https://www.pvpro.ch/solaranlage-biel',
    },
  },
};

export default function CityPage() {
  const city = getCityBySlug(citySlug);
  if (!city) notFound();
  const content = cityContents[citySlug] || cityContents['geneve'];
  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
