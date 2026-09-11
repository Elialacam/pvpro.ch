import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/solaranlage-neuenburg';
export const metadata = cantonMetadata(path, 'de');

export default function NeuenburgSolarPage() {
  return <CantonPageRoute path={path} locale="de" />;
}