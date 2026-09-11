import { cantonAreas, CantonLocale, CantonArea } from '@/lib/cantons';
import { CityContent } from '@/lib/city-content';
import { getCantonAuditPage } from '@/lib/canton-audit';

const IMAGE = '/images/asset-haus-luftbild-2.webp';

type LocalizedCopy = {
  heroHeadline: string;
  heroSubheadline: string;
  heroDescription: string;
  whySolarTitle: string;
  whySolarIntro: string;
  reasons: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

function copyFor(locale: CantonLocale, name: string): LocalizedCopy {
  switch (locale) {
    case 'fr':
      return {
        heroHeadline: `Installation solaire : ${name}`,
        heroSubheadline: 'Un projet adapté à votre bâtiment',
        heroDescription: 'Comparez gratuitement les offres d’installateurs certifiés dans toute la Suisse.',
        whySolarTitle: `Le solaire : ${name}`,
        whySolarIntro: 'Chaque projet photovoltaïque dépend du bâtiment, de son orientation et des besoins du foyer.',
        reasons: [
          {
            title: 'Évaluer votre bâtiment',
            description: 'La surface disponible, l’orientation et l’état du toit sont examinés avant toute proposition.',
          },
          {
            title: 'Dimensionner le projet',
            description: 'Le dimensionnement est défini selon votre consommation et les caractéristiques de votre bâtiment.',
          },
          {
            title: 'Comparer les offres',
            description: 'Des offres comparables vous permettent d’examiner les solutions adaptées à votre projet.',
          },
        ],
        faqs: [
          {
            question: `Quels éléments faut-il examiner pour ${name} ?`,
            answer: 'La faisabilité dépend notamment du bâtiment, de la surface du toit, de son orientation et du projet souhaité.',
          },
          {
            question: 'Comment demander des offres solaires ?',
            answer: 'Décrivez votre projet dans le formulaire de demande afin de recevoir des offres à comparer.',
          },
          {
            question: 'Quel est le coût d’une installation solaire ?',
            answer: 'Le coût est déterminé pour chaque projet selon le bâtiment, le dimensionnement et les équipements choisis.',
          },
        ],
      };
    case 'it':
      return {
        heroHeadline: `Impianto fotovoltaico: ${name}`,
        heroSubheadline: 'Un progetto adatto al tuo edificio',
        heroDescription: 'Confronta gratuitamente le offerte di installatori certificati in tutta la Svizzera.',
        whySolarTitle: `Il fotovoltaico: ${name}`,
        whySolarIntro: 'Ogni progetto fotovoltaico dipende dall’edificio, dall’orientamento e dalle esigenze della famiglia.',
        reasons: [
          {
            title: 'Valutare l’edificio',
            description: 'La superficie disponibile, l’orientamento e lo stato del tetto vengono valutati prima di ogni proposta.',
          },
          {
            title: 'Dimensionare il progetto',
            description: 'Il dimensionamento viene definito in base ai consumi e alle caratteristiche dell’edificio.',
          },
          {
            title: 'Confrontare le offerte',
            description: 'Offerte confrontabili aiutano a valutare le soluzioni adatte al tuo progetto.',
          },
        ],
        faqs: [
          {
            question: `Quali elementi valutare per ${name}?`,
            answer: 'La fattibilità dipende dall’edificio, dalla superficie del tetto, dall’orientamento e dal progetto desiderato.',
          },
          {
            question: 'Come posso richiedere offerte fotovoltaiche?',
            answer: 'Descrivi il tuo progetto nel modulo di richiesta per ricevere offerte da confrontare.',
          },
          {
            question: 'Quanto costa un impianto fotovoltaico?',
            answer: 'Il costo viene definito per ogni progetto in base all’edificio, al dimensionamento e alle apparecchiature scelte.',
          },
        ],
      };
    case 'en':
      return {
        heroHeadline: `Solar panels: ${name}`,
        heroSubheadline: 'A project suited to your building',
        heroDescription: 'Compare quotes from certified installers across Switzerland at no cost.',
        whySolarTitle: `Solar power: ${name}`,
        whySolarIntro: 'Every photovoltaic project depends on the building, its orientation and the household’s needs.',
        reasons: [
          {
            title: 'Assess your building',
            description: 'Available space, roof orientation and roof condition are reviewed before a proposal is made.',
          },
          {
            title: 'Size the project',
            description: 'The system is sized according to your consumption and the characteristics of your building.',
          },
          {
            title: 'Compare quotes',
            description: 'Comparable quotes help you review solutions suited to your project.',
          },
        ],
        faqs: [
          {
            question: `What should be assessed for ${name}?`,
            answer: 'Feasibility depends on the building, available roof area, orientation and the desired project.',
          },
          {
            question: 'How can I request solar quotes?',
            answer: 'Describe your project in the request form to receive quotes for comparison.',
          },
          {
            question: 'How much does a solar installation cost?',
            answer: 'The cost is determined for each project based on the building, system size and selected equipment.',
          },
        ],
      };
    default:
      return {
        heroHeadline: `Solaranlage: ${name}`,
        heroSubheadline: 'Ein Projekt passend zu Ihrem Gebäude',
        heroDescription: 'Vergleichen Sie kostenlos Angebote geprüfter Solarteure in der ganzen Schweiz.',
        whySolarTitle: `Solarenergie: ${name}`,
        whySolarIntro: 'Jedes Photovoltaikprojekt hängt vom Gebäude, seiner Ausrichtung und dem Bedarf des Haushalts ab.',
        reasons: [
          {
            title: 'Gebäude beurteilen',
            description: 'Verfügbare Fläche, Dachausrichtung und Zustand des Dachs werden vor einem Vorschlag geprüft.',
          },
          {
            title: 'Projekt dimensionieren',
            description: 'Die Anlage wird entsprechend Ihrem Verbrauch und den Eigenschaften Ihres Gebäudes dimensioniert.',
          },
          {
            title: 'Offerten vergleichen',
            description: 'Vergleichbare Offerten helfen Ihnen, passende Lösungen für Ihr Projekt zu prüfen.',
          },
        ],
        faqs: [
          {
            question: `Was sollte für ${name} geprüft werden?`,
            answer: 'Die Machbarkeit hängt vom Gebäude, der verfügbaren Dachfläche, der Ausrichtung und dem gewünschten Projekt ab.',
          },
          {
            question: 'Wie kann ich Solarofferten anfordern?',
            answer: 'Beschreiben Sie Ihr Projekt im Anfrageformular, um Offerten vergleichen zu können.',
          },
          {
            question: 'Was kostet eine Solaranlage?',
            answer: 'Die Kosten werden für jedes Projekt anhand des Gebäudes, der Anlagengrösse und der gewählten Ausstattung bestimmt.',
          },
        ],
      };
  }
}

export function getCantonContent(area: CantonArea, locale: CantonLocale): CityContent {
  const audit = getCantonAuditPage(area.id, locale);
  const copy = audit
    ? { ...audit.content, reasons: audit.content.whySolarReasons }
    : copyFor(locale, area.names[locale]);

  return {
    slug: area.id,
    image: IMAGE,
    heroHeadline: copy.heroHeadline,
    heroSubheadline: copy.heroSubheadline,
    heroDescription: copy.heroDescription,
    whySolarTitle: copy.whySolarTitle,
    whySolarIntro: copy.whySolarIntro,
    whySolarReasons: copy.reasons,
    faqs: copy.faqs,
    audit,
  };
}

export function getCantonAreaByPath(path: string, locale: CantonLocale): CantonArea | undefined {
  return cantonAreas.find((area) => area.paths[locale] === path);
}