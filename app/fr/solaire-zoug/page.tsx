import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-zoug';
export const metadata = cantonMetadata(path, 'fr');

export default function ZougSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}