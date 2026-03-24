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
          <p className="text-gray-600 leading-relaxed mb-6">
            Last updated: February 2026
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">1. Data Controller</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The controller responsible for data processing on this website is:
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            NOBA Media Sagl<br />
            Via Santi Pietro e Paolo 16<br />
            6953 Lugaggia<br />
            Switzerland<br />
            <br />
            Email: anfrage@pvpro.ch<br />
            Phone: +41 77 977 07 50
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">2. Collection and Processing of Personal Data</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We collect and process personal data only to the extent necessary to provide our services or if you have
            given us your consent. The legal basis is the Swiss Federal Act on Data Protection (nFADP) and, where
            applicable, the EU General Data Protection Regulation (GDPR).
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">2.1 Contact Form / Quote Request</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            When using our contact form, we collect the following data:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>First and last name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address (street, postal code, city)</li>
            <li>Information about your property (owner/tenant, building type, roof shape)</li>
            <li>Interest in battery storage</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            This data is used to match you with suitable solar installers.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">2.2 Server Log Files</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our web hosting provider (Vercel Inc.) automatically collects and stores information in server log files
            that your browser transmits automatically. These include:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Browser type and version</li>
            <li>Operating system used</li>
            <li>Referrer URL</li>
            <li>IP address (anonymised)</li>
            <li>Time of the server request</li>
          </ul>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">3. Third-Party Services and Data Processing</h2>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.1 Web3Forms</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use the Web3Forms service to process form submissions. Your data is transmitted via their servers and
            forwarded to us by email. More information:{' '}
            <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              web3forms.com/privacy
            </a>
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.2 Resend</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use the Resend email service to send confirmation emails. Your email address is transmitted to this
            service provider. More information:{' '}
            <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              resend.com/legal/privacy-policy
            </a>
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.3 Google Maps</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use the Google Maps API for address autocomplete in the contact form. Data may be transferred to
            Google LLC, USA. More information:{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              policies.google.com/privacy
            </a>
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.4 Vercel (Hosting)</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            This website is hosted by Vercel Inc. Vercel may automatically collect server log files. More information:{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              vercel.com/legal/privacy-policy
            </a>
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">4. Cookies and Tracking</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our website uses a cookie consent banner. Tracking services are only activated after your explicit consent.
            You can withdraw your consent at any time by deleting your browser cookies and reloading the page.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.1 Google Analytics</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use Google Analytics 4 (Measurement ID: G-ZE1BS0ZGK9) for statistical analysis of website usage.
            Google Analytics is only activated after your consent in the cookie banner (category "Analytics").
            Provider: Google Ireland Ltd. Data may be transferred to the USA.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.2 Google Ads</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use Google Ads Conversion Tracking (ID: AW-17901154625) to measure the effectiveness of our
            advertisements. This tracking is only activated after your consent in the cookie banner (category "Marketing").
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.3 Meta Pixel (Facebook)</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use the Meta Pixel (ID: 1848326999213371) to measure the effectiveness of ads on Facebook and Instagram.
            The Meta Pixel is only activated after your consent in the cookie banner (category "Marketing").
            Provider: Meta Platforms Ireland Ltd. Data may be transferred to the USA.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.4 Microsoft Clarity</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use Microsoft Clarity (Project ID: u1ur4kb2kq) for user behaviour analysis (heatmaps, session recordings).
            Clarity is only activated after your consent in the cookie banner (category "Analytics").
            Provider: Microsoft Corporation. More information:{' '}
            <a href="https://privacy.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              privacy.microsoft.com
            </a>
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">5. Data Sharing</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            As part of our brokerage service, we share your contact details with up to 3 certified solar installers
            in your region so they can provide you with individual quotes. Data is only shared on the basis of your request.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">6. Retention Period</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We store your personal data only for as long as is necessary to fulfil the respective purpose or as required
            by statutory retention periods.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">7. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            You have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Right of access (Art. 25 nFADP)</li>
            <li>Right to rectification (Art. 32 nFADP)</li>
            <li>Right to erasure</li>
            <li>Right to data portability (Art. 28 nFADP)</li>
            <li>Right to object to data processing</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            To exercise your rights, please contact us at: anfrage@pvpro.ch
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            You also have the right to file a complaint with the Federal Data Protection and Information Commissioner (FDPIC).
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">8. SSL Encryption</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            This website uses SSL/TLS encryption for security reasons and to protect the transmission of confidential content.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">9. Changes</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We reserve the right to update this privacy policy at any time to ensure it continues to meet current legal requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
