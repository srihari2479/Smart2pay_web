import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, useTexture } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Photorealistic 3D Titanium Cryptographic Security Vault
 * Features an authentic solid brushed brass & hardened chrome padlock
 * with recessed titanium Smart2Pay monogram emblem.
 */
export default function SecurityShield3D({ scrollProgress = 0, mouse = { x: 0, y: 0, isHovered: false } }) {
  const vaultGroupRef = useRef();
  const outerRingRef = useRef();
  const innerRingRef = useRef();
  const beaconRef = useRef();
  const padlockRef = useRef();

  // Load vector security vault face artwork
  const vaultTexture = useTexture('/assets/cards/security_vault_face.svg');
  if (vaultTexture) {
    vaultTexture.minFilter = THREE.LinearFilter;
    vaultTexture.magFilter = THREE.LinearFilter;
    vaultTexture.generateMipmaps = false;
  }

  // Load official Smart2Pay monogram logo
  const monogramTexture = useTexture('/assets/logo/smart2pay_monogram.png');
  if (monogramTexture) {
    monogramTexture.minFilter = THREE.LinearFilter;
    monogramTexture.magFilter = THREE.LinearFilter;
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Direct Front-Facing Default with Interactive Mouse Hover Tilt
    if (vaultGroupRef.current) {
      const tiltSensitivityX = mouse.isHovered ? 0.45 : 0;
      const tiltSensitivityY = mouse.isHovered ? 0.55 : 0;

      const targetRotX = (mouse.isHovered ? mouse.y * tiltSensitivityX : Math.sin(time * 0.8) * 0.025);
      const targetRotY = (mouse.x * tiltSensitivityY) ? mouse.x * tiltSensitivityY : Math.cos(time * 0.6) * 0.025;
      const targetPosY = (mouse.isHovered ? 0.06 : 0) + (Math.sin(time * 1.2) * 0.04);
      const targetScale = mouse.isHovered ? 1.04 : 1.0;

      vaultGroupRef.current.rotation.x = THREE.MathUtils.lerp(vaultGroupRef.current.rotation.x, targetRotX, 0.1);
      vaultGroupRef.current.rotation.y = THREE.MathUtils.lerp(vaultGroupRef.current.rotation.y, targetRotY, 0.1);
      vaultGroupRef.current.position.y = THREE.MathUtils.lerp(vaultGroupRef.current.position.y, targetPosY, 0.08);
      vaultGroupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }

    // 2. Dual Rotating Orbital Defense Rings
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = time * (mouse.isHovered ? 0.6 : 0.35);
      outerRingRef.current.rotation.x = (Math.PI / 3.2) + (mouse.y * 0.12);
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = -time * (mouse.isHovered ? 0.5 : 0.25);
      innerRingRef.current.rotation.y = (mouse.x * 0.12);
    }

    // 3. Subtle floating breathing for central gold lock
    if (padlockRef.current) {
      padlockRef.current.position.z = 0.09 + Math.sin(time * 2.0) * 0.015;
    }
  });

  return (
    <group position={[0, 0, 0]} scale={[1.15, 1.15, 1.15]}>
      
      {/* 1. Ambient Background Point Glow */}
      <pointLight position={[0, 0, -0.3]} intensity={1.5} color="#1856F3" distance={5} />
      <pointLight position={[0, 1.5, 0.8]} intensity={1.4} color="#F59E0B" distance={4} />

      {/* 2. Outer Holographic Superconductor Ring */}
      <group ref={outerRingRef} position={[0, 0, -0.15]}>
        <mesh>
          <torusGeometry args={[1.92, 0.022, 16, 80]} />
          <meshStandardMaterial
            color="#38BDF8"
            emissive="#1856F3"
            emissiveIntensity={0.8}
            roughness={0.15}
            metalness={0.9}
            transparent
            opacity={0.75}
          />
        </mesh>

        {/* Orbiting Photon Beacons on Ring Track */}
        <mesh position={[1.92, 0, 0]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshBasicMaterial color="#38BDF8" />
        </mesh>
        <mesh position={[-1.92, 0, 0]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshBasicMaterial color="#10B981" />
        </mesh>
      </group>

      {/* 3. Secondary Inner Counter-Rotating Ring */}
      <group ref={innerRingRef} position={[0, 0, -0.2]}>
        <mesh>
          <torusGeometry args={[1.65, 0.014, 16, 64]} />
          <meshStandardMaterial
            color="#10B981"
            emissive="#10B981"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.85}
            transparent
            opacity={0.5}
          />
        </mesh>
      </group>

      {/* 4. Main 3D Security Vault Card Object */}
      <group ref={vaultGroupRef} position={[0, 0, 0]}>
        
        {/* Beveled Titanium Chassis Slab */}
        <RoundedBox
          args={[2.45, 2.45, 0.08]}
          radius={0.22}
          smoothness={4}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color="#020817"
            roughness={0.15}
            metalness={0.92}
            clearcoat={1.0}
            clearcoatRoughness={0.06}
            reflectivity={0.98}
          />
        </RoundedBox>

        {/* Polished Chamfered Cybernetic Edge Rim */}
        <RoundedBox args={[2.48, 2.48, 0.075]} radius={0.23} smoothness={4}>
          <meshStandardMaterial
            color="#38BDF8"
            roughness={0.2}
            metalness={0.9}
            transparent
            opacity={0.45}
          />
        </RoundedBox>

        {/* High-Fidelity Vector Vault Face Texture Surface */}
        <mesh position={[0, 0, 0.042]}>
          <planeGeometry args={[2.42, 2.42]} />
          <meshPhysicalMaterial
            map={vaultTexture}
            roughness={0.18}
            metalness={0.4}
            clearcoat={0.95}
            clearcoatRoughness={0.08}
            transparent
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </mesh>

        {/* Protruding Real Heavy-Duty Solid Brushed Brass & Chrome Padlock */}
        <group ref={padlockRef} position={[0, 0.06, 0.09]}>
          
          {/* 1. Hardened Chrome Steel Shackle Loop */}
          <mesh position={[0, 0.34, 0]} castShadow>
            <torusGeometry args={[0.24, 0.058, 24, 48, Math.PI]} />
            <meshPhysicalMaterial
              color="#F8FAFC"
              metalness={0.98}
              roughness={0.06}
              clearcoat={1.0}
              clearcoatRoughness={0.04}
              reflectivity={1.0}
            />
          </mesh>

          {/* 2. Hardened Shackle Extension Posts */}
          <mesh position={[0.24, 0.20, 0]}>
            <cylinderGeometry args={[0.056, 0.056, 0.28, 24]} />
            <meshPhysicalMaterial color="#F8FAFC" metalness={0.98} roughness={0.06} clearcoat={1.0} />
          </mesh>
          <mesh position={[-0.24, 0.20, 0]}>
            <cylinderGeometry args={[0.056, 0.056, 0.28, 24]} />
            <meshPhysicalMaterial color="#F8FAFC" metalness={0.98} roughness={0.06} clearcoat={1.0} />
          </mesh>

          {/* 3. Shackle Weather Rubber Collar Seals */}
          <mesh position={[0.24, 0.08, 0]}>
            <cylinderGeometry args={[0.072, 0.072, 0.045, 24]} />
            <meshStandardMaterial color="#0F172A" roughness={0.4} metalness={0.7} />
          </mesh>
          <mesh position={[-0.24, 0.08, 0]}>
            <cylinderGeometry args={[0.072, 0.072, 0.045, 24]} />
            <meshStandardMaterial color="#0F172A" roughness={0.4} metalness={0.7} />
          </mesh>

          {/* 4. Solid Heavy Brushed Brass Padlock Body */}
          <RoundedBox
            args={[0.68, 0.54, 0.16]}
            radius={0.08}
            smoothness={5}
            position={[0, 0, 0]}
            castShadow
          >
            <meshPhysicalMaterial
              color="#D4AF37"
              metalness={0.88}
              roughness={0.22}
              clearcoat={0.7}
              clearcoatRoughness={0.12}
              reflectivity={0.85}
              emissive="#78350F"
              emissiveIntensity={0.06}
            />
          </RoundedBox>

          {/* 5. Beveled Brass Accent Edge Rim */}
          <RoundedBox args={[0.70, 0.56, 0.145]} radius={0.09} smoothness={4}>
            <meshStandardMaterial
              color="#FDE047"
              metalness={0.92}
              roughness={0.15}
            />
          </RoundedBox>

          {/* 6. Recessed Inset Dark Titanium Medallion Plate for Smart2Pay Logo */}
          <RoundedBox
            args={[0.38, 0.38, 0.02]}
            radius={0.06}
            smoothness={4}
            position={[0, 0, 0.082]}
          >
            <meshPhysicalMaterial
              color="#041836"
              metalness={0.94}
              roughness={0.15}
              clearcoat={0.9}
              reflectivity={0.95}
            />
          </RoundedBox>

          {/* 7. Chrome Border Ring around Medallion */}
          <RoundedBox args={[0.395, 0.395, 0.015]} radius={0.065} smoothness={4} position={[0, 0, 0.081]}>
            <meshStandardMaterial color="#38BDF8" metalness={0.95} roughness={0.1} />
          </RoundedBox>

          {/* 8. Official Smart2Pay Monogram Logo */}
          <mesh position={[0, 0, 0.094]}>
            <planeGeometry args={[0.30, 0.30]} />
            <meshBasicMaterial
              map={monogramTexture}
              transparent
              toneMapped={false}
            />
          </mesh>

          {/* 9. Keyway Slot at Bottom Center */}
          <mesh position={[0, -0.22, 0.082]}>
            <cylinderGeometry args={[0.022, 0.022, 0.01, 16]} rotation={[Math.PI / 2, 0, 0]} />
            <meshBasicMaterial color="#020817" />
          </mesh>

        </group>

      </group>
    </group>
  );
}
