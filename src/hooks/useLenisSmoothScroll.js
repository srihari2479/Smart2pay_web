import { useEffect, useState, useCallback } from 'react';
import Lenis from 'lenis';

/**
 * Global Lenis smooth scroll manager (Singleton)
 * Ensures only ONE Lenis instance and ONE requestAnimationFrame loop exist
 * across the entire application, eliminating wheel conflicts and scroll judder.
 */
let globalLenisInstance = null;
let globalRafId = null;
let subscriberCount = 0;
const scrollListeners = new Set();

function initGlobalLenis() {
  if (typeof window === 'undefined') return null;
  if (globalLenisInstance) return globalLenisInstance;

  // Check if user prefers reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return null;

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential decay for butter-smooth momentum
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.3,
    infinite: false,
    autoResize: true,
  });

  globalLenisInstance = lenis;

  // Add lenis class to html
  document.documentElement.classList.add('lenis', 'lenis-smooth');

  // Unified Single RAF Loop
  function raf(time) {
    if (globalLenisInstance) {
      globalLenisInstance.raf(time);
      globalRafId = requestAnimationFrame(raf);
    }
  }
  globalRafId = requestAnimationFrame(raf);

  // Broadcast scroll events to registered listeners
  lenis.on('scroll', (e) => {
    scrollListeners.forEach((listener) => {
      try {
        listener(e);
      } catch (err) {
        console.error('[Lenis] Listener error:', err);
      }
    });
  });

  return globalLenisInstance;
}

function teardownGlobalLenis() {
  if (globalRafId) {
    cancelAnimationFrame(globalRafId);
    globalRafId = null;
  }
  if (globalLenisInstance) {
    globalLenisInstance.destroy();
    globalLenisInstance = null;
    document.documentElement.classList.remove('lenis', 'lenis-smooth');
  }
}

export function useLenisSmoothScroll() {
  const [, setTick] = useState(0);

  useEffect(() => {
    subscriberCount++;
    if (!globalLenisInstance) {
      initGlobalLenis();
      setTick((t) => t + 1);
    }

    return () => {
      subscriberCount--;
      if (subscriberCount <= 0) {
        subscriberCount = 0;
        teardownGlobalLenis();
      }
    };
  }, []);

  const scrollTo = useCallback((target, options = {}) => {
    if (globalLenisInstance) {
      globalLenisInstance.scrollTo(target, {
        offset: -96,
        duration: 1.15,
        ...options,
      });
    } else {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const onScroll = useCallback((callback) => {
    scrollListeners.add(callback);
    return () => {
      scrollListeners.delete(callback);
    };
  }, []);

  return {
    lenis: globalLenisInstance,
    scrollTo,
    onScroll,
  };
}
