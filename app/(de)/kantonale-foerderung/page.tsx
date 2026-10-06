import { CantonalSubsidyPage, subsidyMetadata } from '@/components/subsidy-guides';
import { pageMetadata } from '@/lib/pageMetadata';
export const metadata = pageMetadata(subsidyMetadata.cantonal.de, { path: '/kantonale-foerderung', locale: 'de' });
export default function Page() { return <CantonalSubsidyPage locale="de" />; }
