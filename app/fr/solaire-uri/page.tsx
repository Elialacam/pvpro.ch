import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-uri';
export const metadata = cantonMetadata(path, 'fr');

export default function UriSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}