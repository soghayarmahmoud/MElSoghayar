"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Model as RoboticManipulator } from "./Robotic_manipulator";
import { WordSystem, WORD_DURATION, WORDS } from "./WordSystem";

// ─── Animation constants ───────────────────────────────────────────────────────
const PHASE_DURATION = WORD_DURATION; // seconds per word cycle
const TOTAL_DURATION = WORDS.length * PHASE_DURATION;

/**
 * RoboticArmScene
 *
 * - Reads viewport via useThree for true 3D responsiveness
 * - Arm position and scale are computed from viewport.width
 * - Arm performs a smooth bob+swing animation loop in useFrame
 *   giving the illusion of picking words off the floor and placing them
 */
export default function RoboticArmScene() {
  const { viewport } = useThree();

  // ── Responsive layout ────────────────────────────────────────────────────────
  // viewport.width is in world units at fov 55 from z=12 → typically ~14–16 wide
  const isMobile = viewport.width < 7;

  // Arm internal coords span roughly y: 0–870 at scale 0.01 = 0–8.7 world units
  // We want the arm to occupy about 50–60% of screen height → scale ~0.45
  const scale = isMobile ? 0.28 : 0.45;

  // Position: left third of the screen, base near the bottom
  const armX = isMobile ? 0 : -viewport.width * 0.26;
  const armY = isMobile ? -2.8 : -3.2;

  // ── Refs for animation ───────────────────────────────────────────────────────
  const groupRef = useRef();
  const startTime = useRef(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    if (startTime.current === null) startTime.current = clock.elapsedTime;

    const t = clock.elapsedTime - startTime.current;
    // Loop after all words are placed
    const loopT = t % TOTAL_DURATION;
    // Phase within current word (0 → 1)
    const phase = (loopT % PHASE_DURATION) / PHASE_DURATION;

    // ── Arm Y: picks from floor (down) → lifts to place (up) ─────────────────
    // phase 0.0–0.3: reach DOWN to grab
    // phase 0.3–0.6: lift UP to place
    // phase 0.6–1.0: hold & settle (subtle bob)
    let armDeltaY = 0;
    if (phase < 0.3) {
      armDeltaY = -0.4 * Math.sin((phase / 0.3) * Math.PI);
    } else if (phase < 0.6) {
      const p = (phase - 0.3) / 0.3;
      armDeltaY = 0.28 * Math.sin(p * Math.PI);
    } else {
      armDeltaY = 0.07 * Math.sin((phase - 0.6) * Math.PI * 4);
    }

    // ── Arm X: swing right toward text as word index increases ───────────────
    const wordIdx = Math.min(Math.floor(loopT / PHASE_DURATION), WORDS.length - 1);
    const totalWords = WORDS.length;
    const wordNorm = totalWords > 1 ? (wordIdx / (totalWords - 1)) * 2 - 1 : 0;
    const swingRange = isMobile ? 1.0 : 1.6;
    const targetSwingX = wordNorm * swingRange;
    const swingBlend = phase < 0.3 ? 0 : phase < 0.6 ? (phase - 0.3) / 0.3 : 1.0;

    // ── Rotation: tilt slightly toward placement direction ───────────────────
    const targetRotZ = (-wordNorm * 0.15 + 0.04) * swingBlend;
    const targetRotY = wordNorm * 0.1 * swingBlend;

    // Smoothly apply
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      armY + armDeltaY,
      0.08
    );
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      armX + targetSwingX * 0.5,
      0.06
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      targetRotZ,
      0.06
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      0.06
    );

    // Subtle continuous idle sway
    groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.4) * 0.02;
  });

  return (
    <>
      {/* ── Robotic Arm ─────────────────────────────────────────────────── */}
      <group
        ref={groupRef}
        position={[armX, armY, 0]}
        scale={scale}
        rotation={[0, 0.25, 0]}
      >
        <RoboticManipulator />
      </group>

      {/* ── Word text system ─────────────────────────────────────────────── */}
      <WordSystem armRef={groupRef} />

      {/* ── Gripper glow point light ──────────────────────────────────────── */}
      <GripperLight armRef={groupRef} isMobile={isMobile} />
    </>
  );
}

/** Small cyan point light that tracks the arm group position */
function GripperLight({ armRef, isMobile }) {
  const lightRef = useRef();
  useFrame(() => {
    if (!lightRef.current || !armRef.current) return;
    // The arm tip (gripper) is near the top of the group — roughly +3.5 y in world units at scale 0.45
    lightRef.current.position.set(
      armRef.current.position.x + (isMobile ? 0 : 0.4),
      armRef.current.position.y + 3.2,
      armRef.current.position.z + 0.8
    );
  });
  return (
    <pointLight
      ref={lightRef}
      color="#00f5ff"
      intensity={5}
      distance={5}
      decay={2}
    />
  );
}

