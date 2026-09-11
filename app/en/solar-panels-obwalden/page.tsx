import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-obwalden';
export const metadata = cantonMetadata(path, 'en');

export default function ObwaldenSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}