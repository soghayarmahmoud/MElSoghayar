"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

/**
 * Premium PCB – Electret Mic Amplifier
 *
 * Materials overridden synchronously before JSX return (no FOUC).
 *
 * Palette:
 *   material_0  → PCB substrate:  deep green  #0a2210
 *   material_1  → copper traces:  warm copper #b87333, metalness 0.9
 *   material_2  → solder mask:    dark teal   #0d3320
 *   material_3  → IC chip body:   near-black  #111114
 *   material_4  → resistor body:  clay beige  #c8a97e
 *   material_5  → resistor band:  cream       #f0e0c0
 *   material_6  → solder pads:    green glow  emissive #00ff88
 *   material_7  → capacitor:      silver      #9ab
 *   material_8  → electrolytic:   dark grey   #2a2a2a
 *   material_9  → via holes:      chrome      #aaa
 *   material_10 → via fill:       copper      #b87333
 *   material_11 → silkscreen:     white ink   #e8e8e8
 *   material_12 → edge connector: gold        #c8a020 emissive
 *   material_13 → pin headers:    bright silver
 *   material_14 → body shell:     black ABS   #111
 *   material_15 → ground plane:   copper      #b87333
 */
export function Model(props) {
  const { nodes, materials } = useGLTF("/electret_mic_amplifier_pcb.glb");

  // ─── Synchronous material overrides ───────────────────────────────────────

  const mk = (opts) => Object.assign(new THREE.MeshStandardMaterial(), opts);

  materials["material_0"] = mk({ color: new THREE.Color("#0a2210"), roughness: 0.7, metalness: 0.05 });
  materials["material_1"] = mk({ color: new THREE.Color("#b87333"), roughness: 0.25, metalness: 0.9 });
  materials["material_2"] = mk({ color: new THREE.Color("#0d3320"), roughness: 0.65, metalness: 0.05 });
  materials["material_3"] = mk({ color: new THREE.Color("#111114"), roughness: 0.5, metalness: 0.3 });
  materials["material_4"] = mk({ color: new THREE.Color("#c8a97e"), roughness: 0.8, metalness: 0.0 });
  materials["material_5"] = mk({ color: new THREE.Color("#f0e0c0"), roughness: 0.9, metalness: 0.0 });
  materials["material_6"] = mk({
    color: new THREE.Color("#003318"),
    emissive: new THREE.Color("#00ff88"),
    emissiveIntensity: 0.35,
    roughness: 0.2,
    metalness: 0.6,
  });
  materials["material_7"] = mk({ color: new THREE.Color("#8899aa"), roughness: 0.2, metalness: 0.7 });
  materials["material_8"] = mk({ color: new THREE.Color("#2a2a2a"), roughness: 0.6, metalness: 0.3 });
  materials["material_9"] = mk({ color: new THREE.Color("#aaaaaa"), roughness: 0.1, metalness: 1.0 });
  materials["material_10"] = mk({ color: new THREE.Color("#b87333"), roughness: 0.2, metalness: 0.9 });
  materials["material_11"] = mk({ color: new THREE.Color("#dde8dd"), roughness: 0.95, metalness: 0.0 });
  materials["material_12"] = mk({
    color: new THREE.Color("#554400"),
    emissive: new THREE.Color("#c8a020"),
    emissiveIntensity: 0.2,
    roughness: 0.15,
    metalness: 0.9,
  });
  materials["material_13"] = mk({ color: new THREE.Color("#cccccc"), roughness: 0.1, metalness: 0.95 });
  materials["material_14"] = mk({ color: new THREE.Color("#111111"), roughness: 0.55, metalness: 0.2 });
  materials["material_15"] = mk({ color: new THREE.Color("#b87333"), roughness: 0.3, metalness: 0.85 });

  return (
    <group {...props} dispose={null}>
      <group rotation={[3.079, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_3.geometry} material={materials.material_14} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.material_15} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.material_14} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.material_14} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.material_13} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.material_14} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.material_13} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.material_14} />
          <mesh geometry={nodes.Object_19.geometry} material={materials.material_13} />
          <mesh geometry={nodes.Object_21.geometry} material={materials.material_14} />
          <mesh geometry={nodes.Object_23.geometry} material={materials.material_13} />
          <mesh geometry={nodes.Object_25.geometry} material={materials.material_13} />
          <mesh geometry={nodes.Object_27.geometry} material={materials.material_14} />
          <mesh geometry={nodes.Object_29.geometry} material={materials.material_13} />
          <mesh geometry={nodes.Object_31.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_33.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_35.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_37.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_39.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_41.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_43.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_45.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_47.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_49.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_51.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_53.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_55.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_57.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_59.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_61.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_63.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_65.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_67.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_69.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_71.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_73.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_75.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_77.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_79.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_81.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_83.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_85.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_87.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_89.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_91.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_93.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_95.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_97.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_99.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_101.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_103.geometry} material={materials.material_9} />
          <mesh geometry={nodes.Object_105.geometry} material={materials.material_10} />
          <mesh geometry={nodes.Object_107.geometry} material={materials.material_9} />
          <mesh geometry={nodes.Object_109.geometry} material={materials.material_10} />
          <mesh geometry={nodes.Object_111.geometry} material={materials.material_9} />
          <mesh geometry={nodes.Object_113.geometry} material={materials.material_7} />
          <mesh geometry={nodes.Object_115.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_117.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_119.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_121.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_123.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_125.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_127.geometry} material={materials.material_4} />
          <mesh geometry={nodes.Object_129.geometry} material={materials.material_8} />
          <mesh geometry={nodes.Object_131.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_133.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_135.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_137.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_139.geometry} material={materials.material_7} />
          <mesh geometry={nodes.Object_141.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_143.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_145.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_147.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_149.geometry} material={materials.material_4} />
          <mesh geometry={nodes.Object_151.geometry} material={materials.material_14} />
          <mesh geometry={nodes.Object_153.geometry} material={materials.material_7} />
          <mesh geometry={nodes.Object_155.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_157.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_159.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_161.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_163.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_165.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_167.geometry} material={materials.material_4} />
          <mesh geometry={nodes.Object_169.geometry} material={materials.material_8} />
          <mesh geometry={nodes.Object_171.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_173.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_175.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_177.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_179.geometry} material={materials.material_7} />
          <mesh geometry={nodes.Object_181.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_183.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_185.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_187.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_189.geometry} material={materials.material_4} />
          <mesh geometry={nodes.Object_191.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_193.geometry} material={materials.material_7} />
          <mesh geometry={nodes.Object_195.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_197.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_199.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_201.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_203.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_205.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_207.geometry} material={materials.material_4} />
          <mesh geometry={nodes.Object_209.geometry} material={materials.material_8} />
          <mesh geometry={nodes.Object_211.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_213.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_215.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_217.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_219.geometry} material={materials.material_7} />
          <mesh geometry={nodes.Object_221.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_223.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_225.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_227.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_229.geometry} material={materials.material_4} />
          <mesh geometry={nodes.Object_231.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_233.geometry} material={materials.material_7} />
          <mesh geometry={nodes.Object_235.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_237.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_239.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_241.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_243.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_245.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_247.geometry} material={materials.material_4} />
          <mesh geometry={nodes.Object_249.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_251.geometry} material={materials.material_8} />
          <mesh geometry={nodes.Object_253.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_255.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_257.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_259.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_261.geometry} material={materials.material_7} />
          <mesh geometry={nodes.Object_263.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_265.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_267.geometry} material={materials.material_6} />
          <mesh geometry={nodes.Object_269.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_271.geometry} material={materials.material_4} />
          <mesh geometry={nodes.Object_273.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_275.geometry} material={materials.material_1} />
          <mesh geometry={nodes.Object_277.geometry} material={materials.material_1} />
          <mesh geometry={nodes.Object_279.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_281.geometry} material={materials.material_1} />
          <mesh geometry={nodes.Object_283.geometry} material={materials.material_0} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/electret_mic_amplifier_pcb.glb");
