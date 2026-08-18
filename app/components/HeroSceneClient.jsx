"use client";

import dynamic from "next/dynamic";

/**
 * Client-side wrapper for the 3D canvas.
 * "use client" is required because `next/dynamic` with `ssr: false`
 * is only permitted inside Client Components in the App Router (Next.js 15+).
 */
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#050505",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          color: "rgba(255,255,255,0.28)",
          fontFamily: "monospace",
          fontSize: "11px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
        }}
      >
        Initialising…
      </span>
    </div>
  ),
});

export default function HeroSceneClient() {
  return <HeroScene />;
}
