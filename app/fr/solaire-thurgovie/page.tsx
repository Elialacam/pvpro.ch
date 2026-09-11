import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-thurgovie';
export const metadata = cantonMetadata(path, 'fr');

export default function ThurgovieSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}