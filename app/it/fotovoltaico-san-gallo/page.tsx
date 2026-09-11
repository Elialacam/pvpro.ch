import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-san-gallo';
export const metadata = cantonMetadata(path, 'it');

export default function SanGalloSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}