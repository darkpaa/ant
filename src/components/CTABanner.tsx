import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

const CTABanner: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="cta-banner" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/30 to-transparent" />

      <div className="absolute top-10 left-10 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-400/5 rounded-full blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-400/10 border border-accent-400/20 mb-8">
          <Sparkles className="w-8 h-8 text-accent-400" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          {t.cta.headingStart}{' '}
          <span className="bg-gradient-to-r from-accent-400 to-amber-300 bg-clip-text text-transparent">
            {t.cta.headingAccent}
          </span>
        </h2>

        <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          {t.cta.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/iletisim"
            id="cta-banner-primary"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-accent-400/25 hover:shadow-accent-400/40 hover:-translate-y-1"
          >
            {t.cta.primaryLabel}
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
          <a
            href="tel:+905069862620"
            id="cta-banner-phone"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white px-8 py-4 rounded-2xl text-base font-medium transition-all duration-300 border border-white/10 hover:border-white/25 hover:bg-white/5"
          >
            {t.cta.phoneLabel}
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-white/30 text-sm">
          {t.cta.trustBadges.map((label) => (
            <span key={label} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
