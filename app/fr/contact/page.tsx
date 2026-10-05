import { ContactPage } from '@/components/company/CompanyPages';
import { companyContent } from '@/components/company/content';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata({ title: 'Contact', description: companyContent.fr.contactMeta }, { path: '/fr/contact', locale: 'fr' });
export default function Page() { return <ContactPage locale="fr" />; }
