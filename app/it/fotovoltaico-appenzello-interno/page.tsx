import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-appenzello-interno';
export const metadata = cantonMetadata(path, 'it');

export default function AppenzelloInternoSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}