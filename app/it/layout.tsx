import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'PVPro - Confronta impianti solari in Svizzera | Preventivi gratuiti',
  description: 'Confronta gratuitamente le offerte di impianti solari da installatori certificati in Svizzera. Risparmia fino al 30% grazie al confronto delle offerte. 100% senza impegno.',
};

export default function ItalianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
