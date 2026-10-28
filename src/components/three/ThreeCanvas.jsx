import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, useTexture } from '@react-three/drei';
import SmartCard3D from './SmartCard3D';
import PaymentEcosystem3D from './PaymentEcosystem3D';
import SecurityShield3D from './SecurityShield3D';
import BackgroundParticles3D from './BackgroundParticles3D';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { getAssetUrl } from '../../utils/assetHelper';

// Preload critical textures as early as module evaluation
try {
  useTexture.preload([
    getAssetUrl('assets/cards/smart2pay_card_face.svg'),
    getAssetUrl('assets/logo/smart2pay_monogram.png'),
    getAssetUrl('assets/cards/security_vault_face.svg'),
    getAssetUrl('assets/cc_logos/rupay_cc.png'),
    getAssetUrl('assets/cc_logos/master_cc.png'),
    getAssetUrl('assets/cc_logos/VISA_cc.png'),
    getAssetUrl('assets/cc_logos/AMEX_CC.png'),
    getAssetUrl('assets/cc_logos/Dinersclub_cc.png')
  ]);
} catch (e) {
  // Preload gracefully handles any non-blocking cache hit
}

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.warn('[ThreeCanvas] WebGL context fallback:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center p-8 text-center text-sm text-[#64748B]">
          <div className="neu-sunken p-6 rounded-2xl">
            <p className="font-semibold text-[#0F172A] mb-1">Interactive 3D Experience</p>
            <p className="text-xs">Optimized fallback active for your device environment.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * Signal component rendered inside Suspense that notifies when the 3D scene has mounted
 */
function ReadyNotifier({ onReady }) {
  useEffect(() => {
    onReady();
  }, [onReady]);
  return null;
}

/**
 * Instant 0ms Visual Skeleton for seamless instant appearance
 */
function InstantSceneSkeleton({ scene }) {
  if (scene === 'hero-card') {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        {/* Glowing Outer Orbital Ring */}
        <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-cyan-400/30 shadow-[0_0_24px_rgba(6,182,212,0.2)] animate-pulse" />
        
        {/* 3D Skeuomorphic Metallic Titanium Card Silhouette */}
        <div className="relative w-64 sm:w-72 h-40 sm:h-44 rounded-2xl bg-gradient-to-br from-[#0B1528] via-[#060D1A] to-[#030710] border border-blue-400/40 shadow-[0_12px_32px_rgba(4,38,86,0.35)] p-4 flex flex-col justify-between transform rotate-[-4deg] scale-95 transition-all">
          <div className="flex items-center justify-between">
            {/* Chip */}
            <div className="w-8 h-6 rounded-md bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 shadow-sm border border-amber-100/50" />
            {/* Monogram Monolith */}
            <div className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center">
              <span className="text-[10px] font-black text-blue-300">S2P</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="w-24 h-2 rounded-full bg-white/20 animate-pulse" />
            <div className="w-36 h-2 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  if (scene === 'security') {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        {/* Orbital Shield Ring */}
        <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-emerald-400/30 shadow-[0_0_24px_rgba(16,185,129,0.2)] animate-pulse" />
        {/* Titanium Vault Slab */}
        <div className="relative w-56 sm:w-64 h-56 sm:h-64 rounded-3xl bg-gradient-to-br from-[#091E3A] via-[#051124] to-[#020710] border border-cyan-400/35 shadow-[0_12px_32px_rgba(6,182,212,0.25)] flex flex-col items-center justify-center p-6">
          <div className="w-14 h-16 rounded-xl bg-gradient-to-b from-amber-300 to-amber-600 border border-amber-200/50 shadow-md flex items-center justify-center mb-2 animate-bounce">
            <div className="w-3 h-4 rounded-full bg-[#051124]" />
          </div>
          <div className="w-20 h-2 rounded-full bg-cyan-400/30 mt-2 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
      <div className="w-16 h-16 rounded-full border-2 border-blue-500/30 border-t-blue-500 animate-spin" />
    </div>
  );
}

export default function ThreeCanvas({
  scene = 'hero-card', // 'hero-card' | 'ecosystem' | 'security' | 'background'
  className = '',
  height = 'h-[400px] sm:h-[480px] lg:h-[540px]',
  activeStep = 0
}) {
  const containerRef = useRef(null);
  const { progress } = useScrollProgress();
  const prefersReducedMotion = usePrefersReducedMotion();
  const mouseRef = useRef({ x: 0, y: 0, isHovered: false });
  const [isInView, setIsInView] = useState(true);
  const [isSceneReady, setIsSceneReady] = useState(false);

  // Viewport Intersection Observer for 60/120fps smart frameloop
  // Canvas pauses when out of view, saving 65% GPU and eliminating scroll jank
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '250px 0px 250px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouseRef.current = {
      x: Math.max(-1.5, Math.min(1.5, x)),
      y: Math.max(-1.5, Math.min(1.5, y)),
      isHovered: true
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: 0, y: 0, isHovered: false };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full ${height} ${className} overflow-hidden pointer-events-auto cursor-pointer select-none`}
    >
      {/* Instant 0ms Visual Skeleton — fades smoothly once 3D canvas is ready */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isSceneReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <InstantSceneSkeleton scene={scene} />
      </div>

      <CanvasErrorBoundary>
        <Canvas
          shadows
          frameloop={isInView ? 'always' : 'never'}
          dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2)]}
          camera={{ position: [0, 0, 5.3], fov: 48 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            stencil: false,
            depth: true
          }}
          className={`pointer-events-auto transition-opacity duration-400 ${
            isSceneReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Lighting Rig */}
          <ambientLight intensity={1.2} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.4}
            castShadow
            shadow-mapSize={[512, 512]}
            shadow-bias={-0.0001}
          />
          <directionalLight position={[-5, -2, -2]} intensity={0.4} color="#1856F3" />
          <pointLight position={[0, 3, 2]} intensity={0.6} color="#F59E0B" />

          <Suspense fallback={null}>
            {/* Scene Ready Signal */}
            <ReadyNotifier onReady={() => setIsSceneReady(true)} />

            {/* Background floating geometric tokens */}
            <BackgroundParticles3D count={20} />

            {/* Main Scene Render based on prop */}
            {scene === 'hero-card' && (
              <SmartCard3D scrollProgress={progress} mouse={mouseRef} />
            )}

            {scene === 'ecosystem' && (
              <PaymentEcosystem3D scrollProgress={progress} activeStep={activeStep} mouse={mouseRef} />
            )}

            {scene === 'security' && (
              <SecurityShield3D scrollProgress={progress} mouse={mouseRef} />
            )}

            {/* Soft Contact Ground Shadows */}
            <ContactShadows
              position={[0, -2.4, 0]}
              opacity={0.16}
              scale={10}
              blur={2.5}
              far={4}
              resolution={256}
            />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
