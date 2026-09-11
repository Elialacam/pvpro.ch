import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-berne';
export const metadata = cantonMetadata(path, 'fr');

export default function BerneSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}