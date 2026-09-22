import type { CantonGuide } from '../types';

const sources = [
  { id: 'sz-energy-ordinance', authority: 'Cantone di Svitto', title: 'Ordinanza cantonale sull’energia, § 24d', url: 'https://www.sz.ch/public/upload/assets/32457/420_111.pdf?fp=24#page=9' },
  { id: 'sz-own-electricity', authority: 'Cantone di Svitto', title: 'Obbligo di produrre energia elettrica in proprio e catasto solare cantonale', url: 'https://www.sz.ch/umweltdepartement/amt-fuer-umwelt-und-energie/energie-und-klima/energieversorgung/solarenergie.html/8756-8758-8802-9447-9453-10708-11115-11093' },
  { id: 'sz-solar-guide-2026', authority: 'Cantone di Svitto', title: 'Guida alla progettazione di impianti solari sugli edifici: eBau SZ e termine di notifica', url: 'https://www.sz.ch/public/upload/assets/75112/Planungshilfe_fuer_Solaranlagen_am_Gebaeude.pdf' },
  { id: 'sz-energy-funding-2026', authority: 'Cantone di Svitto', title: 'Programma d’incentivazione energetica 2026', url: 'https://www.sz.ch/verwaltung/umweltdepartement/amt-fuer-umwelt-und-energie/energie-und-klima/foerderprogramme.html/8756-8758-8802-9447-9453-10708-11116' },
  { id: 'sz-agricultural-battery', authority: 'Cantone di Svitto, Ufficio dell’agricoltura', title: 'Aiuti agli investimenti: accumulatori per immagazzinare energia sostenibile', url: 'https://www.sz.ch/volkswirtschaftsdepartement/amt-fuer-landwirtschaft/bauliche-massnahmen/oekonomiegebaeude/beitragsgesuch-batteriespeicher-zur-speicherung-nachhaltiger-energie.html/8756-8758-8802-10373-11060-11206-11186-13336' },
  { id: 'pronovo-eiv-2026', authority: 'Pronovo', title: 'Rimunerazione unica per impianti fotovoltaici', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
  { id: 'pronovo-tariff-calculator', authority: 'Pronovo', title: 'Calcolatore delle tariffe per il fotovoltaico', url: 'https://pronovo.ch/de/services/tarifrechner' },
] as const;

export const guide: CantonGuide = {
  id: 'schwyz',
  path: '/it/fotovoltaico-svitto',
  canton: 'Svitto',
  title: 'Fotovoltaico a Svitto | PvPro.ch',
  description: 'Confrontate fino a tre offerte gratuite di installatori fotovoltaici verificati per il vostro impianto nel Cantone di Svitto.',
  h1: 'Fotovoltaico nel Cantone di Svitto: obbligo di autoproduzione, catasto solare e incentivi 2026',
  intro: [
    'Dal 1° maggio 2022, nel Cantone di Svitto i nuovi edifici e le costruzioni sostitutive sono in linea di principio soggetti all’obbligo di produrre energia elettrica in proprio. Per sapere se si applica al vostro edificio occorre però consultare il catasto solare cantonale e verificare le eccezioni previste.',
    'Se l’obbligo si applica, bisogna prevedere 10 W di potenza per m² di superficie di riferimento energetico, fino a un massimo obbligatorio di 30 kW. Non è possibile versare una tassa sostitutiva.',
  ],
  quickFacts: [
    { value: '10 W/m² SRE', label: 'Requisito quando si applica l’obbligo di autoproduzione', sourceIds: ['sz-energy-ordinance'] },
    { value: '30 kW', label: 'Limite massimo della potenza richiesta', sourceIds: ['sz-energy-ordinance'] },
    { value: '1’120 kWh/m²/anno', label: 'Soglia d’irraggiamento secondo il catasto solare', sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'] },
    { value: '20 giorni', label: 'Notifica prima dell’inizio dei lavori, se si applica la procedura di notifica', sourceIds: ['sz-solar-guide-2026'] },
  ],
  ctaAfterSection: 'pflicht-check',
  sections: [
    {
      id: 'pflicht-check',
      title: 'L’obbligo di autoproduzione si applica al mio edificio?',
      paragraphs: ['Verificate dapprima il tipo di progetto edilizio e poi l’ubicazione nel catasto solare cantonale. Solo dopo aver chiarito questa classificazione e le eccezioni è possibile calcolare la potenza necessaria.'],
      sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'],
      module: {
        kind: 'solar-cadastre-check',
        title: 'L’obbligo di autoproduzione si applica al mio edificio?',
        intro: 'Seguite nell’ordine i cinque passaggi. Un’eccezione conclude la verifica dell’obbligo per il progetto in questione.',
        items: [
          { title: '1. Classificare il nuovo edificio o la costruzione sostitutiva', value: 'Dal 1.5.2022', text: 'L’obbligo riguarda in linea di principio i nuovi edifici e le costruzioni sostitutive. Per gli ampliamenti valgono soglie di eccezione specifiche, verificate al passaggio 4.', sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'] },
          { title: '2. Verificare catasto solare e irraggiamento globale', value: '≥ 1’120 kWh/m²/anno', text: 'Il catasto solare cantonale è il riferimento determinante. Se l’edificio si trova in un’area con meno di 1’120 kWh di irraggiamento globale per m² all’anno, si applica l’eccezione.', detail: 'Il valore indica l’irraggiamento annuo per unità di superficie, non la potenza dell’impianto.', sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'] },
          { title: '3. Chiarire lo standard Minergie', value: 'Minergie = eccezione', text: 'Se il nuovo edificio raggiunge lo standard Minergie, è esonerato dal requisito previsto dal § 24d kEnV.', sourceIds: ['sz-energy-ordinance'] },
          { title: '4. Verificare l’ampliamento rispetto a entrambe le regole', value: '< 50 m² oppure ≤ 20% e ≤ 1’000 m²', text: 'Un ampliamento è esonerato se la nuova superficie di riferimento energetico è inferiore a 50 m². È esonerato anche se non supera il 20% della superficie esistente e, contemporaneamente, non supera 1’000 m².', detail: 'Nella seconda variante devono essere rispettati insieme sia il limite del 20% sia quello di 1’000 m².', sourceIds: ['sz-energy-ordinance'] },
          { title: '5. Calcolare la potenza obbligatoria', value: '10 W/m² SRE · obbligo massimo 30 kW', text: 'Moltiplicate la superficie di riferimento energetico per 10 W/m². La SRE è la superficie riscaldata dell’edificio rilevante ai fini energetici; per ogni edificio possono essere richiesti al massimo 30 kW.', detail: 'I 30 kW limitano soltanto la potenza obbligatoria richiesta. È sempre possibile installare volontariamente un impianto fotovoltaico più grande.', sourceIds: ['sz-energy-ordinance'] },
        ],
      },
    },
    {
      id: 'erfuellung',
      title: 'Adempiere all’obbligo: impianto proprio o RCP',
      paragraphs: [
        'Se il vostro edificio è soggetto all’obbligo, occorre realizzare una soluzione conforme di autoproduzione; a Svitto non è prevista una tassa sostitutiva da versare al posto della soluzione prescritta.',
        'Per un complesso edilizio nel suo insieme, il requisito può essere adempiuto congiuntamente mediante un raggruppamento ai fini del consumo proprio, detto RCP. Un RCP organizza il consumo proprio collettivo, purché sia disponibile un impianto di produzione elettrica nuovo o ampliato. Un qualsiasi impianto esistente di un vicino non è quindi automaticamente sufficiente.',
      ],
      sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'],
      notice: { title: 'Nessuna tassa sostitutiva', text: 'Nel Cantone di Svitto l’obbligo di autoproduzione non può essere sostituito dal pagamento di una tassa.', status: 'important' },
    },
    {
      id: 'meldung',
      title: 'Notificare l’impianto solare tramite eBau SZ',
      paragraphs: [
        'Se l’impianto soddisfa i requisiti relativi all’ubicazione e all’integrazione, inoltrate la notifica edilizia tramite eBau SZ almeno 20 giorni prima dell’inizio dei lavori. La procedura di notifica sostituisce una normale domanda di costruzione.',
        'Il Comune in cui si trova l’impianto è il primo interlocutore. Entro i 20 giorni può comunicare che è comunque necessaria una procedura di autorizzazione semplificata o ordinaria; in assenza di tale comunicazione, i lavori possono iniziare una volta scaduto il termine di attesa.',
        'Preparate il piano di situazione, il piano per i pompieri o lo schema orientativo, la vista del tetto con le distanze, la sezione del tetto con l’altezza della struttura, nonché le schede tecniche e le descrizioni dei prodotti. A seconda del progetto può aggiungersi una valutazione dell’abbagliamento; per determinati impianti in facciata oltre 11 m di altezza è inoltre necessario un piano antincendio per il fotovoltaico.',
      ],
      sourceIds: ['sz-solar-guide-2026'],
    },
    {
      id: 'foerderung',
      title: 'Gli incentivi per il fotovoltaico provengono di norma dalla Confederazione',
      paragraphs: [
        'Per un normale impianto fotovoltaico su un edificio residenziale non esiste un contributo cantonale generale. Gli incentivi federali sono gestiti da Pronovo; eventuali programmi comunali vanno verificati separatamente presso il Comune di ubicazione. Il solare termico, invece, può rientrare nel programma cantonale d’incentivazione.',
        'La rimunerazione unica, RU, viene calcolata individualmente. Pronovo distingue la RUP per impianti inferiori a 100 kW, la RUG da 100 kW e la RUE per impianti senza consumo proprio nelle categorie previste. Dal 1° aprile 2024 il contributo di base è di CHF 0; l’importo dipende dalla potenza, dal tipo d’impianto e dai bonus applicabili, non da una percentuale garantita.',
        'Il programma ormai esaurito dell’Ufficio dell’agricoltura per accumulatori legati all’energia sostenibile non è un contributo allo stoccaggio per una comune casa unifamiliare. Il Cantone non accetta attualmente nuove domande.',
      ],
      sourceIds: ['sz-energy-funding-2026', 'sz-agricultural-battery', 'pronovo-eiv-2026', 'pronovo-tariff-calculator'],
    },
    {
      id: 'ablauf',
      title: 'Come preparare concretamente il progetto',
      paragraphs: ['Prima di far dimensionare l’impianto, partite dal tipo di costruzione, dal catasto solare e dalla SRE. In questo modo l’offerta si basa sull’obbligo effettivamente applicabile e non su un’ipotesi generica.'],
      bullets: [
        'Classificare chiaramente il progetto come nuovo edificio, costruzione sostitutiva o ampliamento',
        'Verificare ubicazione e irraggiamento globale nel catasto solare cantonale',
        'Documentare la SRE, chiarire le eccezioni e calcolare la potenza obbligatoria',
        'Progettare l’impianto e concordare preventivamente la procedura con il Comune',
        'Inoltrare i documenti tramite eBau SZ almeno 20 giorni prima dell’inizio dei lavori',
        'Determinare separatamente il contributo Pronovo con il calcolatore ufficiale delle tariffe',
      ],
      sourceIds: ['sz-energy-ordinance', 'sz-own-electricity', 'sz-solar-guide-2026', 'pronovo-eiv-2026', 'pronovo-tariff-calculator'],
    },
    {
      id: 'kosten',
      title: 'Rendere confrontabili costi e progettazione',
      paragraphs: [
        'Confrontate offerte basate sulla stessa potenza obbligatoria, sulla stessa dimensione prevista dell’impianto e su prestazioni chiaramente delimitate. Sono particolarmente rilevanti la geometria del tetto, la sottostruttura, i ponteggi, i lavori elettrici, l’allacciamento alla rete, la documentazione e le opzioni di accumulo.',
        'Fate indicare separatamente l’importo Pronovo ipotizzato e considerate i contributi comunali soltanto dopo averne ottenuto conferma. Con PvPro.ch, i proprietari possono confrontare gratuitamente e senza impegno fino a tre offerte adatte, basate sullo stesso progetto.',
      ],
      sourceIds: ['sz-energy-ordinance', 'pronovo-eiv-2026', 'pronovo-tariff-calculator'],
    },
  ],
  faqs: [
    { question: 'Ogni nuovo edificio a Svitto deve avere un impianto fotovoltaico?', answer: 'No. Sono determinanti, tra l’altro, l’ubicazione nel catasto solare, l’irraggiamento globale e le eccezioni previste dal § 24d kEnV.', sourceIds: ['sz-energy-ordinance', 'sz-own-electricity'] },
    { question: 'Quanto deve essere grande l’impianto?', answer: 'Almeno 10 W per m² di SRE, con un massimo richiesto di 30 kW.', sourceIds: ['sz-energy-ordinance'] },
    { question: 'Posso pagare invece una tassa sostitutiva?', answer: 'No.', sourceIds: ['sz-own-electricity'] },
    { question: 'Con quanto anticipo devo notificare un impianto solare?', answer: 'Di regola almeno 20 giorni prima dell’inizio dei lavori, se si applica la procedura di notifica.', sourceIds: ['sz-solar-guide-2026'] },
    { question: 'Il Cantone di Svitto incentiva il fotovoltaico?', answer: 'I normali impianti fotovoltaici non ricevono incentivi cantonali diretti; è disponibile il sostegno federale tramite Pronovo.', sourceIds: ['sz-energy-funding-2026', 'pronovo-eiv-2026'] },
  ],
  sources: [...sources],
};