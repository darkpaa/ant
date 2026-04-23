import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, ArrowUp } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

const SITE_URL = 'https://antyonetim.com';

const slugify = (s: string): string =>
  s
    .toLowerCase()
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const Glossary: React.FC = () => {
  const { t, lang } = useLang();
  const g = t.glossary;
  const [query, setQuery] = useState('');

  const allTerms = useMemo(
    () =>
      g.categories.flatMap((cat) =>
        cat.terms.map((term) => ({ ...term, category: cat.title }))
      ),
    [g.categories]
  );

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return g.categories;
    const q = query.toLowerCase();
    return g.categories
      .map((cat) => ({
        ...cat,
        terms: cat.terms.filter(
          (term) =>
            term.term.toLowerCase().includes(q) ||
            term.definition.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.terms.length > 0);
  }, [g.categories, query]);

  const totalResults = filteredCategories.reduce(
    (sum, cat) => sum + cat.terms.length,
    0
  );

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
        name: `${g.pageTitleStart} ${g.pageTitleAccent}`,
        item: `${SITE_URL}/osb-sozlugu`,
      },
    ],
  };

  const definedTermsLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${SITE_URL}/osb-sozlugu#glossary`,
    name: `${g.pageTitleStart} ${g.pageTitleAccent}`,
    inDefinedTermSet: `${SITE_URL}/osb-sozlugu`,
    hasDefinedTerm: allTerms.map((term) => ({
      '@type': 'DefinedTerm',
      name: term.term,
      description: term.definition,
      inDefinedTermSet: { '@id': `${SITE_URL}/osb-sozlugu#glossary` },
    })),
  };

  return (
    <>
      <SEO
        title={`${g.pageTitleStart} ${g.pageTitleAccent}`}
        description={g.pageDescription}
        url="/osb-sozlugu"
        type="article"
        lang={lang}
        keywords={[
          'OSB sözlüğü',
          'OSB terimleri',
          'organize sanayi bölgesi nedir',
          'Ar-Ge Merkezi nedir',
          'Teknopark nedir',
          'KOSGEB nedir',
          'TÜBİTAK 1501',
          'yeşil OSB nedir',
          'OSB sözlüğü glossary',
        ]}
        jsonLd={[definedTermsLd, breadcrumbLd]}
      />
      <main className="relative bg-gray-50/60 min-h-screen">
        <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

          <header className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 mb-6">
              <BookOpen className="w-3.5 h-3.5 text-accent-400" />
              <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">
                {g.pageBadge}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              {g.pageTitleStart}{' '}
              <span className="bg-gradient-to-r from-accent-400 to-amber-300 bg-clip-text text-transparent">
                {g.pageTitleAccent}
              </span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              {g.pageDescription}
            </p>

            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={g.searchPlaceholder}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/10 border border-white/15 focus:border-accent-400/60 focus:outline-none focus:ring-2 focus:ring-accent-400/30 text-white placeholder-white/40 backdrop-blur-sm transition-all"
                aria-label={g.searchPlaceholder}
              />
            </div>
          </header>
        </section>

        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {totalResults === 0 ? (
            <div className="text-center py-16">
              <p className="text-navy-500 text-lg">{g.emptyState}</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredCategories.map((cat) => (
                <section
                  key={cat.title}
                  aria-labelledby={slugify(cat.title)}
                  className="space-y-5"
                >
                  <h2
                    id={slugify(cat.title)}
                    className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight border-b border-navy-100 pb-3"
                  >
                    {cat.title}
                  </h2>
                  <dl className="grid sm:grid-cols-2 gap-4">
                    {cat.terms.map((term) => (
                      <div
                        key={term.term}
                        id={slugify(term.term)}
                        className="scroll-mt-28 bg-white rounded-2xl border border-navy-100 p-5 hover:border-accent-400/40 transition-colors"
                      >
                        <dt className="font-bold text-navy-900 text-base mb-2 leading-snug">
                          {term.term}
                        </dt>
                        <dd className="text-navy-600 text-sm leading-relaxed">
                          {term.definition}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-navy-100 flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-4 text-sm">
              <Link to="/osb-danismanligi" className="text-navy-500 hover:text-accent-600 font-medium transition-colors">
                {t.osbPillar.pageTitleStart} {t.osbPillar.pageTitleAccent}
              </Link>
              <Link to="/sss" className="text-navy-500 hover:text-accent-600 font-medium transition-colors">
                {t.blog.relatedFaqTitle}
              </Link>
              <Link to="/blog" className="text-navy-500 hover:text-accent-600 font-medium transition-colors">
                {t.blog.pageBadge}
              </Link>
            </div>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold text-navy-500 hover:text-accent-600 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              {g.backToTop}
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Glossary;
