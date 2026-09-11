import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-zurigo';
export const metadata = cantonMetadata(path, 'it');

export default function ZurigoSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}