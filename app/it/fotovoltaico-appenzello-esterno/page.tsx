import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-appenzello-esterno';
export const metadata = cantonMetadata(path, 'it');

export default function AppenzelloEsternoSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}