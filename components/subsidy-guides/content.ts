import type { Metadata } from 'next';
import { de } from './de';
import { fr } from './fr';
import { en } from './en';
import { it } from './it';
import type { GuideKind, SubsidyContent, SubsidyLocale } from './types';

export const subsidyContent: Record<SubsidyLocale, SubsidyContent> = { de, fr, en, it };

export const subsidyPaths = {
  federal: {
    de: '/einmalverguetung',
    fr: '/fr/retribution-unique',
    en: '/en/federal-solar-subsidy',
    it: '/it/remunerazione-unica',
  },
  cantonal: {
    de: '/kantonale-foerderung',
    fr: '/fr/subventions-cantonales',
    en: '/en/cantonal-solar-subsidies',
    it: '/it/incentivi-cantonali',
  },
} as const;

export const zurichSubsidyPaths: Record<SubsidyLocale, string> = {
  de: '/foerderungen-kanton-zuerich',
  fr: '/fr/subventions-solaires-canton-zurich',
  en: '/en/solar-subsidies-canton-zurich',
  it: '/it/incentivi-solari-cantone-zurigo',
};

/** Ready to pass to pageMetadata(data, { path, locale, type: 'article' }). */
export function getSubsidyMetadata(kind: GuideKind, locale: SubsidyLocale): Metadata {
  const guide = subsidyContent[locale][kind];
  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `https://www.pvpro.ch${subsidyPaths[kind][locale]}`,
      languages: {
        ...Object.fromEntries(
          Object.entries(subsidyPaths[kind]).map(([language, path]) => [
            `${language}-CH`, `https://www.pvpro.ch${path}`,
          ]),
        ),
        'x-default': `https://www.pvpro.ch${subsidyPaths[kind].de}`,
      },
    },
  };
}

export const subsidyMetadata: Record<GuideKind, Record<SubsidyLocale, Metadata>> = {
  federal: {
    de: getSubsidyMetadata('federal', 'de'),
    fr: getSubsidyMetadata('federal', 'fr'),
    en: getSubsidyMetadata('federal', 'en'),
    it: getSubsidyMetadata('federal', 'it'),
  },
  cantonal: {
    de: getSubsidyMetadata('cantonal', 'de'),
    fr: getSubsidyMetadata('cantonal', 'fr'),
    en: getSubsidyMetadata('cantonal', 'en'),
    it: getSubsidyMetadata('cantonal', 'it'),
  },
};
