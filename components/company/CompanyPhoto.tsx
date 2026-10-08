import Image from 'next/image';
import { ImageIcon } from 'lucide-react';
import type { CompanyLocale } from './content';
import { localizedCompanyContent } from './localizedContent';
import styles from './CompanyPages.module.css';

type PhotoKey = 'elia' | 'mario' | 'marcus' | 'team';
// Populate only with the supplied, approved real photographs. Ratios remain stable.
export const companyPhotoAssets: Record<PhotoKey, string | null> = {
  elia:null, mario:null, marcus:null, team:null
};
const names: Record<PhotoKey, string> = {
  elia:'Elia Alacam',mario:'Mario Kopar',marcus:'Marcus Tezel',team:'Elia Alacam · Mario Kopar · Marcus Tezel'
};

export function CompanyPhoto({ locale, photo }: { locale: CompanyLocale; photo: PhotoKey }) {
  const c = localizedCompanyContent[locale];
  const group = photo === 'team';
  const label = `${group ? c.groupPhoto : c.portrait} — ${names[photo]}`;
  const src = companyPhotoAssets[photo];
  return <div className={`${styles.photo} ${group ? styles.groupPhoto : ''}`} aria-label={src ? undefined : label}>
    {src
      ? <Image src={src} alt={label} fill sizes={group ? '(max-width: 767px) 100vw, 700px' : '(max-width: 767px) 100vw, 280px'} />
      : <div className={styles.photoContent}>
        <ImageIcon size={32} strokeWidth={1.2} aria-hidden="true" />
        <span>{group ? c.groupPhoto : c.portrait}</span>
        <strong>{names[photo]}</strong>
        <span>{c.photoPending}</span>
      </div>}
  </div>;
}
