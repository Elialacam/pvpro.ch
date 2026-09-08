import { Metadata } from 'next';
import AnfrageForm from '@/components/AnfrageForm';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Demander des devis solaires gratuits | PVPro.ch',
  description: 'Recevez en quelques minutes des devis gratuits d\'installateurs solaires certifiés en Suisse.',
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/demande',
  },
  robots: {
    index: false,
    follow: false,
  },
}, { path: '/fr/demande', locale: 'fr' });

export default function DemandePage() {
  return <AnfrageForm locale="fr" />;
}
