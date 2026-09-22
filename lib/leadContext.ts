import { cantonAreas, type CantonLocale } from '@/lib/cantons';

export type LeadLocale = CantonLocale;

const locales = new Set<LeadLocale>(['de', 'fr', 'it', 'en']);
const cantonById = new Map(cantonAreas.map((area) => [area.id, area]));
const cantonByPath = new Map(
  cantonAreas.flatMap((area) =>
    (Object.entries(area.paths) as [LeadLocale, string][]).map(([locale, path]) => [
      path,
      { canton: area.id, locale },
    ] as const),
  ),
);

function clean(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export function validLeadLocale(value: unknown): LeadLocale {
  const locale = clean(value, 2) as LeadLocale;
  return locales.has(locale) ? locale : 'de';
}

export function leadContextFromValues(
  localeValue: unknown,
  cantonValue: unknown,
  originValue: unknown,
  sourceValue: unknown,
): { locale: LeadLocale; canton?: string; origin?: string; source?: string } {
  const locale = validLeadLocale(localeValue);
  const canton = clean(cantonValue, 40);
  const requestedOrigin = clean(originValue, 180);
  const source = clean(sourceValue, 180);
  const area = cantonById.get(canton === 'zurich' ? 'zuerich' : canton);
  // Older guide links used source for their path. Treat that value as origin,
  // while reserving source for established campaign attribution.
  const origin = requestedOrigin || (source.startsWith('/') ? source : '');

  const context: { locale: LeadLocale; canton?: string; origin?: string; source?: string } = { locale };
  if (area && origin === area.paths[locale]) {
    context.canton = area.id;
    context.origin = origin;
  }
  if (source === 'chatgpt') context.source = source;
  return context;
}

export function leadContextFromPath(pathname: string | null, localeValue: unknown) {
  const locale = validLeadLocale(localeValue);
  const match = pathname ? cantonByPath.get(pathname) : undefined;
  if (!match || match.locale !== locale) return { locale };
  return { locale, canton: match.canton, origin: pathname! };
}