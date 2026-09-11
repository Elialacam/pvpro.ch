import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-ticino';
export const metadata = cantonMetadata(path, 'en');

export default function TicinoSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}