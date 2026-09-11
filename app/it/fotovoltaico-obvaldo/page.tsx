import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-obvaldo';
export const metadata = cantonMetadata(path, 'it');

export default function ObvaldoSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}