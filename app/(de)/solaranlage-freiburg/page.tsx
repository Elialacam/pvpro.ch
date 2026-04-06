import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

const citySlug = 'freiburg';

export const metadata: Metadata = {
  title: 'Solaranlage Kanton Freiburg – Offerten vergleichen 2026 | PVPro',
  description: "Solaranlage im Kanton Freiburg: Bis zu 3 Offerten von geprüften Installateuren vergleichen. Förderungen EIV + kantonaler Beitrag. Unverbindlich & kostenlos.",
  alternates: {
    canonical: 'https://www.pvpro.ch/solaranlage-freiburg',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-freiburg',
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-fribourg',
      'x-default': 'https://www.pvpro.ch/solaranlage-freiburg',
    },
  },
};

export default function CityPage() {
  const city = getCityBySlug(citySlug);
  if (!city) notFound();
  const content = cityContents[citySlug] || cityContents['zurich'];
  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
