import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Solar costs per m² in Switzerland',
  description: 'Learn about solar costs per m² in Switzerland, with prices, examples and calculation guidance.',
}, { path: '/en/pv-kosten', locale: 'en' });

export default function EnPvKosten() {
  redirect('/en/solar-cost-per-m2');
}
