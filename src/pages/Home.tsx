import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import CTABanner from '../components/CTABanner';
import SEO from '../components/SEO';
import { useLang } from '../i18n/LanguageContext';
import { LINKEDIN_URL } from '../i18n/translations';

const SITE_URL = 'https://antyonetim.com';

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'ANT Yönetim Danışmanlık',
  alternateName: 'ANT Danışmanlık',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/antlogo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/antlogo.png`,
  sameAs: [LINKEDIN_URL],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+90-506-986-26-20',
      contactType: 'customer service',
      email: 'kurumsal@antyonetim.com',
      areaServed: 'TR',
      availableLanguage: ['Turkish', 'English'],
    },
  ],
};

const professionalServiceLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: 'ANT Yönetim Danışmanlık',
  description:
    'OSB mevzuatı, Ar-Ge ve Tasarım Merkezi, Teknopark muafiyetleri ve Kurumsal Yönetim Danışmanlığı alanlarında 15+ yıl kamu tecrübesiyle otorite danışmanlık.',
  url: SITE_URL,
  telephone: '+90-506-986-26-20',
  email: 'kurumsal@antyonetim.com',
  image: `${SITE_URL}/antlogo.png`,
  logo: `${SITE_URL}/antlogo.png`,
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'Türkiye',
  },
  serviceType: [
    'OSB Danışmanlığı',
    'Organize Sanayi Bölgesi Danışmanlığı',
    'Ar-Ge ve Tasarım Merkezi Danışmanlığı',
    'Teknopark Yönetim Danışmanlığı',
    'Kurumsal Yönetim Danışmanlığı',
    'KOSGEB ve TÜBİTAK Proje Danışmanlığı',
    'Yeşil OSB ve Sürdürülebilirlik Danışmanlığı',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'ANT Danışmanlık Hizmet Kataloğu',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'OSB Danışmanlığı ve Mevzuat Uyumu',
          description:
            '4562 sayılı OSB Kanunu kapsamında arsa tahsis yönetimi, organ yönetimi ve altyapı proje danışmanlığı.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ar-Ge, Tasarım Merkezi ve Teknopark Danışmanlığı',
          description:
            '5746 ve 4691 sayılı kanunlar kapsamında merkez kurulumu, teşvik yönetimi ve denetim hazırlığı.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hibe, Teşvik ve Proje Danışmanlığı',
          description:
            'TÜBİTAK, KOSGEB projeleri ve AB fonlarında fizibilite, başvuru ve izleme süreçleri.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kurumsal Yönetim ve Kapasite Geliştirme',
          description:
            'OSB organ yönetimi, kurumsallaşma yol haritası ve yasal risk yönetimi süreçleri.',
        },
      },
    ],
  },
};

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'ANT Danışmanlık',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'tr-TR',
};

const homeFaqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'OSB Danışmanlığı nedir ve hangi süreçleri kapsar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OSB Danışmanlığı; 4562 sayılı Organize Sanayi Bölgeleri Kanunu kapsamında arsa tahsis ve iptal yönetimi, organ yönetimi (Müteşebbis Heyet, Genel Kurul, Yönetim ve Denetim Kurulu), bölge müdürlüğü iç işleyiş kuralları, altyapı proje yönetimi, ihale süreçleri ve yeşil OSB sertifikasyon süreçlerini kapsayan uçtan uca uzmanlık hizmetidir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Organize Sanayi Bölgesi (OSB) mevzuat uyum süreçleri için danışman gerekir mi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet. OSB mevzuatı; arsa tahsis prosedürleri, katılımcı sözleşmeleri, organ üyelerinin hukuki ve cezai sorumlulukları ve Bakanlık denetimleri açısından oldukça teknik bir alandır. Sıfır hata prensibiyle yönetilen profesyonel bir danışmanlık, hem hukuki risk hem de finansal kayıp ihtimalini en aza indirir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ar-Ge ve Tasarım Merkezi kurulumu için hangi şartlar aranır?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '5746 sayılı Kanun kapsamında Ar-Ge ve Tasarım Merkezi kurulumu için; sektöre göre belirlenmiş asgari tam zamanlı eşdeğer Ar-Ge personeli, ayrı fiziksel mekan, yıllık faaliyet raporu ve Sanayi ve Teknoloji Bakanlığı tarafından yapılan ön denetimden geçilmesi gerekmektedir. ANT Yönetim Danışmanlık, başvurudan sürekli denetim hazırlığına kadar tüm süreci yönetir.',
      },
    },
    {
      '@type': 'Question',
      name: 'KOSGEB ve TÜBİTAK projelerinde danışmanlık nasıl katkı sağlar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KOSGEB ve TÜBİTAK çağrılarında uygunluk analizi, fizibilite, başvuru dosyası hazırlama, proje yönetimi, ara dönem raporlama ve denetim süreçlerinin doğru yönetilmesi başarı oranını ciddi şekilde artırır. Veri odaklı ve mevzuat tam uyumlu bir danışmanlık, hibe-teşvik kaynaklarınızdan en yüksek verimi almanızı sağlar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Teknopark muafiyetleri kimleri kapsar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '4691 sayılı Teknoloji Geliştirme Bölgeleri Kanunu kapsamında bölge içinde faaliyet gösteren Ar-Ge, tasarım ve yazılım firmalarına gelir/kurumlar vergisi istisnası, gelir vergisi stopajı teşviki, sigorta primi işveren payı desteği ve KDV muafiyeti gibi avantajlar sunulmaktadır. Süreç doğru kurgulanmadığında bu muafiyetler tamamen kaybedilebilir.',
      },
    },
  ],
};

const Home: React.FC = () => {
  const { lang } = useLang();

  return (
    <>
      <SEO
        title="OSB, Ar-Ge ve Kurumsal Yönetim Danışmanlığı"
        description="OSB mevzuatı, Ar-Ge ve Tasarım Merkezi kurulumu ve kurumsal yönetim süreçlerinde 15+ yıl kamu tecrübesiyle danışmanlık. Ücretsiz ön görüşme için bize ulaşın."
        url="/"
        type="website"
        lang={lang}
        keywords={[
          'OSB danışmanlığı',
          'Organize Sanayi Bölgesi danışmanlığı',
          'OSB mevzuatı',
          'Ar-Ge ve Tasarım Merkezi danışmanlığı',
          'Teknopark muafiyetleri',
          'Kurumsal Yönetim Danışmanlığı',
          'KOSGEB danışmanlığı',
          'TÜBİTAK proje danışmanlığı',
          'yeşil OSB',
          '4562 sayılı Kanun',
          '5746 sayılı Kanun',
          '4691 sayılı Kanun',
          'ANT Yönetim Danışmanlık',
        ]}
        jsonLd={[organizationLd, professionalServiceLd, websiteLd, homeFaqLd]}
      />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <CTABanner />
      </main>
    </>
  );
};

export default Home;
