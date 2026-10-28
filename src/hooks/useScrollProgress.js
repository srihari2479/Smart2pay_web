import { useState, useEffect } from 'react';

/**
 * Shared singleton scroll progress & active section tracker
 * Eliminates redundant getBoundingClientRect queries per scroll frame.
 */
let sharedProgress = 0;
let sharedScrollY = 0;
let sharedActiveSection = 'hero';
const listeners = new Set();
let scrollAttached = false;
let ticking = false;
let clickLockTimeout = null;

// Primary sections that have direct corresponding tabs in the Navbar
const NAVBAR_SECTIONS = [
  { id: 'hero', name: 'Home' },
  { id: 'ecosystem', name: 'Ecosystem' },
  { id: 'features', name: 'Features' },
  { id: 'utility', name: 'Services' },
  { id: 'security', name: 'Security' },
  { id: 'calculator', name: 'Fee Estimator' }
];

/**
 * Manually set the active section (e.g. immediately when a navbar tab is clicked)
 * and temporarily lock scroll-spy updates so smooth-scroll animations don't flicker.
 */
export function setActiveSectionManually(sectionId, lockDurationMs = 1200) {
  sharedActiveSection = sectionId;

  if (clickLockTimeout) {
    clearTimeout(clickLockTimeout);
  }

  clickLockTimeout = setTimeout(() => {
    clickLockTimeout = null;
    updateScrollMetrics();
  }, lockDurationMs);

  listeners.forEach((listener) => {
    listener({ progress: sharedProgress, scrollY: sharedScrollY, activeSection: sharedActiveSection });
  });
}

function updateScrollMetrics() {
  if (typeof window === 'undefined') return;
  const currentScrollY = window.scrollY;
  const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const currentProgress = totalScrollHeight > 0 ? Math.min(Math.max(currentScrollY / totalScrollHeight, 0), 1) : 0;

  sharedScrollY = currentScrollY;
  sharedProgress = currentProgress;

  // If a tab was just clicked, retain the selected section during smooth-scroll
  if (clickLockTimeout) {
    listeners.forEach((listener) => {
      listener({ progress: sharedProgress, scrollY: sharedScrollY, activeSection: sharedActiveSection });
    });
    ticking = false;
    return;
  }

  // 1. Top of page: always highlight 'hero'
  if (currentScrollY < 180) {
    sharedActiveSection = 'hero';
  } 
  // 2. Near bottom of page: keep the last navbar section ('calculator') active
  else if (totalScrollHeight > 0 && currentScrollY >= totalScrollHeight - 80) {
    sharedActiveSection = 'calculator';
  } 
  // 3. Focal line & dominant visible height algorithm
  else {
    const focalY = window.innerHeight * 0.45; // 45% of viewport height (main viewing focus)
    let matched = null;

    // Check which section intersects the central focal line
    const scrollableSections = ['ecosystem', 'features', 'utility', 'security', 'calculator'];
    for (const sectionId of scrollableSections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= focalY && rect.bottom > focalY) {
          matched = sectionId;
          break;
        }
      }
    }

    // Fallback: If no section crosses the exact focal line, pick the section with maximum visible height
    if (!matched) {
      let maxVisible = 0;
      for (const sectionId of scrollableSections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
          if (visibleHeight > maxVisible) {
            maxVisible = visibleHeight;
            matched = sectionId;
          }
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
