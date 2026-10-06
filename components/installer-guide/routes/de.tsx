import { InstallerGuide } from '../InstallerGuide';
import { guideContent, guidePaths } from '../content';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata(
  { title: guideContent.de.metaTitle, description: guideContent.de.metaDescription },
  { path: guidePaths.de, locale: 'de', type: 'article' },
);

export default function Page() {
  return <InstallerGuide locale="de" />;
}
