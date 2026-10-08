import { de } from './content.de';
import { en } from './content.en';
import { fr } from './content.fr';
import { it } from './content.it';
import type { CompanyLocale } from './content';

export const localizedCompanyContent = { de, fr, en, it };
export const privacyRoutes: Record<CompanyLocale, string> = {
  de:'/datenschutz',fr:'/fr/protection-des-donnees',en:'/en/privacy',it:'/it/protezione-dati'
};
