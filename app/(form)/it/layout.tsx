import type { Metadata } from 'next';
import RootDocument from '@/app/RootDocument';
import { baseMetadata } from '@/app/baseMetadata';
import { LocaleProvider } from '@/lib/LocaleContext';

export const metadata: Metadata = baseMetadata;

export default function FormItLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootDocument lang="it-CH">
      <LocaleProvider locale="it">
        <main className="min-h-[100dvh]">{children}</main>
      </LocaleProvider>
    </RootDocument>
  );
}
