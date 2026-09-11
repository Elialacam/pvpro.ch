import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-basilea';
export const metadata = cantonMetadata(path, 'it');

export default function BasileaSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}