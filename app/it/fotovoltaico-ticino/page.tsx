import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

const citySlug = 'ticino';

export const metadata: Metadata = {
  title: 'Fotovoltaico Ticino 2026: Incentivi e fino a 3 Offerte | PvPro',
  description: "Confronta gratuitamente fino a 3 offerte per il fotovoltaico in Ticino. Scopri incentivi 2026, costi, autoconsumo e soluzioni con o senza batteria.",
  alternates: {
    canonical: 'https://www.pvpro.ch/it/fotovoltaico-ticino',
    languages: {
      'it-CH': 'https://www.pvpro.ch/it/fotovoltaico-ticino',
      'x-default': 'https://www.pvpro.ch/it/fotovoltaico-ticino',
    },
  },
  openGraph: {
    title: 'Fotovoltaico Ticino 2026: Incentivi e fino a 3 Offerte',
    description: "Confronta gratuitamente fino a 3 offerte per il fotovoltaico in Ticino. Scopri incentivi 2026, costi, autoconsumo e soluzioni con o senza batteria.",
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
