import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-appenzell-ausserrhoden';
export const metadata = cantonMetadata(path, 'en');

export default function AppenzellAusserrhodenSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}