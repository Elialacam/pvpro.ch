import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';
import { CantonArea, CantonLocale } from '@/lib/cantons';
import { getCantonContent } from '@/lib/canton-content';
import { City } from '@/lib/cities';
import { cantonAreaForPath } from '@/lib/canton-page';

interface CantonPageProps {
  area: CantonArea;
  locale: CantonLocale;
}

export default function CantonPage({ area, locale }: CantonPageProps) {
  const city: City = {
    name: area.names[locale],
    slug: area.id,
    canton: area.code,
    language: locale,
  };

  return (
    <UniqueCityPage
      city={city}
      content={getCantonContent(area, locale)}
      accentColor="blue"
      suppressUnsupportedClaims
    />
  );
}

export function CantonPageRoute({ path, locale }: { path: string; locale: CantonLocale }) {
  const area = cantonAreaForPath(path, locale);
  if (!area) notFound();
  return <CantonPage area={area} locale={locale} />;
}