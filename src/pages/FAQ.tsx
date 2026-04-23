import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

const SITE_URL = 'https://antyonetim.com';

const FAQ: React.FC = () => {
  const { t, lang } = useLang();
  const faq = t.faq;
  const [openKey, setOpenKey] = useState<string | null>('0-0');

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const faqPageLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/sss#faqpage`,
    mainEntity: faq.categories.flatMap((cat) =>
      cat.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      }))
    ),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: lang === 'en' ? 'Home' : 'Anasayfa',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: faq.pageBadge,
        item: `${SITE_URL}/sss`,
      },
    ],
  };

  const seoTitle =
    lang === 'en'
      ? 'FAQ — OIZ, R&D and Incentive Consulting'
      : 'SSS — OSB, Ar-Ge ve Teşvik Danışmanlığı';

  const seoDescription =
    lang === 'en'
      ? 'Expert answers to frequently asked questions about OIZ regulations, R&D and Design Centres, Technopark exemptions and KOSGEB-TÜBİTAK projects.'
      : 'OSB mevzuatı, Ar-Ge ve Tasarım Merkezi kurulumu, Teknopark muafiyetleri, KOSGEB-TÜBİTAK projeleri hakkında en çok sorulan sorulara uzman yanıtları.';

  const seoKeywords =
    lang === 'en'
      ? [
          'OIZ FAQ',
          'R&D Centre setup',
          'Technopark exemptions',
          'KOSGEB support',
          'TÜBİTAK projects',
          'ANT Management Consulting FAQ',
        ]
      : [
          'OSB nedir',
          'OSB sıkça sorulan sorular',
          'Ar-Ge Merkezi nasıl kurulur',
          'Teknopark muafiyetleri',
          'KOSGEB destekleri',
          'TÜBİTAK 1501 1507',
          '4562 sayılı OSB Kanunu',
          '5746 sayılı Kanun',
          '4691 sayılı Kanun',
          'ANT Yönetim Danışmanlık SSS',
        ];

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        url="/sss"
        type="website"
        lang={lang}
        keywords={seoKeywords}
        jsonLd={[faqPageLd, breadcrumbLd]}
      />
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

          <header className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 mb-6">
              <HelpCircle className="w-3.5 h-3.5 text-accent-400" />
              <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">
                {faq.pageBadge}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              {faq.pageTitleStart}{' '}
              <span className="bg-gradient-to-r from-accent-400 to-amber-300 bg-clip-text text-transparent">
                {faq.pageTitleAccent}
              </span>
            </h1>
            <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
              {faq.pageDescription}
            </p>
          </header>
        </section>

        <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-12">
          {faq.categories.map((category, catIdx) => (
            <div key={category.title} className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-400/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight leading-tight">
                    {category.title}
                  </h2>
                  <p className="text-navy-500 text-sm sm:text-base leading-relaxed mt-2">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {category.items.map((item, idx) => {
                  const key = `${catIdx}-${idx}`;
                  const isOpen = openKey === key;
                  return (
                    <div
                      key={key}
                      className={`bg-white rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? 'border-accent-400/40 shadow-lg shadow-accent-400/10'
                          : 'border-navy-100 hover:border-navy-200'
                      }`}
                    >
                      <button
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        className="w-full text-left flex items-start justify-between gap-4 p-5 sm:p-6 cursor-pointer"
                      >
                        <h3
                          className={`font-semibold text-base sm:text-lg leading-snug transition-colors ${
                            isOpen ? 'text-navy-900' : 'text-navy-800'
                          }`}
                        >
                          {item.question}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-accent-500 flex-shrink-0 mt-1 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-navy-600 leading-relaxed px-5 sm:px-6 pb-6 text-sm sm:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-navy-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-navy-700 font-medium text-lg leading-relaxed">
              {faq.ctaText}
            </p>
            <Link
              to="/iletisim"
              className="group shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-accent-400/25 hover:shadow-accent-400/40 hover:-translate-y-0.5"
            >
              {faq.ctaLabel}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ;
