import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-obwald';
export const metadata = cantonMetadata(path, 'fr');

export default function ObwaldSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}