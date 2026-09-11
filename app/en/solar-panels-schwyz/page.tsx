import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-schwyz';
export const metadata = cantonMetadata(path, 'en');

export default function SchwyzSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}