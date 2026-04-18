import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import { LINKEDIN_URL } from '../i18n/translations';
import LinkedinIcon from '../components/icons/LinkedinIcon';

const Corporate: React.FC = () => {
  const { t } = useLang();
  const c = t.corporate;

  return (
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

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 mb-6">
            <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
            <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">
              {c.pageBadge}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            {c.pageTitleStart}{' '}
            <span className="bg-gradient-to-r from-accent-400 to-amber-300 bg-clip-text text-transparent">
              {c.pageTitleAccent}
            </span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-3xl">
            {c.pageDescription}
          </p>
        </div>
      </section>

      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-12">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-navy-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent-400/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
              {c.introTitle}
            </h2>
          </div>
          <div className="space-y-5">
            {c.introParagraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-navy-600 leading-relaxed text-base sm:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-navy-900/20 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-4">
              <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
              <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">
                {c.founderTitle}
              </span>
            </div>

            <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
              <div className="flex items-center gap-5 min-w-0">
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-br from-accent-400/40 to-amber-300/20 rounded-3xl blur-md" />
                  <img
                    src="/ilkerphoto.jpg"
                    alt={c.founderName}
                    loading="lazy"
                    className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-2 ring-white/20 shadow-xl shadow-black/30"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
                    {c.founderName}
                  </h3>
                  <p className="text-accent-400 font-semibold text-sm">
                    {c.founderRole}
                  </p>
                </div>
              </div>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            <div className="space-y-5">
              {c.founderParagraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-white/70 leading-relaxed text-base sm:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-navy-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-navy-700 font-medium text-lg leading-relaxed">
            {c.ctaText}
          </p>
          <Link
            to="/iletisim"
            className="group shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-accent-400/25 hover:shadow-accent-400/40 hover:-translate-y-0.5"
          >
            {c.ctaLabel}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Corporate;
