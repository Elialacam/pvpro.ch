import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-solothurn';
export const metadata = cantonMetadata(path, 'en');

export default function SolothurnSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}