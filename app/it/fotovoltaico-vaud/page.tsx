import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-vaud';
export const metadata = cantonMetadata(path, 'it');

export default function VaudSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}