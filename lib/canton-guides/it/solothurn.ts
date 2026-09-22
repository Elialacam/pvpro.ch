import type { CantonGuide } from '../types';

const sources = [
  {
    id: 'so-vote-2025',
    authority: 'Cantone di Soletta',
    title: 'Votazione del 9 febbraio 2025: revisione totale della legge sull’energia',
    url: 'https://so.ch/verwaltung/staatskanzlei/medien/medienmitteilung/news/energiegesetz-mehrheit-sagt-nein',
  },
  {
    id: 'so-energy-law',
    authority: 'Cantone di Soletta',
    title: 'Legge sull’energia del 1991, versione vigente dal 2015',
    url: 'https://bgs.so.ch/app/de/texts_of_law/941.21',
  },
  {
    id: 'so-solar-notification',
    authority: 'Cantone di Soletta, Ufficio della pianificazione territoriale',
    title: 'Piano direttore cantonale E-2.5: notifica degli impianti solari',
    url: 'https://so.ch/fileadmin/internet/bjd/bjd-arp/Richtplanung/pdf/Richtplantext/E-2_5.pdf',
  },
  {
    id: 'so-ebauso',
    authority: 'Cantone di Soletta',
    title: 'Procedura elettronica per la licenza edilizia eBauSO',
    url: 'https://so.ch/services/baubewilligungsverfahren',
  },
  {
    id: 'so-energy-funding',
    authority: 'Cantone di Soletta, Servizio dell’energia',
    title: 'Programma cantonale d’incentivazione energetica: misure promozionali',
    url: 'https://energie.so.ch/foerderung/foerdermassnahmen',
  },
  {
    id: 'so-tax-book',
    authority: 'Ufficio cantonale delle imposte di Soletta',
    title: 'Manuale fiscale: esercizio di un impianto fotovoltaico',
    url: 'https://steuerbuch.so.ch/steuern/einkommenssteuer/ertraege-aus-unbeweglichem-vermoegen-und-liegenschaftskosten/27-nr-4',
  },
  {
    id: 'pronovo-eiv',
    authority: 'Pronovo',
    title: 'Rimunerazione unica per impianti fotovoltaici',
    url: 'https://pronovo.ch/de/foerderung/photovoltaik',
  },
  {
    id: 'pronovo-tariff-calculator',
    authority: 'Pronovo',
    title: 'Calcolatore delle tariffe per il fotovoltaico',
    url: 'https://pronovo.ch/de/services/tarifrechner',
  },
] as const;

