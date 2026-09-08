import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { autoBlogByLegacySlug, autoBlogPath, type BlogLocale } from './lib/autoBlogSlugs';

const canonicalHost = 'www.pvpro.ch';
const legacyAliases: Record<string, string> = {
  '/fotovoltaico-ticino': '/it/fotovoltaico-ticino',
  '/it/impianto-fotovoltaico-ginevra': '/fr/solaire-geneve',
  '/it/impianto-fotovoltaico-lugano': '/it/fotovoltaico-ticino',
  '/solaranlage-fribourg': '/solaranlage-freiburg',
  '/solaranlage-genf': '/fr/solaire-geneve',
  '/solaranlage-zuerich': '/solaranlage-zurich',
  '/solaranlage-koeniz': '/solaranlage-bern',
  '/solaire-geneve': '/fr/solaire-geneve',
  '/solaranlage-baden': '/solaranlage-aargau',
  '/solaranlage-lugano': '/it/fotovoltaico-ticino',
  '/solaranlage-thun': '/solaranlage-bern',
  '/solaranlage-chur': '/solaranlage-graubunden',
};

function effectiveHostname(hostHeader: string | null, fallback: string) {
  const host = hostHeader?.trim().toLowerCase();
  if (!host || /[\s,/@]/.test(host)) return fallback.toLowerCase();

  // URL parsing safely handles both ordinary host:port values and bracketed
  // IPv6 without allowing a crafted Host value to become a redirect URL.
  try {
    return new URL(`http://${host}`).hostname.toLowerCase();
  } catch {
    return fallback.toLowerCase();
  }
}

function effectiveProtocol(forwardedProto: string | null, fallback: string) {
  // Proxies may append values; only accept a valid first client-facing value.
  const first = forwardedProto?.split(',')[0]?.trim().toLowerCase();
  return first === 'http' || first === 'https'
    ? first
    : fallback.replace(':', '').toLowerCase();
}

export interface CanonicalTargetInput {
  url: string;
  hostname: string;
  protocol: string;
}

/**
 * Return the terminal canonical URL, or null when no redirect is needed.
 * Kept pure so host/protocol/path combinations can be tested without a
 * NextRequest or an active server.
 */
export function canonicalTarget({ url, hostname, protocol }: CanonicalTargetInput) {
  const source = new URL(url);
  const normalizedHostname = hostname.toLowerCase();
  const isPvproHost = normalizedHostname === 'pvpro.ch' || normalizedHostname === canonicalHost;
  const isSolarheimHost =
    normalizedHostname === 'solarheim.ch' || normalizedHostname === 'www.solarheim.ch';

  // Preview, localhost, and any other unrelated hosts must remain untouched.
  if (!isPvproHost && !isSolarheimHost) return null;

  const pathname = source.pathname;
  let targetPathname = pathname;

  const legacyBlog = pathname.match(/^\/(?:(it|fr|en)\/)?blog\/([^/]+)\/?$/);
  if (legacyBlog) {
    const locale = (legacyBlog[1] ?? 'de') as BlogLocale;
    const record = autoBlogByLegacySlug[legacyBlog[2]];
    if (record) targetPathname = autoBlogPath(record, locale);
  }

  if (targetPathname.length > 1 && targetPathname.endsWith('/')) {
    targetPathname = targetPathname.slice(0, -1);
  }
  targetPathname = legacyAliases[targetPathname] ?? targetPathname;

  const needsRedirect =
    isSolarheimHost ||
    normalizedHostname !== canonicalHost ||
    protocol.toLowerCase() !== 'https' ||
    targetPathname !== pathname;

  if (!needsRedirect) return null;

  // Building from the canonical origin (rather than cloning nextUrl) avoids
  // retaining framework-internal trailing-slash normalization state.
  return new URL(`${targetPathname}${source.search}`, `https://${canonicalHost}`).toString();
}

export function middleware(request: NextRequest) {
  const hostname = effectiveHostname(request.headers.get('host'), request.nextUrl.hostname);
  const protocol = effectiveProtocol(
    request.headers.get('x-forwarded-proto'),
    request.nextUrl.protocol,
  );
  const pathname = request.nextUrl.pathname;
  const formPaths = ['/anfrage', '/fr/demande', '/en/request', '/it/richiesta'];
  const hasChatGPTSource = request.cookies.get('pvpro_source')?.value === 'chatgpt';
  const target = canonicalTarget({
    url: request.nextUrl.toString(),
    hostname,
    protocol,
  });

  // A single explicit 301 always reaches the final origin and path. Attribution
  // is included in that target where applicable so it cannot introduce a chain.
  if (target) {
    const url = new URL(target);
    if (hasChatGPTSource && formPaths.includes(url.pathname) && !url.searchParams.has('source')) {
      url.searchParams.set('source', 'chatgpt');
    }
    return NextResponse.redirect(url, { status: 301 });
  }

  // Preserve the existing attribution behavior for already canonical URLs.
  if (hasChatGPTSource && formPaths.includes(pathname) && !request.nextUrl.searchParams.has('source')) {
    const url = request.nextUrl.clone();
    url.searchParams.set('source', 'chatgpt');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths for domain redirect check
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
