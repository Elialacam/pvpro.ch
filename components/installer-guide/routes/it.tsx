import { InstallerGuide } from '../InstallerGuide';
import { guideContent, guidePaths } from '../content';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata(
  { title: guideContent.it.metaTitle, description: guideContent.it.metaDescription },
  { path: guidePaths.it, locale: 'it', type: 'article' },
);

export default function Page() {
  return <InstallerGuide locale="it" />;
}
