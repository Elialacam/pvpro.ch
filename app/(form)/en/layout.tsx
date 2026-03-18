import { LocaleProvider } from '@/lib/LocaleContext';

export default function FormEnLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider locale="en">
      {children}
    </LocaleProvider>
  );
}
