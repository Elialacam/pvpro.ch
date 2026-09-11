import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/solaranlage-tessin';
export const metadata = cantonMetadata(path, 'de');

export default function TicinoSolarPage() {
  return <CantonPageRoute path={path} locale="de" />;
}