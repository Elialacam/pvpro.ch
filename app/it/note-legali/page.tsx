import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Note legali',
  description: 'Note legali e informazioni giuridiche relative a PVPro.',
};

export default function NoteLegaliPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-sans font-semibold tracking-normal text-gray-900 mb-8">Note legali</h1>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Informazioni ai sensi della nLPD</h2>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-gray-900 font-sans font-bold mb-4">NOBA Media Sagl</p>
            <p className="text-gray-600 mb-2">Via Santi Pietro e Paolo 16</p>
            <p className="text-gray-600 mb-2">6953 Lugaggia</p>
            <p className="text-gray-600 mb-2">Svizzera</p>
            <p className="text-gray-600 mb-2"><strong>E-mail:</strong> anfrage@pvpro.ch</p>
            <p className="text-gray-600 mb-2"><strong>Telefono:</strong> +41 77 442 00 59</p>
            <p className="text-gray-600"><strong>Sito web:</strong> www.pvpro.ch</p>
          </div>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Forma giuridica</h2>
          <p className="text-gray-600 mb-6">Società a garanzia limitata (Sagl)</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Persona autorizzata a rappresentare</h2>
          <p className="text-gray-600 mb-6">Elia Alacam, Gerente, con firma individuale</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Registro di commercio</h2>
          <p className="text-gray-600 mb-6">
            Numero: CH-501.4.029.665-0<br />
            Ufficio del registro di commercio: Canton Ticino<br />
            Sede legale: Capriasca
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Numero di identificazione (IDI)</h2>
          <p className="text-gray-600 mb-6">CHE-236.020.113</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">Esclusione di responsabilità</h2>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">Responsabilità per i contenuti</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            I contenuti delle nostre pagine sono stati creati con la massima cura. Tuttavia, non possiamo garantire
            la correttezza, la completezza e l'attualità dei contenuti.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">Responsabilità per i link</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            La nostra offerta contiene link a siti web esterni di terzi, sui cui contenuti non abbiamo alcuna influenza.
            Non possiamo quindi assumerci alcuna responsabilità per tali contenuti esterni.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">Diritto d'autore</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            I contenuti e le opere creati dagli operatori del sito su queste pagine sono soggetti al diritto d'autore
            svizzero. La riproduzione, l'elaborazione, la distribuzione e qualsiasi forma di utilizzo al di fuori dei
            limiti del diritto d'autore richiedono il consenso scritto del rispettivo autore.
          </p>
        </div>
      </div>
    </section>
  );
}
