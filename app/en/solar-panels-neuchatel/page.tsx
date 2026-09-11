import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-neuchatel';
export const metadata = cantonMetadata(path, 'en');

export default function NeuchatelSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}