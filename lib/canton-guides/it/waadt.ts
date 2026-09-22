import type { CantonGuide } from '../types';

const sources = [
  { id: 'vd-energie-2026', authority: 'Cantone di Vaud', title: 'Legislazione sull’energia fino al 31 dicembre 2026', url: 'https://www.vd.ch/environnement/energie/legislation-2' },
  { id: 'vd-neues-gesetz', authority: 'Cantone di Vaud', title: 'Nuova legislazione sull’energia dal 1° gennaio 2027', url: 'https://www.vd.ch/djes/nouvelle-loi-sur-lenergie' },
  { id: 'vd-solarverfahren', authority: 'Cantone di Vaud', title: 'Impianti solari: procedura e modulo cantonale di notifica', url: 'https://www.vd.ch/environnement/energie/formulaires-energie/procedures-et-autorisations-pour-les-dossiers-energie' },
  { id: 'vd-programme-2026', authority: 'Cantone di Vaud', title: 'Programma Edifici 2026', url: 'https://www.vd.ch/fileadmin/user_upload/themes/environnement/energie/fichiers_pdf/conditions.PB2026.v.1.1.pdf' },
  { id: 'vd-patrimoine', authority: 'Cantone di Vaud', title: 'Fotovoltaico e patrimonio', url: 'https://www.vd.ch/prestation/s04-demander-une-subvention-solaire-photovoltaique-patrimoine' },
  { id: 'vd-crowdfunding', authority: 'Cantone di Vaud', title: 'Impianti fotovoltaici con finanziamento partecipativo', url: 'https://www.vd.ch/prestation/26-demander-une-subvention-pour-une-installation-photovoltaique-a-financement-participatif' },
  { id: 'pronovo-pv', authority: 'Pronovo SA su mandato della Confederazione', title: 'Rimunerazione unica per impianti fotovoltaici', url: 'https://pronovo.ch/de/foerderung/photovoltaik' },
] as const;

