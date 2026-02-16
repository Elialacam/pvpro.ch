'use client';

import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { Locale } from '@/lib/i18n';
import { useLocale } from '@/lib/LocaleContext';

// Navigation links per locale
const navLinks: Record<Locale, { cta: string; home: string }> = {
  de: {
    cta: 'Offerte anfordern',
    home: '/',
  },
  fr: {
    cta: 'Demander un devis',
    home: '/fr',
  },
  en: {
    cta: 'Request Quote',
    home: '/en',
  },
  it: {
    cta: 'Richiedi preventivo',
    home: '/it',
  },
};

export default function Header() {
  const locale = useLocale();
  const links = navLinks[locale] || navLinks.de;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href={links.home} className="flex items-center group">
            <Image
              src="/logo-pvpro.png"
              alt="PVPro.ch"
              width={200}
              height={56}
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-3 sm:gap-6">
            <LanguageSwitcher />
            <button 
              onClick={() => {
                const formElement = document.getElementById('formular');
                if (formElement) {
                  const elementPosition = formElement.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - (window.innerHeight / 2) + (formElement.offsetHeight / 2);
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="btn-primary hidden sm:inline-flex"
            >
              {links.cta}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
