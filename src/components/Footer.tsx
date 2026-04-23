import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import { LINKEDIN_URL } from '../i18n/translations';
import LinkedinIcon from './icons/LinkedinIcon';

const Footer: React.FC = () => {
  const { lang, t } = useLang();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="iletisim-footer" className="relative bg-navy-950 overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-accent-400/40 to-transparent" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-800/30 rounded-full blur-3xl" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-accent-400/40 transition-all duration-300 shadow-lg">
                <img
                  src="/antlogo.png"
                  alt="ANT"
                  loading="lazy"
                  decoding="async"
                  width={44}
                  height={44}
                  className="h-11 w-11 object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">
                  ANT
                </span>
                <span className="text-[10px] font-medium text-white/50 uppercase tracking-[0.2em] -mt-1">
                  {lang === 'en' ? 'Consulting' : 'Danışmanlık'}
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-accent-400/20 border border-white/10 hover:border-accent-400/30 flex items-center justify-center text-white/50 hover:text-accent-400 transition-all duration-300 hover:-translate-y-1"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-wider">
              {t.footer.columnCompany}
            </h4>
            <ul className="space-y-3">
              {t.footer.companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-white/40 hover:text-white text-sm transition-all duration-300"
                  >
                    <span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-accent-400 transition-colors duration-300" />
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-wider">
              {t.footer.columnServices}
            </h4>
            <ul className="space-y-3">
              {t.footer.serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-white/40 hover:text-white text-sm transition-all duration-300"
                  >
                    <span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-accent-400 transition-colors duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-wider">
              {t.footer.columnContact}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+905069862620"
                  className="flex items-start gap-3 text-white/40 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-accent-400/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-accent-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                      +90 (506) 986 26 20
                    </div>
                    {t.footer.workingHours && (
                      <div className="text-xs text-white/30">
                        {t.footer.workingHours}
                      </div>
                    )}
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kurumsal@antyonetim.com"
                  className="flex items-start gap-3 text-white/40 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-accent-400/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-accent-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                      kurumsal@antyonetim.com
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm flex items-center gap-1 flex-wrap justify-center md:justify-start">
              {t.footer.copyright(currentYear)}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {t.footer.legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/30 hover:text-white/60 text-xs transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
