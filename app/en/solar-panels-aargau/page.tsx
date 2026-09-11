import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-aargau';
export const metadata = cantonMetadata(path, 'en');

export default function AargauSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}