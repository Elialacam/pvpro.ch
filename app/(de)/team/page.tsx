import { TeamPage } from '@/components/company/CompanyPages';
import { companyPageMetadata } from '@/components/company/metadata';

export const metadata = companyPageMetadata('de', 'team');
export default function Page() { return <TeamPage locale="de" />; }
