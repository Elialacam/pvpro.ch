import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-bern';
export const metadata = cantonMetadata(path, 'en');

export default function BernSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}