import { deQuestions } from './faq.de';
import { enQuestions } from './faq.en';
import { frQuestions } from './faq.fr';
import { itQuestions } from './faq.it';

// Kept independent from lib/faqData.ts, which belongs to the existing solar guides.
export const companyFaqData = {de:deQuestions,fr:frQuestions,en:enQuestions,it:itQuestions};
export const companyFaqGroups = [
  {id:'service',questions:[1,5,11]},
  {id:'request',questions:[2,3,4,6,9,10]},
  {id:'partners',questions:[7,13,19,20]},
  {id:'project',questions:[8,12,14,15,16,17,18]}
] as const;
