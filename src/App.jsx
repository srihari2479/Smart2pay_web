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
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    // If navigating back to Home with targetSection in state
    if (state?.targetSection) {
      setTimeout(() => {
        scrollTo(`#${state.targetSection}`);
      }, 100);
      return;
    }

    // Clean hash check - ignore mangled HashRouter paths like #/ or #/#ecosystem
    const cleanHash = hash ? hash.replace(/^[#\/]+/, '') : '';
    if (cleanHash && document.getElementById(cleanHash)) {
      setTimeout(() => {
        scrollTo(`#${cleanHash}`);
      }, 100);
    } else {
      // By default always scroll to top (0,0) to show Hero section
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, state, scrollTo]);

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
