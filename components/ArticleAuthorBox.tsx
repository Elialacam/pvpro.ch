import Link from 'next/link';
import { AUTHOR_IMAGE_PATH, authorDetails, type BlogLocale } from '@/lib/blogUtils';

export default function ArticleAuthorBox({ locale }: { locale: BlogLocale }) {
  const author = authorDetails(locale);
  return (
    <section className="rounded-2xl border border-gray-100 bg-gray-50 p-6" aria-label={author.label}>
      <div className="flex gap-4">
        {AUTHOR_IMAGE_PATH ? (
          <img src={AUTHOR_IMAGE_PATH} alt="" className="h-14 w-14 rounded-full object-cover" />
        ) : (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0d1117] font-bold text-[#fcb210]" aria-hidden="true">EA</div>
        )}
        <div>
          <p className="font-bold text-gray-900">Elia Alacam</p>
          <p className="text-sm text-[#b87900]">{author.role}</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{author.bio}</p>
          <Link href={author.href} className="mt-3 inline-block text-sm font-semibold text-[#b87900] hover:text-[#fcb210]">{author.label} →</Link>
        </div>
      </div>
    </section>
  );
}