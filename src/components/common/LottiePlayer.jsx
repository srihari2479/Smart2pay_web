import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { getAssetUrl } from '../../utils/assetHelper';

/**
 * Reusable Lottie Player that loads JSON animation files dynamically with fallback
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
  const [data, setData] = useState(animationData || null);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(!animationData && !!src);

  useEffect(() => {
    if (animationData) {
      setData(animationData);
      setLoading(false);
      return;
    }

    if (src) {
      setLoading(true);
      fetch(getAssetUrl(src))
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then((json) => {
          setData(json);
          setLoading(false);
        })
        .catch((err) => {
          console.warn(`[LottiePlayer] Failed to load animation from ${src}:`, err);
          setHasError(true);
          setLoading(false);
        });
    }
  }, [src, animationData]);

  if (hasError || (!loading && !data)) {
    return fallback || (
      <div className={`flex items-center justify-center bg-[#E5EBF2] rounded-2xl p-6 text-xs text-[#64748B] ${className}`} style={style}>
        <span>Smart2Pay Visual Asset</span>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`} style={style}>
        <div className="w-8 h-8 rounded-full border-2 border-[#1856F3]/30 border-t-[#1856F3] animate-spin" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <Lottie
        animationData={data}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
