import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import ZurichIncentivesGuide from '@/components/ZurichIncentivesGuide';

const baseMetadata: Metadata = {
  title: 'Subventions solaires Canton de Zurich 2026 – RU, obligation solaire & contributions | PvPro.ch',
  description: "Quelles subventions existent pour les installations solaires dans le Canton de Zurich 2026 ? RU, contributions cantonales, obligation solaire et comment demander l'aide. Informez-vous.",
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/subventions-solaires-canton-zurich',
    languages: {
      'de-CH': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
      'fr-CH': 'https://www.pvpro.ch/fr/subventions-solaires-canton-zurich',
      'en': 'https://www.pvpro.ch/en/solar-subsidies-canton-zurich',
      'it-CH': 'https://www.pvpro.ch/it/incentivi-solari-cantone-zurigo',
      'x-default': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
    },
  },
  openGraph: {
    title: 'Subventions solaires Canton de Zurich 2026 – RU, obligation solaire & contributions',
    description: "Toutes les subventions pour les installations solaires dans le Canton de Zurich 2026 : RU, contributions cantonales, obligation solaire.",
    url: 'https://www.pvpro.ch/fr/subventions-solaires-canton-zurich',
    type: 'website',
    locale: 'fr_CH',
    siteName: 'PvPro.ch',
  },
};

export default function SubventionsSolairesCantonsZurichPage() {
  return <ZurichIncentivesGuide locale="fr" />;
}

export const metadata: Metadata = pageMetadata(baseMetadata, { path: '/fr/subventions-solaires-canton-zurich', locale: 'fr' });