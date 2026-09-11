import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import ZurichIncentivesGuide from '@/components/ZurichIncentivesGuide';

export const metadata: Metadata = pageMetadata({
  title: 'Solar Subsidies Canton Zurich 2026 – OUR, solar obligation & grants | PvPro.ch',
  description: 'What solar panel subsidies exist in Canton Zurich 2026? OUR, cantonal grants, solar obligation and how to apply. Find out now on PvPro.ch.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/solar-subsidies-canton-zurich',
    languages: {
      'de-CH': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
      'fr-CH': 'https://www.pvpro.ch/fr/subventions-solaires-canton-zurich',
      'en': 'https://www.pvpro.ch/en/solar-subsidies-canton-zurich',
      'it-CH': 'https://www.pvpro.ch/it/incentivi-solari-cantone-zurigo',
      'x-default': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
    },
  },
  openGraph: {
    title: 'Solar Subsidies Canton Zurich 2026 – OUR, solar obligation & grants',
    description: 'All solar panel subsidies in Canton Zurich 2026: OUR, cantonal grants, solar obligation.',
    url: 'https://www.pvpro.ch/en/solar-subsidies-canton-zurich',
    type: 'website',
    locale: 'en_US',
    siteName: 'PvPro.ch',
  },
}, { path: '/en/solar-subsidies-canton-zurich', locale: 'en' });

export default function SolarSubsidiesCantonZurichPage() {
  return <ZurichIncentivesGuide locale="en" />;
}