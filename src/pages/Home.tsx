import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import CTABanner from '../components/CTABanner';
import SEO from '../components/SEO';
import { useLang } from '../i18n/LanguageContext';

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
          'Ar-Ge ve Tasarım Merkezi danışmanlığı',
          'Kurumsal Yönetim Danışmanlığı',
          'Teknopark muafiyetleri',
          'yeşil OSB',
          'ANT Yönetim Danışmanlık',
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
