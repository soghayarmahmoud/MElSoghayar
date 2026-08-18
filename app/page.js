import LiquidGlassHeader from "./components/LiquidGlassHeader";
import HeroSceneClient from "./components/HeroSceneClient";

/**
 * Home — Server Component (no "use client").
 * Dynamic import with ssr:false lives inside HeroSceneClient (a Client Component),
 * satisfying the Next.js App Router restriction.
 */
export default function Home() {
  return (
    <main className="relative w-full h-screen bg-[#050505] overflow-hidden">
      {/* Fixed glass header overlays the 3D canvas */}
      <LiquidGlassHeader />

      {/* Full-viewport 3D canvas (client-only, lazy loaded) */}
      <div className="absolute inset-0">
        <HeroSceneClient />
      </div>
    </main>
  );
}
