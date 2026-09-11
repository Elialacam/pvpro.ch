import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-lucerna';
export const metadata = cantonMetadata(path, 'it');

export default function LucernaSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}