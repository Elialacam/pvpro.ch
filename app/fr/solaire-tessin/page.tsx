import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-tessin';
export const metadata = cantonMetadata(path, 'fr');

export default function TessinSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}