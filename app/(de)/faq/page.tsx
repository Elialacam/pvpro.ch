import { CompanyFaqPage } from '@/components/company/CompanyPages';
import { companyPageMetadata } from '@/components/company/metadata';

export const metadata = companyPageMetadata('de', 'faq');
export default function Page() { return <CompanyFaqPage locale="de" />; }
