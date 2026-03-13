import { LocaleProvider } from '@/lib/LocaleContext';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
});

export default function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider locale="de">
      <div className={dmSans.className} style={{ fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)' }}>
        {children}
      </div>
    </LocaleProvider>
  );
}
