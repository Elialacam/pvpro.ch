'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocale } from '@/lib/LocaleContext';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const HOME_PATHS = ['/', '/fr', '/en', '/it'];

const navItems = [
  { label: 'Wie es funktioniert', href: '/#wie-es-funktioniert' },
  { label: 'Solaranlage', href: '/#solaranlage' },
  { label: 'Förderungen', href: '/#foerderungen' },
  { label: 'Über uns', href: '/#ueber-uns' },
];

const ctaLabels: Record<string, string> = {
  de: 'Offerte anfordern',
  fr: 'Demander un devis',
  en: 'Request Quote',
  it: 'Richiedi preventivo',
};

const homeLinks: Record<string, string> = {
  de: '/',
  fr: '/fr',
  en: '/en',
  it: '/it',
};

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const isHome = HOME_PATHS.includes(pathname);
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOut = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('mousedown', onClickOut);
    return () => document.removeEventListener('mousedown', onClickOut);
  }, []);

  const textColor = transparent ? 'text-white' : 'text-gray-800';
  const cta = ctaLabels[locale] || ctaLabels.de;
  const homeHref = homeLinks[locale] || '/';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: transparent ? 'transparent' : 'rgba(255,255,255,0.97)',
        boxShadow: transparent ? 'none' : '0 1px 12px rgba(0,0,0,0.08)',
        backdropFilter: transparent ? 'none' : 'blur(8px)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">

          {/* Logo */}
          <Link href={homeHref} className="flex-shrink-0">
            <Image
              src="/logo-pvpro.png"
              alt="PVPro.ch"
              width={160}
              height={44}
              className="h-8 sm:h-9 w-auto"
              style={transparent ? { filter: 'brightness(0) invert(1)' } : {}}
            />
          </Link>

          {/* Center — Otovo-style pill nav */}
          <div
            ref={navRef}
            className="hidden md:flex items-center rounded-full px-1 py-1 relative"
            style={{
              background: transparent ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {navItems.map((item, i) => (
              <div key={i} className="relative">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${textColor} ${
                    openIndex === i
                      ? transparent
                        ? 'bg-white/20'
                        : 'bg-black/10'
                      : transparent
                      ? 'hover:bg-white/15'
                      : 'hover:bg-black/07'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown panel — empty, user will fill content */}
                {openIndex === i && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-2xl bg-white shadow-xl border border-gray-100 py-2 z-50"
                  >
                    <div className="px-4 py-3 text-xs text-gray-400 italic">
                      Inhalt folgt…
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: lang switcher + CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div style={transparent ? { filter: 'brightness(0) invert(1)' } : {}}>
              <LanguageSwitcher />
            </div>

            <Link
              href="/anfrage"
              className="hidden sm:inline-flex items-center font-semibold text-sm px-5 py-2.5 rounded-full border-2 transition-all duration-200 whitespace-nowrap"
              style={
                transparent
                  ? { borderColor: 'rgba(255,255,255,0.9)', color: 'white' }
                  : { borderColor: '#F97316', color: '#F97316' }
              }
            >
              {cta}
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
