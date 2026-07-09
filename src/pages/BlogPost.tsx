import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookMarked,
  Calendar,
  Clock,
  HelpCircle,
  Info,
  Layers,
} from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

const SITE_URL = 'https://antyonetim.com';

const BlogPost: React.FC = () => {
  const { t, lang } = useLang();
  const { id } = useParams<{ id: string }>();
  const post = t.blog.posts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const seoKeywords = post.content.hashtags
    ? post.content.hashtags.map((tag) => tag.replace(/^#/, ''))
    : undefined;

  const articleUrl = `${SITE_URL}/blog/${post.id}`;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: lang === 'en' ? 'en-US' : 'tr-TR',
    isAccessibleForFree: true,
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/kurumsal#ilker-tura`,
      name: 'İlker Tura',
      jobTitle: 'Kurucu',
      url: `${SITE_URL}/kurumsal`,
      worksFor: { '@id': `${SITE_URL}/#organization` },
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'ANT Yönetim Danışmanlık',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/antlogo.png`,
        width: 512,
        height: 512,
      },
    },
    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/hero-bg.png`,
      width: 1200,
      height: 630,
    },
    keywords: seoKeywords ? seoKeywords.join(', ') : undefined,
    articleSection: 'Blog',
    about: { '@id': `${SITE_URL}/#organization` },
  };

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
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.id}`}
        type="article"
        lang={lang}
        publishedAt={post.publishedAt}
        author="İlker Tura"
        image={`${SITE_URL}/hero-bg.png`}
        imageWidth={1200}
        imageHeight={630}
        keywords={seoKeywords}
        jsonLd={[articleLd, breadcrumbLd]}
      />
    <main className="relative bg-gray-50/60 min-h-screen">
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.blog.backToBlog}
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/60 mb-5">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-accent-400" />
              {post.publishedAt}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent-400" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <Link
            to="/kurumsal"
            rel="author"
            className="mt-8 inline-flex items-center gap-3 group"
          >
            <img
              src="/ilkerphoto.jpg"
              alt="İlker Tura"
              loading="lazy"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20 shadow-lg shadow-black/20 group-hover:ring-accent-400/60 transition-all"
            />
            <span className="flex flex-col text-left">
              <span className="text-[11px] uppercase tracking-wider text-white/50 font-semibold">
                {t.blog.authorLabel}
              </span>
              <span className="text-white font-semibold text-sm group-hover:text-accent-300 transition-colors">
                İlker Tura
              </span>
              <span className="text-white/60 text-xs">
                {t.blog.authorRole}
              </span>
            </span>
          </Link>
        </div>
      </section>

      <article className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-like space-y-8">
          <p className="text-navy-700 text-lg leading-relaxed font-medium">
            {post.content.intro}
          </p>

          {post.content.images && post.content.images.length > 0 && (
            <div className="space-y-4">
              {post.content.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full rounded-2xl shadow-sm border border-navy-100 object-contain"
                />
              ))}
            </div>
          )}

          {post.content.sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight leading-tight">
                {section.title}
              </h2>
              {section.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-navy-600 leading-relaxed text-base sm:text-lg"
                >
                  {p}
                </p>
              ))}
              {section.image && (
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  loading="lazy"
                  className="w-full rounded-2xl shadow-sm border border-navy-100 object-contain mt-4"
                />
              )}
            </div>
          ))}

          {post.content.summary && (
            <div className="rounded-2xl bg-white border border-navy-100 p-6 sm:p-8 shadow-sm">
              <p className="text-navy-700 font-medium leading-relaxed mb-4">
                {post.content.summary.intro}
              </p>
              <ul className="space-y-2 mb-4">
                {post.content.summary.items.map((item) => (
                  <li
                    key={item}
                    className="text-navy-600 leading-relaxed pl-4 border-l-2 border-accent-400/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {post.content.summary.outro && (
                <p className="text-navy-600 leading-relaxed">
                  {post.content.summary.outro}
                </p>
              )}
            </div>
          )}

          {post.content.hashtags && post.content.hashtags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4">
              {post.content.hashtags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-navy-100 text-navy-700 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {post.content.sources && post.content.sources.length > 0 && (
            <section aria-labelledby="sources-heading" className="pt-6">
              <div className="bg-white rounded-2xl border border-navy-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-accent-400/10 flex items-center justify-center shrink-0">
                    <BookMarked className="w-4 h-4 text-accent-500" />
                  </div>
                  <h2
                    id="sources-heading"
                    className="text-lg sm:text-xl font-bold text-navy-900 tracking-tight"
                  >
                    {t.blog.sourcesTitle}
                  </h2>
                </div>
                <ul className="space-y-2 pl-12">
                  {post.content.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-1.5 text-navy-600 hover:text-accent-600 text-sm leading-relaxed transition-colors"
                      >
                        <span>{source.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {post.content.disclaimer && (
            <div className="rounded-2xl bg-amber-50/60 border border-amber-200/60 p-5 flex gap-3">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <div className="text-amber-900 font-semibold text-sm mb-1">
                  {t.blog.disclaimerTitle}
                </div>
                <p className="text-amber-900/80 text-sm leading-relaxed">
                  {post.content.disclaimer}
                </p>
              </div>
            </div>
          )}

          <section aria-labelledby="related-content-heading" className="pt-6">
            <h2
              id="related-content-heading"
              className="text-2xl font-bold text-navy-900 tracking-tight mb-5"
            >
              {t.blog.relatedTitle}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                to="/#hizmetlerimiz"
                className="group block bg-white rounded-2xl p-6 border border-navy-100 hover:border-accent-400/40 hover:shadow-lg hover:shadow-navy-900/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-400/10 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5 text-accent-500" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors">
                  {t.blog.relatedServicesTitle}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed mb-3">
                  {t.blog.relatedServicesDesc}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-navy-700 group-hover:text-accent-600 transition-colors">
                  {t.blog.readPost}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/sss"
                className="group block bg-white rounded-2xl p-6 border border-navy-100 hover:border-accent-400/40 hover:shadow-lg hover:shadow-navy-900/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-400/10 flex items-center justify-center mb-4">
                  <HelpCircle className="w-5 h-5 text-accent-500" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors">
                  {t.blog.relatedFaqTitle}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed mb-3">
                  {t.blog.relatedFaqDesc}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-navy-700 group-hover:text-accent-600 transition-colors">
                  {t.blog.readPost}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </section>

          {(() => {
            const others = [...t.blog.posts].reverse().filter((p) => p.id !== post.id).slice(0, 3);
            if (others.length === 0) return null;
            return (
              <section aria-labelledby="other-posts-heading" className="pt-4">
                <h2
                  id="other-posts-heading"
                  className="text-2xl font-bold text-navy-900 tracking-tight mb-5"
                >
                  {t.blog.otherPostsTitle}
                </h2>
                <ul className="grid sm:grid-cols-3 gap-4">
                  {others.map((other) => (
                    <li key={other.id}>
                      <Link
                        to={`/blog/${other.id}`}
                        className="group block h-full bg-white rounded-2xl p-5 border border-navy-100 hover:border-accent-400/40 hover:shadow-lg hover:shadow-navy-900/5 transition-all duration-300"
                      >
                        <div className="text-[11px] uppercase tracking-wider text-accent-500 font-semibold mb-2">
                          {other.readTime}
                        </div>
                        <h3 className="font-semibold text-navy-900 text-sm leading-snug group-hover:text-accent-600 transition-colors">
                          {other.title}
                        </h3>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })()}
        </div>
      </article>
    </main>
    </>
  );
};

export default BlogPost;
