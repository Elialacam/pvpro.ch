import { FederalSubsidyPage, subsidyMetadata } from '@/components/subsidy-guides';
import { pageMetadata } from '@/lib/pageMetadata';
export const metadata = pageMetadata(subsidyMetadata.federal.de, { path: '/einmalverguetung', locale: 'de' });
export default function Page() { return <FederalSubsidyPage locale="de" />; }
