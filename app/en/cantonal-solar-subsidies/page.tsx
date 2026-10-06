import { CantonalSubsidyPage, subsidyMetadata } from '@/components/subsidy-guides';
import { pageMetadata } from '@/lib/pageMetadata';
export const metadata = pageMetadata(subsidyMetadata.cantonal.en, { path: '/en/cantonal-solar-subsidies', locale: 'en' });
export default function Page() { return <CantonalSubsidyPage locale="en" />; }
