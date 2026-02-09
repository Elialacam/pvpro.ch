import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Protezione dei dati',
  description: 'Informativa sulla privacy di PVPro - Informazioni sul trattamento dei vostri dati personali.',
};

export default function ProtezioneDatiPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-sans font-semibold tracking-normal text-gray-900 mb-8">Protezione dei dati</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">Ultimo aggiornamento: {new Date().toLocaleDateString('it-CH', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">1. Titolare del trattamento</h2>
          <p className="text-gray-600 leading-relaxed mb-6">PVPro<br />Culmannstrasse 37<br />8006 Zurigo<br />Svizzera<br /><br />Email: info@pvpro.ch</p>
        </div>
      </div>
    </section>
  );
}
