import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-neuchatel';
export const metadata = cantonMetadata(path, 'it');

export default function NeuchatelSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}