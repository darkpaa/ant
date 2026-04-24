import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const Corporate = lazy(() => import('./pages/Corporate'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const OsbDanismanligi = lazy(() => import('./pages/OsbDanismanligi'));
const Glossary = lazy(() => import('./pages/Glossary'));

const RouteFallback: React.FC = () => (
  <div
    role="status"
    aria-live="polite"
    className="min-h-screen flex items-center justify-center bg-gray-50/60"
  >
    <div className="w-10 h-10 rounded-full border-4 border-navy-100 border-t-accent-400 animate-spin" />
    <span className="sr-only">Yükleniyor…</span>
  </div>
);

const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased animate-fade-in">
      <ScrollManager />
      <Navbar />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kurumsal" element={<Corporate />} />
          <Route path="/about" element={<Corporate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sss" element={<Navigate to="/" replace />} />
          <Route path="/faq" element={<Navigate to="/" replace />} />
          <Route path="/gizlilik" element={<LegalPage variant="privacy" />} />
          <Route path="/kvkk" element={<LegalPage variant="kvkk" />} />
          <Route path="/cerez" element={<LegalPage variant="cookies" />} />
          <Route path="/osb-danismanligi" element={<OsbDanismanligi />} />
          <Route path="/osb-sozlugu" element={<Glossary />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
