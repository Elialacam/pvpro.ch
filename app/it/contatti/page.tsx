import { ContactPage } from '@/components/company/CompanyPages';
import { companyPageMetadata } from '@/components/company/metadata';

export const metadata = companyPageMetadata('it', 'contact');
export default function Page() { return <ContactPage locale="it" />; }
