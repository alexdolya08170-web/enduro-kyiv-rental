import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Loader from './components/Loader/Loader';

const routeMeta = {
  '/': {
    title: 'ETK — Ендуро прокат в Києві',
    description: 'Оренда ендуро мотоциклів у Києві. Професійна техніка, маршрути, інструктаж.',
    canonical: 'https://etk.com.ua/'
  }
};

function PageMeta({ path, customTitle, customDescription, customCanonical }) {
  const staticMeta = path ? routeMeta[path] : null;
  const title = customTitle || staticMeta?.title || defaultMeta.title;
  const description = customDescription || staticMeta?.description || defaultMeta.description;
  const canonical = customCanonical || staticMeta?.canonical || defaultMeta.canonical;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="ETK Enduro" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}

function RouteTransition({ children }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <PageMeta path={location.pathname} />
      {children}
    </>
  );
}

function AppContent() {
  const [appLoading, setAppLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setAppLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (appLoading) {
    return <Loader />;
  }

  return (
    <RouteTransition>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </RouteTransition>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
