import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-appenzell-rhodes-exterieures';
export const metadata = cantonMetadata(path, 'fr');

export default function AppenzellRhodesExterieuresSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}