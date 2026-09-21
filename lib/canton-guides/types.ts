export type CantonGuideId = 'aargau' | 'appenzell-ausserrhoden' | 'appenzell-innerrhoden' | 'basel' | 'bern' | 'freiburg' | 'genf' | 'glarus' | 'graubunden' | 'jura' | 'luzern' | 'neuenburg' | 'nidwalden' | 'obwalden' | 'schaffhausen' | 'schwyz' | 'solothurn' | 'st-gallen' | 'tessin' | 'thurgau' | 'uri' | 'waadt' | 'wallis' | 'zug' | 'zurich';

export const finalGuideIds: readonly CantonGuideId[] = ['schwyz', 'solothurn', 'st-gallen', 'tessin', 'thurgau'];
export const closingGuideIds: readonly CantonGuideId[] = ['uri', 'waadt', 'wallis', 'zug', 'zurich'];

export interface GuideSource {
  id: string;
  authority: string;
  title: string;
  url: string;
}

export interface GuideModule {
  kind: 'decision-tree' | 'process-flow' | 'timeline' | 'statistics' | 'pillars' | 'comparison' | 'jurisdiction-steps' | 'regulatory-checklist' | 'roof-explainer' | 'project-check' | 'obligation-triggers' | 'inclination-check' | 'funding-selector' | 'funding-status' | 'roof-duty-check' | 'battery-eligibility' | 'own-power-steps' | 'winter-angle' | 'solar-law-timeline' | 'solar-cadastre-check' | 'current-law-comparison' | 'compliance-options' | 'fer-procedure' | 'efficiency-decision' | 'uri-transition' | 'vaud-transition' | 'valais-roof-check' | 'valais-large-roofs' | 'zug-power-choice' | 'zug-renovation-bonus' | 'zurich-jurisdictions' | 'zurich-law-status';
  title: string;
  intro?: string;
  items: { title: string; text: string; detail?: string; value?: string; sourceIds: string[] }[];
  columns?: [string, string];
  rows?: { label: string; left: string; right: string; sourceIds: string[] }[];
}

export interface GuideSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  sourceIds: string[];
  module?: GuideModule;
  notice?: { title: string; text: string; status: 'future' | 'important' };
}

export interface CantonGuide {
  id: CantonGuideId;
  path: string;
  canton: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  quickFacts: { value: string; label: string; sourceIds: string[] }[];
  sections: GuideSection[];
  ctaAfterSection?: string;
  faqs: { question: string; answer: string; sourceIds: string[] }[];
  sources: GuideSource[];
}