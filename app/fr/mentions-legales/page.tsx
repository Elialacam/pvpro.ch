import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales et informations juridiques concernant PVPro.',
};

export default function MentionsLegalesPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-display font-extrabold uppercase tracking-tight text-gray-900 mb-8">Mentions légales</h1>
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-display font-extrabold uppercase tracking-tight text-gray-900 mt-8 mb-4">Informations selon l'art. 5 LPD</h2>
          <p className="text-gray-600 leading-relaxed mb-6">PVPro<br />Culmannstrasse 37<br />8006 Zurich<br />Suisse</p>
        </div>
      </div>
    </section>
  );
}
