'use client';

import Header from '@/components/Header';
import { LocaleProvider } from '@/lib/LocaleContext';
import { getLocaleFromPathname } from '@/lib/i18n';
import { usePathname } from 'next/navigation';

export default function FormLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (
    <LocaleProvider locale={locale}>
      <Header />
      <main className="min-h-screen pt-20">
        {children}
      </main>
    </LocaleProvider>
  );
}
