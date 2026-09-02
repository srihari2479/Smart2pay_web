import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, Float } from '@react-three/drei';
import SmartCard3D from './SmartCard3D';
import PaymentEcosystem3D from './PaymentEcosystem3D';
import SecurityShield3D from './SecurityShield3D';
import BackgroundParticles3D from './BackgroundParticles3D';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.warn('[ThreeCanvas] WebGL context error fallback:', error, info);
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

export default function ThreeCanvas({
  scene = 'hero-card', // 'hero-card' | 'ecosystem' | 'security' | 'background'
  className = '',
  height = 'h-[400px] sm:h-[480px] lg:h-[540px]',
  activeStep = 0
}) {
  const containerRef = useRef(null);
  const { progress } = useScrollProgress();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [mouse, setMouse] = useState({ x: 0, y: 0, isHovered: false });

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate normalized coordinates (-1 to 1) relative to the local canvas box
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setMouse({
      x: Math.max(-1.5, Math.min(1.5, x)),
      y: Math.max(-1.5, Math.min(1.5, y)),
      isHovered: true
    });
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0, isHovered: false });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full ${height} ${className} overflow-hidden pointer-events-auto cursor-pointer select-none`}
    >
      <CanvasErrorBoundary>
        <Canvas
          shadows
          dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
          camera={{ position: [0, 0, 5.3], fov: 48 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="pointer-events-auto"
        >
          {/* Lighting Rig */}
          <ambientLight intensity={1.2} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
          <directionalLight position={[-5, -2, -2]} intensity={0.5} color="#1856F3" />
          <pointLight position={[0, 3, 2]} intensity={0.8} color="#F59E0B" />

          <Suspense fallback={null}>
            {/* Background floating geometric tokens */}
            <BackgroundParticles3D count={25} />

            {/* Main Scene Render based on prop */}
            {scene === 'hero-card' && (
              <SmartCard3D scrollProgress={progress} mouse={mouse} />
            )}

            {scene === 'ecosystem' && (
              <PaymentEcosystem3D scrollProgress={progress} activeStep={activeStep} mouse={mouse} />
            )}

            {scene === 'security' && (
              <SecurityShield3D scrollProgress={progress} mouse={mouse} />
            )}

            {/* Soft Contact Ground Shadows */}
            <ContactShadows
              position={[0, -2.4, 0]}
              opacity={0.35}
              scale={10}
              blur={2.2}
              far={4}
            />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
