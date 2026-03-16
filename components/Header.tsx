'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import LiveBar from './LiveBar';
import { Locale } from '@/lib/i18n';
import { useLocale } from '@/lib/LocaleContext';

const navLinks: Record<Locale, { cta: string; home: string; anfrage: string }> = {
  de: { cta: 'Offerte anfordern', home: '/', anfrage: '/anfrage' },
  fr: { cta: 'Demander un devis', home: '/fr', anfrage: '/anfrage' },
  en: { cta: 'Request Quote', home: '/en', anfrage: '/anfrage' },
  it: { cta: 'Richiedi preventivo', home: '/it', anfrage: '/anfrage' },
};

export default function Header() {
  const locale = useLocale();
  const links = navLinks[locale] || navLinks.de;
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <LiveBar />
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href={links.home} className="flex items-center group">
            <Image src="/logo-pvpro.png" alt="PVPro.ch" width={200} height={56} className="h-8 sm:h-10 w-auto" />
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            <LanguageSwitcher />
            {isDesktop && (
              <Link href={links.anfrage} className="btn-primary">
                {links.cta}
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
