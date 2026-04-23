import { ArrowUpRight } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import { LINKEDIN_URL } from '../i18n/translations';
import LinkedinIcon from './icons/LinkedinIcon';

const LinkedInFeed: React.FC = () => {
  const { t } = useLang();
  const b = t.blog;
  const posts = b.linkedInPosts;

  if (!posts || posts.length === 0) return null;

  return (
    <section
      aria-labelledby="linkedin-feed-heading"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-navy-900/20"
    >
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative">
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
              <LinkedinIcon className="w-6 h-6 text-accent-400" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-2">
                <div className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                <span className="text-white/70 text-[11px] font-semibold uppercase tracking-wider">
                  {b.linkedInBadge}
                </span>
              </div>
              <h2
                id="linkedin-feed-heading"
                className="text-xl sm:text-2xl font-bold text-white tracking-tight"
              >
                {b.linkedInTitle}
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mt-1 max-w-xl">
                {b.linkedInSubtitle}
              </p>
            </div>
          </div>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-accent-400/40 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
          >
            {b.linkedInFollow}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.slice(0, 3).map((post, idx) => (
            <li key={`${post.url}-${idx}`}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-400/40 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-[11px] uppercase tracking-wider text-accent-400 font-semibold mb-3">
                  {post.date}
                </div>
                <p className="text-white/75 text-sm leading-relaxed mb-4 line-clamp-5 group-hover:text-white transition-colors">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/50 group-hover:text-accent-400 transition-colors">
                  {b.linkedInViewPost}
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LinkedInFeed;
