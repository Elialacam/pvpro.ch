import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Imprint and legal information for PVPro.',
};

export default function ImprintPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-display font-medium tracking-normal text-gray-900 mb-8">Imprint</h1>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-display font-medium tracking-normal text-gray-900 mt-8 mb-4">Information according to Art. 5 FDPA</h2>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-gray-900 font-display font-semibold mb-4">PVPro</p>
            <p className="text-gray-600 mb-2">Culmannstrasse 37</p>
            <p className="text-gray-600 mb-2">8006 Zurich</p>
            <p className="text-gray-600 mb-2">Switzerland</p>
            <p className="text-gray-600 mb-2"><strong>Phone:</strong> +41 77 442 00 59</p>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> info@pvpro.ch</p>
          </div>
        </div>
      </div>
    </section>
  );
}
