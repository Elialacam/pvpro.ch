import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-grisons';
export const metadata = cantonMetadata(path, 'en');

export default function GrisonsSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}