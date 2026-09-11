import { Metadata } from 'next';
import { cantonAreas, CantonLocale } from '@/lib/cantons';
import { pageMetadata } from '@/lib/pageMetadata';

const SITE_URL = 'https://www.pvpro.ch';

const localizedMeta = {
  de: {
    title: (name: string) => `Solaranlage: ${name}`,
    description: (name: string) => `Vergleichen Sie Solarofferten für Ihr Projekt: ${name}.`,
  },
  fr: {
    title: (name: string) => `Installation solaire : ${name}`,
    description: (name: string) => `Comparez les offres solaires pour votre projet : ${name}.`,
  },
  it: {
    title: (name: string) => `Impianto fotovoltaico: ${name}`,
    description: (name: string) => `Confronta le offerte fotovoltaiche per il tuo progetto: ${name}.`,
  },
  en: {
    title: (name: string) => `Solar panels: ${name}`,
    description: (name: string) => `Compare solar quotes for your project: ${name}.`,
  },
} satisfies Record<CantonLocale, {
  title: (name: string) => string;
  description: (name: string) => string;
}>;

export function cantonMetadata(path: string, locale: CantonLocale): Metadata {
  const area = cantonAreas.find((candidate) => candidate.paths[locale] === path);
  if (!area) {
    return pageMetadata({}, { path, locale });
  }

  const names = Object.fromEntries(
    (Object.keys(area.paths) as CantonLocale[]).map((language) => [
      `${language}-CH`,
      `${SITE_URL}${area.paths[language]}`,
    ]),
  );

  return pageMetadata({
    title: localizedMeta[locale].title(area.names[locale]),
    description: localizedMeta[locale].description(area.names[locale]),
    alternates: {
      languages: {
        ...names,
        'x-default': `${SITE_URL}${area.paths.de}`,
      },
    },
  }, { path, locale });
}

export function cantonAreaForPath(path: string, locale: CantonLocale) {
  return cantonAreas.find((area) => area.paths[locale] === path);
}