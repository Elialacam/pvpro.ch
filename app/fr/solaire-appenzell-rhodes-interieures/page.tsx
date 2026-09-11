import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-appenzell-rhodes-interieures';
export const metadata = cantonMetadata(path, 'fr');

export default function AppenzellRhodesInterieuresSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}