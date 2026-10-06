import { CantonalSubsidyPage, subsidyMetadata } from '@/components/subsidy-guides';
import { pageMetadata } from '@/lib/pageMetadata';
export const metadata = pageMetadata(subsidyMetadata.cantonal.it, { path: '/it/incentivi-cantonali', locale: 'it' });
export default function Page() { return <CantonalSubsidyPage locale="it" />; }
