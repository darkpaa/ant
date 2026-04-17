import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface NavLinkItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const { lang, t } = useLang();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks: NavLinkItem[] = [
    { label: t.nav.corporate, href: '/#kurumsal' },
    { label: t.nav.services, href: '/#hizmetlerimiz' },
    { label: t.nav.blog, href: '/blog' },
    { label: t.nav.contact, href: '/iletisim' },
  ];

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const isHome = location.pathname === '/';
  const solidBg = scrolled || !isHome;

  const handleNavClick = (href: string): void => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const hashId = href.slice(2);
      if (location.pathname === '/') {
        const el = document.getElementById(hashId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(`/#${hashId}`);
      }
      return;
    }
    navigate(href);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solidBg
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-navy-900/5 border-b border-navy-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group" id="navbar-logo">
            <div
              className={`overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-110 ${
                solidBg
                  ? 'ring-1 ring-navy-100 shadow-lg shadow-navy-900/10 bg-white'
                  : 'ring-1 ring-white/20 bg-white/10 backdrop-blur-sm'
              }`}
            >
              <img
                src="/antgorsel.jpg"
                alt="ANT"
                className="h-11 w-11 object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  solidBg ? 'text-navy-900' : 'text-white'
                }`}
              >
                ANT
              </span>
              <span
                className={`text-[10px] font-medium uppercase tracking-[0.2em] -mt-1 transition-colors duration-300 ${
                  solidBg ? 'text-navy-500' : 'text-white/70'
                }`}
              >
                {lang === 'en' ? 'Consulting' : 'Danışmanlık'}
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                  solidBg
                    ? 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle variant={solidBg ? 'dark' : 'light'} />
            <button
              onClick={() => handleNavClick('/iletisim')}
              id="navbar-cta"
              className="group flex items-center gap-2 bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-accent-400/25 hover:shadow-xl hover:shadow-accent-400/30 hover:-translate-y-0.5 cursor-pointer"
            >
              {t.nav.cta}
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle variant={solidBg ? 'dark' : 'light'} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className={`p-2 rounded-xl transition-all duration-300 cursor-pointer ${
                solidBg
                  ? 'text-navy-700 hover:bg-navy-50'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={t.nav.menuToggle}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-navy-100 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 pb-1">
              <button
                onClick={() => handleNavClick('/iletisim')}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-400 to-accent-500 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer"
              >
                {t.nav.cta}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
