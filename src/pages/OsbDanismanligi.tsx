import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, BookOpen, HelpCircle, Sparkles } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

const SITE_URL = 'https://antyonetim.com';

const OsbDanismanligi: React.FC = () => {
  const { t, lang } = useLang();
  const p = t.osbPillar;

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
        name: `${p.pageTitleStart} ${p.pageTitleAccent}`,
        item: `${SITE_URL}/osb-danismanligi`,
      },
    ],
  };

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}/osb-danismanligi#article`,
    headline: `${p.pageTitleStart} ${p.pageTitleAccent}`,
    description: p.pageDescription,
    url: `${SITE_URL}/osb-danismanligi`,
    inLanguage: lang === 'en' ? 'en-US' : 'tr-TR',
    datePublished: '2026-04-23',
    dateModified: '2026-04-23',
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/osb-danismanligi` },
    image: `${SITE_URL}/antlogo.png`,
    articleSection: p.sections.map((s) => s.title),
  };

  return (
    <>
      <SEO
        title={`${p.pageTitleStart} ${p.pageTitleAccent}`}
        description={p.pageDescription}
        url="/osb-danismanligi"
        type="article"
        lang={lang}
        keywords={[
          'OSB danışmanlığı',
          'Organize Sanayi Bölgesi rehberi',
          'OSB mevzuatı',
          '4562 sayılı OSB Kanunu',
          'arsa tahsis',
          'organ yönetimi',
          'Yeşil OSB',
          'Akıllı OSB',
          'iş sürekliliği planı',
          'OSB danışmanlık rehberi',
          'ANT Yönetim Danışmanlık',
        ]}
        jsonLd={[articleLd, breadcrumbLd]}
      />
      <main className="relative bg-gray-50/60 min-h-screen">
        <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />

          <header className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 mb-6">
              <BookOpen className="w-3.5 h-3.5 text-accent-400" />
              <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">
                {p.pageBadge}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              {p.pageTitleStart}{' '}
              <span className="bg-gradient-to-r from-accent-400 to-amber-300 bg-clip-text text-transparent">
                {p.pageTitleAccent}
              </span>
            </h1>
            <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-3xl">
              {p.pageDescription}
            </p>
          </header>
        </section>

        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-[260px_1fr] gap-10">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="bg-white rounded-2xl border border-navy-100 p-5">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-navy-500 mb-4">
                {p.tocTitle}
              </h2>
              <nav aria-label={p.tocTitle}>
                <ol className="space-y-2">
                  {p.sections.map((s, idx) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="group flex items-start gap-2 text-sm text-navy-600 hover:text-accent-600 transition-colors"
                      >
                        <span className="shrink-0 w-5 text-right text-navy-300 font-semibold group-hover:text-accent-500">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="leading-snug">{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          <article className="space-y-14">
            {p.sections.map((s, idx) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 space-y-5">
                <header className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-accent-400/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-accent-500" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-accent-500 mb-1">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight leading-tight">
                      {s.title}
                    </h2>
                  </div>
                </header>
                <div className="pl-12 space-y-4">
                  {s.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="text-navy-600 leading-relaxed text-base sm:text-lg"
                    >
                      {para}
                    </p>
                  ))}
                  {s.bullets && s.bullets.length > 0 && (
                    <ul className="space-y-2 pt-2">
                      {s.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-navy-600 text-sm sm:text-base leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-1" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-8 sm:p-10 shadow-2xl shadow-navy-900/20">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                  {p.ctaHeading}
                </h2>
                <p className="text-white/60 leading-relaxed mb-6 max-w-2xl">
                  {p.ctaText}
                </p>
                <Link
                  to="/iletisim"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-accent-400/25 hover:shadow-accent-400/40 hover:-translate-y-0.5"
                >
                  {p.ctaLabel}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </section>

            <section aria-labelledby="related-heading" className="space-y-5">
              <h2
                id="related-heading"
                className="text-2xl font-bold text-navy-900 tracking-tight"
              >
                {t.blog.relatedTitle}
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  to="/sss"
                  className="group block bg-white rounded-2xl p-5 border border-navy-100 hover:border-accent-400/40 hover:shadow-lg hover:shadow-navy-900/5 transition-all duration-300"
                >
                  <HelpCircle className="w-5 h-5 text-accent-500 mb-3" />
                  <h3 className="font-semibold text-navy-900 text-sm leading-snug group-hover:text-accent-600 transition-colors">
                    {t.blog.relatedFaqTitle}
                  </h3>
                </Link>
                <Link
                  to="/osb-sozlugu"
                  className="group block bg-white rounded-2xl p-5 border border-navy-100 hover:border-accent-400/40 hover:shadow-lg hover:shadow-navy-900/5 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 text-accent-500 mb-3" />
                  <h3 className="font-semibold text-navy-900 text-sm leading-snug group-hover:text-accent-600 transition-colors">
                    {t.glossary.pageTitleStart} {t.glossary.pageTitleAccent}
                  </h3>
                </Link>
                <Link
                  to="/blog"
                  className="group block bg-white rounded-2xl p-5 border border-navy-100 hover:border-accent-400/40 hover:shadow-lg hover:shadow-navy-900/5 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 text-accent-500 mb-3" />
                  <h3 className="font-semibold text-navy-900 text-sm leading-snug group-hover:text-accent-600 transition-colors">
                    {t.blog.pageBadge}
                  </h3>
                </Link>
              </div>
            </section>
          </article>
        </section>
      </main>
    </>
  );
};

export default OsbDanismanligi;
