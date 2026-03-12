import { LocaleProvider } from '@/lib/LocaleContext';

export default function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider locale="de">
      {children}
    </LocaleProvider>
  );
}
