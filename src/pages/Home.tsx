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
  founder: { '@id': `${SITE_URL}/kurumsal#ilker-tura` },
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

const SERVICE_AREA = { '@type': 'Country', name: 'Türkiye' };
const PROVIDER_REF = { '@id': `${SITE_URL}/#organization` };

const serviceOsbLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#service-osb`,
  serviceType: 'OSB Danışmanlığı ve Mevzuat Uyumu',
  name: 'OSB Danışmanlığı ve Mevzuat Uyumu',
  description:
    '4562 sayılı Organize Sanayi Bölgeleri Kanunu ve OSB Uygulama Yönetmeliği kapsamında arsa tahsis ve iptal yönetimi, organ yönetimi (Müteşebbis Heyet, Genel Kurul, Yönetim ve Denetim Kurulu), altyapı proje danışmanlığı, ihale süreçleri ve Akıllı OSB dijital dönüşüm süreçlerini uçtan uca yönetiyoruz.',
  provider: PROVIDER_REF,
  areaServed: SERVICE_AREA,
  category: 'OSB Danışmanlığı',
  audience: { '@type': 'BusinessAudience', audienceType: 'OSB Yönetici Şirketleri ve Katılımcı Firmalar' },
};

const serviceArgeLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#service-arge`,
  serviceType: 'Ar-Ge, Tasarım Merkezi ve Teknopark Danışmanlığı',
  name: 'Ar-Ge, Tasarım Merkezi ve Teknopark Danışmanlığı',
  description:
    '5746 sayılı Kanun kapsamında Ar-Ge ve Tasarım Merkezi kurulumu, 4691 sayılı Kanun kapsamında Teknopark muafiyetleri ve yönetici şirket operasyonları, yıllık faaliyet raporu hazırlığı ve ön denetim süreçlerini sıfır hata prensibiyle yürütüyoruz.',
  provider: PROVIDER_REF,
  areaServed: SERVICE_AREA,
  category: 'Ar-Ge ve Tasarım Merkezi Danışmanlığı',
  audience: { '@type': 'BusinessAudience', audienceType: 'Ar-Ge Yoğun İşletmeler ve Teknopark Firmaları' },
};

const serviceHibeLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#service-hibe`,
  serviceType: 'Hibe, Teşvik ve Proje Danışmanlığı',
  name: 'Hibe, Teşvik ve KOSGEB-TÜBİTAK Proje Danışmanlığı',
  description:
    'KOSGEB destek programları, TÜBİTAK 1501 Sanayi Ar-Ge ve 1507 KOBİ Ar-Ge Başlangıç gibi proje çağrıları, AB fonları ve devlet teşviklerinde uygunluk analizi, fizibilite, başvuru dosyası hazırlama, proje yönetimi ve ara dönem raporlama süreçlerini yönetiyoruz.',
  provider: PROVIDER_REF,
  areaServed: SERVICE_AREA,
  category: 'Hibe ve Teşvik Yönetimi',
  audience: { '@type': 'BusinessAudience', audienceType: 'KOBİ ve Büyük Ölçekli Sanayi Firmaları' },
};

const serviceKurumsalLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#service-kurumsal`,
  serviceType: 'Kurumsal Yönetim ve Kapasite Geliştirme',
  name: 'Kurumsal Yönetim ve Kapasite Geliştirme',
  description:
    'OSB organ yönetimi, yönetim ve denetim kurulu üyelerinin hukuki-cezai sorumluluk analizi, kurumsallaşma yol haritası ve yasal risk yönetimi süreçlerini; stratejik planlama ve veri odaklı karar destek mekanizmalarıyla birleştiriyoruz.',
  provider: PROVIDER_REF,
  areaServed: SERVICE_AREA,
  category: 'Kurumsal Yönetim Danışmanlığı',
};

const serviceTeknoparkLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#service-teknopark`,
  serviceType: 'Teknopark ve TGB Yönetici Şirket Danışmanlığı',
  name: 'TGB Yönetici Şirket Danışmanlığı',
  description:
    '4691 sayılı Kanun kapsamında Teknoloji Geliştirme Bölgeleri yönetici şirket operasyonları, Teknopark Portalı üzerinden proje giriş ve muafiyet yönetimi, portal üzerinden personel takibi ve ön denetim süreçlerinde mevzuata tam uyumlu ekosistem yönetimi sağlıyoruz.',
  provider: PROVIDER_REF,
  areaServed: SERVICE_AREA,
  category: 'Teknopark Yönetim Danışmanlığı',
};

const serviceYesilLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#service-yesil`,
  serviceType: 'Stratejik Planlama ve Yeşil Dönüşüm',
  name: 'Stratejik Planlama ve Yeşil Dönüşüm',
  description:
    'Avrupa Yeşil Mutabakatı uyumu, Yeşil OSB sertifikasyon süreci, sanayide yeşil dönüşüm ve inovasyon yönetimi, enerji verimliliği ve sürdürülebilirlik stratejilerinde uzun vadeli yol haritası oluşturuyoruz.',
  provider: PROVIDER_REF,
  areaServed: SERVICE_AREA,
  category: 'Yeşil OSB ve Sürdürülebilirlik',
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
  areaServed: SERVICE_AREA,
  parentOrganization: PROVIDER_REF,
  serviceType: [
    'OSB Danışmanlığı',
    'Organize Sanayi Bölgesi Danışmanlığı',
    'Ar-Ge ve Tasarım Merkezi Danışmanlığı',
    'Teknopark Yönetim Danışmanlığı',
    'Kurumsal Yönetim Danışmanlığı',
    'KOSGEB ve TÜBİTAK Proje Danışmanlığı',
    'Yeşil OSB ve Sürdürülebilirlik Danışmanlığı',
  ],
  makesOffer: [
    { '@id': `${SITE_URL}/#service-osb` },
    { '@id': `${SITE_URL}/#service-arge` },
    { '@id': `${SITE_URL}/#service-hibe` },
    { '@id': `${SITE_URL}/#service-kurumsal` },
    { '@id': `${SITE_URL}/#service-teknopark` },
    { '@id': `${SITE_URL}/#service-yesil` },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'ANT Danışmanlık Hizmet Kataloğu',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@id': `${SITE_URL}/#service-osb` } },
      { '@type': 'Offer', itemOffered: { '@id': `${SITE_URL}/#service-arge` } },
      { '@type': 'Offer', itemOffered: { '@id': `${SITE_URL}/#service-hibe` } },
      { '@type': 'Offer', itemOffered: { '@id': `${SITE_URL}/#service-kurumsal` } },
      { '@type': 'Offer', itemOffered: { '@id': `${SITE_URL}/#service-teknopark` } },
      { '@type': 'Offer', itemOffered: { '@id': `${SITE_URL}/#service-yesil` } },
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
        jsonLd={[
          organizationLd,
          professionalServiceLd,
          websiteLd,
          serviceOsbLd,
          serviceArgeLd,
          serviceHibeLd,
          serviceKurumsalLd,
          serviceTeknoparkLd,
          serviceYesilLd,
          homeFaqLd,
        ]}
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
