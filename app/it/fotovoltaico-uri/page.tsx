import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-uri';
export const metadata = cantonMetadata(path, 'it');

export default function UriSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}