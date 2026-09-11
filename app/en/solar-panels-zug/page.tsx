import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-zug';
export const metadata = cantonMetadata(path, 'en');

export default function ZugSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}