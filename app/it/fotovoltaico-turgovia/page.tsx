import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-turgovia';
export const metadata = cantonMetadata(path, 'it');

export default function TurgoviaSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}