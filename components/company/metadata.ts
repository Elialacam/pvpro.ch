import { pageMetadata } from '@/lib/pageMetadata';
import { companyRoutes, type CompanyLocale } from './content';
import { localizedCompanyContent } from './localizedContent';
import type { CompanySubject } from './types';

export function companyPageMetadata(locale: CompanyLocale, subject: CompanySubject) {
  const c = localizedCompanyContent[locale];
  const path = companyRoutes[locale][subject];
  const languages = Object.fromEntries(
    (['de','fr','en','it'] as const).map(language => [`${language}-CH`,`https://www.pvpro.ch${companyRoutes[language][subject]}`])
  );
  return pageMetadata({
    title:c.labels[subject],
    description:c.pages[subject].description,
    alternates:{
      canonical:`https://www.pvpro.ch${path}`,
      languages:{...languages,'x-default':`https://www.pvpro.ch${companyRoutes.de[subject]}`}
    }
  },{path,locale});
}
