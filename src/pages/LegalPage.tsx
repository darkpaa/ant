import { Link } from 'react-router-dom';
import { ArrowLeft, Info, Sparkles } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

const SITE_URL = 'https://antyonetim.com';

export type LegalVariant = 'privacy' | 'kvkk' | 'cookies';

const PATH_MAP: Record<LegalVariant, string> = {
  privacy: '/gizlilik',
  kvkk: '/kvkk',
  cookies: '/cerez',
};

const LegalPage: React.FC<{ variant: LegalVariant }> = ({ variant }) => {
  const { t, lang } = useLang();
  const doc = t.legal[variant];
  const path = PATH_MAP[variant];
  const fullUrl = `${SITE_URL}${path}`;
  const fullTitle = `${doc.pageTitleStart} ${doc.pageTitleAccent}`;

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: lang === 'en' ? 'Home' : 'Anasayfa',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: fullTitle,
        item: fullUrl,
      },
    ],
  };

  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${fullUrl}#webpage`,
    name: fullTitle,
    url: fullUrl,
    description: doc.pageDescription,
    inLanguage: lang === 'en' ? 'en-US' : 'tr-TR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    dateModified: '2026-04-23',
  };

  return (
    <>
      <SEO
        title={fullTitle}
        description={doc.pageDescription}
        url={path}
        type="website"
        lang={lang}
        keywords={[fullTitle, 'ANT Yönetim Danışmanlık', 'KVKK', 'gizlilik', 'çerez politikası']}
        jsonLd={[webPageLd, breadcrumbLd]}
      />
      <main className="relative bg-gray-50/60 min-h-screen">
        <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <header className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {lang === 'en' ? 'Back to home' : 'Anasayfaya dön'}
            </Link>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 mb-6">
              <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
              <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">
                {doc.pageBadge}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              {doc.pageTitleStart}{' '}
              <span className="bg-gradient-to-r from-accent-400 to-amber-300 bg-clip-text text-transparent">
                {doc.pageTitleAccent}
              </span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
              {doc.pageDescription}
            </p>
            <p className="mt-4 text-white/40 text-sm">
              {t.legal.lastUpdatedLabel}: {t.legal.lastUpdatedDate}
            </p>
          </header>
        </section>

        <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="mb-8 flex items-start gap-3 p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60">
            <div className="shrink-0 w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
              <Info className="w-4 h-4" />
            </div>
            <p className="text-amber-900/90 text-sm leading-relaxed">
              {t.legal.disclaimer}
            </p>
          </div>

          <div className="space-y-10">
            {doc.sections.map((section) => (
              <article key={section.title} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-accent-400/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-accent-500" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight leading-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-12 space-y-3">
                  {section.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-navy-600 leading-relaxed text-base"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <nav className="mt-16 pt-8 border-t border-navy-100 flex flex-wrap gap-4 text-sm">
            <Link
              to="/gizlilik"
              className={`font-medium transition-colors ${
                variant === 'privacy'
                  ? 'text-accent-600'
                  : 'text-navy-500 hover:text-navy-900'
              }`}
            >
              {t.legal.privacy.pageTitleStart} {t.legal.privacy.pageTitleAccent}
            </Link>
            <Link
              to="/kvkk"
              className={`font-medium transition-colors ${
                variant === 'kvkk'
                  ? 'text-accent-600'
                  : 'text-navy-500 hover:text-navy-900'
              }`}
            >
              {t.legal.kvkk.pageTitleStart} {t.legal.kvkk.pageTitleAccent}
            </Link>
            <Link
              to="/cerez"
              className={`font-medium transition-colors ${
                variant === 'cookies'
                  ? 'text-accent-600'
                  : 'text-navy-500 hover:text-navy-900'
              }`}
            >
              {t.legal.cookies.pageTitleStart} {t.legal.cookies.pageTitleAccent}
            </Link>
          </nav>
        </section>
      </main>
    </>
  );
};

export default LegalPage;
