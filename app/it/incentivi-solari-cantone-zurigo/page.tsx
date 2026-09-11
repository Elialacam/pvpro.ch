import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import ZurichIncentivesGuide from '@/components/ZurichIncentivesGuide';

export const metadata: Metadata = pageMetadata({
  title: 'Incentivi solari Cantone di Zurigo 2026 – RU, obbligo solare & contributi | PvPro.ch',
  description: 'Quali incentivi esistono per gli impianti solari nel Cantone di Zurigo 2026? RU, contributi cantonali, obbligo solare e come richiederli. Informatevi ora.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/incentivi-solari-cantone-zurigo',
    languages: {
      'de-CH': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
      'fr-CH': 'https://www.pvpro.ch/fr/subventions-solaires-canton-zurich',
      'en': 'https://www.pvpro.ch/en/solar-subsidies-canton-zurich',
      'it-CH': 'https://www.pvpro.ch/it/incentivi-solari-cantone-zurigo',
      'x-default': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
    },
  },
  openGraph: {
    title: 'Incentivi solari Cantone di Zurigo 2026 – RU, obbligo solare & contributi',
    description: 'Tutti gli incentivi per gli impianti solari nel Cantone di Zurigo 2026: RU, contributi cantonali, obbligo solare.',
    url: 'https://www.pvpro.ch/it/incentivi-solari-cantone-zurigo',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PvPro.ch',
  },
}, { path: '/it/incentivi-solari-cantone-zurigo', locale: 'it' });

export default function IncentiviSolariCantoneZurigoPage() {
  return <ZurichIncentivesGuide locale="it" />;
}