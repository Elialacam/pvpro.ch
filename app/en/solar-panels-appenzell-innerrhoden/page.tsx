import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-appenzell-innerrhoden';
export const metadata = cantonMetadata(path, 'en');

export default function AppenzellInnerrhodenSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}