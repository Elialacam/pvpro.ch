import { CompanyFaqPage } from '@/components/company/CompanyPages';
import { companyPageMetadata } from '@/components/company/metadata';

export const metadata = companyPageMetadata('it', 'faq');
export default function Page() { return <CompanyFaqPage locale="it" />; }
