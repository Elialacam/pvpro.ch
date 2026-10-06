import { de } from './de';
import { fr } from './fr';
import { en } from './en';
import { it } from './it';
import type { GuideContent, GuideLocale } from './types';

export const guideContent: Record<GuideLocale, GuideContent> = { de, fr, en, it };
export { guidePaths } from './types';
export type { GuideContent, GuideLocale } from './types';
