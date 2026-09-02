import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, useTexture } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Animated Network Badge Component
 * Features larger scale and a 3D circular flip rotation transition
 * Sequence: RuPay -> Mastercard -> Amex -> Diners Club -> Visa
 */
function AnimatedNetworkBadge() {
  const meshRefs = useRef([]);

  // Load all 5 official payment network badge PNG assets
  const [rupayTex, masterTex, amexTex, dinersTex, visaTex] = useTexture([
    '/assets/cc_logos/rupay_cc.png',
    '/assets/cc_logos/master_cc.png',
    '/assets/cc_logos/AMEX_CC.png',
    '/assets/cc_logos/Dinersclub_cc.png',
    '/assets/cc_logos/VISA_cc.png'
  ]);

  // Texture filtering for razor-sharp rendering
  [rupayTex, masterTex, amexTex, dinersTex, visaTex].forEach((tex) => {
    if (tex) {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
    }
  });

  // Increased dimensions for larger prominent display
  const networks = useMemo(() => [
    { name: 'RuPay', texture: rupayTex, width: 0.76, height: 0.42 },
    { name: 'Mastercard', texture: masterTex, width: 0.64, height: 0.48 },
    { name: 'Amex', texture: amexTex, width: 0.70, height: 0.42 },
    { name: 'Diners Club', texture: dinersTex, width: 0.62, height: 0.46 },
    { name: 'Visa', texture: visaTex, width: 0.70, height: 0.38 }
  ], [rupayTex, masterTex, amexTex, dinersTex, visaTex]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const cycleDuration = 3.0; // 3.0 seconds per network
    const total = networks.length; // 5
    const totalCycle = cycleDuration * total; // 15s total cycle
    const normalizedTime = time % totalCycle;
    const currentIndex = Math.floor(normalizedTime / cycleDuration);
    const progress = (normalizedTime % cycleDuration) / cycleDuration;

    // Last 18% of the cycle performs the 3D circular flip rotation
    const isTransitioning = progress > 0.82;
    const transitionProgress = isTransitioning ? (progress - 0.82) / 0.18 : 0;

    networks.forEach((_, idx) => {
      const mesh = meshRefs.current[idx];
      if (!mesh || !mesh.material) return;

      if (idx === currentIndex) {
        mesh.visible = true;
        if (isTransitioning) {
          // Flip-out: Rotates 0 -> PI/2 (90 degrees) and fades
          mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, transitionProgress * (Math.PI / 2), 0.2);
          mesh.material.opacity = THREE.MathUtils.lerp(mesh.material.opacity, 1 - transitionProgress, 0.2);
          mesh.scale.setScalar(THREE.MathUtils.lerp(mesh.scale.x, 1 - transitionProgress * 0.15, 0.2));
        } else {
          // Settle in: Flip from -PI/2 -> 0 with smooth ease
          mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, 0, 0.22);
          mesh.material.opacity = THREE.MathUtils.lerp(mesh.material.opacity, 1.0, 0.22);
          mesh.scale.setScalar(THREE.MathUtils.lerp(mesh.scale.x, 1.0, 0.22));
        }
      } else {
        mesh.material.opacity = THREE.MathUtils.lerp(mesh.material.opacity, 0, 0.25);
        if (mesh.material.opacity < 0.02) {
          mesh.visible = false;
          mesh.rotation.y = -Math.PI / 2; // ready for incoming flip
        }
      }
    });
  });

  return (
    <group position={[1.08, -0.58, 0.045]}>
      {networks.map((net, idx) => (
        <mesh
          key={net.name}
          ref={(el) => (meshRefs.current[idx] = el)}
          position={[0, 0, 0.001 * idx]}
        >
          <planeGeometry args={[net.width, net.height]} />
          <meshBasicMaterial
            map={net.texture}
            transparent
            opacity={idx === 0 ? 1 : 0}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/**
 * Photorealistic 3D Titanium Skeuomorphic Smart2Pay Payment Card
 */
export default function SmartCard3D({ scrollProgress = 0, mouse = { x: 0, y: 0, isHovered: false } }) {
  const cardGroupRef = useRef();
  const outerRingRef = useRef();
  const innerRingRef = useRef();
  const beaconsRef = useRef();

  // Load official Smart2Pay monogram texture (from smart2pay.png)
  const monogramTexture = useTexture('/assets/logo/smart2pay_monogram.png');
  if (monogramTexture) {
    monogramTexture.minFilter = THREE.LinearFilter;
    monogramTexture.magFilter = THREE.LinearFilter;
  }

  // Load vector card face artwork
  const cardFaceTexture = useTexture('/assets/cards/smart2pay_card_face.svg');
  if (cardFaceTexture) {
    cardFaceTexture.minFilter = THREE.LinearFilter;
    cardFaceTexture.magFilter = THREE.LinearFilter;
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Smooth card tilt influenced by direct local mouse hover
    if (cardGroupRef.current) {
      const tiltSensitivityX = mouse.isHovered ? 0.55 : 0.15;
      const tiltSensitivityY = mouse.isHovered ? 0.65 : 0.15;

      const targetRotX = (mouse.y * tiltSensitivityX) + Math.sin(time * 0.9) * 0.05 + (scrollProgress * Math.PI * 0.35);
      const targetRotY = (mouse.x * tiltSensitivityY) + Math.cos(time * 0.8) * 0.08 - (scrollProgress * Math.PI * 0.55);
      const targetPosY = (mouse.isHovered ? 0.08 : 0) + (Math.sin(time * 1.2) * 0.08) - (scrollProgress * 2.0);
      const targetScale = mouse.isHovered ? 1.05 : 1.0;

      cardGroupRef.current.rotation.x = THREE.MathUtils.lerp(cardGroupRef.current.rotation.x, targetRotX, 0.12);
      cardGroupRef.current.rotation.y = THREE.MathUtils.lerp(cardGroupRef.current.rotation.y, targetRotY, 0.12);
      cardGroupRef.current.position.y = THREE.MathUtils.lerp(cardGroupRef.current.position.y, targetPosY, 0.1);
      cardGroupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }

    // Dynamic rotation of the glowing orbital rings
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = time * (mouse.isHovered ? 0.6 : 0.35);
      outerRingRef.current.rotation.x = (Math.PI / 3.2) + (mouse.y * 0.2) + Math.sin(time * 0.6) * 0.04;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = -time * (mouse.isHovered ? 0.5 : 0.25);
      innerRingRef.current.rotation.y = (mouse.x * 0.2) + Math.cos(time * 0.5) * 0.06;
    }

    if (beaconsRef.current) {
      beaconsRef.current.rotation.z = time * (mouse.isHovered ? 0.6 : 0.35);
    }
  });

  return (
    <group position={[0, 0, 0]} scale={[1.15, 1.15, 1.15]}>
      
      {/* 1. Holographic Glowing Outer Orbit Ring */}
      <group ref={outerRingRef} position={[0, 0, -0.15]}>
        <mesh>
          <torusGeometry args={[1.95, 0.02, 16, 80]} />
          <meshStandardMaterial
            color="#06B6D4"
            emissive="#1856F3"
            emissiveIntensity={0.8}
            roughness={0.15}
            transparent
            opacity={0.75}
          />
        </mesh>

        {/* Orbiting Tech Beacon Particles */}
        <group ref={beaconsRef}>
          <mesh position={[1.95, 0, 0]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshBasicMaterial color="#38BDF8" />
          </mesh>
          <mesh position={[-1.95, 0, 0]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshBasicMaterial color="#06B6D4" />
          </mesh>
          <mesh position={[0, 1.95, 0]}>
            <sphereGeometry args={[0.035, 16, 16]} />
            <meshBasicMaterial color="#60A5FA" />
          </mesh>
          <mesh position={[0, -1.95, 0]}>
            <sphereGeometry args={[0.035, 16, 16]} />
            <meshBasicMaterial color="#60A5FA" />
          </mesh>
        </group>
      </group>

      {/* 2. Secondary Counter-Rotating Inner Orbit Ring */}
      <group ref={innerRingRef} position={[0, 0, -0.2]}>
        <mesh>
          <torusGeometry args={[1.65, 0.012, 16, 64]} />
          <meshStandardMaterial
            color="#3B82F6"
            emissive="#06B6D4"
            emissiveIntensity={0.5}
            roughness={0.2}
            transparent
            opacity={0.45}
          />
        </mesh>
      </group>

      {/* 3. Ambient Point Glow behind card */}
      <pointLight position={[0, 0, -0.3]} intensity={1.2} color="#1856F3" distance={4} />

      {/* 4. Main 3D Card Object */}
      <group ref={cardGroupRef} position={[0, 0, 0]}>
        
        {/* Main 3D Beveled Card Base */}
        <RoundedBox
          args={[3.15, 2.0, 0.075]}
          radius={0.12}
          smoothness={4}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color="#030814"
            roughness={0.15}
            metalness={0.85}
            clearcoat={1.0}
            clearcoatRoughness={0.08}
            reflectivity={0.95}
          />
        </RoundedBox>

        {/* Polished Chamfered Border Edge Rim */}
        <RoundedBox args={[3.17, 2.02, 0.07]} radius={0.13} smoothness={4}>
          <meshStandardMaterial
            color="#38BDF8"
            roughness={0.2}
            metalness={0.9}
            transparent
            opacity={0.4}
          />
        </RoundedBox>

        {/* High-Fidelity Vector Card Face */}
        <mesh position={[0, 0, 0.039]}>
          <planeGeometry args={[3.14, 1.98]} />
          <meshPhysicalMaterial
            map={cardFaceTexture}
            roughness={0.2}
            metalness={0.4}
            clearcoat={0.95}
            clearcoatRoughness={0.08}
            transparent
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </mesh>

        {/* Official Smart2Pay Monogram (from smart2pay.png) at Top-Left - Aligned with Right Text */}
        <mesh position={[-1.18, 0.65, 0.042]}>
          <planeGeometry args={[0.36, 0.36]} />
          <meshBasicMaterial
            map={monogramTexture}
            transparent
            toneMapped={false}
          />
        </mesh>

        {/* Animated Payment Network Badge with 3D Flip Rotation (Bottom-Right) */}
        <AnimatedNetworkBadge />

      </group>
    </group>
  );
}
