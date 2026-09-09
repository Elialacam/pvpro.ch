import { Metadata } from 'next';
import AnfrageForm from '@/components/AnfrageForm';

export const metadata: Metadata = {
  title: 'Request free solar quotes | PVPro.ch',
  description: 'Receive free quotes from certified Swiss solar installers in just a few minutes.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/request',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RequestPage() {
  return <AnfrageForm locale="en" />;
}
