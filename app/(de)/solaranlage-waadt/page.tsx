import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/solaranlage-waadt';
export const metadata = cantonMetadata(path, 'de');

export default function VaudSolarPage() {
  return <CantonPageRoute path={path} locale="de" />;
}