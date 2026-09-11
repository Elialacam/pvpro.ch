import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-sciaffusa';
export const metadata = cantonMetadata(path, 'it');

export default function SciaffusaSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}