import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import CTABanner from '../components/CTABanner';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <CTABanner />
    </main>
  );
};

export default Home;
