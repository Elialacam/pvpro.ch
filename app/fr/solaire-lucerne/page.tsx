import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-lucerne';
export const metadata = cantonMetadata(path, 'fr');

export default function LucerneSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}