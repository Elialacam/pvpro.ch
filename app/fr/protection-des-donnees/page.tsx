import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Protection des données',
  description: 'Politique de confidentialité de PVPro - Informations sur le traitement de vos données personnelles.',
};

export default function ProtectionDonneesPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-display font-extrabold uppercase tracking-tight text-gray-900 mb-8">Protection des données</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">Dernière mise à jour: {new Date().toLocaleDateString('fr-CH', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <h2 className="text-2xl font-display font-extrabold uppercase tracking-tight text-gray-900 mt-8 mb-4">1. Responsable du traitement</h2>
          <p className="text-gray-600 leading-relaxed mb-6">PVPro<br />Culmannstrasse 37<br />8006 Zurich<br />Suisse<br /><br />Email: info@pvpro.ch</p>
        </div>
      </div>
    </section>
  );
}
