import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

const citySlug = 'biel';

export const metadata: Metadata = {
  title: 'Solaranlage Biel/Bienne – Offerten vergleichen 2026 | PVPro',
  description: "Solaranlage in Biel/Bienne: Bis zu 3 Offerten vergleichen. Dreifache Förderung: EIV Bund + Kanton Bern + Energiefonds Stadt Biel. Unverbindlich & kostenlos.",
  alternates: {
    canonical: 'https://pvpro.ch/solaranlage-biel',
    languages: {
      'de-CH': 'https://pvpro.ch/solaranlage-biel',
      'fr-CH': 'https://pvpro.ch/fr/solaire-bienne',
      'x-default': 'https://pvpro.ch/solaranlage-biel',
    },
  },
};

export default function CityPage() {
  const city = getCityBySlug(citySlug);
  if (!city) notFound();
  const content = cityContents[citySlug] || cityContents['zurich'];
  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
