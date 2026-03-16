import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogPosts';
import PlzWidget from '@/components/PlzWidget';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Ratgeber | PVPro.ch – Solarenergie in der Schweiz',
  description: 'Aktuelle Ratgeber, News und Tipps rund um Solaranlagen, Förderungen und Photovoltaik in der Schweiz.',
};

const tags = ['Alle', 'Ratgeber', 'Förderungen', 'Speicher', 'Tipps', 'Finanzen'];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">Blog</span>
        </nav>

        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            PVPro Blog
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Ratgeber, News und Tipps rund um Solarenergie, Photovoltaik-Förderungen und nachhaltige Energie in der Schweiz.
          </p>
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors"
              style={i === 0
                ? { background: '#F97316', color: '#fff' }
                : { background: '#f5f5f5', color: '#555' }
              }
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left — posts grid */}
          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
              Alle Beiträge
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 px-2.5 py-1 rounded-full">
                      {post.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#F97316] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readMin} Min.
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right — sticky sidebar */}
          <div className="w-full lg:w-[320px] flex-shrink-0">
            <div className="lg:sticky lg:top-28 flex flex-col gap-6">
              <PlzWidget />

              {/* Popular tags card */}
              <div className="rounded-2xl border border-gray-100 p-6 bg-white">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-widest mb-4">Themen</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.slice(1).map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-gray-50 rounded-full text-xs font-medium text-gray-600 cursor-pointer hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {tag}
                    </span>
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
