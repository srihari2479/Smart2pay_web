import { useRef, useCallback } from 'react';

/**
 * High-performance RAF ref-based 3D mouse tilt hook (0 React re-renders during mousemove)
 */
export function useMouseTilt(maxTilt = 10) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const rafIdRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    rafIdRef.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(0)`;
        cardRef.current.style.transition = 'transform 0.1s ease-out';
      }
      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.35) 0%, transparent 65%)`;
        glareRef.current.style.opacity = '1';
      }
    });
  }, [maxTilt]);

  const handleMouseLeave = useCallback(() => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    rafIdRef.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        cardRef.current.style.transition = 'transform 0.4s ease-out';
      }
      if (glareRef.current) {
        glareRef.current.style.opacity = '0';
      }
    });
  }, []);

  return {
    cardRef,
    glareRef,
    handleMouseMove,
    handleMouseLeave
  };
}
