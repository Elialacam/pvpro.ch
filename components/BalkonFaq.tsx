import { ChevronDown } from 'lucide-react';
import { balkonFaqs } from '@/lib/balkonFaqs';

export default function BalkonFaq() {
  return (
    <div className="rounded-2xl border border-gray-100 px-6 shadow-sm bg-white">
      {balkonFaqs.map((f, i) => (
        <details key={i} className="group border-b border-gray-100 last:border-0">
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 py-5 text-left">
            <span className="font-bold text-gray-900 text-sm sm:text-base">{f.q}</span>
            <ChevronDown className="h-5 w-5 flex-shrink-0 text-[#fcb210] transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="pb-5 text-sm leading-relaxed text-gray-500">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
