import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/solaranlage-jura';
export const metadata = cantonMetadata(path, 'de');

export default function JuraSolarPage() {
  return <CantonPageRoute path={path} locale="de" />;
}