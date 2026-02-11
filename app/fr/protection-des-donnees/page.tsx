import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Protection des données',
  description: 'Politique de confidentialité de PVPro - Informations sur le traitement de vos données personnelles.',
};

export default function ProtectionDonneesPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-sans font-semibold tracking-normal text-gray-900 mb-8">Protection des données</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">Dernière mise à jour : février 2026</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">1. Responsable du traitement</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            NOBA Media Sagl<br />
            Via Santi Pietro e Paolo 16<br />
            6953 Lugaggia<br />
            Suisse<br /><br />
            E-mail : anfrage@pvpro.ch<br />
            Téléphone : +41 77 442 00 59
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">2. Collecte et traitement des données</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous ne collectons et ne traitons des données personnelles que dans la mesure nécessaire à la fourniture de
            nos services ou si vous nous avez donné votre consentement. Les bases légales sont la Loi fédérale sur la
            protection des données (nLPD) et, le cas échéant, le RGPD.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">2.1 Formulaire de contact</h3>
          <p className="text-gray-600 leading-relaxed mb-6">Lors de l'utilisation de notre formulaire, nous collectons :</p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Prénom et nom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Adresse (rue, NPA, localité)</li>
            <li>Informations sur votre bien immobilier</li>
            <li>Intérêt pour le stockage par batterie</li>
          </ul>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">3. Services tiers</h2>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.1 Web3Forms</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous utilisons Web3Forms pour le traitement des demandes de formulaire. Vos données sont transmises via
            leurs serveurs et nous sont envoyées par e-mail.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.2 Resend</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous utilisons Resend pour l'envoi d'e-mails de confirmation. Votre adresse e-mail est transmise à ce prestataire.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.3 Google Maps</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous utilisons l'API Google Maps pour l'autocomplétion d'adresse. Des données peuvent être transférées à Google LLC, USA.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.4 Vercel (Hébergement)</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ce site est hébergé chez Vercel Inc. Vercel peut collecter des fichiers journaux automatiquement.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">4. Cookies et suivi</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Notre site utilise une bannière de consentement aux cookies. Les services de suivi ne sont activés qu'après
            votre consentement explicite.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.1 Google Analytics</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous utilisons Google Analytics 4 (ID : G-ZE1BS0ZGK9) pour l'analyse statistique. Activé uniquement après
            consentement (catégorie « Analyse »).
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.2 Google Ads</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous utilisons Google Ads Conversion Tracking (ID : AW-17901154625). Activé uniquement après consentement
            (catégorie « Marketing »).
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.3 Meta Pixel (Facebook)</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous utilisons le Meta Pixel (ID : 1848326999213371) pour mesurer l'efficacité des publicités.
            Activé uniquement après consentement (catégorie « Marketing »).
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.4 Microsoft Clarity</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous utilisons Microsoft Clarity (ID de projet : u1ur4kb2kq) pour l'analyse du comportement des utilisateurs.
            Activé uniquement après consentement (catégorie « Analyse »).
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">5. Transmission des données</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dans le cadre de notre service de courtage, nous transmettons vos coordonnées à un maximum de 3 installateurs
            solaires certifiés dans votre région.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">6. Vos droits</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Droit d'accès (art. 25 nLPD)</li>
            <li>Droit de rectification (art. 32 nLPD)</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la portabilité des données (art. 28 nLPD)</li>
            <li>Droit d'opposition</li>
            <li>Droit de retrait du consentement</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Pour exercer vos droits, contactez-nous : anfrage@pvpro.ch
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Vous avez également le droit de déposer une plainte auprès du Préposé fédéral à la protection des données
            et à la transparence (PFPDT).
          </p>
        </div>
      </div>
    </section>
  );
}
