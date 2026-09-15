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
import type { CantonGuide } from './types';

export const cantonGuides: CantonGuide[] = [aargau, ausserrhoden, innerrhoden, basel, bern, freiburg, genf, glarus, graubunden, jura, luzern, neuenburg, nidwalden, obwalden, schaffhausen];

/** Deliberately limited to the commissioned German-language guides. */
export function getCantonGuide(slug: string, language: string): CantonGuide | undefined {
  return language === 'de' ? cantonGuides.find(guide => guide.id === slug) : undefined;
}

export function getCantonGuideByPath(path: string, language: string): CantonGuide | undefined {
  return language === 'de' ? cantonGuides.find(guide => guide.path === path) : undefined;
}