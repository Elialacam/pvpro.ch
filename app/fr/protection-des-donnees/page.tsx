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
          <p className="text-gray-600 leading-relaxed mb-6">
            Dernière mise à jour : février 2026
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">1. Responsable du traitement</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Le responsable du traitement des données sur ce site web est :
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            NOBA Media Sagl<br />
            Via Santi Pietro e Paolo 16<br />
            6953 Lugaggia<br />
            Suisse<br />
            <br />
            E-mail : anfrage@pvpro.ch<br />
            Téléphone : +41 77 977 07 50
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">2. Collecte et traitement des données personnelles</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous ne collectons et ne traitons des données personnelles que dans la mesure nécessaire à la fourniture de
            nos services ou si vous nous avez donné votre consentement. Les bases légales sont la Loi fédérale sur la
            protection des données (nLPD) et, le cas échéant, le RGPD de l'UE.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">2.1 Formulaire de contact / demande de devis</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lors de l'utilisation de notre formulaire de contact, nous collectons les données suivantes :
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Prénom et nom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Adresse (rue, NPA, localité)</li>
            <li>Informations sur votre bien immobilier (propriétaire/locataire, type de bâtiment, forme du toit)</li>
            <li>Intérêt pour le stockage par batterie</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ces données sont utilisées pour vous mettre en relation avec des installateurs solaires adaptés.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">2.2 Fichiers journaux du serveur</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Notre hébergeur (Vercel Inc.) collecte et enregistre automatiquement des informations dans des fichiers
            journaux que votre navigateur transmet automatiquement. Il s'agit notamment de :
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Type et version du navigateur</li>
            <li>Système d'exploitation utilisé</li>
            <li>URL de référence</li>
            <li>Adresse IP (anonymisée)</li>
            <li>Heure de la requête serveur</li>
          </ul>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">3. Prestataires tiers et traitement des données</h2>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.1 Web3Forms</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous utilisons le service Web3Forms pour le traitement des demandes de formulaire. Vos données saisies sont
            traitées via leurs serveurs et nous sont transmises par e-mail. Plus d'informations :{' '}
            <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              web3forms.com/privacy
            </a>
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.2 Resend</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous utilisons le service d'e-mail Resend pour l'envoi d'e-mails de confirmation. Votre adresse e-mail est
            transmise à ce prestataire. Plus d'informations :{' '}
            <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              resend.com/legal/privacy-policy
            </a>
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.3 Google Maps</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous utilisons l'API Google Maps pour la saisie semi-automatique d'adresse dans le formulaire de contact.
            Des données peuvent être transférées à Google LLC, USA. Plus d'informations :{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              policies.google.com/privacy
            </a>
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.4 Vercel (Hébergement)</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ce site web est hébergé chez Vercel Inc. Vercel peut collecter automatiquement des fichiers journaux du
            serveur. Plus d'informations :{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              vercel.com/legal/privacy-policy
            </a>
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">4. Cookies et suivi</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Notre site web utilise une bannière de consentement aux cookies. Les services de suivi ne sont activés
            qu'après votre consentement explicite. Vous pouvez retirer votre consentement à tout moment en supprimant
            les cookies de votre navigateur et en rechargeant la page.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.1 Google Analytics</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous utilisons Google Analytics 4 (ID de mesure : G-ZE1BS0ZGK9) pour l'analyse statistique de l'utilisation
            du site web. Google Analytics n'est activé qu'après votre consentement dans la bannière (catégorie «Analyse»).
            Fournisseur : Google Ireland Ltd. Les données peuvent être transférées aux États-Unis.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.2 Google Ads</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous utilisons le suivi des conversions Google Ads (ID : AW-17901154625) pour mesurer l'efficacité de nos
            annonces publicitaires. Ce suivi n'est activé qu'après votre consentement dans la bannière (catégorie «Marketing»).
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.3 Meta Pixel (Facebook)</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous utilisons le Meta Pixel (ID : 1848326999213371) pour mesurer l'efficacité des annonces sur Facebook
            et Instagram. Le Meta Pixel n'est activé qu'après votre consentement dans la bannière (catégorie «Marketing»).
            Fournisseur : Meta Platforms Ireland Ltd. Les données peuvent être transférées aux États-Unis.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.4 Microsoft Clarity</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous utilisons Microsoft Clarity (ID de projet : u1ur4kb2kq) pour l'analyse du comportement des utilisateurs
            (cartes de chaleur, enregistrements de sessions). Clarity n'est activé qu'après votre consentement dans la
            bannière (catégorie «Analyse»). Fournisseur : Microsoft Corporation. Plus d'informations :{' '}
            <a href="https://privacy.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              privacy.microsoft.com
            </a>
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">5. Transmission des données</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dans le cadre de notre service de courtage, nous transmettons vos coordonnées à un maximum de 3 installateurs
            solaires certifiés dans votre région, afin qu'ils puissent vous établir des offres personnalisées. La
            transmission n'a lieu que sur la base de votre demande.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">6. Durée de conservation</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous ne conservons vos données personnelles que le temps nécessaire à la réalisation de l'objectif concerné
            ou aussi longtemps que des délais de conservation légaux l'exigent.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">7. Vos droits</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Droit d'accès (art. 25 nLPD)</li>
            <li>Droit de rectification (art. 32 nLPD)</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la portabilité des données (art. 28 nLPD)</li>
            <li>Droit d'opposition au traitement des données</li>
            <li>Droit de retrait du consentement</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Pour exercer vos droits, veuillez nous contacter : anfrage@pvpro.ch
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Vous avez également le droit de déposer une plainte auprès du Préposé fédéral à la protection des données
            et à la transparence (PFPDT).
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">8. Chiffrement SSL</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ce site web utilise un chiffrement SSL/TLS pour des raisons de sécurité et pour protéger la transmission
            de contenus confidentiels.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">9. Modifications</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous nous réservons le droit d'adapter à tout moment cette politique de confidentialité afin qu'elle
            corresponde aux exigences légales en vigueur.
          </p>
        </div>
      </div>
    </section>
  );
}
