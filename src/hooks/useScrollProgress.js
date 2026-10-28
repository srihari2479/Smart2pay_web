import { useState, useEffect } from 'react';

/**
 * Shared singleton scroll progress & active section tracker
 * Eliminates 36+ redundant getBoundingClientRect queries per scroll frame.
 */
let sharedProgress = 0;
let sharedScrollY = 0;
let sharedActiveSection = 'hero';
const listeners = new Set();
let scrollAttached = false;
let ticking = false;

const SECTIONS = ['hero', 'ecosystem', 'features', 'utility', 'security', 'calculator', 'analytics', 'how-it-works', 'cta'];

function updateScrollMetrics() {
  if (typeof window === 'undefined') return;
  const currentScrollY = window.scrollY;
  const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const currentProgress = totalScrollHeight > 0 ? Math.min(Math.max(currentScrollY / totalScrollHeight, 0), 1) : 0;

  sharedScrollY = currentScrollY;
  sharedProgress = currentProgress;

  if (currentScrollY < 180) {
    sharedActiveSection = 'hero';
  } else {
    const viewportMid = window.innerHeight * 0.35;
    let matched = null;
    for (const sectionId of SECTIONS) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportMid && rect.bottom >= 120) {
          matched = sectionId;
          break;
        }
      }
    }
    if (matched) {
      sharedActiveSection = matched;
    }
  }

  listeners.forEach((listener) => {
    listener({ progress: sharedProgress, scrollY: sharedScrollY, activeSection: sharedActiveSection });
  });

  ticking = false;
}

function onWindowScroll() {
  if (!ticking) {
    ticking = true;
    window.requestAnimationFrame(updateScrollMetrics);
  }
}

export function useScrollProgress() {
  const [state, setState] = useState({
    progress: sharedProgress,
    scrollY: sharedScrollY,
    activeSection: sharedActiveSection,
  });

  useEffect(() => {
    const listener = (metrics) => {
      setState(metrics);
    };

    listeners.add(listener);

    if (!scrollAttached && typeof window !== 'undefined') {
      window.addEventListener('scroll', onWindowScroll, { passive: true });
      scrollAttached = true;
      updateScrollMetrics();
    }

    return () => {
      listeners.delete(listener);
      if (listeners.size === 0 && scrollAttached && typeof window !== 'undefined') {
        window.removeEventListener('scroll', onWindowScroll);
        scrollAttached = false;
      }
    };
  }, []);

  return state;
}
