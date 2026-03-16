'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { Locale } from '@/lib/i18n';
import { useLocale } from '@/lib/LocaleContext';
import { usePathname } from 'next/navigation';

const navLinks: Record<Locale, { cta: string; home: string; anfrage: string }> = {
  de: { cta: 'Offerte anfordern', home: '/', anfrage: '/anfrage' },
  fr: { cta: 'Demander un devis', home: '/fr', anfrage: '/anfrage' },
  en: { cta: 'Request Quote', home: '/en', anfrage: '/anfrage' },
  it: { cta: 'Richiedi preventivo', home: '/it', anfrage: '/anfrage' },
};

const HOME_PATHS = ['/', '/fr', '/en', '/it'];

export default function Header() {
  const locale = useLocale();
  const links = navLinks[locale] || navLinks.de;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const isHome = HOME_PATHS.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: transparent ? 'transparent' : 'rgba(255,255,255,0.97)',
        boxShadow: transparent ? 'none' : '0 1px 12px rgba(0,0,0,0.08)',
        backdropFilter: transparent ? 'none' : 'blur(8px)',
      }}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href={links.home} className="flex items-center">
            <Image
              src="/logo-pvpro.png"
              alt="PVPro.ch"
              width={200}
              height={56}
              className="h-8 sm:h-10 w-auto transition-all duration-300"
              style={transparent ? { filter: 'brightness(0) invert(1)' } : {}}
            />
          </Link>

          {/* Right: lang switcher + CTA */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div style={transparent ? { filter: 'brightness(0) invert(1)' } : {}}>
              <LanguageSwitcher />
            </div>
            <Link
              href={links.anfrage}
              className="hidden sm:inline-block font-semibold text-sm px-5 py-2.5 rounded-full border-2 transition-all duration-200"
              style={
                transparent
                  ? { borderColor: 'white', color: 'white' }
                  : { borderColor: '#F97316', color: '#F97316' }
              }
            >
              {links.cta}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
