import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-grigioni';
export const metadata = cantonMetadata(path, 'it');

export default function GrigioniSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}