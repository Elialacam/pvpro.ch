import { FederalSubsidyPage, subsidyMetadata } from '@/components/subsidy-guides';
import { pageMetadata } from '@/lib/pageMetadata';
export const metadata = pageMetadata(subsidyMetadata.federal.it, { path: '/it/remunerazione-unica', locale: 'it' });
export default function Page() { return <FederalSubsidyPage locale="it" />; }
