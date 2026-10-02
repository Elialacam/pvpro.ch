import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

const citySlug = 'wallis';

export const metadata: Metadata = pageMetadata({
  title: "Solaranlage Kanton Wallis – Solarstrom passend planen 2026 | PvPro.ch",
  description: "Solaranlage im Wallis: Angebote unabhängiger Installateure vergleichen und die passende Lösung für Ihr Dach finden. Kostenlos.",
  alternates: {
    canonical: 'https://www.pvpro.ch/solaranlage-wallis',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-wallis',
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-valais',
      'x-default': 'https://www.pvpro.ch/solaranlage-wallis',
    },
  },
}, { path: '/solaranlage-wallis', locale: 'de' });

export default function CityPage() {
  const city = getCityBySlug(citySlug);
  if (!city) notFound();
  const content = cityContents[citySlug] || cityContents['zurich'];
  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
