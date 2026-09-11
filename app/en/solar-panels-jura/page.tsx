import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-jura';
export const metadata = cantonMetadata(path, 'en');

export default function JuraSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}