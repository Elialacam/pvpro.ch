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
          <p className="text-gray-600 leading-relaxed mb-6">Ultimo aggiornamento: febbraio 2026</p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">1. Titolare del trattamento</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            NOBA Media Sagl<br />
            Via Santi Pietro e Paolo 16<br />
            6953 Lugaggia<br />
            Svizzera<br /><br />
            E-mail: anfrage@pvpro.ch<br />
            Telefono: +41 77 442 00 59
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">2. Raccolta e trattamento dei dati</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Raccogliamo e trattiamo dati personali solo nella misura necessaria alla fornitura dei nostri servizi o se
            ci avete dato il vostro consenso. Le basi legali sono la Legge federale sulla protezione dei dati (nLPD) e,
            ove applicabile, il GDPR dell'UE.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">2.1 Modulo di contatto</h3>
          <p className="text-gray-600 leading-relaxed mb-6">Utilizzando il nostro modulo, raccogliamo:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Nome e cognome</li>
            <li>Indirizzo e-mail</li>
            <li>Numero di telefono</li>
            <li>Indirizzo (via, CAP, località)</li>
            <li>Informazioni sul vostro immobile</li>
            <li>Interesse per l'accumulo a batteria</li>
          </ul>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">3. Servizi di terze parti</h2>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.1 Web3Forms</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizziamo Web3Forms per l'elaborazione delle richieste tramite modulo. I vostri dati vengono trasmessi
            attraverso i loro server e ci vengono inoltrati via e-mail.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.2 Resend</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizziamo Resend per l'invio di e-mail di conferma. Il vostro indirizzo e-mail viene trasmesso a questo fornitore.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.3 Google Maps</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizziamo l'API Google Maps per il completamento automatico degli indirizzi. I dati possono essere
            trasferiti a Google LLC, USA.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.4 Vercel (Hosting)</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Questo sito è ospitato da Vercel Inc. Vercel può raccogliere automaticamente file di log del server.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">4. Cookie e tracciamento</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Il nostro sito utilizza un banner per il consenso ai cookie. I servizi di tracciamento vengono attivati
            solo dopo il vostro consenso esplicito.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.1 Google Analytics</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizziamo Google Analytics 4 (ID: G-ZE1BS0ZGK9) per l'analisi statistica. Attivato solo dopo il
            consenso (categoria «Analisi»).
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.2 Google Ads</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizziamo Google Ads Conversion Tracking (ID: AW-17901154625). Attivato solo dopo il consenso
            (categoria «Marketing»).
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.3 Meta Pixel (Facebook)</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizziamo il Meta Pixel (ID: 1848326999213371) per misurare l'efficacia delle pubblicità su Facebook
            e Instagram. Attivato solo dopo il consenso (categoria «Marketing»).
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.4 Microsoft Clarity</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizziamo Microsoft Clarity (ID progetto: u1ur4kb2kq) per l'analisi del comportamento degli utenti.
            Attivato solo dopo il consenso (categoria «Analisi»).
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">5. Trasmissione dei dati</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nell'ambito del nostro servizio di intermediazione, trasmettiamo i vostri dati di contatto a un massimo
            di 3 installatori solari certificati nella vostra regione.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">6. I vostri diritti</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Diritto di accesso (art. 25 nLPD)</li>
            <li>Diritto di rettifica (art. 32 nLPD)</li>
            <li>Diritto alla cancellazione</li>
            <li>Diritto alla portabilità dei dati (art. 28 nLPD)</li>
            <li>Diritto di opposizione</li>
            <li>Diritto di revoca del consenso</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Per esercitare i vostri diritti, contattateci: anfrage@pvpro.ch
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Avete inoltre il diritto di presentare un reclamo all'Incaricato federale della protezione dei dati e
            della trasparenza (IFPDT).
          </p>
        </div>
      </div>
    </section>
  );
}
