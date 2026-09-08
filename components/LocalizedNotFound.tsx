import Link from 'next/link';

const copy = {
  de: {
    title: 'Seite nicht gefunden',
    text: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    home: 'Zur Startseite',
    blog: 'Zum Blog',
    request: 'Offerte anfragen',
  },
  it: {
    title: 'Pagina non trovata',
    text: 'La pagina cercata non esiste o è stata spostata.',
    home: 'Vai alla pagina iniziale',
    blog: 'Vai al blog',
    request: 'Richiedi un preventivo',
  },
  fr: {
    title: 'Page introuvable',
    text: 'La page que vous recherchez n’existe pas ou a été déplacée.',
    home: 'Accueil',
    blog: 'Voir le blog',
    request: 'Demander une offre',
  },
  en: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved.',
    home: 'Go to home page',
    blog: 'Visit the blog',
    request: 'Request a quote',
  },
} as const;

export default function LocalizedNotFound({ locale }: { locale: keyof typeof copy }) {
  const content = copy[locale];
  const prefix = locale === 'de' ? '' : `/${locale}`;
  const requestPath = locale === 'de' ? '/anfrage' : locale === 'it' ? '/it/richiesta' : locale === 'fr' ? '/fr/demande' : '/en/request';

  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="mt-5 text-3xl font-bold text-gray-900">{content.title}</h1>
      <p className="mt-4 text-lg text-gray-600">{content.text}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href={prefix || '/'} className="rounded-md bg-primary px-5 py-3 font-medium text-white">{content.home}</Link>
        <Link href={`${prefix}/blog`} className="rounded-md border border-gray-300 px-5 py-3 font-medium text-gray-800">{content.blog}</Link>
        <Link href={requestPath} className="rounded-md border border-gray-300 px-5 py-3 font-medium text-gray-800">{content.request}</Link>
      </div>
    </section>
  );
}