import { InstallerGuide } from '../InstallerGuide';
import { guideContent, guidePaths } from '../content';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata(
  { title: guideContent.fr.metaTitle, description: guideContent.fr.metaDescription },
  { path: guidePaths.fr, locale: 'fr', type: 'article' },
);

export default function Page() {
  return <InstallerGuide locale="fr" />;
}
