import { Metadata } from 'next';
import AnfrageForm from '@/components/AnfrageForm';

export const metadata: Metadata = {
  title: 'Kostenlose Solarofferte anfordern | PVPro.ch',
  description: 'Fordern Sie in wenigen Minuten kostenlose Solaranlagen-Offerten von geprüften Schweizer Installateuren an.',
  alternates: {
    canonical: 'https://pvpro.ch/anfrage',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AnfragePage() {
  return <AnfrageForm />;
}
