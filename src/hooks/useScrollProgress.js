import { useState, useEffect } from 'react';

/**
 * Hook to track window scroll progress percentage (0.0 to 1.0) and current section
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScrollHeight > 0 ? Math.min(Math.max(currentScrollY / totalScrollHeight, 0), 1) : 0;
      
      setScrollY(currentScrollY);
      setProgress(currentProgress);

      // Detect active section based on scroll offset
      const sections = ['hero', 'ecosystem', 'features', 'utility', 'security', 'calculator', 'analytics', 'how-it-works', 'cta'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { progress, scrollY, activeSection };
}
