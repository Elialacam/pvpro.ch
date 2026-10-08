import { ContactPage } from '@/components/company/CompanyPages';
import { companyPageMetadata } from '@/components/company/metadata';

export const metadata = companyPageMetadata('de', 'contact');
export default function Page() { return <ContactPage locale="de" />; }
