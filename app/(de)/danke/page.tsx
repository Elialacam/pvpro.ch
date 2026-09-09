import { Metadata } from 'next';
import ThankYouConfirmation from '@/components/ThankYouConfirmation';
import DankeConversionTracker from '@/components/DankeConversionTracker';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Vielen Dank – Ihre Anfrage wurde versendet',
  description: 'Vielen Dank für Ihre Anfrage bei PvPro.ch. Ihre Anfrage wurde erfolgreich versendet.',
  robots: { index: false, follow: false },
}, { path: '/danke', locale: 'de' });

export default function ThankYouPage() {
  return (
    <>
      <ThankYouConfirmation locale="de" />
      <DankeConversionTracker />
    </>
  );
}