export const guide: CantonGuide = {
  id: 'waadt',
  path: '/it/fotovoltaico-vaud',
  canton: 'Vaud',
  title: 'Fotovoltaico nel Canton Vaud | PvPro.ch',
  description: 'Confrontate offerte per il vostro progetto fotovoltaico nel Canton Vaud e verificate le regole applicabili nel 2026 e dal 2027.',
  h1: 'Fotovoltaico nel Canton Vaud: cosa vale nel 2026 e cosa cambia nel 2027',
  intro: [
    'Fino alla fine del 2026 nel Canton Vaud resta in vigore il diritto energetico attuale: i nuovi edifici devono coprire almeno il 20% del proprio fabbisogno di elettricità con energia rinnovabile. Il fotovoltaico è una delle possibili soluzioni.',
    'Il 1° gennaio 2027 entrerà in vigore una nuova legislazione sull’energia. Essa estende in particolare l’impiego dell’energia solare per i nuovi edifici e le ristrutturazioni importanti del tetto; non vanno però anticipate soglie tecniche esecutive non ancora confermate.',
  ],
  quickFacts: [
    { value: '20%', label: 'quota rinnovabile del fabbisogno di elettricità dei nuovi edifici fino alla fine del 2026', sourceIds: ['vd-energie-2026'] },
    { value: '01.01.2027', label: 'entrata in vigore della nuova legislazione sull’energia', sourceIds: ['vd-neues-gesetz'] },
    { value: '30 giorni', label: 'tempo a disposizione del Comune per classificare la notifica dell’impianto solare', sourceIds: ['vd-solarverfahren'] },
    { value: 'CHF 100/m²', label: 'M-01 con U ≤0,15 e abbinamento al fotovoltaico', sourceIds: ['vd-programme-2026'] },
  ],
  ctaAfterSection: 'wechsel',
  sections: [
    {
      id: 'wechsel',
      title: 'Distinguere chiaramente il 2026 dal diritto in vigore dal 1° gennaio 2027',
      paragraphs: [
        'Per un progetto presentato nel 2026, il punto di partenza resta la regola vigente del 20%. I certificati di elettricità verde non la soddisfano; in caso di ubicazione sfavorevole o superficie del tetto insufficiente, le eccezioni previste devono essere dimostrate concretamente.',
        'Il Gran Consiglio ha approvato definitivamente la nuova legge il 3 febbraio 2026. Essa si applicherà dal 1° gennaio 2027 insieme al diritto esecutivo e rafforzerà l’impiego dell’energia solare per i nuovi edifici e le ristrutturazioni importanti del tetto. Non vanno utilizzati futuri valori in W/m² o altre soglie tecniche senza il diritto esecutivo applicabile.',
      ],
      sourceIds: ['vd-energie-2026', 'vd-neues-gesetz'],
      module: {
        kind: 'vaud-transition',
        title: 'Diritto vigente oggi / dal 1° gennaio 2027',
        intro: 'È determinante il diritto applicabile al momento del progetto.',
        columns: ['Fino al 31 dicembre 2026', 'Dal 1° gennaio 2027'],
        items: [
          { title: 'Diritto vigente oggi', value: '20% del fabbisogno di elettricità', text: 'I nuovi edifici coprono con fonti rinnovabili almeno il 20% del proprio fabbisogno di elettricità; il fotovoltaico è una possibile soluzione. I certificati di elettricità verde non sono sufficienti.', detail: 'Sono possibili eccezioni in caso di ubicazione sfavorevole o superficie del tetto insufficiente.', sourceIds: ['vd-energie-2026'] },
          { title: 'Diritto futuro', value: 'Maggiore impiego dell’energia solare', text: 'La nuova legislazione interessa più incisivamente soprattutto i nuovi edifici e le ristrutturazioni importanti del tetto.', detail: 'Non anticipare le soglie tecniche del diritto esecutivo applicabile dal 2027.', sourceIds: ['vd-neues-gesetz'] },
        ],
      },
    },
    {
      id: 'foerderung',
      title: 'L’isolamento abbinato al fotovoltaico aumenta l’incentivo M-01',
      paragraphs: [
        'Per i comuni impianti fotovoltaici indipendenti, il Cantone rimanda alla rimunerazione unica di Pronovo. Il Programma Edifici vodese non va inteso come un fondo forfettario per il fotovoltaico.',
        'Per M-01 l’incentivo ammonta a CHF 40/m² con U ≤0,20, CHF 70/m² con U ≤0,15 e CHF 100/m² con U ≤0,15 in abbinamento al fotovoltaico. Per ottenere l’importo combinato, il fotovoltaico deve coprire almeno il 50% delle superfici interessate favorevoli. L’incentivo è cumulabile con Pronovo, ma la domanda deve essere approvata prima dell’inizio dei lavori.',
        'Per edifici e siti protetti, «Solaire photovoltaïque & Patrimoine» copre i costi supplementari dovuti all’integrazione fino a un massimo di CHF 20’000 per ciascun servizio cantonale coinvolto, per un totale massimo di CHF 40’000. Questo aiuto non è cumulabile con il bonus solare M-01.',
      ],
      sourceIds: ['vd-programme-2026', 'vd-patrimoine', 'pronovo-pv'],
    },
    {
      id: 'spezialprogramme',
      title: 'Il crowdfunding è un programma speciale, non un incentivo standard per case unifamiliari',
      paragraphs: [
        'Un primo progetto fotovoltaico in crowdfunding ammesso agli incentivi riceve CHF 3’000 più CHF 70/kWc; i progetti successivi ricevono CHF 70/kWc. L’importo massimo è di CHF 30’000. Sono necessari almeno 30 kWc e almeno 20 partecipanti, ciascuno con un contributo minimo di CHF 500. Le comunioni di proprietari per piani sono escluse.',
        'Nel catalogo degli incentivi 2026 non è confermato alcun contributo cantonale generale per una normale batteria domestica. I programmi comunali vanno verificati separatamente per l’ubicazione interessata.',
      ],
      sourceIds: ['vd-programme-2026', 'vd-crowdfunding'],
    },
    {
      id: 'verfahren',
      title: 'Il Comune decide entro 30 giorni quale procedura applicare',
      paragraphs: [
        'Molti impianti solari possono essere esentati dalla normale licenza edilizia, ma devono essere annunciati al Comune con il modulo standardizzato. I 30 giorni non costituiscono una procedura di autorizzazione automatica: entro questo termine il Comune decide se si applica l’esenzione o se è necessaria una procedura ordinaria.',
        'Per gli edifici protetti a livello cantonale, la procedura semplificata non è automaticamente applicabile. Dal 1° gennaio 2026 il diritto federale facilita inoltre, alle condizioni previste, determinati impianti in facciata, anche superiori a 8 m²; la classificazione concreta va comunque chiarita con il Comune prima dell’inizio dei lavori.',
      ],
      sourceIds: ['vd-solarverfahren'],
    },
  ],
  faqs: [
    { question: 'Quale regola solare vale nel Canton Vaud fino alla fine del 2026?', answer: 'I nuovi edifici devono coprire almeno il 20% del proprio fabbisogno di elettricità con energia rinnovabile.', sourceIds: ['vd-energie-2026'] },
    { question: 'Posso soddisfare il requisito del 20% con certificati di elettricità verde?', answer: 'No, l’acquisto di tali certificati non soddisfa il requisito.', sourceIds: ['vd-energie-2026'] },
    { question: 'Dal 2027 valgono già valori fissi noti in W/m²?', answer: 'La nuova legislazione si applica dal 1° gennaio 2027; le soglie tecniche devono essere ricavate dal diritto esecutivo allora applicabile.', sourceIds: ['vd-neues-gesetz'] },
    { question: 'Quando M-01 ammonta a CHF 100/m²?', answer: 'Con U ≤0,15 in abbinamento al fotovoltaico, se questo copre almeno il 50% delle superfici interessate favorevoli.', sourceIds: ['vd-programme-2026'] },
    { question: 'Il termine di 30 giorni equivale a un’autorizzazione automatica?', answer: 'No. Il Comune lo utilizza per decidere se è possibile un’esenzione o se occorre una procedura di licenza edilizia.', sourceIds: ['vd-solarverfahren'] },
  ],
  sources: [...sources],
};