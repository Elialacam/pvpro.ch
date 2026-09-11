import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-svitto';
export const metadata = cantonMetadata(path, 'it');

export default function SvittoSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}