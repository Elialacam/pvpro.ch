import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import ZurichIncentivesGuide from '@/components/ZurichIncentivesGuide';

export const metadata: Metadata = pageMetadata({
  title: 'Förderung Solaranlage Kanton Zürich 2026 – EIV, Solarpflicht & Beiträge | PvPro.ch',
  description: 'Welche Förderungen gibt es für Solaranlagen im Kanton Zürich 2026? EIV, kantonale Beiträge, Solarpflicht und wie Sie die Förderung beantragen. Jetzt informieren.',
  alternates: {
    canonical: 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
    languages: {
      'de-CH': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
      'fr-CH': 'https://www.pvpro.ch/fr/subventions-solaires-canton-zurich',
      'en': 'https://www.pvpro.ch/en/solar-subsidies-canton-zurich',
      'it-CH': 'https://www.pvpro.ch/it/incentivi-solari-cantone-zurigo',
      'x-default': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
    },
  },
  openGraph: {
    title: 'Förderung Solaranlage Kanton Zürich 2026 – EIV, Solarpflicht & Beiträge',
    description: 'Alle Förderungen für Solaranlagen im Kanton Zürich 2026: EIV, kantonale Beiträge, Solarpflicht.',
    url: 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PvPro.ch',
  },
}, { path: '/foerderungen-kanton-zuerich', locale: 'de' });

export default function FoerderungenKantonZuerichPage() {
  return <ZurichIncentivesGuide locale="de" />;
}