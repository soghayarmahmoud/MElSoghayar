"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  Html,
  Preload,
} from "@react-three/drei";

import RoboticArmScene from "./RoboticArmScene";
import PcbScene from "./PcbScene";

// ─── Loading fallback (inside Canvas via Html) ────────────────────────────────
function LoadingScreen() {
  return (
    <Html center>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          color: "rgba(255,255,255,0.7)",
          fontFamily: "monospace",
          fontSize: "12px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        {/* Animated scanner bar */}
        <div
          style={{
            width: "140px",
            height: "2px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "1px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, transparent, #00f5ff, transparent)",
              animation: "scan 1.4s ease-in-out infinite",
            }}
          />
        </div>
        <span>Initialising scene…</span>
        <style>{`
          @keyframes scan {
            0%   { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    </Html>
  );
}

/**
 * HeroScene
 *
 * The root WebGL canvas. Static cinematic camera (no OrbitControls).
 * Lighting rig:
 *   - Environment "studio" for PBR reflections
 *   - Dim ambient (env does the heavy lifting)
 *   - Warm key directional from upper-right
 *   - Cyan rim point light (back-left) → makes arm glow
 *   - Magenta fill point (back-right) → accent on PCB
 * Performance: dpr clamped 1–1.5, shadows via ContactShadows only.
 */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 3, 12], fov: 55, near: 0.1, far: 100 }}
      dpr={[1, 1.5]}
      style={{ background: "#050505" }}
      // Tone mapping gives the scene that cinematic "film" feel
      gl={{ toneMapping: 4 /* ACESFilmicToneMapping */, toneMappingExposure: 1.1 }}
    >
      {/* ── Lighting rig ───────────────────────────────────────────────────── */}

      {/* Studio HDRI: accurate metallic reflections */}
      <Environment preset="studio" />

      {/* Very dim ambient – just enough to lift pure-black shadows */}
      <ambientLight intensity={0.08} />

      {/* Warm key light: upper-right, casts soft shadows */}
      <directionalLight
        position={[6, 8, 4]}
        intensity={1.4}
        color="#fff8f0"
        castShadow={false}
      />

      {/* Cyan rim light: behind-left, creates halo on the arm */}
      <pointLight
        position={[-5, 4, -3]}
        color="#00f5ff"
        intensity={8}
        distance={14}
        decay={2}
      />

      {/* Magenta fill: behind-right, lifts the PCB shadows */}
      <pointLight
        position={[6, 2, -4]}
        color="#ff00cc"
        intensity={4}
        distance={10}
        decay={2}
      />

      {/* Subtle cool back light from below to separate from background */}
      <pointLight
        position={[0, -3, 3]}
        color="#0044aa"
        intensity={3}
        distance={8}
        decay={2}
      />

      {/* ── Scene content ──────────────────────────────────────────────────── */}
      <Suspense fallback={<LoadingScreen />}>
        {/* Robotic arm + word animation (left) */}
        <RoboticArmScene />

        {/* PCB board (right) */}
        <PcbScene />

        {/* Ground shadow – soft, no hard geometry required */}
        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.4}
          scale={28}
          blur={2.8}
          far={6}
          color="#000000"
        />

        <Preload all />
      </Suspense>
    </Canvas>
  );
}