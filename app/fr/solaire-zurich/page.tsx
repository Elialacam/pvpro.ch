import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-zurich';
export const metadata = cantonMetadata(path, 'fr');

export default function ZurichSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}