// i18n utilities and translations export
import { Locale } from './config';
import { de } from './de';
import { fr } from './fr';
import { en } from './en';
import { it } from './it';

const translations: any = {
  de,
  fr,
  en,
  it,
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.de;
}

export { de, fr, en, it };
export * from './config';
export type { TranslationKeys } from './de';
