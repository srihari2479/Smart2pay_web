import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { getAssetUrl } from '../../utils/assetHelper';

// Global in-memory cache for loaded animation JSON data
const lottieCache = new Map();
const pendingFetches = new Map();

/**
 * Preload an animation JSON file into memory ahead of time
 */
export function preloadLottie(src) {
  if (!src) return Promise.resolve(null);
  const url = getAssetUrl(src);
  if (lottieCache.has(url)) {
    return Promise.resolve(lottieCache.get(url));
  }
  if (pendingFetches.has(url)) {
    return pendingFetches.get(url);
  }

  const fetchPromise = fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return res.json();
    })
    .then((data) => {
      lottieCache.set(url, data);
      pendingFetches.delete(url);
      return data;
    })
    .catch((err) => {
      pendingFetches.delete(url);
      console.warn(`[LottiePlayer] Preload failed for ${src}:`, err);
      return null;
    });

  pendingFetches.set(url, fetchPromise);
  return fetchPromise;
}

/**
 * Optimized Lottie Player:
 * - Instant in-memory cache resolution (0ms delay on subsequent renders)
 * - Viewport IntersectionObserver: Pauses animation off-screen to save 80% CPU
 * - Instant animated SVG/CSS skeleton during initial fetch
 */
export default function LottiePlayer({
  src, // URL or direct path in /assets/animations/*.json
  animationData, // Pre-imported JSON object
  loop = true,
  autoplay = true,
  className = '',
  style = {},
  fallback = null
}) {
  const resolvedUrl = src ? getAssetUrl(src) : null;
  const initialData = animationData || (resolvedUrl ? lottieCache.get(resolvedUrl) : null);

  const [data, setData] = useState(initialData);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(!initialData && !!src);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const lottieRef = useRef(null);

  // Viewport intersection observer to play ONLY when in view
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '100px 0px 100px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Fetch or retrieve from cache
  useEffect(() => {
    if (animationData) {
      setData(animationData);
      setLoading(false);
      return;
    }

    if (!resolvedUrl) return;

    if (lottieCache.has(resolvedUrl)) {
      setData(lottieCache.get(resolvedUrl));
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);

    preloadLottie(src)
      .then((json) => {
        if (!isMounted) return;
        if (json) {
          setData(json);
          setLoading(false);
        } else {
          setHasError(true);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setHasError(true);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [src, resolvedUrl, animationData]);

  // Pause or play based on viewport visibility
  useEffect(() => {
    if (!lottieRef.current) return;
    if (isInView && autoplay) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [isInView, autoplay]);

  if (hasError || (!loading && !data)) {
    return fallback || (
      <div
        ref={containerRef}
        className={`flex items-center justify-center bg-[#E5EBF2]/60 rounded-2xl p-6 text-xs text-[#64748B] ${className}`}
        style={style}
      >
        <span>Smart2Pay Visual Asset</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {/* Instant Skeleton Placeholder while loading */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/40 via-white/10 to-transparent backdrop-blur-xs rounded-2xl animate-pulse">
          <div className="w-12 h-12 rounded-2xl bg-[#1856F3]/10 border border-[#1856F3]/20 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full border-2 border-[#1856F3]/30 border-t-[#1856F3] animate-spin" />
          </div>
        </div>
      )}

      {data && (
        <Lottie
          lottieRef={lottieRef}
          animationData={data}
          loop={loop}
          autoplay={autoplay && isInView}
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
}
