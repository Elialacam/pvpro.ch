export type GuideLocale = 'de' | 'fr' | 'en' | 'it';

export interface GuideContent {
  metaTitle: string;
  metaDescription: string;
  home: string;
  breadcrumb: string;
  eyebrow: string;
  title: string;
  intro: string;
  noteTitle: string;
  noteText: string;
  navLabel: string;
  sections: [string, string, string, string, string];
  basisTitle: string;
  basisParagraphs: string[];
  principle: string;
  tableTitle: string;
  tableIntro: string;
  tableCaption: string;
  columns: [string, string, string];
  rows: { check: string; why: string; question: string }[];
  warrantyTitle: string;
  warrantyIntro: string;
  warranties: { title: string; text: string }[];
  warrantyNote: string;
  warningTitle: string;
  warningIntro: string;
  warnings: string[];
  checklistTitle: string;
  checklistIntro: string;
  checklist: string[];
  checklistHint: string;
  ctaTitle: string;
  ctaText: string;
  quoteAction: string;
  processAction: string;
  disclaimer: string;
}

export const guidePaths: Record<GuideLocale, string> = {
  de: '/besten-solar-anbieter-waehlen',
  fr: '/fr/choisir-installateur-solaire',
  en: '/en/choose-solar-installer',
  it: '/it/scegliere-installatore-solare',
};
