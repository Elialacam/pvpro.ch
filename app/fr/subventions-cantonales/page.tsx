import { CantonalSubsidyPage, subsidyMetadata } from '@/components/subsidy-guides';
import { pageMetadata } from '@/lib/pageMetadata';
export const metadata = pageMetadata(subsidyMetadata.cantonal.fr, { path: '/fr/subventions-cantonales', locale: 'fr' });
export default function Page() { return <CantonalSubsidyPage locale="fr" />; }
