import { CheckCircle, Zap, Shield, HeartHandshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const pointIcons: LucideIcon[] = [Zap, Shield, HeartHandshake, CheckCircle];

const WhyUs: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="kurumsal" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent-400/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/15">
                <img
                  src="/why-us.png"
                  alt={t.whyUs.altImage}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-navy-900/10" />
              </div>

              <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-2xl shadow-2xl p-6 border border-navy-700/50">
                <div className="text-center">
                  <div className="text-accent-400 text-4xl font-bold">
                    {t.whyUs.badgeExperienceValue}
                  </div>
                  <div className="text-white/80 text-sm font-medium mt-1">
                    {t.whyUs.badgeExperienceLabel}
                  </div>
                  <div className="text-white/60 text-xs">
                    {t.whyUs.badgeExperienceSub}
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-accent-400/20 -z-10" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-navy-900/5 rounded-full px-5 py-2">
              <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
              <span className="text-navy-600 text-sm font-semibold uppercase tracking-wider">
                {t.whyUs.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight leading-tight">
              {t.whyUs.titleStart}{' '}
              <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                {t.whyUs.titleAccent}
              </span>
            </h2>

            <p className="text-navy-500 text-lg leading-relaxed">
              {t.whyUs.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {t.whyUs.points.map((point, index) => {
                const Icon = pointIcons[index] ?? CheckCircle;
                return (
                  <div
                    key={point.title}
                    className="group p-5 rounded-2xl border border-navy-100 hover:border-accent-400/30 hover:bg-accent-400/5 transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-accent-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-navy-900 font-bold text-base mb-2">
                      {point.title}
                    </h4>
                    <p className="text-navy-500 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
