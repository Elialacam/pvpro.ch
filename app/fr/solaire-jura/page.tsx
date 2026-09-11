import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-jura';
export const metadata = cantonMetadata(path, 'fr');

export default function JuraSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}