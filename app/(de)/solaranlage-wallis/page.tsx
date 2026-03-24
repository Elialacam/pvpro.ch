import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

const citySlug = 'wallis';

export const metadata: Metadata = {
  title: "Solaranlage Kanton Wallis – Sonnenstunden-Rekord nutzen 2026 | PVPro",
  description: "Solaranlage im Wallis: Der sonnenreichste Kanton der Schweiz – 1'849 Stunden/Jahr. Bis zu 3 Offerten vergleichen, hohe Kantonsförderung sichern. Kostenlos.",
  alternates: {
    canonical: 'https://www.pvpro.ch/solaranlage-wallis',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-wallis',
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-valais',
      'x-default': 'https://www.pvpro.ch/solaranlage-wallis',
    },
  },
};

export default function CityPage() {
  const city = getCityBySlug(citySlug);
  if (!city) notFound();
  const content = cityContents[citySlug] || cityContents['zurich'];
  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
