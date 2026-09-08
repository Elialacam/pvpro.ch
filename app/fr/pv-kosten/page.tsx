import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Coûts photovoltaïque par m² en Suisse',
  description: 'Découvrez les coûts d’une installation photovoltaïque par mètre carré en Suisse.',
}, { path: '/fr/pv-kosten', locale: 'fr' });

export default function FrPvKosten() {
  redirect('/fr/cout-pv-par-m2');
}
