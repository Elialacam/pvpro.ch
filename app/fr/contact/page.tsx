import { ContactPage } from '@/components/company/CompanyPages';
import { companyPageMetadata } from '@/components/company/metadata';

export const metadata = companyPageMetadata('fr', 'contact');
export default function Page() { return <ContactPage locale="fr" />; }
