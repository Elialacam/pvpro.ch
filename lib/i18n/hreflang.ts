import { routeMap } from './routeMap';

const BASE = 'https://pvpro.ch';

/**
 * Generate Next.js `alternates` metadata for a given pathname.
 * Includes canonical + hreflang for all 4 locales + x-default.
 *
 * Usage:
 *   export const metadata: Metadata = {
 *     ...getAlternates('/solaranlage-kosten'),
 *   };
 */
export function getAlternates(path: string) {
  const map = routeMap[path];
  if (!map) {
    return {
      alternates: {
        canonical: `${BASE}${path}`,
      },
    };
  }

  return {
    alternates: {
      canonical: `${BASE}${path}`,
      languages: {
        'de-CH': `${BASE}${map.de}`,
        'fr-CH': `${BASE}${map.fr}`,
        'en-CH': `${BASE}${map.en}`,
        'it-CH': `${BASE}${map.it}`,
        'x-default': `${BASE}${map.de}`,
      },
    },
  };
}
