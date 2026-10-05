import { ContactPage } from '@/components/company/CompanyPages';
import { companyContent } from '@/components/company/content';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata({ title: 'Contatti', description: companyContent.it.contactMeta }, { path: '/it/contatti', locale: 'it' });
export default function Page() { return <ContactPage locale="it" />; }
