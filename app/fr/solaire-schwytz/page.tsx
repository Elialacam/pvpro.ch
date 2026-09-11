import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-schwytz';
export const metadata = cantonMetadata(path, 'fr');

export default function SchwytzSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}