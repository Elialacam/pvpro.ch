import { Metadata } from 'next';
import AnfrageForm from '@/components/AnfrageForm';

export const metadata: Metadata = {
  title: 'Richiedi preventivi solari gratuiti | PVPro.ch',
  description: 'Ricevi in pochi minuti preventivi gratuiti da installatori solari certificati in Svizzera.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/richiesta',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RichiestaPage() {
  return <AnfrageForm locale="it" />;
}
