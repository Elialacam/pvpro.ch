import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Costo fotovoltaico per m² Svizzera | PvPro.ch',
  description: 'Informazioni sui costi del fotovoltaico per metro quadrato in Svizzera.',
}, { path: '/it/pv-kosten', locale: 'it' });

export default function ItPvKosten() {
  redirect('/it/costo-fv-per-m2');
}
