import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy of PVPro - Information on how we handle your personal data.',
};

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-sans font-semibold tracking-normal text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">Last updated: February 2026</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">1. Data Controller</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            NOBA Media Sagl<br />
            Via Santi Pietro e Paolo 16<br />
            6953 Lugaggia<br />
            Switzerland<br /><br />
            Email: anfrage@pvpro.ch<br />
            Phone: +41 77 442 00 59
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">2. Collection and Processing of Personal Data</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We collect and process personal data only to the extent necessary to provide our services or if you have
            given us your consent. The legal basis is the Swiss Federal Act on Data Protection (nFADP) and, where
            applicable, the EU General Data Protection Regulation (GDPR).
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">2.1 Contact Form</h3>
          <p className="text-gray-600 leading-relaxed mb-6">When using our contact form, we collect:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>First and last name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address (street, postal code, city)</li>
            <li>Information about your property</li>
            <li>Interest in battery storage</li>
          </ul>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">3. Third-Party Services</h2>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.1 Web3Forms</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use Web3Forms to process form submissions. Your data is transmitted via their servers and forwarded to
            us by email.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.2 Resend</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use Resend to send confirmation emails. Your email address is transmitted to this service provider.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.3 Google Maps</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use the Google Maps API for address autocomplete. Data may be transferred to Google LLC, USA.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.4 Vercel (Hosting)</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            This website is hosted by Vercel Inc. Vercel may automatically collect server log files.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">4. Cookies and Tracking</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our website uses a cookie consent banner. Tracking services are only activated after your explicit consent.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.1 Google Analytics</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use Google Analytics 4 (Measurement ID: G-ZE1BS0ZGK9) for statistical analysis. Only activated after
            consent (category "Analytics").
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.2 Google Ads</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use Google Ads Conversion Tracking (ID: AW-17901154625). Only activated after consent (category "Marketing").
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.3 Meta Pixel (Facebook)</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use the Meta Pixel (ID: 1848326999213371) to measure the effectiveness of ads on Facebook and Instagram.
            Only activated after consent (category "Marketing").
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.4 Microsoft Clarity</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use Microsoft Clarity (Project ID: u1ur4kb2kq) for user behavior analysis (heatmaps, session recordings).
            Only activated after consent (category "Analytics").
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">5. Data Sharing</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            As part of our brokerage service, we share your contact details with up to 3 certified solar installers
            in your region so they can provide you with individual quotes.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">6. Your Rights</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Right of access (Art. 25 nFADP)</li>
            <li>Right to rectification (Art. 32 nFADP)</li>
            <li>Right to erasure</li>
            <li>Right to data portability (Art. 28 nFADP)</li>
            <li>Right to object</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            To exercise your rights, please contact: anfrage@pvpro.ch
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            You also have the right to file a complaint with the Federal Data Protection and Information Commissioner (FDPIC).
          </p>
        </div>
      </div>
    </section>
  );
}
