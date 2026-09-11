import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-zurich';
export const metadata = cantonMetadata(path, 'en');

export default function ZurichSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}