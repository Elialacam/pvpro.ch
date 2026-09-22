import type { CantonGuide } from '../types';

const sources = [
  { id: 'zg-energieverordnung', authority: 'Cantone di Zugo', title: 'Ordinanza sulla legge sull’energia: autoproduzione elettrica', url: 'https://bgs.zg.ch/app/de/texts_of_law/740.11' },
  { id: 'zg-vollzug', authority: 'Cantone di Zugo', title: 'Autoproduzione elettrica per nuovi edifici e ampliamenti', url: 'https://zg.ch/de/planen-bauen/bauvorschriften/gebaeude-und-energie/energievorschriften-vollzug' },
  { id: 'zg-pbg', authority: 'Cantone di Zugo', title: 'Legge sulla pianificazione e l’edilizia § 44a: notifica edilizia per impianti solari', url: 'https://bgs.zg.ch/app/de/texts_of_law/721.11' },
  { id: 'zg-foerderprogramm-2026', authority: 'Cantone di Zugo', title: 'Programma d’incentivazione Energia 2026', url: 'https://cdn.zg.ch/dam/jcr:de631126-335b-431a-9153-7013803a29bc/20260428_F%C3%B6rderprogramm%20Energie%202026_KtZG_F%C3%B6rderbedingungen_1.2.pdf' },
  { id: 'pronovo-pv', authority: 'Pronovo SA su mandato della Confederazione', title: 'Rimunerazione unica per impianti fotovoltaici', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'zug', path: '/it/fotovoltaico-zugo', canton: 'Zugo',
  title: 'Fotovoltaico nel Canton Zugo | PvPro.ch',
  description: 'Confrontate offerte fotovoltaiche nel Canton Zugo e chiarite obbligo di autoproduzione, tassa sostitutiva e incentivi 2026.',
  h1: 'Fotovoltaico nel Canton Zugo: obbligo di autoproduzione, tassa sostitutiva e incentivi 2026',
  intro: [
    'Per i nuovi edifici e gli ampliamenti o le sopraelevazioni non trascurabili, Zugo richiede 10 W di potenza elettrica autoprodotta per m² di superficie di riferimento energetico. Formula: superficie di riferimento energetico × 10 W/m² = potenza richiesta; da questo obbligo non vengono mai richiesti 30 kW o più.',
    'Chi non può o non vuole realizzare l’impianto richiesto versa al Comune CHF 1’000 per ogni kW mancante. In alternativa, alle condizioni di legge l’obbligo può essere adempiuto collettivamente tramite un raggruppamento ai fini del consumo proprio.',
  ],
  quickFacts: [
    { value: '10 W/m² SRE', label: 'requisito di autoproduzione elettrica per i progetti edilizi interessati', sourceIds: ['zg-energieverordnung'] },
    { value: '<30 kW', label: 'l’obbligo non richiede mai 30 kW o più', sourceIds: ['zg-energieverordnung'] },
    { value: 'CHF 1’000/kW', label: 'tassa sostitutiva per la potenza obbligatoria non installata', sourceIds: ['zg-energieverordnung'] },
    { value: '20 giorni', label: 'termine senza opposizione dal ricevimento della notifica edilizia', sourceIds: ['zg-pbg'] },
  ],
  ctaAfterSection: 'eigenstrom',
  sections: [
    {
      id: 'eigenstrom', title: 'Installare il fotovoltaico o pagare la tassa sostitutiva',
      paragraphs: [
        'La disciplina dell’autoproduzione elettrica e della tassa sostitutiva è in vigore a livello di ordinanza dal 1° gennaio 2023.',
        'Calcolate innanzitutto la potenza obbligatoria in base alla superficie di riferimento energetico del progetto. Gli ampliamenti e le sopraelevazioni oltre il limite di esiguità sono trattati come nuovi edifici ai fini di questa disposizione.',
        'La tassa sostitutiva è versata al Comune ed è vincolata alla produzione locale di elettricità rinnovabile. Non è un incentivo per il proprio impianto e sostituisce soltanto la parte non realizzata dell’obbligo.',
      ],
      sourceIds: ['zg-energieverordnung', 'zg-vollzug'],
      module: {
        kind: 'zug-power-choice', title: 'Due possibilità dopo il calcolo della potenza', intro: 'SRE × 10 W/m² determina la potenza elettrica autoprodotta richiesta, sempre inferiore a 30 kW.',
        items: [
          { title: 'Realizzare un impianto di autoproduzione', value: '10 W/m² SRE', text: 'Fornire la potenza sull’edificio oppure collettivamente in un raggruppamento ammesso ai fini del consumo proprio.', detail: 'Concordare con il Comune i documenti relativi al progetto e al raggruppamento.', sourceIds: ['zg-energieverordnung', 'zg-vollzug'] },
          { title: 'Compensare la potenza mancante', value: 'CHF 1’000/kW', text: 'Per ogni kW richiesto ma non installato è dovuta al Comune la tassa sostitutiva.', detail: 'I fondi sono vincolati alla produzione locale di elettricità rinnovabile.', sourceIds: ['zg-energieverordnung'] },
        ],
      },
    },
    {
      id: 'bonus', title: 'Isolare tetto o facciata e aggiungere il fotovoltaico',
      paragraphs: [
        'Il programma d’incentivazione di Zugo 2026 versa CHF 60/m² per l’isolamento ammissibile di tetto o facciata. Se sullo stesso elemento costruttivo viene installato contemporaneamente un nuovo impianto fotovoltaico esteso all’intera superficie secondo i criteri del programma, si aggiungono altri CHF 60/m² di superficie isolata.',
        'Questa maggiorazione non è un contributo generale di CHF 60/m² per ogni nuovo impianto fotovoltaico. Il normale fotovoltaico indipendente è valutato da Pronovo; il programma non conferma un incentivo cantonale generale per normali batterie domestiche.',
      ],
      sourceIds: ['zg-foerderprogramm-2026', 'pronovo-pv'],
      module: {
        kind: 'zug-renovation-bonus', title: 'Quando il fotovoltaico è considerato esteso all’intera superficie?', intro: 'La soglia si riferisce all’elemento costruttivo isolato contemporaneamente.',
        items: [
          { title: 'Facciata', value: 'almeno 20%', text: 'Almeno il 20% della superficie di facciata isolata deve essere coperto da nuovi moduli fotovoltaici.', sourceIds: ['zg-foerderprogramm-2026'] },
          { title: 'Tetto', value: 'almeno 50%', text: 'Almeno il 50% della superficie del tetto isolata deve essere coperto da nuovi moduli fotovoltaici.', sourceIds: ['zg-foerderprogramm-2026'] },
        ],
      },
    },
    {
      id: 'verfahren', title: 'Notifica edilizia: attendere 20 giorni per eventuali opposizioni',
      paragraphs: [
        'Gli impianti solari che non pregiudicano in misura considerevole gli interessi dei vicini e quelli pubblici devono essere notificati all’autorità comunale competente mediante una notifica edilizia. Se l’autorità non solleva opposizioni entro 20 giorni dal ricevimento, il progetto può essere realizzato.',
        'Fuori della zona edificabile, il Comune inoltra la documentazione alla Direzione dei lavori pubblici. Sui monumenti culturali e naturali d’importanza cantonale o nazionale è sempre necessaria una licenza edilizia.',
      ],
      sourceIds: ['zg-pbg'],
    },
    {
      id: 'planung', title: 'Distinguere chiaramente obbligo, incentivi e offerta',
      paragraphs: [
        'Fate indicare separatamente la superficie di riferimento energetico, la potenza obbligatoria, la potenza effettivamente installata e l’eventuale tassa sostitutiva. Per un raggruppamento ai fini del consumo proprio deve inoltre risultare chiaramente come avviene l’adempimento comune.',
        'In caso di risanamento, la superficie dell’elemento isolato, la quota coperta dal fotovoltaico, il contributo per l’involucro dell’edificio e gli incentivi per il fotovoltaico devono figurare come voci distinte. In questo modo il bonus combinato non viene erroneamente conteggiato come contributo forfettario al fotovoltaico.',
      ],
      sourceIds: ['zg-energieverordnung', 'zg-foerderprogramm-2026', 'pronovo-pv'],
    },
  ],
  faqs: [
    { question: 'Come si calcola l’obbligo di autoproduzione elettrica a Zugo?', answer: 'Superficie di riferimento energetico × 10 W/m²; la prescrizione non richiede mai 30 kW o più.', sourceIds: ['zg-energieverordnung'] },
    { question: 'A quanto ammonta la tassa sostitutiva?', answer: 'CHF 1’000 per ogni kW richiesto ma non installato.', sourceIds: ['zg-energieverordnung'] },
    { question: 'L’obbligo può essere adempiuto congiuntamente tramite un raggruppamento ai fini del consumo proprio?', answer: 'Sì, l’adempimento collettivo tramite un raggruppamento è possibile alle condizioni di legge.', sourceIds: ['zg-vollzug'] },
    { question: 'Quando si può costruire dopo una notifica edilizia?', answer: 'Quando il Comune non solleva opposizioni entro 20 giorni dal ricevimento.', sourceIds: ['zg-pbg'] },
    { question: 'Ogni impianto fotovoltaico di Zugo riceve la maggiorazione di CHF 60/m²?', answer: 'No. La maggiorazione vale soltanto insieme a un isolamento incentivato e con la copertura fotovoltaica dell’intera superficie come definita.', sourceIds: ['zg-foerderprogramm-2026'] },
  ],
  sources: [...sources],
};