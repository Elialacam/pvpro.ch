import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/solaranlage-genf';
export const metadata = cantonMetadata(path, 'de');

export default function GenevaSolarPage() {
  return <CantonPageRoute path={path} locale="de" />;
}