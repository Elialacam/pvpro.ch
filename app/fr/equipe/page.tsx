import { TeamPage } from '@/components/company/CompanyPages';
import { companyContent } from '@/components/company/content';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata({ title: 'Équipe et responsabilités', description: companyContent.fr.teamMeta }, { path: '/fr/equipe', locale: 'fr' });
export default function Page() { return <TeamPage locale="fr" />; }
