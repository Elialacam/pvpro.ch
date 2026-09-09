/**
 * ITALIAN CITY CONTENT - Lugano (Canton Ticino)
 * Full Italian translation for Lugano solar installation page
 */

import { CityContent } from './city-content';
import { ECONOMIC_FACTS, FactsLocale, NumericRange, formatSwissNumber } from './facts';

function factRange(range: NumericRange, locale: FactsLocale): string {
  const joiner = locale === 'de' ? ' bis ' : '–';
  return `${formatSwissNumber(range.min)}${joiner}${formatSwissNumber(range.max)}`;
}

const afterFederalSubsidy5kw = {
  min: ECONOMIC_FACTS.systemCosts.bySize[5].min - 5 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30,
  max: ECONOMIC_FACTS.systemCosts.bySize[5].max - 5 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30,
};



export const cityContentsIT: Record<string, CityContent> = {
  lugano: {
    slug: 'lugano',
    image: '/images/asset-haus-luftbild-2.webp',
    heroHeadline: 'Impianto Fotovoltaico Lugano Ticino',
    heroSubheadline: 'Approfitta delle condizioni solari locali',
    heroDescription: 'Costi, produzione e redditività in Lugano dipendono dall’edificio, dal dimensionamento e dall’autoconsumo.',

    whySolarTitle: 'Perché Lugano è ideale per l\'energia solare?',
    whySolarIntro: 'Lugano beneficia di un clima locale favorevole al fotovoltaico.',
    whySolarReasons: [
      {
        title: 'Clima locale favorevole',
        description: 'Lugano beneficia di un clima locale favorevole al fotovoltaico.'
      },
      {
        title: 'Programma Energia Ticino',
        description: 'Il Canton Ticino offre propri programmi di incentivi oltre alle sovvenzioni federali. I proprietari di case a Lugano beneficiano della consulenza energetica cantonale e di contributi speciali per sistemi solari innovativi con accumulo.'
      },
      {
        title: 'Clima mediterraneo, condizioni ottimali',
        description: 'La posizione meridionale e il clima mediterraneo di Lugano con estati calde e inverni miti garantiscono rendimenti solari costanti tutto l\'anno. Il carico di neve è raramente un problema, gli impianti producono in modo affidabile anche in inverno.'
      }
    ],

    cityFactsTitle: 'Lugano: Il miglior sito solare della Svizzera',
    cityFactsParagraphs: [
      'Lugano beneficia di un clima locale favorevole al fotovoltaico.',
      'Il settore dell\'energia solare in Ticino è in forte espansione. Grazie al \"Programma Energia\" cantonale, i proprietari di case a Lugano ricevono consulenze complete e sovvenzioni attraenti per l\'installazione di impianti fotovoltaici. Le autorità locali promuovono attivamente la transizione verso energie rinnovabili.',
      'Costi, produzione e redditività in Lugano dipendono dall’edificio, dal dimensionamento e dall’autoconsumo.',
      'I comuni ticinesi offrono ulteriori incentivi oltre alle sovvenzioni federali e cantonali. Molti proprietari di case a Lugano optano per sistemi con batterie di accumulo per massimizzare l\'autoconsumo e diventare ancora più indipendenti dalla rete. I nostri partner locali certificati accompagnano l\'intero processo - dalla pianificazione all\'installazione fino alla registrazione delle sovvenzioni.'
    ],

    pricing: {
      min: ECONOMIC_FACTS.systemCosts.perKwp.min,
      max: ECONOMIC_FACTS.systemCosts.perKwp.max,
      typical5kw: ECONOMIC_FACTS.systemCosts.bySize[5],
      afterSubsidy5kw: afterFederalSubsidy5kw,
      roiYears: factRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'it'),
    },

    incentives: {
      title: 'Sovvenzioni a Lugano e in Ticino',
      description: 'Il Canton Ticino offre programmi di incentivi particolarmente attraenti per impianti fotovoltaici. Oltre alla sovvenzione unica federale (RU), ci sono contributi cantonali e deduzioni fiscali.',
      programs: [
        {
          name: 'Rimunerazione Unica Federale (RU)',
          amount: `${formatSwissNumber(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 0)} CHF per kWp`,
          description: 'Costi, produzione e redditività in Lugano dipendono dall’edificio, dal dimensionamento e dall’autoconsumo.'
        },
        {
          name: 'Contributo cantonale FER – Ticino',
          amount: 'Soggetto a requisiti',
          description: 'Il Canton Ticino può offrire contributi aggiuntivi tramite il Fondo Energie Rinnovabili (FER), a seconda del tipo di impianto e delle condizioni applicabili. Verificate l\'ammissibilità sul sito ufficiale del Cantone prima di presentare la richiesta.'
        },
        {
          name: 'Deduzioni fiscali Ticino',
          amount: 'Secondo il programma vigente',
          description: 'Le spese per impianti solari possono essere detratte dalle tasse in Ticino. Questo riduce ulteriormente i costi effettivi e migliora il periodo di ammortamento dell\'investimento solare.'
        },
        {
          name: 'Incentivi comunali Lugano',
          amount: 'Variabili',
          description: 'Il comune di Lugano offre ulteriori programmi di incentivi per energie rinnovabili. Informarsi presso l\'ufficio energia del comune sui contributi attuali per impianti fotovoltaici e batterie di accumulo.'
        }
      ]
    },

    caseStudies: [
      {
        name: 'Famiglia Bernasconi',
        location: 'Lugano-Besso',
        systemSize: 'In base al progetto',
        cost: 'In base al progetto',
        savings: 'In base al progetto',
        payback: 'In base al progetto',
        quote: 'Grazie agli elevati rendimenti qui a Lugano, il nostro impianto si è ammortizzato molto più velocemente del previsto. Siamo già quasi autosufficienti dal punto di vista energetico!'
      },
      {
        name: 'Casa Multifamiliare Maggi',
        location: 'Lugano-Molino Nuovo',
        systemSize: 'In base al progetto',
        cost: 'In base al progetto',
        savings: 'In base al progetto',
        payback: 'In base al progetto',
        quote: 'L\'installazione è stata professionale e veloce. I rendimenti solari a Lugano sono eccezionali - il miglior investimento per la nostra proprietà.'
      },
      {
        name: 'Ditta Rossini & Figli',
        location: 'Lugano-Viganello',
        systemSize: 'In base al progetto',
        cost: 'In base al progetto',
        savings: 'In base al progetto',
        payback: 'In base al progetto',
        quote: 'La posizione soleggiata di Lugano è perfetta per il nostro impianto aziendale. Con la batteria di accumulo possiamo utilizzare quasi tutta l\'energia solare stessa.'
      }
    ],

    faqs: [
      {
        question: 'Quanto costa un impianto fotovoltaico a Lugano?',
        answer: 'Costi, produzione e redditività in Lugano dipendono dall’edificio, dal dimensionamento e dall’autoconsumo.'
      },
      {
        question: 'Perché Lugano è il miglior sito solare della Svizzera?',
        answer: 'Lugano beneficia di un clima locale favorevole al fotovoltaico.'
      },
      {
        question: 'Quali sovvenzioni sono disponibili a Lugano?',
        answer: 'Costi, produzione e redditività in Lugano dipendono dall’edificio, dal dimensionamento e dall’autoconsumo.'
      },
      {
        question: 'Quanto velocemente si ammortizza un impianto fotovoltaico a Lugano?',
        answer: 'Costi, produzione e redditività in Lugano dipendono dall’edificio, dal dimensionamento e dall’autoconsumo.'
      },
      {
        question: 'Come funziona il Programma Energia Ticino?',
        answer: 'Il Programma Energia del Canton Ticino offre consulenza energetica gratuita e sovvenzioni per impianti solari innovativi. I proprietari di case ricevono supporto completo - dalla pianificazione alla richiesta di sovvenzioni fino all\'installazione. Sono particolarmente promossi i sistemi con batterie di accumulo e soluzioni per l\'autoconsumo.'
      },
      {
        question: 'Un impianto fotovoltaico è utile anche sul Lago di Lugano?',
        answer: 'Lugano beneficia di un clima locale favorevole al fotovoltaico.'
      },
      {
        question: 'Quanto produce un impianto fotovoltaico a Lugano?',
        answer: 'Costi, produzione e redditività in Lugano dipendono dall’edificio, dal dimensionamento e dall’autoconsumo.'
      },
      {
        question: 'Vale la pena una batteria di accumulo a Lugano?',
        answer: 'Costi, produzione e redditività in Lugano dipendono dall’edificio, dal dimensionamento e dall’autoconsumo.'
      }
    ],

    testimonial: {
      initials: 'FB',
      name: 'Franco Bernasconi',
      quote: 'Lugano offre le condizioni perfette per l\'energia solare. Il nostro impianto produce molto più di quanto avessimo previsto. Con PvPro.ch abbiamo ricevuto tre eccellenti offerte e abbiamo scelto quella migliore. Un servizio veramente consigliato!'
    }
  }
};
