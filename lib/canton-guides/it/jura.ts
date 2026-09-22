import type { CantonGuide } from '../types';

const sources = [
  { id: 'ju-programme', authority: 'République et Canton du Jura', title: 'Programme Edifici – stato degli incentivi 2026', url: 'https://www.jura.ch/fr/Autorites/Administration/DEC/SDT/Energie/Subventions/Programme-Batiments/Programme-Batiments.html' },
  { id: 'ju-energy-law', authority: 'République et Canton du Jura', title: 'Ordinanza sull’energia, norma sull’elettricità autoprodotta', url: 'https://rsju.jura.ch/fr/viewdocument.html?download=1&id=38231&idn=20131' },
  { id: 'ju-solar-permit', authority: 'République et Canton du Jura', title: 'Pannelli solari – licenza edilizia', url: 'https://www.jura.ch/fr/Autorites/Administration/DEC/SDT/Permis-de-construire/Panneaux-solaires/Panneaux-solaires.html' },
  { id: 'ju-jurac', authority: 'République et Canton du Jura', title: 'JURAC – portale elettronico per le domande di costruzione', url: 'https://www.jura.ch/fr/Autorites/JURAC/Requerants-Auteurs-du-projet/JURAC-Requerants-auteurs-du-projet.html' },
  { id: 'ju-foerderportal', authority: 'Promozione energetica cantonale', title: 'Portale degli incentivi per i programmi cantonali', url: 'https://portal.energie-foerderung.ch' },
  { id: 'ju-pronovo', authority: 'Pronovo SA su mandato della Confederazione', title: 'Domande frequenti sulla rimunerazione unica (RU) e sugli incentivi solari in Svizzera', url: 'https://pronovo.ch/de/foerderung/photovoltaik/haeufige-fragen/' },
] as const;

