'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Locale } from './i18n/config';

const LocaleContext = createContext<Locale>('de');

export function LocaleProvider({
  children,
  locale
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <LocaleContext.Provider value={locale}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}
