import { Metadata } from 'next';
import ThankYouConfirmation from '@/components/ThankYouConfirmation';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Grazie – La tua richiesta è stata inviata | PvPro.ch',
  description: 'La tua richiesta di preventivo per un impianto solare è stata inviata a PvPro.ch.',
  robots: { index: false, follow: false },
}, { path: '/it/grazie', locale: 'it' });

export default function GrazieItPage() {
  return <ThankYouConfirmation locale="it" />;
}
