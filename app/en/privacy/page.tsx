import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy of PVPro - Information on how we handle your personal data.',
};

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-display font-extrabold uppercase tracking-tight text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-display font-extrabold uppercase tracking-tight text-gray-900 mt-8 mb-4">1. Data Controller</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The controller responsible for data processing on this website is:
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            PVPro<br />
            Culmannstrasse 37<br />
            8006 Zurich<br />
            Switzerland<br />
            <br />
            Email: info@pvpro.ch<br />
            Phone: +41 77 442 00 59
          </p>

          <h2 className="text-2xl font-display font-extrabold uppercase tracking-tight text-gray-900 mt-8 mb-4">2. Collection and Processing of Personal Data</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We collect and process personal data only to the extent necessary to provide our services or if you have given us your consent.
          </p>

          <h3 className="text-xl font-display font-extrabold uppercase tracking-tight text-gray-900 mt-6 mb-3">2.1 Contact Form</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            When using our contact form, we collect the following data:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>First and last name</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Information about your property (type, location, roof condition)</li>
            <li>Information about your energy needs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
