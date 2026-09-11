import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-saint-gall';
export const metadata = cantonMetadata(path, 'fr');

export default function SaintGallSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}