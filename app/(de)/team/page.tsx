import { TeamPage } from '@/components/company/CompanyPages';
import { companyContent } from '@/components/company/content';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata({ title: 'Team und Zuständigkeiten', description: companyContent.de.teamMeta }, { path: '/team', locale: 'de' });
export default function Page() { return <TeamPage locale="de" />; }
