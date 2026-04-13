import Script from 'next/script';
import { LocaleProvider } from '@/lib/LocaleContext';

export default function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider locale="de">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="afterInteractive"
      />
      {children}
    </LocaleProvider>
  );
}
