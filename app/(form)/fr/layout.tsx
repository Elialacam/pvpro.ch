import { LocaleProvider } from '@/lib/LocaleContext';

export default function FormFrLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider locale="fr">
      {children}
    </LocaleProvider>
  );
}
