import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, Line, Text } from '@react-three/drei';
import * as THREE from 'three';

/**
 * 3D Payment Flow Network Topology
 * Synchronized with scroll position and active step selection.
 */
export default function PaymentEcosystem3D({ scrollProgress = 0, activeStep = 0, mouse = { x: 0, y: 0, isHovered: false } }) {
  const groupRef = useRef();
  const particle1Ref = useRef();
  const particle2Ref = useRef();
  const particle3Ref = useRef();
  const nodeMeshRefs = useRef([]);

  // Define 3D Node coordinates with centered vertical distribution
  const nodes = useMemo(() => [
    { id: 'user', name: 'User / App', pos: [-2.6, 0.8, 0], color: '#38BDF8', defaultScale: 1.0 },
    { id: 'smart2pay', name: 'Smart2Pay Core', pos: [0, 0.1, 0.4], color: '#1856F3', defaultScale: 1.3 },
    { id: 'bank', name: 'Multi-Bank Switch', pos: [2.6, 0.8, -0.4], color: '#10B981', defaultScale: 1.0 },
    { id: 'merchant', name: 'Instant Settlement', pos: [0, -1.5, 0.2], color: '#F59E0B', defaultScale: 1.0 }
  ], []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // 1. Organic Parallax & Gentle Rotation
    const targetRotY = (mouse.x * 0.15) + Math.sin(t * 0.3) * 0.12 + (scrollProgress * 0.4);
    const targetRotX = (mouse.y * 0.12) + Math.cos(t * 0.25) * 0.05;
    
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.08);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.08);

    // 2. Animate Data Packets along Active Branches
    const speedMultiplier = activeStep >= 0 ? 1.4 : 1.0;
    const progress1 = (t * 0.85 * speedMultiplier) % 1;
    const progress2 = (t * 1.15 * speedMultiplier) % 1;
    const progress3 = (t * 0.95 * speedMultiplier) % 1;

    if (particle1Ref.current) {
      particle1Ref.current.position.lerpVectors(
        new THREE.Vector3(...nodes[0].pos),
        new THREE.Vector3(...nodes[1].pos),
        progress1
      );
      const isBranchActive = activeStep === 0 || activeStep === 1;
      particle1Ref.current.scale.setScalar(isBranchActive ? 1.4 + Math.sin(t * 6) * 0.2 : 0.9);
    }

    if (particle2Ref.current) {
      particle2Ref.current.position.lerpVectors(
        new THREE.Vector3(...nodes[1].pos),
        new THREE.Vector3(...nodes[2].pos),
        progress2
      );
      const isBranchActive = activeStep === 1 || activeStep === 2;
      particle2Ref.current.scale.setScalar(isBranchActive ? 1.4 + Math.sin(t * 6) * 0.2 : 0.9);
    }

    if (particle3Ref.current) {
      particle3Ref.current.position.lerpVectors(
        new THREE.Vector3(...nodes[2].pos),
        new THREE.Vector3(...nodes[3].pos),
        progress3
      );
      const isBranchActive = activeStep === 2 || activeStep === 3;
      particle3Ref.current.scale.setScalar(isBranchActive ? 1.4 + Math.sin(t * 6) * 0.2 : 0.9);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.1, 0]} scale={[0.84, 0.84, 0.84]}>
      
      {/* Connector Lines between Nodes */}
      <Line
        points={[nodes[0].pos, nodes[1].pos]}
        color={activeStep === 0 || activeStep === 1 ? '#38BDF8' : '#1856F3'}
        lineWidth={activeStep === 0 || activeStep === 1 ? 3.5 : 2}
        transparent
        opacity={activeStep === 0 || activeStep === 1 ? 0.9 : 0.45}
      />
      <Line
        points={[nodes[1].pos, nodes[2].pos]}
        color={activeStep === 1 || activeStep === 2 ? '#38BDF8' : '#10B981'}
        lineWidth={activeStep === 1 || activeStep === 2 ? 3.5 : 2}
        transparent
        opacity={activeStep === 1 || activeStep === 2 ? 0.9 : 0.45}
      />
      <Line
        points={[nodes[2].pos, nodes[3].pos]}
        color={activeStep === 2 || activeStep === 3 ? '#F59E0B' : '#F59E0B'}
        lineWidth={activeStep === 2 || activeStep === 3 ? 3.5 : 2}
        transparent
        opacity={activeStep === 2 || activeStep === 3 ? 0.9 : 0.45}
      />
      <Line
        points={[nodes[1].pos, nodes[3].pos]}
        color="#38BDF8"
        lineWidth={1.5}
        dashed
        dashScale={5}
        dashSize={0.2}
        gapSize={0.1}
        transparent
        opacity={0.35}
      />

      {/* Pulsing Data Particles along Lines */}
      <mesh ref={particle1Ref}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshBasicMaterial color="#38BDF8" />
      </mesh>
      <mesh ref={particle2Ref}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#10B981" />
      </mesh>
      <mesh ref={particle3Ref}>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshBasicMaterial color="#F59E0B" />
      </mesh>

      {/* Network Core Nodes */}
      {nodes.map((node, i) => {
        const isCurrentNodeActive = activeStep === i;
        const currentScale = (node.defaultScale || 1.0) * (isCurrentNodeActive ? 1.25 : 1.0);

        return (
          <group key={node.id} position={node.pos}>
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
              
              {/* Outer Glowing Wireframe Cage */}
              <mesh>
                <icosahedronGeometry args={[currentScale * 0.45, 1]} />
                <meshStandardMaterial
                  color={node.color}
                  wireframe
                  transparent
                  opacity={isCurrentNodeActive ? 0.85 : 0.35}
                  emissive={node.color}
                  emissiveIntensity={isCurrentNodeActive ? 1.2 : 0.4}
                />
              </mesh>

              {/* Inner Solid Core */}
              <mesh>
                <sphereGeometry args={[currentScale * 0.28, 24, 24]} />
                <meshPhysicalMaterial
                  color={node.color}
                  roughness={0.15}
                  metalness={0.85}
                  clearcoat={1.0}
                  emissive={node.color}
                  emissiveIntensity={isCurrentNodeActive ? 0.8 : 0.25}
                />
              </mesh>

              {/* Node Label */}
              <Text
                position={[0, -(currentScale * 0.62), 0]}
                fontSize={0.21}
                color="#042656"
                anchorX="center"
                anchorY="top"
                fontWeight="bold"
              >
                {node.name}
              </Text>
            </Float>
          </group>
        );
      })}
    </group>
  );
}
