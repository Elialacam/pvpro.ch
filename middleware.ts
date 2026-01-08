import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Inline locale configuration for Edge runtime compatibility
const locales = ['de', 'fr', 'en'] as const;
const defaultLocale = 'de';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // Redirect solarheim.ch to pvpro.ch (301 permanent)
  if (hostname.includes('solarheim.ch')) {
    const url = request.nextUrl.clone();
    url.host = 'pvpro.ch';
    url.protocol = 'https:';

    return NextResponse.redirect(url, { status: 301 });
  }

  const pathname = request.nextUrl.pathname;

  // Check if the pathname already has a valid locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname already has a valid locale, continue
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // For default locale (de), no redirect needed - continue as is
  // This keeps German URLs without /de/ prefix for SEO continuity
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths for domain redirect check
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
