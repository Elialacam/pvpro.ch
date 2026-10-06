import { InstallerGuide } from '../InstallerGuide';
import { guideContent, guidePaths } from '../content';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata(
  { title: guideContent.en.metaTitle, description: guideContent.en.metaDescription },
  { path: guidePaths.en, locale: 'en', type: 'article' },
);

export default function Page() {
  return <InstallerGuide locale="en" />;
}
