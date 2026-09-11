import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/solaranlage-appenzell-ausserrhoden';
export const metadata = cantonMetadata(path, 'de');

export default function AppenzellAusserrhodenSolarPage() {
  return <CantonPageRoute path={path} locale="de" />;
}