'use client';

import { LocaleProvider } from '@/lib/LocaleContext';
import Header from './Header';
import Footer from './Footer';
import { Locale } from '@/lib/i18n';

interface LanguageWrapperProps {
  children: React.ReactNode;
  locale: Locale;
}

export default function LanguageWrapper({ children, locale }: LanguageWrapperProps) {
  return (
    <LocaleProvider locale={locale}>
      <Header />
      <main>{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
