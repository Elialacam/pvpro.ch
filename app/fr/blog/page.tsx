import Image from 'next/image';
import Link from 'next/link';
import { blogPostsI18n } from '@/lib/blogPostsI18n';
import PlzWidget from '@/components/PlzWidget';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Guides | PVPro.ch – Énergie solaire en Suisse',
  description: 'Guides actuels, actualités et conseils sur les installations solaires, les subventions et le photovoltaïque en Suisse.',
  alternates: {
    canonical: 'https://pvpro.ch/fr/blog',
    languages: {
      'de-CH': 'https://pvpro.ch/blog',
      'fr-CH': 'https://pvpro.ch/fr/blog',
      'en-CH': 'https://pvpro.ch/en/blog',
      'it-CH': 'https://pvpro.ch/it/blog',
      'x-default': 'https://pvpro.ch/blog',
    },
  },
};

const tags = ['Tous', 'Guides', 'Subventions', 'Stockage', 'Conseils', 'Finance'];

export default function BlogFrPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/fr" className="hover:text-gray-600 transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">Blog</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">PVPro Blog</h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Guides, actualités et conseils sur l'énergie solaire, les subventions photovoltaïques et l'énergie durable en Suisse.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {tags.map((tag, i) => (
            <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors"
              style={i === 0 ? { background: '#F97316', color: '#fff' } : { background: '#f5f5f5', color: '#555' }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Tous les articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {blogPostsI18n.fr.map((post) => (
                <Link key={post.slug} href={post.href ?? `/fr/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <Image src={post.image} alt={post.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 50vw" />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 px-2.5 py-1 rounded-full">{post.tag}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#F97316] transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readMin} min.</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[320px] flex-shrink-0">
            <div className="lg:sticky lg:top-28 flex flex-col gap-6">
              <PlzWidget />
              <div className="rounded-2xl border border-gray-100 p-6 bg-white">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-widest mb-4">Thèmes</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.slice(1).map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-gray-50 rounded-full text-xs font-medium text-gray-600 cursor-pointer hover:bg-orange-50 hover:text-orange-600 transition-colors">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
