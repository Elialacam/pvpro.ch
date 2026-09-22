import type { CantonGuide } from '../types';

const sources = [
  { id: 'vs-energiegesetz', authority: 'Cantone del Vallese', title: 'Legge sull’energia dell’8 settembre 2023', url: 'https://lex.vs.ch/app/de/texts_of_law/730.1' },
  { id: 'vs-energieverordnung', authority: 'Cantone del Vallese', title: 'Ordinanza sull’energia', url: 'https://lex.vs.ch/app/de/texts_of_law/730.100' },
  { id: 'vs-solar', authority: 'Cantone del Vallese, Servizio dell’energia e delle forze idriche', title: 'Energia solare: obblighi, procedure e incentivi', url: 'https://www.vs.ch/de/web/energie/solarenergie' },
  { id: 'vs-bauverfahren', authority: 'Cantone del Vallese', title: 'Impianti solari esenti da autorizzazione e procedura di notifica', url: 'https://www.vs.ch/web/energie/mettre-en-place-une-installation-solaire' },
  { id: 'vs-steuern-pv', authority: 'Cantone del Vallese', title: 'Trattamento fiscale degli impianti fotovoltaici', url: 'https://www.vs.ch/web/energie/programmes-de-promotion/aides-financieres' },
  { id: 'pronovo-pv', authority: 'Pronovo SA su mandato della Confederazione', title: 'Rimunerazione unica per impianti fotovoltaici', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'wallis', path: '/it/fotovoltaico-vallese', canton: 'Vallese',
  title: 'Fotovoltaico nel Vallese | PvPro.ch',
  description: 'Confrontate offerte fotovoltaiche nel Vallese e verificate gli obblighi per nuovi edifici, tetti risanati e grandi coperture.',
  h1: 'Fotovoltaico nel Vallese: obbligo per nuovi edifici e risanamenti del tetto nel 2026',
  intro: [
    'La legislazione vallesana sull’energia è in vigore dal 1° gennaio 2025. Non impone l’autoproduzione elettrica soltanto ai nuovi edifici e a determinati ampliamenti: anche la rimozione della copertura di un edificio esistente può far scattare un obbligo solare.',
    'Per i grandi tetti di oltre 500 m² si applica inoltre un obbligo di equipaggiamento a lungo termine. Occorre quindi esaminare separatamente il tipo di progetto, la superficie di riferimento energetico, la superficie del tetto interessata e le eventuali eccezioni.',
  ],
  quickFacts: [
    { value: '20 W/m² SRE', label: 'potenza minima per i nuovi edifici, gli ampliamenti e i risanamenti del tetto interessati', sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'] },
    { value: 'max. 30 kW', label: 'limite massimo della potenza richiesta in questi casi', sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'] },
    { value: '>500 m²', label: 'superficie del tetto soggetta all’obbligo di equipaggiamento a lungo termine', sourceIds: ['vs-energiegesetz'] },
    { value: '30 giorni', label: 'notifica preventiva per i progetti esenti da autorizzazione', sourceIds: ['vs-bauverfahren'] },
  ],
  ctaAfterSection: 'dachsanierung',
  sections: [
    {
      id: 'dachsanierung', title: 'Verifica del risanamento del tetto in Vallese',
      paragraphs: [
        'Quando la copertura viene rimossa, un edificio esistente deve in linea di principio produrre autonomamente una parte dell’elettricità o del calore che consuma. Per il fotovoltaico, l’ordinanza precisa una potenza minima di 20 W/m² di superficie di riferimento energetico, fino a un massimo di 30 kW.',
        'La superficie dell’impianto richiesta non può occupare più dell’80% delle superfici del tetto la cui copertura viene rimossa. Piccole riparazioni senza rimozione della copertura vanno quindi valutate diversamente da un vero rifacimento.',
      ],
      sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'],
      module: {
        kind: 'valais-roof-check', title: 'Il vostro tetto viene aperto?', intro: 'Seguite i passaggi in questo ordine.',
        items: [
          { title: '1. Determinare la portata', value: 'Copertura rimossa?', text: 'Per una semplice piccola riparazione, chiarire separatamente la portata concreta; se la copertura viene rimossa, verificare l’obbligo.', sourceIds: ['vs-energiegesetz'] },
          { title: '2. Verificare le eccezioni', value: 'Quattro eccezioni', text: 'Sono possibili: classe globale CECE C dopo il risanamento, risanamento energetico simultaneo di tutte le facciate, intervento sulla sola falda nord oppure utilizzo esclusivamente estivo.', sourceIds: ['vs-energiegesetz'] },
          { title: '3. Calcolare la potenza', value: '20 W/m² SRE', text: 'In assenza di eccezioni vanno previsti almeno 20 W per m² di superficie di riferimento energetico, ma non più di 30 kW.', sourceIds: ['vs-energieverordnung'] },
          { title: '4. Limitare la superficie del tetto', value: 'max. 80%', text: 'La superficie fotovoltaica necessaria non deve occupare più dell’80% della superficie del tetto nuovamente coperta.', sourceIds: ['vs-energieverordnung'] },
        ],
      },
    },
    {
      id: 'neubau', title: 'Nuovi edifici e ampliamenti: 20 W/m², massimo 30 kW',
      paragraphs: [
        'I nuovi edifici e gli ampliamenti interessati devono raggiungere almeno 20 W di potenza rinnovabile autoprodotta per m² di superficie di riferimento energetico, abbreviata SRE. Da questo obbligo non sono mai richiesti più di 30 kW.',
        'Un ampliamento è esente se la nuova SRE è inferiore a 50 m². È esente anche se rappresenta meno del 20% della SRE esistente e misura al contempo non più di 1’000 m². Per gli edifici Minergie già dotati di fotovoltaico è prevista una specifica eccezione legale.',
        'Alle condizioni di legge, la produzione corrispondente può essere garantita anche mediante una partecipazione finanziaria a un impianto rinnovabile nel Vallese o in un cantone confinante, oppure tramite un raggruppamento ai fini del consumo proprio.',
      ],
      sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'],
    },
    {
      id: 'grossdaecher', title: 'Tetti di oltre 500 m²: una specifica regola dei 25 anni',
      paragraphs: [
        'Gli edifici con una superficie del tetto superiore a 500 m² devono essere equipaggiati per produrre elettricità entro 25 anni dall’entrata in vigore della legge. Sono interessate le superfici con un’irradiazione media annua superiore a 1’200 kWh/m².',
        'La potenza richiesta è limitata dalla potenza elettrica di allacciamento esistente. Il requisito è soddisfatto installando il fotovoltaico su almeno il 40% della superficie del tetto oppure raggiungendo almeno 20 W/m² di superficie di riferimento energetico.',
      ],
      sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'],
      module: {
        kind: 'valais-large-roofs', title: 'Percorso di verifica per un grande tetto', intro: 'Questo obbligo va distinto dalla regola per il risanamento del tetto.',
        items: [
          { title: '1. Superficie del tetto', value: '>500 m²', text: 'Solo i tetti oltre questa soglia rientrano nella regola a lungo termine.', sourceIds: ['vs-energiegesetz'] },
          { title: '2. Potenziale solare', value: '>1’200 kWh/m²/anno', text: 'Sono rilevanti le superfici del tetto che superano l’irradiazione media annua stabilita.', sourceIds: ['vs-energiegesetz'] },
          { title: '3. Termine', value: '25 anni', text: 'L’equipaggiamento deve avvenire entro 25 anni dall’entrata in vigore del 1° gennaio 2025.', sourceIds: ['vs-energiegesetz'] },
          { title: '4. Adempimento', value: '40% del tetto o 20 W/m² SRE', text: 'Una delle due varianti soddisfa il requisito di superficie o potenza; la potenza di allacciamento resta il limite massimo.', sourceIds: ['vs-energieverordnung'] },
        ],
      },
    },
    {
      id: 'verfahren', title: 'Gestire separatamente notifica e incentivi',
      paragraphs: [
        'Se un impianto solare è esente dalla normale procedura di licenza edilizia, deve essere notificato all’autorità competente 30 giorni prima dell’inizio dei lavori. Gli impianti su monumenti culturali o siti naturali d’importanza cantonale o nazionale restano soggetti ad autorizzazione.',
        'Per il fotovoltaico ordinario, il Cantone rimanda a Pronovo. Il Programma Edifici del Vallese sostiene altre misure di risanamento e riscaldamento e non costituisce un contributo cantonale forfettario per il fotovoltaico. Gli aiuti comunali vanno verificati separatamente; non è confermato un bonus cantonale generale per normali batterie domestiche.',
        'Per gli edifici esistenti, i costi d’investimento computabili possono essere dedotti dal reddito imponibile secondo le direttive fiscali cantonali. Per proventi fino a 10’000 kWh, il Cantone prevede un trattamento fiscale particolare. Consultate la direttiva vigente tramite il link ufficiale sull’energia solare; non se ne può desumere un risparmio fiscale garantito.',
      ],
      sourceIds: ['vs-bauverfahren', 'vs-solar', 'vs-steuern-pv', 'pronovo-pv'],
    },
  ],
  faqs: [
    { question: 'Ogni piccola riparazione del tetto in Vallese fa scattare un obbligo solare?', answer: 'No. È determinante in particolare sapere se la copertura viene rimossa.', sourceIds: ['vs-energiegesetz'] },
    { question: 'Qual è il requisito per un risanamento del tetto interessato?', answer: 'Almeno 20 W/m² SRE, fino a un massimo di 30 kW; la superficie fotovoltaica è limitata all’80% della superficie nuovamente coperta.', sourceIds: ['vs-energieverordnung'] },
    { question: 'Quale eccezione può applicarsi dopo un risanamento del tetto?', answer: 'Tra le possibilità figurano una classe globale CECE C, il risanamento energetico simultaneo di tutte le facciate, l’intervento sulla sola falda nord o l’utilizzo esclusivamente estivo.', sourceIds: ['vs-energiegesetz'] },
    { question: 'Cosa vale per i tetti di oltre 500 m²?', answer: 'Con irradiazione sufficiente si applica una regola dei 25 anni; occorre coprire il 40% del tetto o raggiungere 20 W/m² SRE.', sourceIds: ['vs-energiegesetz', 'vs-energieverordnung'] },
    { question: 'Dove si richiedono gli incentivi per un normale impianto fotovoltaico vallesano?', answer: 'Gli incentivi ordinari per il fotovoltaico si richiedono a Pronovo; eventuali contributi comunali vanno verificati separatamente.', sourceIds: ['vs-solar', 'pronovo-pv'] },
  ],
  sources: [...sources],
};