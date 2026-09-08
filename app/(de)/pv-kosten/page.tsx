import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Photovoltaik Kosten pro m² Schweiz: Preise, Beispiele und Berechnung',
  description: 'Wie viel kostet Photovoltaik pro m² in der Schweiz? Preise, Beispiele und Kosten pro kWp einfach erklärt.',
}, { path: '/pv-kosten', locale: 'de' });

export default function PvKostenPage() {
  redirect('/photovoltaik-kosten-pro-m2');
}
