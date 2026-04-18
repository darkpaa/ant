import { Globe } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

interface LanguageToggleProps {
  variant?: 'dark' | 'light';
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  variant = 'light',
  className = '',
}) => {
  const { lang, setLang, t } = useLang();

  const isLight = variant === 'light';
  const wrapper = isLight
    ? 'bg-white/10 border-white/15 backdrop-blur-md'
    : 'bg-navy-50/80 border-navy-200/70 backdrop-blur-md';
  const globeColor = isLight ? 'text-white/60' : 'text-navy-500';
  const knob = isLight
    ? 'bg-white shadow-md shadow-black/20'
    : 'bg-navy-900 shadow-md shadow-navy-900/20';
  const activeText = isLight ? 'text-navy-900' : 'text-white';
  const idleText = isLight
    ? 'text-white/70 hover:text-white'
    : 'text-navy-500 hover:text-navy-700';

  return (
    <div
      role="group"
      aria-label={t.languageToggle.ariaLabel}
      className={`relative inline-flex items-center gap-1.5 pl-2 pr-1 py-1 rounded-full border text-[11px] font-bold tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${wrapper} ${className}`}
    >
      <Globe className={`w-3.5 h-3.5 ${globeColor}`} aria-hidden="true" />

      <div className="relative flex items-center">
        <span
          aria-hidden="true"
          className={`absolute top-0 bottom-0 w-[34px] rounded-full transition-all duration-300 ease-out ${knob} ${
            lang === 'tr' ? 'left-0' : 'left-[34px]'
          }`}
        />

        <button
          type="button"
          onClick={() => setLang('tr')}
          aria-pressed={lang === 'tr'}
          className={`relative z-10 w-[34px] h-6 flex items-center justify-center rounded-full transition-colors duration-300 cursor-pointer font-bold ${
            lang === 'tr' ? activeText : idleText
          }`}
        >
          {t.languageToggle.tr}
        </button>
        <button
          type="button"
          onClick={() => setLang('en')}
          aria-pressed={lang === 'en'}
          className={`relative z-10 w-[34px] h-6 flex items-center justify-center rounded-full transition-colors duration-300 cursor-pointer font-bold ${
            lang === 'en' ? activeText : idleText
          }`}
        >
          {t.languageToggle.en}
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
