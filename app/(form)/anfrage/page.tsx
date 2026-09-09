import { Metadata } from 'next';
import AnfrageForm from '@/components/AnfrageForm';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Kostenlose Solarofferte anfordern | PvPro.ch',
  description: 'Fordern Sie in wenigen Minuten kostenlose Solaranlagen-Offerten von geprüften Schweizer Installateuren an.',
  alternates: {
    canonical: 'https://www.pvpro.ch/anfrage',
  },
  robots: {
    index: false,
    follow: false,
  },
}, { path: '/anfrage', locale: 'de' });

export default function AnfragePage() {
  return <AnfrageForm />;
}
