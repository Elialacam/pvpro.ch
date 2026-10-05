import { ContactPage } from '@/components/company/CompanyPages';
import { companyContent } from '@/components/company/content';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata({ title: 'Contact', description: companyContent.en.contactMeta }, { path: '/en/contact', locale: 'en' });
export default function Page() { return <ContactPage locale="en" />; }
