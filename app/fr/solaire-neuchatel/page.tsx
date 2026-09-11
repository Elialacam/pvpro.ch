import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-neuchatel';
export const metadata = cantonMetadata(path, 'fr');

export default function NeuchatelSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}