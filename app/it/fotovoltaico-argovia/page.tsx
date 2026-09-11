import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-argovia';
export const metadata = cantonMetadata(path, 'it');

export default function ArgoviaSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}