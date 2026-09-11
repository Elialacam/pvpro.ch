import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-nidwalden';
export const metadata = cantonMetadata(path, 'en');

export default function NidwaldenSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}