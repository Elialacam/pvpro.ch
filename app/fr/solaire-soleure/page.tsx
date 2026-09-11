import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-soleure';
export const metadata = cantonMetadata(path, 'fr');

export default function SoleureSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}