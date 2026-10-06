import { FederalSubsidyPage, subsidyMetadata } from '@/components/subsidy-guides';
import { pageMetadata } from '@/lib/pageMetadata';
export const metadata = pageMetadata(subsidyMetadata.federal.en, { path: '/en/federal-solar-subsidy', locale: 'en' });
export default function Page() { return <FederalSubsidyPage locale="en" />; }
