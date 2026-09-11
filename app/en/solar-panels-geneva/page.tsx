import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-geneva';
export const metadata = cantonMetadata(path, 'en');

export default function GenevaSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}