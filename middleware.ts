import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // ── Redirect solarheim.ch → pvpro.ch (301 permanent) ───────────────────────
  if (hostname.includes('solarheim.ch')) {
    url.host = 'pvpro.ch';
    url.protocol = 'https:';
    return NextResponse.redirect(url, { status: 301 });
  }

  // ── Redirect www.pvpro.ch → pvpro.ch (301 permanent) ───────────────────────
  // Covers ALL paths: /, /en, /fr, /it, /sitemap.xml, /solaranlage-bern, etc.
  if (hostname === 'www.pvpro.ch' || hostname.startsWith('www.pvpro.ch:')) {
    url.host = 'pvpro.ch';
    url.protocol = 'https:';
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match every request except Next.js internals and static assets
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
