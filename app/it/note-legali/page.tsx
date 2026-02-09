import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Note legali',
  description: 'Note legali e informazioni giuridiche relative a PVPro.',
};

export default function NoteLegaliPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-display font-medium tracking-normal text-gray-900 mb-8">Note legali</h1>
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-display font-medium tracking-normal text-gray-900 mt-8 mb-4">Informazioni ai sensi dell'art. 5 LPD</h2>
          <p className="text-gray-600 leading-relaxed mb-6">PVPro<br />Culmannstrasse 37<br />8006 Zurigo<br />Svizzera</p>
        </div>
      </div>
    </section>
  );
}
