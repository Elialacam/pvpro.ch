import { AboutPage } from '@/components/company/CompanyPages';
import { companyPageMetadata } from '@/components/company/metadata';

export const metadata = companyPageMetadata('fr', 'about');
export default function Page() { return <AboutPage locale="fr" />; }
