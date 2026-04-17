import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Info } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const BlogPost: React.FC = () => {
  const { t } = useLang();
  const { id } = useParams<{ id: string }>();
  const post = t.blog.posts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
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
        </div>
      </section>

      <article className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-like space-y-8">
          <p className="text-navy-700 text-lg leading-relaxed font-medium">
            {post.content.intro}
          </p>

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
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
