import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/fr/solaire-schaffhouse';
export const metadata = cantonMetadata(path, 'fr');

export default function SchaffhouseSolarPage() {
  return <CantonPageRoute path={path} locale="fr" />;
}