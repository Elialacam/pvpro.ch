import { AboutPage } from '@/components/company/CompanyPages';
import { companyPageMetadata } from '@/components/company/metadata';

export const metadata = companyPageMetadata('it', 'about');
export default function Page() { return <AboutPage locale="it" />; }
