'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLocale } from '@/lib/LocaleContext';
import { faqContent, FAQItem } from '@/lib/faqData';

interface FAQProps {
  items?: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const locale = useLocale();
  const content = faqContent[locale] || faqContent.de;
  const faqItems = items || content.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-sans font-semibold tracking-tight text-gray-900 pr-8">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
