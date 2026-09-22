import type { CantonGuide } from '../types';

const sources = [
  { id: 'ur-neues-energierecht', authority: 'Cantone di Uri', title: 'Nuova legislazione energetica dal 1° ottobre 2026', url: 'https://www.ur.ch/energie/1534' },
  { id: 'ur-rechtsbuch', authority: 'Cantone di Uri', title: 'Raccolta sistematica urana: legislazione energetica', url: 'https://www.ur.ch/_doc/449221' },
  { id: 'ur-solarmeldung', authority: 'Cantone di Uri', title: 'Notifica di un impianto solare', url: 'https://www.ur.ch/dienstleistungen/4641' },
  { id: 'ur-foerderprogramm-2026', authority: 'Cantone di Uri', title: 'Programma d’incentivazione Energia Uri 2026', url: 'https://www.ur.ch/mmdirektionen/132233' },
  { id: 'pronovo-pv', authority: 'Pronovo SA su incarico della Confederazione', title: 'Rimunerazione unica per impianti fotovoltaici', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'uri', path: '/it/fotovoltaico-uri', canton: 'Uri',
  title: 'Fotovoltaico a Uri | PvPro.ch',
  description: 'Confrontate fino a tre offerte gratuite di installatori solari verificati per il vostro impianto fotovoltaico a Uri.',
  h1: 'Fotovoltaico nel Cantone di Uri: nuove norme solari dal 1° ottobre 2026',
  intro: [
    'Nel 2026 Uri attraversa un cambiamento legislativo. La norma transitoria cantonale a tempo determinato è scaduta il 31 dicembre 2025; dal 1° ottobre 2026 si applicano nuove prescrizioni urane per grandi nuove costruzioni, ampliamenti e risanamenti incisivi del tetto.',
    'Per un progetto concreto occorre quindi esaminare insieme il tipo di progetto, la superficie computabile dell’edificio e il momento determinante. I precedenti CHF 2’500 per ogni kW mancante non costituiscono una tassa sostitutiva confermata dal nuovo diritto.',
  ],
  quickFacts: [
    { value: '01.10.2026', label: 'Entrata in vigore del nuovo diritto energetico urano', sourceIds: ['ur-neues-energierecht'] },
    { value: '40 W/m²', label: 'Potenza solare per nuove costruzioni da 300 m²', sourceIds: ['ur-rechtsbuch'] },
    { value: '20 W/m²', label: 'Prescrizione per ampliamenti e risanamenti del tetto interessati', sourceIds: ['ur-rechtsbuch'] },
    { value: 'CHF 1’000 + 250/kWp', label: 'Incentivo per fotovoltaico invernale ammissibile', sourceIds: ['ur-foerderprogramm-2026'] },
  ],
  ctaAfterSection: 'rechtswechsel',
  sections: [
    {
      id: 'rechtswechsel', title: 'Quali norme valgono e quando nel 2026?',
      paragraphs: [
        'La norma transitoria cantonale, limitata alla fine del 2025, con 20 W/m² e una tassa sostitutiva di CHF 2’500 per ogni kW mancante non può essere prorogata al 2026. Nel 2026, fino all’entrata in vigore del nuovo diritto urano, va considerato anche il quadro federale in vigore dal 1° gennaio 2025 per le nuove costruzioni con più di 300 m².',
        'Dal 1° ottobre 2026 il nuovo diritto cantonale richiede, secondo il progetto, 40 o 20 W/m² di superficie computabile dell’edificio. Gli impianti già presenti sono conteggiati, purché la loro potenza non sia già utilizzata per adempiere un altro obbligo legale.',
      ],
      sourceIds: ['ur-neues-energierecht', 'ur-rechtsbuch'],
      module: {
        kind: 'uri-transition', title: 'Cronologia e decisione sul progetto', intro: 'Leggete prima le tre fasi temporali e classificate poi il vostro progetto edilizio.',
        items: [
          { title: 'Fino al 31 dicembre 2025', value: 'Vecchia norma terminata', text: 'La norma transitoria a tempo determinato, compresa la tassa sostitutiva allora prevista, è scaduta.', sourceIds: ['ur-rechtsbuch'] },
          { title: 'Dal 1° gennaio al 30 settembre 2026', value: 'Considerare il diritto federale', text: 'Per i nuovi edifici di oltre 300 m² va verificato il quadro solare federale; la nuova norma urana non è ancora applicabile.', sourceIds: ['ur-neues-energierecht'] },
          { title: 'Dal 1° ottobre 2026', value: 'Nuovo diritto urano', text: 'La legislazione energetica approvata dal popolo urano l’8 marzo 2026 entra in vigore.', sourceIds: ['ur-neues-energierecht'] },
          { title: 'Nuova costruzione', value: '≥300 m²: 40 W/m²', text: 'Da 300 m² di superficie computabile dell’edificio sono previsti 40 W di potenza solare per m².', sourceIds: ['ur-rechtsbuch'] },
          { title: 'Ampliamento', value: '>300 m²: 20 W/m²', text: 'Se dopo l’ampliamento la superficie computabile complessiva dell’edificio supera 300 m², si applicano 20 W/m² all’intera superficie.', sourceIds: ['ur-rechtsbuch'] },
          { title: 'Risanamento incisivo del tetto', value: '≥300 m²: 20 W/m²', text: 'Se il tetto viene risanato dall’esterno e ciò fa scattare prescrizioni di protezione termica, per gli edifici da 300 m² si applicano complessivamente 20 W/m².', sourceIds: ['ur-rechtsbuch'] },
        ],
      },
      notice: { title: 'Non presumere una nuova tassa sostitutiva', text: 'La precedente tassa di CHF 2’500/kW apparteneva alla norma scaduta alla fine del 2025. Per il nuovo obbligo dal 1° ottobre 2026 non è confermata una tassa analoga.', status: 'important' },
    },
    {
      id: 'erfuellung', title: 'Limite di potenza e adempimento alternativo',
      paragraphs: [
        'La potenza solare richiesta è limitata dalla potenza elettrica di allacciamento esistente dell’edificio. Fate documentare nella verifica energetica la potenza di allacciamento, la superficie computabile dell’edificio e la potenza solare già presente e non ancora conteggiata altrove.',
        'L’obbligo può essere adempiuto con una certificazione Minergie. Alle condizioni previste è possibile anche migliorare ulteriormente l’involucro dell’edificio: il valore limite del fabbisogno di calore per riscaldamento QH,li deve essere migliorato di 5 kWh per m² all’anno rispetto al requisito ordinario.',
      ], sourceIds: ['ur-rechtsbuch'],
    },
    {
      id: 'foerderung', title: 'Fotovoltaico invernale e facciata solare integrata',
      paragraphs: [
        'Il programma urano 2026 sostiene il fotovoltaico invernale su edifici esistenti da 2 kWp, con inclinazione dei moduli da 60 a 90 gradi. Sono previsti CHF 1’000 di contributo di base più CHF 250 per kWp, fino a CHF 50’000 per impianto. Sono escluse le nuove costruzioni e la semplice sostituzione di un impianto esistente.',
        'Per questa misura dedicata all’elettricità invernale sono disponibili CHF 100’000. L’intero programma energetico comprende circa CHF 2,1 milioni per varie misure, non soltanto per il fotovoltaico. Dopo l’inoltro completo della domanda, prima della decisione definitiva si può eventualmente iniziare a proprio rischio.',
        'Per il risanamento dell’involucro con facciata fotovoltaica integrata e inclinazione da 60 a 90 gradi sono previsti CHF 400/m² di superficie risanata. L’incentivo per l’elettricità invernale e questo contributo per facciate non sono cumulabili. La domanda completa deve essere presentata prima dell’inizio dell’installazione; da CHF 10’000 di contributo, il programma edifici richiede un CECE Plus.',
        'Per un intervento sull’involucro dell’edificio, l’incentivo deve raggiungere almeno CHF 3’000. CECE Plus indica il Certificato Energetico Cantonale degli Edifici con rapporto di consulenza.',
        'L’incentivazione delle stazioni di ricarica bidirezionali non è un bonus generale per batterie domestiche stazionarie. Un normale impianto fotovoltaico può essere esaminato separatamente per gli incentivi federali di Pronovo.',
      ], sourceIds: ['ur-foerderprogramm-2026', 'pronovo-pv'],
    },
    {
      id: 'verfahren', title: 'Classificare l’impianto solare presso il Comune prima dei lavori',
      paragraphs: [
        'Presentate il modulo cantonale «Notifica di un impianto solare» all’autorità edilizia comunale competente. In base al tipo e all’ubicazione dell’impianto si chiarisce se basta la notifica o se occorre una domanda di costruzione.',
        'Per questo modulo urano non è confermato in modo attendibile un termine cantonale uniforme di 20 o 30 giorni. Concordate quindi direttamente con il Comune le date d’inoltro e d’inizio lavori e non iniziate basandovi su un termine ripreso da un altro cantone.',
      ], sourceIds: ['ur-solarmeldung'],
    },
  ],
  faqs: [
    { question: 'Nel 2026 a Uri valgono ancora CHF 2’500 di tassa sostitutiva per ogni kW mancante?', answer: 'No. Questa tassa apparteneva alla norma a tempo determinato scaduta il 31 dicembre 2025.', sourceIds: ['ur-rechtsbuch'] },
    { question: 'Quale prescrizione vale dal 1° ottobre 2026 per una grande nuova costruzione?', answer: 'Da 300 m² di superficie computabile dell’edificio sono previsti 40 W/m².', sourceIds: ['ur-rechtsbuch'] },
    { question: 'Si può conteggiare un impianto fotovoltaico esistente?', answer: 'Sì, purché la sua potenza non adempia già un altro obbligo legale.', sourceIds: ['ur-rechtsbuch'] },
    { question: 'Come viene incentivato il fotovoltaico invernale nel 2026?', answer: 'Sugli edifici esistenti, da almeno 2 kWp e con inclinazione da 60 a 90 gradi, con CHF 1’000 più CHF 250/kWp, fino a CHF 50’000.', sourceIds: ['ur-foerderprogramm-2026'] },
    { question: 'Per la notifica solare urana vale un termine fisso di 20 o 30 giorni?', answer: 'Un simile termine cantonale uniforme non è confermato; la data va chiarita con l’autorità edilizia comunale.', sourceIds: ['ur-solarmeldung'] },
  ],
  sources: [...sources],
};