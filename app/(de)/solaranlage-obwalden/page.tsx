import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/solaranlage-obwalden';
export const metadata = cantonMetadata(path, 'de');

export default function ObwaldenSolarPage() {
  return <CantonPageRoute path={path} locale="de" />;
}