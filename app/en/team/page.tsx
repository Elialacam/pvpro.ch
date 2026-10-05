import { TeamPage } from '@/components/company/CompanyPages';
import { companyContent } from '@/components/company/content';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata({ title: 'Team and responsibilities', description: companyContent.en.teamMeta }, { path: '/en/team', locale: 'en' });
export default function Page() { return <TeamPage locale="en" />; }
