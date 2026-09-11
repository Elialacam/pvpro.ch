import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-uri';
export const metadata = cantonMetadata(path, 'en');

export default function UriSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}