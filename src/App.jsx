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
  },
  '/not-found': {
    title: 'Сторінку не знайдено',
    description: 'Сторінка, яку ви шукаєте, не існує.',
    canonical: 'https://etk.com.ua/404'
  }
};

function PageMeta({ path }) {
  const meta = routeMeta[path] || routeMeta['/not-found'];
  
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.canonical} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
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
