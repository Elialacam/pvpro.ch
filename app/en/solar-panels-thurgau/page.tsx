import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-thurgau';
export const metadata = cantonMetadata(path, 'en');

export default function ThurgauSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}