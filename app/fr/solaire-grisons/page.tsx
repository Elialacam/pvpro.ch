import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-grisons';
export const metadata = cantonMetadata(path, 'fr');

export default function GrisonsSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}