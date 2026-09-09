'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale, localeNames, getLocaleFromPathname } from '@/lib/i18n';
import { routeMap } from '@/lib/i18n/routeMap';
import { seoRouteGroup } from '@/lib/seoRoutes';
import { articleLocalePaths, manualArticleLocaleSlugs } from '@/lib/articleSeoRoutes';
import { getAutoBlogSlugRecord } from '@/lib/autoBlogSlugs';
import { Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  transparent?: boolean;
}

const languageOrder: Locale[] = ['de', 'it', 'fr', 'en'];

const localeHomes: Record<Locale, string> = {
  de: '/',
  it: '/it',
  fr: '/fr',
  en: '/en',
};

const routeMapFallbackPaths = new Set([
  '/anfrage', '/fr/demande', '/en/request', '/it/richiesta',
  '/danke', '/fr/merci', '/en/thank-you', '/it/grazie',
]);

function normalizePath(pathname: string): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return path === '/' ? path : path.replace(/\/+$/, '');
}

function isKnownManualArticle(slug: string): boolean {
  return Object.values(manualArticleLocaleSlugs).some(group =>
    (Object.values(group) as string[]).includes(slug)
  );
}

function getLanguageTargets(pathname: string): Record<Locale, string> {
  const cleanPath = normalizePath(pathname);
  const fallbackTargets = { ...localeHomes };
  const currentLocale = getLocaleFromPathname(cleanPath);
  const segments = cleanPath.split('/').filter(Boolean);
  const contentSegments = segments[0] === currentLocale ? segments.slice(1) : segments;

  if (contentSegments[0] === 'blog' && contentSegments.length === 2) {
    const slug = contentSegments[1];
    if (getAutoBlogSlugRecord(slug, currentLocale) || isKnownManualArticle(slug)) {
      return articleLocalePaths(slug, currentLocale);
    }
  }

  const seoGroup = seoRouteGroup(cleanPath);
  if (seoGroup) {
    return languageOrder.reduce((targets, locale) => {
      targets[locale] = seoGroup.paths[locale] ?? localeHomes[locale];
      return targets;
    }, { ...fallbackTargets });
  }

  // routeMap is reserved for the non-indexable form and thank-you route groups.
  if (routeMapFallbackPaths.has(cleanPath) && routeMap[cleanPath]) {
    return languageOrder.reduce((targets, locale) => {
      targets[locale] = routeMap[cleanPath][locale] ?? localeHomes[locale];
      return targets;
    }, { ...fallbackTargets });
  }

  return fallbackTargets;
}

export default function LanguageSwitcher({ transparent = false }: Props) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = getLocaleFromPathname(pathname);
  const languageTargets = getLanguageTargets(pathname);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-[9999] origin-top-right"
          >
            {languageOrder.map((locale) => (
              <Link
                key={locale}
                href={languageTargets[locale]}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
