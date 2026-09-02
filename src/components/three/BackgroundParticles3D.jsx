import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Subtle 3D background floating geometric tokens & ambient depth particles
 */
export default function BackgroundParticles3D({ count = 35 }) {
  const meshRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 16;
      const z = (Math.random() - 0.5) * 8 - 3;
      const speed = 0.2 + Math.random() * 0.4;
      const rotSpeed = 0.5 + Math.random();
      const scale = 0.08 + Math.random() * 0.15;
      temp.push({ x, y, z, speed, rotSpeed, scale });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    particles.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(t * p.speed + i) * 0.3,
        p.y + Math.cos(t * p.speed + i) * 0.3,
        p.z
      );
      dummy.rotation.set(
        t * p.rotSpeed * 0.5,
        t * p.rotSpeed * 0.7,
        0
      );
      dummy.scale.set(p.scale, p.scale, p.scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#1856F3"
        metalness={0.8}
        roughness={0.3}
        transparent
        opacity={0.25}
      />
    </instancedMesh>
  );
}
