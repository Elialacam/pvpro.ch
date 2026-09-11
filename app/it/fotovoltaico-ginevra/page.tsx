import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/it/fotovoltaico-ginevra';
export const metadata = cantonMetadata(path, 'it');

export default function GinevraSolarPage() {
  return <CantonPageRoute path={path} locale="it" />;
}