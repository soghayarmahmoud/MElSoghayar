"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

// ─── Sentence split into WORDS ────────────────────────────────────────────────
const WORDS = [
  "My", "name", "is", "Mahmoud",
  "and", "I'm", "an", "Electrical",
  "and", "Computer", "Engineer.",
];

// Layout: two rows
// Row 1: "My name is Mahmoud"
// Row 2: "and I'm an Electrical and Computer Engineer."
const ROW_BREAK = 4; // words 0-3 on row 1, 4-10 on row 2

// ─── Shared glass material (created once) ─────────────────────────────────────
const glassMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color("#003344"),
  emissive: new THREE.Color("#00c8ff"),
  emissiveIntensity: 0.5,
  roughness: 0.05,
  metalness: 0.2,
  transparent: true,
  opacity: 0.92,
});

// ─── Word cycle timing (seconds per word) ─────────────────────────────────────
const WORD_DURATION = 1.1; // how fast the arm cycles per word
const TRANSITION_SPEED = 6;  // lerp speed for Y position pop-in

/**
 * WordSystem – renders the words as 3D text and drives their
 * animated appearance in sync with the arm's bob/swing cycle.
 *
 * @param {number} elapsedTime  – clock.elapsedTime from useFrame parent
 * @param {[number,number,number]} armGripperPos – world position of the gripper
 */
export function WordSystem({ armRef }) {
  const wordRefs = useRef([]);
  const visibleCount = useRef(0);
  const startTime = useRef(null);

  // Per-word state: current Y position (lerped from below screen)
  const wordYPositions = useRef(WORDS.map(() => -5));

  // Compute final laid-out positions for each word
  const wordLayout = useMemo(() => {
    const CHAR_W = 0.30;   // approx width per char (helvetiker bold, size 0.38)
    const SPACE_W = 0.20;
    const ROW_Y_TOP = 1.8;  // first row — upper mid-screen
    const ROW_Y_BOT = 0.95; // second row
    const BASE_X = -2.8;    // start slightly right of centre-left

    const positions = [];
    let curX = BASE_X;
    let row = 0;

    for (let i = 0; i < WORDS.length; i++) {
      if (i === ROW_BREAK) {
        curX = BASE_X;
        row = 1;
      }
      const wordW = WORDS[i].length * CHAR_W;
      const x = curX + wordW / 2;
      const y = row === 0 ? ROW_Y_TOP : ROW_Y_BOT;
      positions.push([x, y, 0]);
      curX += wordW + SPACE_W;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (startTime.current === null) startTime.current = clock.elapsedTime;
    const t = clock.elapsedTime - startTime.current;

    // How many words should be visible by now
    const targetCount = Math.min(
      Math.floor(t / WORD_DURATION) + 1,
      WORDS.length
    );

    if (targetCount > visibleCount.current) {
      visibleCount.current = targetCount;
    }

    // Lerp each placed word to its final Y
    for (let i = 0; i < visibleCount.current; i++) {
      const finalY = wordLayout[i][1];
      wordYPositions.current[i] = THREE.MathUtils.lerp(
        wordYPositions.current[i],
        finalY,
        TRANSITION_SPEED * 0.016 // ~delta at 60fps
      );
      if (wordRefs.current[i]) {
        wordRefs.current[i].position.y = wordYPositions.current[i];
        // Fade-in opacity
        const mat = wordRefs.current[i].material;
        if (mat && mat.opacity !== undefined) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity ?? 0, 0.92, 0.08);
        }
      }
    }
  });

  return (
    <group>
      {WORDS.map((word, i) => (
        <group
          key={`${word}-${i}`}
          ref={(el) => (wordRefs.current[i] = el)}
          position={[wordLayout[i][0], -5, 0]} // starts off-screen below
        >
          {i < visibleCount.current || true ? ( // always mount, control via Y
            <Text3D
              font="/fonts/helvetiker_bold.typeface.json"
              size={0.4}
              height={0.08}
              curveSegments={8}
              bevelEnabled
              bevelSize={0.012}
              bevelThickness={0.02}
              anchorX="center"
              anchorY="middle"
            >
              {word}
              <meshStandardMaterial
                color="#003344"
                emissive="#00c8ff"
                emissiveIntensity={0.5}
                roughness={0.05}
                metalness={0.2}
                transparent
                opacity={0}
              />
            </Text3D>
          ) : null}
        </group>
      ))}
    </group>
  );
}

/**
 * Returns the current word index that the arm is "picking up"
 * based on elapsed time.
 */
export function getCurrentWordIndex(elapsedTime, startTime) {
  if (startTime === null) return -1;
  const t = elapsedTime - startTime;
  return Math.min(Math.floor(t / WORD_DURATION), WORDS.length - 1);
}

export { WORD_DURATION, WORDS };
