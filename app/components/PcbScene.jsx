"use client";

import React, { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Float, Center } from "@react-three/drei";
import { Model as PcbBoard } from "./Electret_mic_amplifier_pcb";
import * as THREE from "three";

/**
 * PcbScene
 *
 * - True 3D responsive: uses useThree viewport to compute scale & position
 * - PCB levitates with <Float>
 * - Positioned at the arm's gripper area (right side of the arm)
 * - <Center> ensures the geometry is centred on its local origin
 */
export default function PcbScene() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 7;

  // PCB scale: make it pleasantly large on the right side
  const pcbScale = isMobile
    ? viewport.width * 0.075
    : viewport.width * 0.055;

  // Position: right half of screen, floating at mid-height
  const pcbX = isMobile ? 0 : viewport.width * 0.24;
  const pcbY = isMobile ? 1.8 : 0.6;
  const pcbZ = isMobile ? -1.5 : 0.5;

  const floatRef = useRef();

  // Subtle idle rotation so the PCB breathes
  useFrame(({ clock }) => {
    if (!floatRef.current) return;
    floatRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.3) * 0.12;
  });

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.08}
      floatIntensity={0.4}
      floatingRange={[-0.08, 0.08]}
    >
      <group
        ref={floatRef}
        position={[pcbX, pcbY, pcbZ]}
        scale={pcbScale}
        // Tilt slightly so we see the top face of the PCB
        rotation={[-0.25, 0.3, 0.08]}
      >
        {/* Center ensures the PCB mesh is anchored at its geometric centre */}
        <Center>
          <PcbBoard />
        </Center>
      </group>

      {/* Green solder-pad glow point light */}
      <pointLight
        position={[pcbX, pcbY + 0.3, pcbZ + 0.4]}
        color="#00ff88"
        intensity={isMobile ? 2.5 : 3.5}
        distance={5}
        decay={2}
      />
    </Float>
  );
}
