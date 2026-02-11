import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Imprint and legal information for PVPro.',
};

export default function ImprintPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-sans font-semibold tracking-normal text-gray-900 mb-8">Imprint</h1>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Information according to the nFADP</h2>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-gray-900 font-sans font-bold mb-4">NOBA Media Sagl</p>
            <p className="text-gray-600 mb-2">Via Santi Pietro e Paolo 16</p>
            <p className="text-gray-600 mb-2">6953 Lugaggia</p>
            <p className="text-gray-600 mb-2">Switzerland</p>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> anfrage@pvpro.ch</p>
            <p className="text-gray-600 mb-2"><strong>Phone:</strong> +41 77 977 07 50</p>
            <p className="text-gray-600"><strong>Website:</strong> www.pvpro.ch</p>
          </div>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Legal Form</h2>
          <p className="text-gray-600 mb-6">Limited Liability Company (Sagl / GmbH)</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Authorized Representative</h2>
          <p className="text-gray-600 mb-6">Elia Alacam, Managing Director, with individual signatory authority</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Commercial Register</h2>
          <p className="text-gray-600 mb-6">
            Registration number: CH-501.4.029.665-0<br />
            Commercial register office: Canton of Ticino<br />
            Registered office: Capriasca
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Company Identification Number (UID)</h2>
          <p className="text-gray-600 mb-6">CHE-236.020.113</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Disclaimer</h2>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">Liability for Content</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            The contents of our pages have been created with the utmost care. However, we cannot guarantee the accuracy,
            completeness, and timeliness of the content.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">Liability for Links</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our website contains links to external third-party websites over whose content we have no influence. We
            therefore cannot accept any liability for this external content.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">Copyright</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            The content and works on these pages created by the site operators are subject to Swiss copyright law.
            Reproduction, processing, distribution, and any form of exploitation beyond the limits of copyright law
            require the written consent of the respective author.
          </p>
        </div>
      </div>
    </section>
  );
}
