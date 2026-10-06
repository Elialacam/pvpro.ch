import { FederalSubsidyPage, subsidyMetadata } from '@/components/subsidy-guides';
import { pageMetadata } from '@/lib/pageMetadata';
export const metadata = pageMetadata(subsidyMetadata.federal.fr, { path: '/fr/retribution-unique', locale: 'fr' });
export default function Page() { return <FederalSubsidyPage locale="fr" />; }
