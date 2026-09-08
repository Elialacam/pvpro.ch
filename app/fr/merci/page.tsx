import ThankYouConfirmation from '@/components/ThankYouConfirmation';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Merci – Votre demande a été envoyée',
  description: 'Votre demande de devis pour une installation solaire a bien été envoyée.',
  robots: { index: false, follow: false },
}, { path: '/fr/merci', locale: 'fr' });

export default function MerciPage() {
  return <ThankYouConfirmation locale="fr" />;
}
