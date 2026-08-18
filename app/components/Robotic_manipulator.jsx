"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

/**
 * Premium Robotic Manipulator
 *
 * Materials are overridden SYNCHRONOUSLY before render (no useEffect),
 * preventing any Flash of Unstyled Content.
 *
 * Material palette:
 *   Material.001 / .002  → matte dark body   #1c1c1e, metalness 0.7
 *   Material.003         → polished joint    #2a2a2e, metalness 1.0
 *   Material.006         → cyan glow accent  #00f5ff emissive
 *   Material.007 / .008  → chrome ring       #888, metalness 1.0
 *   Material.009 / .010  → deep black base   #0d0d0d
 *   rest                 → neutral dark grey
 */
export function Model(props) {
  const { nodes, materials } = useGLTF("/robotic_manipulator.glb");

  // ─── Material overrides (synchronous — no FOUC) ────────────────────────────

  // Matte dark body
  const darkBody = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#1c1c1e"),
    roughness: 0.5,
    metalness: 0.75,
  });

  // Polished metallic joints
  const polishedJoint = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#2e2e32"),
    roughness: 0.15,
    metalness: 1.0,
  });

  // Cyan emissive accent (gripper tips, sensor rings)
  const cyanAccent = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#003344"),
    emissive: new THREE.Color("#00f5ff"),
    emissiveIntensity: 0.6,
    roughness: 0.3,
    metalness: 0.5,
  });

  // Chrome / silver ring
  const chromeRing = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#aaaaaa"),
    roughness: 0.1,
    metalness: 1.0,
  });

  // Deep black base platform
  const deepBase = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#0d0d0f"),
    roughness: 0.6,
    metalness: 0.5,
  });

  // Mutate the materials object directly
  materials["Material.001"] = darkBody;
  materials["Material.002"] = darkBody;
  materials["Material.003"] = polishedJoint;
  materials["Material.004"] = polishedJoint;
  materials["Material.005"] = chromeRing;
  materials["Material.006"] = cyanAccent;
  materials["Material.007"] = chromeRing;
  materials["Material.008"] = polishedJoint;
  materials["Material.009"] = deepBase;
  materials["Material.010"] = deepBase;

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cylinder_Material010_0.geometry} material={materials["Material.010"]} />
          <mesh geometry={nodes.Cylinder_Material001_0.geometry} material={materials["Material.001"]} />
          <mesh geometry={nodes.Cylinder_Material008_0.geometry} material={materials["Material.008"]} />
        </group>
        <group position={[-83.294, 275.394, -0.686]} rotation={[-1.951, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cylinder004_Material001_0.geometry} material={materials["Material.001"]} />
          <mesh geometry={nodes.Cylinder004_Material003_0.geometry} material={materials["Material.003"]} />
          <mesh geometry={nodes.Cylinder004_Material007_0.geometry} material={materials["Material.007"]} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cylinder006_Material001_0.geometry} material={materials["Material.001"]} />
          <mesh geometry={nodes.Cylinder006_Material003_0.geometry} material={materials["Material.003"]} />
          <mesh geometry={nodes.Cylinder006_Material008_0.geometry} material={materials["Material.008"]} />
          <mesh geometry={nodes.Cylinder006_Material002_0.geometry} material={materials["Material.002"]} />
        </group>
        <group position={[-86.931, 634.158, -138.992]} rotation={[-0.916, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube003_Material001_0.geometry} material={materials["Material.001"]} />
          <mesh geometry={nodes.Cube003_Material006_0.geometry} material={materials["Material.006"]} />
          <mesh geometry={nodes.Cube003_Material003_0.geometry} material={materials["Material.003"]} />
          <mesh geometry={nodes.Cube003_Material008_0.geometry} material={materials["Material.008"]} />
          <mesh geometry={nodes.Cube003_Material002_0.geometry} material={materials["Material.002"]} />
        </group>
        <group position={[-86.932, 862.638, -437.84]} rotation={[-0.841, 0, -0.788]} scale={100}>
          <group position={[1.042, 0.483, -2.8]} rotation={[0, 0.727, 0]}>
            <mesh geometry={nodes.Cylinder001_Material002_0.geometry} material={materials["Material.002"]} />
            <mesh geometry={nodes.Cylinder001_Material001_0.geometry} material={materials["Material.001"]} />
            <mesh geometry={nodes.Cylinder001_Material003_0.geometry} material={materials["Material.003"]} />
            <mesh geometry={nodes.Cylinder001_Material008_0.geometry} material={materials["Material.008"]} />
          </group>
          <group position={[2.112, 0.482, -3.719]} rotation={[Math.PI, 1.202, -Math.PI]}>
            <mesh geometry={nodes.Cylinder018_Material003_0.geometry} material={materials["Material.003"]} />
            <mesh geometry={nodes.Cylinder018_Material001_0.geometry} material={materials["Material.001"]} />
            <mesh geometry={nodes.Cylinder018_Material008_0.geometry} material={materials["Material.008"]} />
            <mesh geometry={nodes.Cylinder018_Material002_0.geometry} material={materials["Material.002"]} />
          </group>
          <mesh geometry={nodes.Cylinder014_Material001_0.geometry} material={materials["Material.001"]} />
          <mesh geometry={nodes.Cylinder014_Material009_0.geometry} material={materials["Material.009"]} />
          <mesh geometry={nodes.Cylinder014_Material006_0.geometry} material={materials["Material.006"]} />
          <mesh geometry={nodes.Cylinder014_Material004_0.geometry} material={materials["Material.004"]} />
          <mesh geometry={nodes.Cylinder014_Material005_0.geometry} material={materials["Material.005"]} />
          <mesh geometry={nodes.Cylinder014_Material007_0.geometry} material={materials["Material.007"]} />
          <mesh geometry={nodes.Cylinder014_Material003_0.geometry} material={materials["Material.003"]} />
          <mesh geometry={nodes.Cylinder015_Material006_0.geometry} material={materials["Material.006"]} position={[1.737, 0.511, -4.712]} rotation={[Math.PI, 0.708, -Math.PI]} />
          <mesh geometry={nodes.Cylinder003_Material006_0.geometry} material={materials["Material.006"]} position={[0.472, -0.518, -4.706]} rotation={[-3.096, 0.712, 3.135]} />
          <mesh geometry={nodes.Cylinder008_Material006_0.geometry} material={materials["Material.006"]} position={[-0.559, 0.506, -4.71]} rotation={[3.127, 0.481, -3.121]} />
          <mesh geometry={nodes.Cylinder011_Material006_0.geometry} material={materials["Material.006"]} position={[0.467, 1.774, -4.708]} rotation={[-2.609, 0.681, 3.127]} />
        </group>
        <mesh geometry={nodes.Cylinder005_Material003_0.geometry} material={materials["Material.003"]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder007_Material003_0.geometry} material={materials["Material.003"]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder013_Material003_0.geometry} material={materials["Material.003"]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube002_Material003_0.geometry} material={materials["Material.003"]} position={[-86.931, 634.158, -138.992]} rotation={[-0.916, 0, 0]} scale={100} />
      </group>
    </group>
  );
}

useGLTF.preload("/robotic_manipulator.glb");
