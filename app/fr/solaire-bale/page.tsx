import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-bale';
export const metadata = cantonMetadata(path, 'fr');

export default function BaleSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}