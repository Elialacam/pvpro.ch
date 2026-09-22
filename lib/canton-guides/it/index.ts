import type { CantonGuide } from '../types';
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

export const cantonGuidesIt: CantonGuide[] = [
  aargau, ausserrhoden, innerrhoden, basel, bern, freiburg, genf, glarus,
  graubunden, jura, luzern, neuenburg, nidwalden, obwalden, schaffhausen,
  schwyz, solothurn, stGallen, tessin, thurgau, uri, waadt, wallis, zug, zurich,
];