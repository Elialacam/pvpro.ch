import { CantonPageRoute } from '@/components/CantonPage';
import { cantonMetadata } from '@/lib/canton-page';

const path = '/en/solar-panels-glarus';
export const metadata = cantonMetadata(path, 'en');

export default function GlarusSolarPage() {
  return <CantonPageRoute path={path} locale="en" />;
}