export const guide: CantonGuide = {
  id: 'solothurn',
  path: '/it/fotovoltaico-soletta',
  canton: 'Soletta',
  title: 'Fotovoltaico a Soletta: nessun nuovo obbligo nel 2026',
  description:
    'La revisione energetica è stata respinta nel 2025: a Soletta non si applica un nuovo obbligo di 10 W/m². Gli impianti esenti da autorizzazione vanno notificati 30 giorni prima dei lavori.',
  h1: 'Impianto fotovoltaico nel Cantone di Soletta: cosa vale davvero nel 2026',
  intro: [
    'Nel 2026, per gli impianti solari a Soletta non vige alcun nuovo obbligo generale di 10 W/m² derivante dalla prevista revisione totale: il progetto è stato respinto il 9 febbraio 2025.',
    'Per i proprietari contano invece la legge sull’energia vigente, la notifica degli impianti esenti da autorizzazione almeno 30 giorni prima dell’inizio dei lavori e gli incentivi federali tramite Pronovo.',
  ],
  quickFacts: [
    {
      value: '57,52% No',
      label: 'Revisione totale respinta il 9 febbraio 2025',
      sourceIds: ['so-vote-2025'],
    },
    {
      value: 'Nessun nuovo obbligo di 10 W/m²',
      label: 'La prescrizione della revisione respinta non si applica',
      sourceIds: ['so-vote-2025', 'so-energy-law'],
    },
    {
      value: 'Almeno 30 giorni',
      label: 'Notifica prima dell’inizio dei lavori',
      sourceIds: ['so-solar-notification'],
    },
    {
      value: 'Rimunerazione unica tramite Pronovo',
      label: 'Principale incentivo per gli impianti fotovoltaici ordinari',
      sourceIds: ['pronovo-eiv', 'so-energy-funding'],
    },
  ],
  ctaAfterSection: 'rechtslage',
  sections: [
    {
      id: 'rechtslage',
      title: 'Che cosa si applica e che cosa no?',
      paragraphs: [
        'Pianificate il progetto in base al diritto vigente e non ai documenti relativi alla revisione totale respinta. La votazione si è conclusa con il 57,52% di No e il 42,48% di Sì; Soletta non ha quindi adottato una nuova legge sull’energia.',
        'Resta determinante la legge sull’energia del 1991 nella versione vigente dal 2015. Insieme all’ordinanza sull’energia, essa stabilisce requisiti per le nuove costruzioni e gli ampliamenti, per esempio riguardo al fabbisogno termico e alla quota di energia non rinnovabile, ma non introduce un nuovo obbligo cantonale generale di 10 W di potenza fotovoltaica per m² di superficie di riferimento energetico. Quest’ultima corrisponde alla superficie riscaldata rilevante dell’edificio.',
      ],
      sourceIds: ['so-vote-2025', 'so-energy-law'],
      module: {
        kind: 'current-law-comparison',
        title: 'Che cosa si applica e che cosa no?',
        intro:
          'Distinguete con precisione il diritto vigente e le procedure disponibili dai contenuti della revisione totale respinta.',
        items: [
          {
            title: 'Legge sull’energia esistente',
            value: 'Si applica',
            text: 'Resta determinante la legge sull’energia del 1991 nella versione vigente dal 2015, non la revisione totale proposta.',
            sourceIds: ['so-energy-law', 'so-vote-2025'],
          },
          {
            title: 'Procedura di notifica con termine di 30 giorni',
            value: 'Si applica',
            text: 'Un impianto solare esente da autorizzazione secondo il diritto federale deve essere notificato all’autorità edilizia competente almeno 30 giorni prima dell’inizio dei lavori. La notifica sostituisce la normale procedura per la licenza edilizia.',
            detail: 'La scadenza del termine non comporta un’autorizzazione automatica.',
            sourceIds: ['so-ebauso'],
          },
          {
            title: 'eBauSO',
            value: 'Si applica',
            text: 'La piattaforma cantonale offre per gli impianti esenti da autorizzazione la procedura specifica «Notifica impianto solare».',
            sourceIds: ['so-solar-notification'],
          },
          {
            title: 'Incentivi federali tramite Pronovo',
            value: 'Si applica',
            text: 'Il sostegno diretto agli impianti fotovoltaici ordinari passa principalmente dalla rimunerazione unica federale gestita da Pronovo.',
            sourceIds: ['pronovo-eiv'],
          },
          {
            title: 'Nuovo obbligo di 10 W/m²',
            value: 'Non si applica',
            text: 'Nel 2026, la prescrizione generale contenuta nella revisione totale respinta non costituisce diritto cantonale vigente.',
            detail: 'La votazione del 9 febbraio 2025 non va interpretata come un’entrata in vigore.',
            sourceIds: ['so-vote-2025', 'so-energy-law'],
          },
          {
            title: 'Bonus d’incentivazione previsti',
            value: 'Non si applicano',
            text: 'I contributi previsti con la revisione per il risanamento di tetti o facciate, l’elettricità invernale, gli accumulatori e le infrastrutture bidirezionali non devono essere presentati come incentivi generali attivi.',
            sourceIds: ['so-vote-2025', 'so-energy-funding'],
          },
        ],
      },
    },
    {
      id: 'meldung',
      title: 'Notificare correttamente un impianto solare esente da autorizzazione',
      paragraphs: [
        'Verificate anzitutto con l’autorità edilizia competente se il vostro impianto è esente da autorizzazione secondo il diritto federale. In caso affermativo, dovete notificarlo almeno 30 giorni prima dell’inizio dei lavori.',
        'Presentate una descrizione del progetto, un piano di situazione e un piano delle facciate. Su eBauSO è disponibile a tale scopo la procedura «Notifica impianto solare». Per questi impianti la notifica sostituisce la normale procedura per la licenza edilizia, ma non elimina l’obbligo di fornire i documenti né comporta un’approvazione automatica dopo 30 giorni.',
      ],
      bullets: [
        'Contattare tempestivamente l’autorità edilizia comunale competente',
        'Preparare la descrizione del progetto',
        'Allegare il piano di situazione',
        'Allegare il piano delle facciate',
        'Effettuare la notifica almeno 30 giorni prima dell’inizio dei lavori',
      ],
      sourceIds: ['so-solar-notification', 'so-ebauso'],
    },
    {
      id: 'foerderung',
      title: 'Calcolare gli incentivi fotovoltaici tramite Pronovo',
      paragraphs: [
        'Calcolate separatamente tramite Pronovo il sostegno diretto per un impianto fotovoltaico ordinario. La rimunerazione unica è un contributo federale versato una sola volta e non va equiparata alle misure cantonali d’incentivazione per altri interventi sugli edifici.',
        'Nel 2026 Pronovo distingue la RUP per gli impianti di potenza inferiore a 100 kW e la RUG per quelli da 100 kW in su. La RUE riguarda gli impianti senza consumo proprio solo nelle categorie previste. Dal 1° aprile 2024 il contributo di base della rimunerazione unica ammonta a CHF 0; sono determinanti in particolare la potenza, il tipo d’impianto e i bonus applicabili.',
        'Fate calcolare individualmente il contributo federale con il calcolatore delle tariffe di Pronovo. Non è garantita una percentuale prestabilita dell’investimento e non andrebbe promessa in modo forfettario in un’offerta.',
      ],
      sourceIds: ['pronovo-eiv', 'pronovo-tariff-calculator'],
    },
    {
      id: 'kantonale-beitraege',
      title: 'Valutare correttamente i programmi cantonali',
      paragraphs: [
        'Per un impianto fotovoltaico ordinario non considerate un contributo cantonale diretto generale. Il programma energetico cantonale sostiene altre misure, quali l’isolamento termico, i sistemi di riscaldamento rinnovabili, Minergie e il solare termico.',
        'Un impianto fotovoltaico può essere parte di un progetto Minergie e beneficiare di una rimunerazione unica federale. La produzione elettrica non diventa però per questo una misura cantonale d’incentivazione Minergie. Anche il solare termico è una tecnologia distinta e non va equiparato al fotovoltaico.',
        'Non considerate come programmi attivi le indicazioni su contributi previsti per il fotovoltaico in occasione del risanamento di tetti o facciate, per l’elettricità invernale, gli accumulatori a batteria o le infrastrutture bidirezionali. Queste misure erano previste nel contesto della revisione totale respinta.',
      ],
      sourceIds: ['so-energy-funding', 'so-vote-2025', 'pronovo-eiv'],
    },
    {
      id: 'batterie',
      title: 'Accumulo a batteria: verificare la deduzione fiscale anziché un sussidio non confermato',
      paragraphs: [
        'Pianificate una batteria domestica senza dare per scontato un contributo cantonale: per il 2026 non è confermato alcun sussidio diretto generale agli accumulatori a batteria.',
        'Per gli edifici esistenti, a determinate condizioni, le spese per un accumulatore installato insieme a un impianto a energia rinnovabile possono essere fiscalmente deducibili; per le nuove costruzioni si applicano in particolare alcune limitazioni. Una deduzione fiscale riduce il reddito imponibile e non consiste in un versamento né in una riduzione diretta di pari importo dell’imposta già dovuta. Fate verificare il trattamento applicabile al vostro edificio e alla vostra situazione fiscale.',
      ],
      sourceIds: ['so-tax-book', 'so-energy-funding'],
    },
    {
      id: 'kosten',
      title: 'Rendere comparabili costi e pianificazione',
      paragraphs: [
        'Confrontate le offerte sulla stessa base tecnica e amministrativa. La geometria del tetto, l’ombreggiamento, la sottostruttura, il ponteggio, i lavori elettrici, l’allacciamento alla rete e un’eventuale batteria dovrebbero essere indicati separatamente.',
        'Indicate la rimunerazione unica Pronovo prevista separatamente dal prezzo dell’impianto e non trattate le possibili deduzioni fiscali come un contributo garantito. Chiarite inoltre chi prepara la notifica tramite eBauSO e fornisce i piani richiesti.',
        'Con PvPro.ch i proprietari possono confrontare gratuitamente e senza impegno fino a tre offerte solari adatte allo stesso progetto.',
      ],
      bullets: [
        'Potenza dell’impianto e disposizione dei moduli',
        'Montaggio, sottostruttura e ponteggio',
        'Lavori elettrici e allacciamento alla rete',
        'Notifica e documentazione progettuale',
        'Rimunerazione unica Pronovo indicata separatamente',
        'Accumulo a batteria chiaramente indicato come opzione',
      ],
      sourceIds: ['so-solar-notification', 'so-ebauso', 'pronovo-eiv'],
    },
  ],
  faqs: [
    {
      question: 'Nel 2026 esiste un obbligo fotovoltaico generale per le nuove costruzioni a Soletta?',
      answer: 'No, non in virtù della revisione totale respinta nel 2025.',
      sourceIds: ['so-vote-2025', 'so-energy-law'],
    },
    {
      question: 'Con quanto anticipo devo notificare il mio impianto solare?',
      answer: 'Almeno 30 giorni prima dell’inizio dei lavori.',
      sourceIds: ['so-ebauso'],
    },
    {
      question: 'Dove si effettua la notifica?',
      answer:
        'Presso l’autorità edilizia competente; eBauSO mette a disposizione una procedura specifica per la notifica degli impianti solari.',
      sourceIds: ['so-solar-notification'],
    },
    {
      question: 'Esistono incentivi cantonali per il fotovoltaico?',
      answer:
        'Per gli impianti fotovoltaici ordinari è centrale l’incentivo federale tramite Pronovo; i programmi cantonali per gli edifici riguardano altre misure.',
      sourceIds: ['so-energy-funding', 'pronovo-eiv'],
    },
    {
      question: 'Una batteria domestica beneficia di incentivi?',
      answer:
        'Per il 2026 non è stato possibile confermare un contributo cantonale diretto generale; per gli edifici esistenti possono essere rilevanti le deduzioni fiscali.',
      sourceIds: ['so-tax-book', 'so-energy-funding'],
    },
  ],
  sources: [...sources],
};