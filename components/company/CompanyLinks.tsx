import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { companyContent, companyRoutes, type CompanyLocale } from './content';

export default function CompanyLinks({ locale }: { locale: CompanyLocale }) {
  const c = companyContent[locale];
  const routes = companyRoutes[locale];
  return <nav aria-label={c.about} className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-12 py-6 border-y border-gray-100">
    <Link href={routes.team} className="inline-flex items-center gap-2 text-sm font-semibold text-[#976200] hover:underline">{c.team}<ArrowRight size={16} aria-hidden="true" /></Link>
    <Link href={routes.contact} className="inline-flex items-center gap-2 text-sm font-semibold text-[#976200] hover:underline">{c.contact}<ArrowRight size={16} aria-hidden="true" /></Link>
  </nav>;
}
