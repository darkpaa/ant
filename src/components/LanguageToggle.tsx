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

  const base =
    'inline-flex items-center rounded-xl p-1 text-xs font-semibold transition-colors duration-300';
  const wrapper =
    variant === 'light'
      ? 'bg-white/10 border border-white/15 text-white/80'
      : 'bg-navy-100 border border-navy-200 text-navy-700';

  const pill = (active: boolean) =>
    active
      ? variant === 'light'
        ? 'bg-white text-navy-900 shadow-sm'
        : 'bg-navy-900 text-white shadow-sm'
      : variant === 'light'
        ? 'text-white/70 hover:text-white'
        : 'text-navy-500 hover:text-navy-900';

  return (
    <div
      role="group"
      aria-label={t.languageToggle.ariaLabel}
      className={`${base} ${wrapper} ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang('tr')}
        aria-pressed={lang === 'tr'}
        className={`px-3 py-1 rounded-lg transition-all duration-200 cursor-pointer ${pill(lang === 'tr')}`}
      >
        {t.languageToggle.tr}
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`px-3 py-1 rounded-lg transition-all duration-200 cursor-pointer ${pill(lang === 'en')}`}
      >
        {t.languageToggle.en}
      </button>
    </div>
  );
};

export default LanguageToggle;
