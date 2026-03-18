'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale, locales, localeNames } from '@/lib/i18n';
import { getLocalizedRoute } from '@/lib/i18n/routeMap';
import { Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Props {
  transparent?: boolean;
}

export default function LanguageSwitcher({ transparent = false }: Props) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect current locale from path
  const currentLocale: Locale = pathname.startsWith('/fr') ? 'fr'
    : pathname.startsWith('/en') ? 'en'
    : pathname.startsWith('/it') ? 'it'
    : 'de';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isCityPage = /\/(solaranlage-|solaire-|fotovoltaico-)/.test(pathname);
  if (isCityPage) return null;

  const triggerColor = transparent ? 'text-white' : 'text-gray-700';
  const triggerHover = transparent ? 'hover:bg-white/15' : 'hover:bg-gray-100';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${triggerColor} ${triggerHover}`}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium uppercase">{currentLocale}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-[9999]">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={getLocalizedRoute(pathname, locale)}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                currentLocale === locale
                  ? 'bg-orange-50 text-orange-500 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>{localeNames[locale]}</span>
              {currentLocale === locale && (
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
