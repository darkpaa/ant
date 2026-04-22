import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

const Blog: React.FC = () => {
  const { t, lang } = useLang();

  return (
    <>
      <SEO
        title="Blog — OSB Mevzuatı, Ar-Ge ve Teşvik İçerikleri"
        description="OSB mevzuatı, arsa tahsis, Ar-Ge ve Tasarım Merkezi yönetimi, Teknopark muafiyetleri ve yeşil OSB süreçlerinde uzman içerikler — güncel regülasyonları ANT blogunda takip edin."
        url="/blog"
        type="website"
        lang={lang}
        keywords={[
          'OSB mevzuat blog',
          'Organize Sanayi Bölgesi yazıları',
          'arsa tahsis',
          'Ar-Ge ve Tasarım Merkezi yazıları',
          'Teknopark muafiyetleri',
          'yeşil OSB',
          'ANT Yönetim Danışmanlık blog',
        ]}
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

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 mb-6">
            <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
            <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">
              {t.blog.pageBadge}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            {t.blog.pageTitleStart}{' '}
            <span className="bg-gradient-to-r from-accent-400 to-amber-300 bg-clip-text text-transparent">
              {t.blog.pageTitleAccent}
            </span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            {t.blog.pageDescription}
          </p>
        </div>
      </section>

      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-8">
          {t.blog.posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-navy-100 hover:shadow-2xl hover:shadow-navy-900/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 to-accent-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              <div className="flex flex-wrap items-center gap-4 text-xs text-navy-500 mb-5">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-accent-500" />
                  {post.publishedAt}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-accent-500" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4 leading-tight group-hover:text-navy-800 transition-colors">
                {post.title}
              </h2>

              <p className="text-navy-500 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 group-hover:text-accent-600 transition-colors">
                {t.blog.readPost}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
    </>
  );
};

export default Blog;
