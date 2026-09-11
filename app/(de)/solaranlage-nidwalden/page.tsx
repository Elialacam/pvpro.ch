import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/solaranlage-nidwalden';
export const metadata = cantonMetadata(path, 'de');

export default function NidwaldenSolarPage() {
  return <CantonPageRoute path={path} locale="de" />;
}