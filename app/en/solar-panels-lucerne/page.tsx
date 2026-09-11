import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-lucerne';
export const metadata = cantonMetadata(path, 'en');

export default function LucerneSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}