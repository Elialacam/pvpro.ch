import { TeamPage } from '@/components/company/CompanyPages';
import { companyContent } from '@/components/company/content';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata({ title: 'Team e responsabilità', description: companyContent.it.teamMeta }, { path: '/it/team', locale: 'it' });
export default function Page() { return <TeamPage locale="it" />; }
