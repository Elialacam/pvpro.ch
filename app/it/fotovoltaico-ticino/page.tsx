import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

const citySlug = 'ticino';

export const metadata: Metadata = {
  title: 'Impianto Fotovoltaico in Ticino 2026 – Preventivi e Incentivi | PVPro.ch',
  description: "Confronta fino a 3 preventivi per impianti fotovoltaici in Ticino. 2'157 ore di sole, ROI di 4–6 anni, incentivi federali e cantonali. Installatori certificati in tutto il Ticino.",
  alternates: {
    canonical: 'https://www.pvpro.ch/it/fotovoltaico-ticino',
    languages: {
      'it-CH': 'https://www.pvpro.ch/it/fotovoltaico-ticino',
      'x-default': 'https://www.pvpro.ch/it/fotovoltaico-ticino',
    },
  },
  openGraph: {
    title: 'Impianto Fotovoltaico in Ticino 2026 – Preventivi e Incentivi',
    description: "Il Ticino ha il sole migliore della Svizzera: 2'157 ore/anno e ROI di soli 4–6 anni. Confronta preventivi da installatori certificati.",
    url: 'https://www.pvpro.ch/it/fotovoltaico-ticino',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PVPro',
  },
};

export default function CityPage() {
  const city = getCityBySlug(citySlug);
  if (!city) notFound();
  const content = cityContents[citySlug] || cityContents['zurich'];
  return <UniqueCityPage city={city} content={content} accentColor="blue" />;
}
