import { ContactPage } from '@/components/company/CompanyPages';
import { companyContent } from '@/components/company/content';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata({ title: 'Kontakt', description: companyContent.de.contactMeta }, { path: '/kontakt', locale: 'de' });
export default function Page() { return <ContactPage locale="de" />; }
