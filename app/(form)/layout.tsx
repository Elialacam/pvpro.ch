'use client';

import { LocaleProvider } from '@/lib/LocaleContext';
import { getLocaleFromPathname } from '@/lib/i18n';
import { usePathname } from 'next/navigation';

export default function FormLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (
    <LocaleProvider locale={locale}>
      <main className="min-h-screen">
        {children}
      </main>
    </LocaleProvider>
  );
}
