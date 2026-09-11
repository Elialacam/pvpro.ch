import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-glarona';
export const metadata = cantonMetadata(path, 'it');

export default function GlaronaSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}