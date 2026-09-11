import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-berna';
export const metadata = cantonMetadata(path, 'it');

export default function BernaSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}