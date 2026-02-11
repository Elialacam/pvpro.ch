import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales et informations juridiques concernant PVPro.',
};

export default function MentionsLegalesPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-sans font-semibold tracking-normal text-gray-900 mb-8">Mentions légales</h1>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Informations selon la nLPD</h2>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-gray-900 font-sans font-bold mb-4">NOBA Media Sagl</p>
            <p className="text-gray-600 mb-2">Via Santi Pietro e Paolo 16</p>
            <p className="text-gray-600 mb-2">6953 Lugaggia</p>
            <p className="text-gray-600 mb-2">Suisse</p>
            <p className="text-gray-600 mb-2"><strong>E-mail :</strong> anfrage@pvpro.ch</p>
            <p className="text-gray-600 mb-2"><strong>Téléphone :</strong> +41 77 977 07 50</p>
            <p className="text-gray-600"><strong>Site web :</strong> www.pvpro.ch</p>
          </div>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Forme juridique</h2>
          <p className="text-gray-600 mb-6">Société à responsabilité limitée (Sàrl / Sagl)</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Personne autorisée à représenter</h2>
          <p className="text-gray-600 mb-6">Elia Alacam, Gérant, avec signature individuelle</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Registre du commerce</h2>
          <p className="text-gray-600 mb-6">
            Numéro : CH-501.4.029.665-0<br />
            Office du registre du commerce : Canton du Tessin<br />
            Siège social : Capriasca
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Numéro d'identification (IDE)</h2>
          <p className="text-gray-600 mb-6">CHE-236.020.113</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Limitation de responsabilité</h2>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">Responsabilité pour les contenus</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Les contenus de nos pages ont été créés avec le plus grand soin. Cependant, nous ne pouvons garantir
            l'exactitude, l'exhaustivité et l'actualité des contenus.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">Responsabilité pour les liens</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Notre offre contient des liens vers des sites Web externes de tiers, sur le contenu desquels nous n'avons
            aucune influence. Nous ne pouvons donc assumer aucune responsabilité pour ces contenus externes.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">Droit d'auteur</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Les contenus et œuvres créés par les exploitants du site sur ces pages sont soumis au droit d'auteur suisse.
            La reproduction, le traitement, la distribution et toute forme d'exploitation en dehors des limites du droit
            d'auteur nécessitent le consentement écrit de l'auteur respectif.
          </p>
        </div>
      </div>
    </section>
  );
}
