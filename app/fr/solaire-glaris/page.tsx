import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-glaris';
export const metadata = cantonMetadata(path, 'fr');

export default function GlarisSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}