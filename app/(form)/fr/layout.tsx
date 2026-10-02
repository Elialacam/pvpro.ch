import type { Metadata } from 'next';
import RootDocument from '@/app/RootDocument';
import { baseMetadata } from '@/app/baseMetadata';
import { LocaleProvider } from '@/lib/LocaleContext';

export const metadata: Metadata = baseMetadata;

export default function FormFrLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootDocument lang="fr-CH">
      <LocaleProvider locale="fr">
        <main className="min-h-screen">{children}</main>
      </LocaleProvider>
    </RootDocument>
  );
}
