import { guide as aargau } from './aargau';
import { guide as ausserrhoden } from './appenzell-ausserrhoden';
import { guide as innerrhoden } from './appenzell-innerrhoden';
import { guide as basel } from './basel';
import { guide as bern } from './bern';
import { guide as freiburg } from './freiburg';
import { guide as genf } from './genf';
import { guide as glarus } from './glarus';
import { guide as graubunden } from './graubunden';
import { guide as jura } from './jura';
import { guide as luzern } from './luzern';
import { guide as neuenburg } from './neuenburg';
import { guide as nidwalden } from './nidwalden';
import { guide as obwalden } from './obwalden';
import { guide as schaffhausen } from './schaffhausen';
import { guide as schwyz } from './schwyz';
import { guide as solothurn } from './solothurn';
import { guide as stGallen } from './st-gallen';
import { guide as tessin } from './tessin';
import { guide as thurgau } from './thurgau';
import { guide as uri } from './uri';
import { guide as waadt } from './waadt';
import { guide as wallis } from './wallis';
import { guide as zug } from './zug';
import { guide as zurich } from './zurich';
import type { CantonGuide } from './types';
import type { CantonLocale } from '@/lib/cantons';
import { cantonAreas } from '@/lib/cantons';
import { cantonGuidesIt } from './it';
import { cantonGuidesFr } from './fr';
import { cantonGuidesEn } from './en';

export const cantonGuides: CantonGuide[] = [aargau, ausserrhoden, innerrhoden, basel, bern, freiburg, genf, glarus, graubunden, jura, luzern, neuenburg, nidwalden, obwalden, schaffhausen, schwyz, solothurn, stGallen, tessin, thurgau, uri, waadt, wallis, zug, zurich];

const guidesByLocale: Record<CantonLocale, CantonGuide[]> = {
  de: cantonGuides,
  it: cantonGuidesIt,
  fr: cantonGuidesFr,
  en: cantonGuidesEn,
};

function normalizedId(id: string) {
  return id === 'zuerich' ? 'zurich' : id;
}

function slugify(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function getCantonGuide(slug: string, language: string): CantonGuide | undefined {
  if (!(language in guidesByLocale)) return undefined;
  const locale = language as CantonLocale;
  if (slug.startsWith('/')) return getCantonGuideByPath(slug, locale);
  const cleanSlug = slug.replace(/^\/|\/$/g, '');
  const area = cantonAreas.find((candidate) => {
    const routeSlug = candidate.paths[locale].split('/').pop();
    return normalizedId(candidate.id) === normalizedId(cleanSlug)
      || routeSlug === cleanSlug
      || slugify(candidate.names[locale]) === slugify(cleanSlug);
  });
  const guideId = normalizedId(area?.id ?? cleanSlug);
  return guidesByLocale[locale].find(guide => guide.id === guideId);
}

export function getCantonGuideByPath(path: string, language: string): CantonGuide | undefined {
  if (!(language in guidesByLocale)) return undefined;
  const locale = language as CantonLocale;
  const normalizedPath = path.length > 1 ? path.replace(/\/$/, '') : path;
  return guidesByLocale[locale].find(guide => guide.path === normalizedPath);
}

export function requireCantonGuide(slug: string, language: CantonLocale): CantonGuide {
  const guide = getCantonGuide(slug, language);
  if (!guide) throw new Error(`Missing ${language} canton guide for "${slug}"`);
  return guide;
}