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
          <p className="text-gray-600 leading-relaxed mb-6">
            Ultimo aggiornamento: febbraio 2026
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">1. Titolare del trattamento</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Il titolare del trattamento dei dati su questo sito web è:
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            NOBA Media Sagl<br />
            Via Santi Pietro e Paolo 16<br />
            6953 Lugaggia<br />
            Svizzera<br />
            <br />
            E-mail: anfrage@pvpro.ch<br />
            Telefono: +41 77 977 07 50
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">2. Raccolta e trattamento dei dati personali</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Raccogliamo e trattiamo dati personali solo nella misura necessaria alla fornitura dei nostri servizi o se
            ci avete dato il vostro consenso. Le basi legali sono la Legge federale sulla protezione dei dati (nLPD) e,
            ove applicabile, il GDPR dell'UE.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">2.1 Modulo di contatto / richiesta di preventivo</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizzando il nostro modulo di contatto, raccogliamo i seguenti dati:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Nome e cognome</li>
            <li>Indirizzo e-mail</li>
            <li>Numero di telefono</li>
            <li>Indirizzo (via, CAP, località)</li>
            <li>Informazioni sul vostro immobile (proprietario/inquilino, tipo di edificio, forma del tetto)</li>
            <li>Interesse per l'accumulo a batteria</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Questi dati vengono utilizzati per mettervi in contatto con installatori solari adeguati.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">2.2 File di log del server</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Il nostro provider di hosting (Vercel Inc.) raccoglie e archivia automaticamente informazioni nei file di
            log del server che il vostro browser trasmette automaticamente. Questi includono:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Tipo e versione del browser</li>
            <li>Sistema operativo utilizzato</li>
            <li>URL di riferimento</li>
            <li>Indirizzo IP (anonimizzato)</li>
            <li>Orario della richiesta al server</li>
          </ul>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">3. Servizi di terze parti e trattamento dei dati</h2>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.1 Web3Forms</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizziamo il servizio Web3Forms per l'elaborazione delle richieste tramite modulo. I vostri dati vengono
            trasmessi attraverso i loro server e ci vengono inoltrati via e-mail. Ulteriori informazioni:{' '}
            <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              web3forms.com/privacy
            </a>
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.2 Resend</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizziamo il servizio e-mail Resend per l'invio di e-mail di conferma. Il vostro indirizzo e-mail viene
            trasmesso a questo fornitore. Ulteriori informazioni:{' '}
            <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              resend.com/legal/privacy-policy
            </a>
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.3 Google Maps</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizziamo l'API Google Maps per il completamento automatico degli indirizzi nel modulo di contatto.
            I dati possono essere trasferiti a Google LLC, USA. Ulteriori informazioni:{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              policies.google.com/privacy
            </a>
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">3.4 Vercel (Hosting)</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Questo sito web è ospitato da Vercel Inc. Vercel può raccogliere automaticamente file di log del server.
            Ulteriori informazioni:{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              vercel.com/legal/privacy-policy
            </a>
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">4. Cookie e tracciamento</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Il nostro sito web utilizza un banner per il consenso ai cookie. I servizi di tracciamento vengono attivati
            solo dopo il vostro consenso esplicito. Potete revocare il vostro consenso in qualsiasi momento eliminando
            i cookie del browser e ricaricando la pagina.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.1 Google Analytics</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizziamo Google Analytics 4 (ID di misurazione: G-ZE1BS0ZGK9) per l'analisi statistica dell'utilizzo
            del sito web. Google Analytics viene attivato solo dopo il vostro consenso nel banner (categoria «Analisi»).
            Fornitore: Google Ireland Ltd. I dati possono essere trasferiti negli USA.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.2 Google Ads</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizziamo il monitoraggio delle conversioni Google Ads (ID: AW-17901154625) per misurare l'efficacia delle
            nostre inserzioni pubblicitarie. Questo tracciamento viene attivato solo dopo il vostro consenso nel banner
            (categoria «Marketing»).
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.3 Meta Pixel (Facebook)</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizziamo il Meta Pixel (ID: 1848326999213371) per misurare l'efficacia delle inserzioni su Facebook e
            Instagram. Il Meta Pixel viene attivato solo dopo il vostro consenso nel banner (categoria «Marketing»).
            Fornitore: Meta Platforms Ireland Ltd. I dati possono essere trasferiti negli USA.
          </p>

          <h3 className="text-xl font-sans font-semibold tracking-normal text-gray-900 mt-6 mb-3">4.4 Microsoft Clarity</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizziamo Microsoft Clarity (ID progetto: u1ur4kb2kq) per l'analisi del comportamento degli utenti
            (mappe di calore, registrazioni di sessioni). Clarity viene attivato solo dopo il vostro consenso nel banner
            (categoria «Analisi»). Fornitore: Microsoft Corporation. Ulteriori informazioni:{' '}
            <a href="https://privacy.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              privacy.microsoft.com
            </a>
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">5. Trasmissione dei dati</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nell'ambito del nostro servizio di intermediazione, trasmettiamo i vostri dati di contatto a un massimo
            di 3 installatori solari certificati nella vostra regione, affinché possano prepararvi offerte personalizzate.
            La trasmissione avviene esclusivamente sulla base della vostra richiesta.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">6. Durata della conservazione</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Conserviamo i vostri dati personali solo per il tempo necessario al raggiungimento dello scopo specifico
            o per il tempo previsto dagli obblighi legali di conservazione.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">7. I vostri diritti</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Disponete dei seguenti diritti in merito ai vostri dati personali:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Diritto di accesso (art. 25 nLPD)</li>
            <li>Diritto di rettifica (art. 32 nLPD)</li>
            <li>Diritto alla cancellazione</li>
            <li>Diritto alla portabilità dei dati (art. 28 nLPD)</li>
            <li>Diritto di opposizione al trattamento dei dati</li>
            <li>Diritto di revoca del consenso</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Per esercitare i vostri diritti, contattateci: anfrage@pvpro.ch
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Avete inoltre il diritto di presentare un reclamo all'Incaricato federale della protezione dei dati e
            della trasparenza (IFPDT).
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">8. Cifratura SSL</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Questo sito web utilizza la cifratura SSL/TLS per motivi di sicurezza e per proteggere la trasmissione
            di contenuti riservati.
          </p>

          <h2 className="text-2xl font-sans font-semibold tracking-normal text-gray-900 mt-8 mb-4">9. Modifiche</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ci riserviamo il diritto di adeguare in qualsiasi momento la presente informativa sulla privacy affinché
            risponda sempre alle attuali disposizioni di legge.
          </p>
        </div>
      </div>
    </section>
  );
}
