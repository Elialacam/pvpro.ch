import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-nidwald';
export const metadata = cantonMetadata(path, 'fr');

export default function NidwaldSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}