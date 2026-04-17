import { Calendar, CheckCircle, Users, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    icon: Calendar,
    value: '10+',
    label: 'Yıllık Tecrübe',
    description: 'Sektörde köklü deneyim',
  },
  {
    icon: CheckCircle,
    value: '500+',
    label: 'Başarılı Proje',
    description: 'Tamamlanan danışmanlık projesi',
  },
  {
    icon: Users,
    value: '150+',
    label: 'Mutlu Müşteri',
    description: 'Güvenen kurum ve kuruluş',
  },
  {
    icon: Award,
    value: '%98',
    label: 'Müşteri Memnuniyeti',
    description: 'Kalitede ödünsüz hizmet',
  },
];

const Stats: React.FC = () => {
  return (
    <section id="stats-section" className="relative -mt-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 rounded-3xl shadow-2xl shadow-navy-900/30 border border-navy-700/50 overflow-hidden">
          {/* Decorative top border */}
          <div className="h-1 bg-gradient-to-r from-transparent via-accent-400 to-transparent" />

          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`relative p-8 lg:p-10 text-center group transition-all duration-500 hover:bg-white/5 ${index < stats.length - 1
                    ? 'border-r border-navy-700/50'
                    : ''
                    } ${index < 2 ? 'border-b lg:border-b-0 border-navy-700/50' : ''}`}
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-400/10 mb-4 group-hover:bg-accent-400/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-accent-400" />
                  </div>

                  {/* Value */}
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-white/90 text-sm font-semibold mb-1">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-white/40 text-xs">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
