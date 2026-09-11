import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/solaranlage-appenzell-innerrhoden';
export const metadata = cantonMetadata(path, 'de');

export default function AppenzellInnerrhodenSolarPage() {
  return <CantonPageRoute path={path} locale="de" />;
}