import { LocaleProvider } from '@/lib/LocaleContext';

export default function FormItLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider locale="it">
      {children}
    </LocaleProvider>
  );
}
