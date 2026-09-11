import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-giura';
export const metadata = cantonMetadata(path, 'it');

export default function GiuraSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}