import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-basel';
export const metadata = cantonMetadata(path, 'en');

export default function BaselSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}