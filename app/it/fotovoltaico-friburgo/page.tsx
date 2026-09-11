import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-friburgo';
export const metadata = cantonMetadata(path, 'it');

export default function FriburgoSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}