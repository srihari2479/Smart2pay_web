import { useState, useEffect } from 'react';

/**
 * Throttled RAF Hook to track window scroll progress percentage (0.0 to 1.0) and current section
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentProgress = totalScrollHeight > 0 ? Math.min(Math.max(currentScrollY / totalScrollHeight, 0), 1) : 0;
          
          setScrollY(currentScrollY);
          setProgress((prev) => Math.abs(prev - currentProgress) > 0.001 ? currentProgress : prev);

          // Force 'hero' section when near top of page
          if (currentScrollY < 180) {
            setActiveSection('hero');
            ticking = false;
            return;
          }

          // Detect active section based on viewport intersection
          const sections = ['hero', 'ecosystem', 'features', 'utility', 'security', 'calculator', 'analytics', 'how-it-works', 'cta'];
          const viewportMid = window.innerHeight * 0.35;

          let matched = null;
          for (const sectionId of sections) {
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
            setActiveSection((prev) => prev !== matched ? matched : prev);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { progress, scrollY, activeSection };
}
