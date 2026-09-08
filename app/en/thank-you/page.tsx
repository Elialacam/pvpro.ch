import { Metadata } from 'next';
import ThankYouConfirmation from '@/components/ThankYouConfirmation';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Thank You – Your request has been sent',
  description: 'Your PvPro.ch solar quote request has been sent successfully.',
  robots: { index: false, follow: false },
}, { path: '/en/thank-you', locale: 'en' });

export default function ThankYouEnPage() {
  return <ThankYouConfirmation locale="en" />;
}
