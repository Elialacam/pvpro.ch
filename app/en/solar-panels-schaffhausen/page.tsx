import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-schaffhausen';
export const metadata = cantonMetadata(path, 'en');

export default function SchaffhausenSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}