'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale, locales, localeNames, defaultLocale, getLocaleFromPathname, removeLocaleFromPathname } from '@/lib/i18n';
import { Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get the path without locale prefix
  const pathWithoutLocale = removeLocaleFromPathname(pathname);

  // Generate link for each locale
  function getLocalizedPath(locale: Locale): string {
    // If it's the default locale (de), don't add prefix
    if (locale === defaultLocale) {
      return pathWithoutLocale || '/';
    }
    // For other locales, add the prefix
    return `/${locale}${pathWithoutLocale || ''}`;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700 uppercase">
          {currentLocale}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={getLocalizedPath(locale)}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                currentLocale === locale
                  ? 'bg-primary-50 text-primary font-semibold'
                  : 'text-gray-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{localeNames[locale]}</span>
                {currentLocale === locale && (
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
