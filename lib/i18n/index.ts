// i18n utilities and translations export
import { Locale } from './config';
import { de } from './de';
import { fr } from './fr';
import { en } from './en';

const translations = {
  de,
  fr,
  en,
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.de;
}

export { de, fr, en };
export * from './config';
export type { TranslationKeys } from './de';
