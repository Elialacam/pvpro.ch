import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-st-gallen';
export const metadata = cantonMetadata(path, 'en');

export default function StGallenSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}