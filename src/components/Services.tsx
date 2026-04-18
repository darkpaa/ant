import { useEffect, useState } from 'react';
import {
  Briefcase,
  Lightbulb,
  Gift,
  TrendingUp,
  Building2,
  Target,
  ArrowRight,
  X,
  Leaf,
  Cpu,
  ShieldAlert,
  Rocket,
  CheckCircle2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

type DetailKey = 'osb' | 'arge';

interface ServiceMeta {
  icon: LucideIcon;
  gradient: string;
  iconBg: string;
  iconColor: string;
  detailKey?: DetailKey;
}

const serviceMeta: ServiceMeta[] = [
  {
    icon: Building2,
    gradient: 'from-rose-500 to-pink-600',
    iconBg: 'bg-rose-50 group-hover:bg-rose-100',
    iconColor: 'text-rose-600',
    detailKey: 'osb',
  },
  {
    icon: Lightbulb,
    gradient: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-50 group-hover:bg-amber-100',
    iconColor: 'text-amber-600',
    detailKey: 'arge',
  },
  {
    icon: Gift,
    gradient: 'from-emerald-500 to-emerald-600',
    iconBg: 'bg-emerald-50 group-hover:bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    icon: TrendingUp,
    gradient: 'from-violet-500 to-purple-600',
    iconBg: 'bg-violet-50 group-hover:bg-violet-100',
    iconColor: 'text-violet-600',
  },
  {
    icon: Briefcase,
    gradient: 'from-blue-500 to-blue-600',
    iconBg: 'bg-blue-50 group-hover:bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Target,
    gradient: 'from-cyan-500 to-teal-600',
    iconBg: 'bg-cyan-50 group-hover:bg-cyan-100',
    iconColor: 'text-cyan-600',
  },
];

const sectionIcons: LucideIcon[] = [Building2, Leaf, Cpu, ShieldAlert, Rocket];
const argeSectionIcons: LucideIcon[] = [Lightbulb, Rocket];

const Services: React.FC = () => {
  const { t } = useLang();
  const [openDetail, setOpenDetail] = useState<null | DetailKey>(null);

  useEffect(() => {
    if (!openDetail) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDetail(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [openDetail]);

  return (
    <section
      id="hizmetlerimiz"
      className="relative py-24 lg:py-32 bg-gray-50/80"
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15, 23, 42) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-navy-900/5 rounded-full px-5 py-2 mb-6">
            <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
            <span className="text-navy-600 text-sm font-semibold uppercase tracking-wider">
              {t.services.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6 tracking-tight leading-tight">
            {t.services.titleStart}{' '}
            <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
              {t.services.titleAccent}
            </span>
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            {t.services.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.services.items.map((service, index) => {
            const meta = serviceMeta[index];
            const Icon = meta.icon;
            const handleDetailClick = (
              e: React.MouseEvent<HTMLAnchorElement>
            ) => {
              if (meta.detailKey) {
                e.preventDefault();
                setOpenDetail(meta.detailKey);
              }
            };
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-navy-100/80 hover:shadow-2xl hover:shadow-navy-900/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${meta.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />

                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${meta.iconBg} mb-6 transition-all duration-300 group-hover:scale-110`}
                >
                  <Icon className={`w-7 h-7 ${meta.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-navy-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-navy-500 text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                <a
                  href="#"
                  onClick={handleDetailClick}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-navy-900 transition-all duration-300 group-hover:gap-3 cursor-pointer"
                >
                  {t.services.detail}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <div
                  className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {openDetail === 'osb' && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="osb-detail-title"
        >
          <div
            className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
            onClick={() => setOpenDetail(null)}
          />

          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 px-6 sm:px-10 py-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-4">
                    <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
                    <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">
                      {t.services.osbModal.badge}
                    </span>
                  </div>
                  <h3
                    id="osb-detail-title"
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight"
                  >
                    {t.services.osbModal.titleStart}{' '}
                    <span className="bg-gradient-to-r from-accent-400 to-amber-300 bg-clip-text text-transparent">
                      {t.services.osbModal.titleAccent}
                    </span>{' '}
                    {t.services.osbModal.titleEnd}
                  </h3>
                </div>
                <button
                  onClick={() => setOpenDetail(null)}
                  aria-label={t.services.close}
                  className="shrink-0 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all duration-200 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-10">
              {t.services.osbModal.sections.map((section, idx) => {
                const SectionIcon = sectionIcons[idx] ?? Building2;
                return (
                  <div key={section.title}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent-400/10 text-accent-500">
                        <SectionIcon className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-navy-900">
                        {section.title}
                      </h4>
                    </div>
                    {section.intro && (
                      <p className="text-navy-500 leading-relaxed mb-4">
                        {section.intro}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {section.points.map((p) => (
                        <li
                          key={p.label}
                          className="flex gap-3 p-4 rounded-xl border border-navy-100 hover:border-accent-400/40 hover:bg-accent-400/5 transition-all duration-200"
                        >
                          <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                          <p className="text-sm sm:text-base text-navy-600 leading-relaxed">
                            <span className="font-semibold text-navy-900 italic">
                              {p.label}:
                            </span>{' '}
                            {p.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              <div className="rounded-2xl bg-gradient-to-br from-navy-50 to-white border border-navy-100 p-6 sm:p-8">
                <h4 className="text-lg sm:text-xl font-bold text-navy-900 mb-4">
                  {t.services.osbModal.whyUs.title}
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  {t.services.osbModal.whyUs.items.map((w) => (
                    <div
                      key={w.label}
                      className="p-4 rounded-xl bg-white border border-navy-100"
                    >
                      <div className="font-semibold text-navy-900 italic mb-1">
                        {w.label}
                      </div>
                      <p className="text-sm text-navy-500 leading-relaxed">
                        {w.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-navy-100 px-6 sm:px-10 py-5 flex items-center justify-end gap-3 bg-white">
              <button
                onClick={() => setOpenDetail(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-navy-600 hover:text-navy-900 transition-colors cursor-pointer"
              >
                {t.services.close}
              </button>
              <a
                href="/iletisim"
                onClick={() => setOpenDetail(null)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-accent-400/25 hover:shadow-accent-400/40"
              >
                {t.services.contactUs}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {openDetail === 'arge' && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="arge-detail-title"
        >
          <div
            className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
            onClick={() => setOpenDetail(null)}
          />

          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            <div className="relative bg-gradient-to-br from-amber-600 via-amber-700 to-orange-700 px-6 sm:px-10 py-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-4">
                    <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
                    <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">
                      {t.services.argeModal.badge}
                    </span>
                  </div>
                  <h3
                    id="arge-detail-title"
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight"
                  >
                    {t.services.argeModal.titleStart}{' '}
                    <span className="bg-gradient-to-r from-accent-400 to-amber-200 bg-clip-text text-transparent">
                      {t.services.argeModal.titleAccent}
                    </span>{' '}
                    {t.services.argeModal.titleEnd}
                  </h3>
                </div>
                <button
                  onClick={() => setOpenDetail(null)}
                  aria-label={t.services.close}
                  className="shrink-0 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all duration-200 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-10">
              <p className="text-navy-600 leading-relaxed text-base sm:text-lg">
                {t.services.argeModal.intro}
              </p>

              {t.services.argeModal.sections.map((section, idx) => {
                const SectionIcon = argeSectionIcons[idx] ?? Lightbulb;
                return (
                  <div key={section.title}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-400/10 text-amber-600">
                        <SectionIcon className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-navy-900">
                        {section.title}
                      </h4>
                    </div>
                    {section.intro && (
                      <p className="text-navy-500 leading-relaxed mb-4">
                        {section.intro}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {section.points.map((p) => (
                        <li
                          key={p.label}
                          className="flex gap-3 p-4 rounded-xl border border-navy-100 hover:border-amber-400/40 hover:bg-amber-400/5 transition-all duration-200"
                        >
                          <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                          <p className="text-sm sm:text-base text-navy-600 leading-relaxed">
                            <span className="font-semibold text-navy-900 italic">
                              {p.label}:
                            </span>{' '}
                            {p.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              <div className="flex flex-wrap gap-2 pt-2">
                {t.services.argeModal.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-navy-100 px-6 sm:px-10 py-5 flex items-center justify-end gap-3 bg-white">
              <button
                onClick={() => setOpenDetail(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-navy-600 hover:text-navy-900 transition-colors cursor-pointer"
              >
                {t.services.close}
              </button>
              <a
                href="/iletisim"
                onClick={() => setOpenDetail(null)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
              >
                {t.services.contactUs}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
