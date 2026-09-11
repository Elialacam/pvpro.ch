import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-valais';
export const metadata = cantonMetadata(path, 'en');

export default function ValaisSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}