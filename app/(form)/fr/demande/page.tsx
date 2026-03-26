import { Metadata } from 'next';
import AnfrageForm from '@/components/AnfrageForm';

export const metadata: Metadata = {
  title: 'Demander des devis solaires gratuits | PVPro.ch',
  description: 'Recevez en quelques minutes des devis gratuits d\'installateurs solaires certifiés en Suisse.',
  alternates: {
    canonical: 'https://pvpro.ch/fr/demande',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DemandePage() {
  return <AnfrageForm locale="fr" />;
}
