import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-argovie';
export const metadata = cantonMetadata(path, 'fr');

export default function ArgovieSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}