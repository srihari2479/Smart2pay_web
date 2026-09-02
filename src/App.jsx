import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import DeleteAccount from './pages/DeleteAccount';
import NotFound from './pages/NotFound';
import { useLenisSmoothScroll } from './hooks/useLenisSmoothScroll';

/**
 * Helper component that resets window scroll position on route change
 */
function ScrollToTop({ scrollTo }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      scrollTo(`#${hash.replace('#', '')}`);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, scrollTo]);

  return null;
}

export default function App() {
  const { scrollTo } = useLenisSmoothScroll();

  return (
    <>
      <ScrollToTop scrollTo={scrollTo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
