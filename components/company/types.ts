export type { CompanyLocale } from './content';
export type CompanySubject = 'about' | 'team' | 'contact' | 'faq';
export interface TextBlock { title: string; text: string }
export interface Person { name: string; role: string; bio: string[] }
export interface CompanyCopy {
  home: string; breadcrumb: string; contents: string; privacy: string; portrait: string; groupPhoto: string; photoPending: string;
  labels: Record<CompanySubject, string>;
  pages: Record<CompanySubject, { title: string; intro: string; description: string }>;
  quote: string; quoteTitle: string; quoteText: string;
  facts: { value: string; label: string }[];
  about: { title: string; paragraphs: string[]; storyTitle: string; story: string[]; principlesTitle: string; principles: TextBlock[]; selectionTitle: string; selectionIntro: string; criteria: TextBlock[]; feedback: string; disclaimer: string; modelTitle: string; model: string[] };
  team: { title: string; intro: string; people: Person[]; responsibilitiesTitle: string; responsibilities: string };
  contact: { general: string; requests: string; phone: string; address: string; country: string; canton: string; availability: string; daily: string; timing: string; mario: string; languagesTitle: string; languagesIntro: string; languages: string[]; locationTitle: string; location: string[]; partnerTitle: string; partnerText: string; existingTitle: string; existingText: string };
  faq: { groupTitles: string[]; helpTitle: string; helpText: string };
}
export interface CompanyQuestion { id: number; question: string; answer: string[] }
