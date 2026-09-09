'use client';

import { useLocale } from '@/lib/LocaleContext';
import { faqContent, FAQItem } from '@/lib/faqData';

interface FAQProps {
  items?: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const locale = useLocale();
  const content = faqContent[locale] || faqContent.de;
  const faqItems = items || content.faqs;

  const eyebrows: Record<string, string> = { de: 'Häufige Fragen', fr: 'Questions fréquentes', en: 'Common Questions', it: 'Domande frequenti' };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-4xl">
        {!items && (
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-[#ffc812] uppercase tracking-widest mb-2">{eyebrows[locale] ?? eyebrows.de}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">{content.title}</h2>
          </div>
        )}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <summary className="flex cursor-pointer list-none select-none items-center justify-between px-6 py-4 text-left text-sm font-semibold text-gray-900">
                <span className="font-sans font-semibold tracking-tight text-gray-900 pr-8">
                  {item.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-lg text-[#fcb210] transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-gray-50 px-6 pb-5 text-sm leading-relaxed text-gray-600">
                <p className="pt-4">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