export const guide: CantonGuide = {
  id: 'jura', path: '/it/fotovoltaico-giura', canton: 'Giura',
  title: 'Fotovoltaico nel Giura 2026: incentivi e regole | PvPro.ch',
  description: 'Fotovoltaico nel Giura: stato degli incentivi al settembre 2026, elettricità autoprodotta nei nuovi edifici, Pronovo, procedura di notifica e JURAC.',
  h1: 'Fotovoltaico nel Giura: incentivi e regole – stato settembre 2026',
  intro: [
    'Nel Giura fa stato la situazione al 15 settembre 2026. Il budget ordinario del Programma Edifici è in gran parte esaurito; la misura M-01 è in lista d’attesa.',
    'Verificate separatamente Pronovo e gli eventuali fondi residui del Programma d’impulso. Per i nuovi edifici sono prescritti 10 W/m² di AE per l’elettricità autoprodotta, fino a un massimo di 30 kW. A seconda dell’impianto può bastare una notifica; il Comune decide la procedura.',
  ],
  quickFacts: [
    { value: 'Verificare separatamente', label: 'Pronovo / Confederazione: incentivi fotovoltaici attuali', sourceIds: ['ju-pronovo'] },
    { value: 'Lista d’attesa', label: 'M-01 involucro dell’edificio', sourceIds: ['ju-programme'] },
    { value: 'Verificare i fondi residui', label: 'Programma d’impulso: stato attuale', sourceIds: ['ju-programme'] },
  ],
  sections: [
    { id: 'foerderung', title: 'Quali incentivi sono ancora disponibili?', paragraphs: [
      'Secondo lo stato cantonale al 15 settembre 2026, il budget ordinario 2026 del Programma Edifici è in gran parte esaurito. La misura M-01 è in lista d’attesa; Pronovo e il Programma d’impulso vanno verificati separatamente.',
      'Gli attuali incentivi federali per gli impianti fotovoltaici sono gestiti da Pronovo. La rimunerazione unica ordinaria (RU) si applica attualmente a partire da 2 kW. Gli ulteriori bonus federali, per esempio per l’inclinazione, le aree di parcheggio o l’elettricità invernale, hanno requisiti propri e non possono essere semplicemente sommati in un unico importo.',
      'Il Programma d’impulso e le misure per gli edifici finanziate esclusivamente dalla Confederazione vanno esaminati separatamente dal budget cantonale ordinario. M-01 riguarda l’involucro dell’edificio e non è un incentivo fotovoltaico generale. L’esaurimento del budget cantonale non significa quindi che siano esauriti anche tutti gli altri incentivi.',
    ], sourceIds: ['ju-programme', 'ju-pronovo'], module: { kind: 'funding-status', title: 'Semaforo degli incentivi del Giura', intro: 'Stato: 15 settembre 2026. Verificate nuovamente la situazione prima di conferire l’incarico e iniziare i lavori.', items: [
      { title: 'Pronovo / Confederazione', text: 'Verificare separatamente gli attuali incentivi federali per il fotovoltaico. La rimunerazione unica e gli eventuali bonus federali dipendono dai rispettivi requisiti.', detail: 'RU attualmente da 2 kW; i bonus facoltativi non si sommano automaticamente.', value: 'Verificare separatamente', sourceIds: ['ju-pronovo'] },
      { title: 'Programma d’impulso', text: 'Gli eventuali fondi residui del Programma d’impulso vanno valutati separatamente dal budget ordinario del Programma Edifici. Verificate l’importo attuale prima di conferire l’incarico.', value: 'Verificare i fondi residui', sourceIds: ['ju-programme'] },
      { title: 'M-01 involucro dell’edificio', text: 'M-01 riguarda l’involucro dell’edificio, non un incentivo fotovoltaico generale. Per questa misura esiste attualmente una lista d’attesa.', value: 'Lista d’attesa', sourceIds: ['ju-programme'] },
    ] } },
    { id: 'jahresbudget', title: 'Perché lo stato attuale conta più del budget annuale', paragraphs: [
      'Il programma complessivo è iniziato a inizio 2026 con CHF 3,893 milioni: circa CHF 1,18 milioni provenivano dal Cantone e CHF 2,713 milioni dalla Confederazione.',
      'Questa ripartizione descrive il budget a inizio anno. Non significa che a settembre sia ancora disponibile lo stesso importo. È quindi determinante l’informazione attuale sul singolo programma, non il prospetto pubblicato a inizio anno.',
    ], sourceIds: ['ju-programme'] },
    { id: 'neubau', title: 'Elettricità autoprodotta nei nuovi edifici', paragraphs: [
      'Per i nuovi edifici nel Giura vige l’obbligo di produrre elettricità propria nella misura di 10 W/m² di AE, fino a un massimo di 30 kW.',
      'AE significa area di riferimento energetico. È la superficie considerata per il calcolo energetico dell’edificio. La norma riguarda la produzione propria di elettricità e non costituisce automaticamente un obbligo fotovoltaico generale per ogni edificio esistente.',
      'Le unità sono facili da interpretare: W/m² indica la potenza richiesta per metro quadrato di AE, mentre kW indica la potenza complessiva dell’impianto. Il rispetto della prescrizione e la soluzione adatta vanno affrontati nelle prime fasi della progettazione del nuovo edificio.',
    ], sourceIds: ['ju-energy-law'] },
    { id: 'bewilligung', title: 'Notifica o domanda di costruzione?', paragraphs: [
      'No, una licenza edilizia non è sempre necessaria. Se rispettano le condizioni del diritto federale, alcuni impianti solari possono essere realizzati mediante notifica al Comune.',
      'La notifica è una comunicazione al Comune al posto di una domanda di costruzione completa. Il Comune decide se è necessaria una procedura ordinaria.',
      'Se occorre una domanda di costruzione, si utilizza JURAC. JURAC è il portale elettronico cantonale per le domande di costruzione.',
    ], sourceIds: ['ju-solar-permit', 'ju-jurac'] },
    { id: 'vor-bestellung', title: 'Cosa verificare prima di ordinare', paragraphs: [
      'Chiarite incentivi, procedura e competenza comunale prima dell’ordinazione. Le domande relative ai programmi per gli edifici interessati devono di norma essere presentate prima dell’inizio dei lavori incentivati.',
      'Eviterete così di conferire un incarico prima che siano definiti lo stato attuale degli incentivi o la procedura necessaria.',
      'Per le domande dei programmi cantonali per gli edifici utilizzate il portale portal.energie-foerderung.ch. Va distinto dal portale edilizio JURAC e dagli incentivi fotovoltaici federali gestiti da Pronovo.',
    ], bullets: [
      'Pronovo e la RU attuale per il vostro impianto', 'stato cantonale attuale dei programmi per gli edifici e del Programma d’impulso', 'Comune: procedura di notifica o domanda di costruzione ordinaria', 'procedura edilizia e JURAC, se è necessaria una domanda di costruzione', 'domanda di incentivo prima dell’inizio dei lavori incentivati',
    ], sourceIds: ['ju-programme', 'ju-solar-permit', 'ju-jurac', 'ju-pronovo', 'ju-foerderportal'] },
    { id: 'kosten', title: 'Quanto costa qui un impianto fotovoltaico?', paragraphs: [
      'Il Cantone non pubblica un prezzo fisso per gli impianti fotovoltaici. Sono determinanti il tetto, le dimensioni dell’impianto, i lavori elettrici e la dotazione.',
      'Il prezzo finale dipende dall’edificio concreto e dall’insieme delle prestazioni desiderate. Confrontate quindi più offerte per lo stesso progetto e verificate le condizioni degli incentivi separatamente dai costi d’investimento.',
    ], bullets: ['superficie e forma del tetto', 'dimensioni e potenza dell’impianto', 'ponteggi, accesso e oneri di cantiere', 'lavori elettrici, contatore e allacciamento alla rete', 'inverter', 'batteria di accumulo', 'autoconsumo e profilo di consumo', 'prestazioni e garanzie dell’installatore'], sourceIds: ['ju-programme', 'ju-pronovo'] },
  ],
  faqs: [
    { question: 'Nel Giura vige un obbligo di produrre elettricità propria per i nuovi edifici?', answer: 'Sì. I nuovi edifici devono produrre elettricità propria. Da questa norma non deriva un obbligo fotovoltaico generale per gli edifici esistenti.', sourceIds: ['ju-energy-law'] },
    { question: 'Quanta elettricità propria deve produrre un nuovo edificio?', answer: 'La potenza minima è di 10 W/m² di AE. In base a questa norma non possono essere richiesti più di 30 kW.', sourceIds: ['ju-energy-law'] },
    { question: 'Il budget degli incentivi 2026 è ancora disponibile?', answer: 'Secondo lo stato cantonale al 15 settembre 2026, il budget ordinario del Programma Edifici è in gran parte esaurito. I CHF 3,893 milioni di inizio anno non dimostrano quindi che oggi vi siano ancora fondi disponibili.', sourceIds: ['ju-programme'] },
    { question: 'Cosa significa la lista d’attesa per M-01?', answer: 'M-01 è attualmente in lista d’attesa. La misura riguarda gli incentivi per l’involucro dell’edificio e non è un incentivo fotovoltaico generale.', sourceIds: ['ju-programme'] },
    { question: 'Devo presentare la domanda prima dell’inizio dei lavori?', answer: 'Sì, le domande pertinenti per i programmi edilizi devono di norma essere presentate prima dell’inizio dei lavori incentivati. Verificate lo stato attuale e le condizioni prima di conferire l’incarico.', sourceIds: ['ju-programme'] },
    { question: 'Per il fotovoltaico serve sempre una licenza edilizia?', answer: 'No. Se sono soddisfatti i requisiti vigenti, può bastare una notifica al Comune. Il Comune verifica se è necessaria una procedura edilizia ordinaria.', sourceIds: ['ju-solar-permit'] },
    { question: 'Chi decide la procedura?', answer: 'Il Comune decide se basta una notifica o se è necessaria una procedura ordinaria. Chiarite la questione con il Comune competente prima dell’inizio dei lavori.', sourceIds: ['ju-solar-permit'] },
    { question: 'Cos’è JURAC?', answer: 'JURAC è il portale elettronico per le domande di costruzione cantonali. Se il vostro progetto solare richiede una domanda di costruzione, questa viene presentata tramite JURAC.', sourceIds: ['ju-jurac'] },
    { question: 'Cos’è Pronovo e da quale potenza si applica la rimunerazione unica?', answer: 'Pronovo gestisce gli attuali incentivi federali per gli impianti fotovoltaici. La rimunerazione unica ordinaria si applica attualmente a partire da una potenza minima di 2 kW.', sourceIds: ['ju-pronovo'] },
    { question: 'Posso semplicemente sommare contributi cantonali e bonus federali?', answer: 'No. Gli incentivi Pronovo, i programmi cantonali e i bonus federali facoltativi vanno verificati ciascuno secondo i propri requisiti. Non è garantito un importo complessivo forfettario.', sourceIds: ['ju-programme', 'ju-pronovo'] },
    { question: 'Cosa significa AE?', answer: 'AE significa area di riferimento energetico. È la superficie determinante per il calcolo energetico dell’edificio.', sourceIds: ['ju-energy-law'] },
  ], sources: [...sources],
};
