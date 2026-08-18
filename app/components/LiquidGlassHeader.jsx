"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function LiquidGlassHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /* Outer wrapper: full-width but invisible, just for positioning */
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none">
      <header
        className={`
          pointer-events-auto
          mt-4 w-[75%] max-w-5xl
          rounded-2xl
          px-6 py-0
          flex items-center justify-between h-14
          relative overflow-hidden
          transition-all duration-500 ease-out
          border border-white/[0.12]
          ${
            scrolled
              ? "bg-black/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)]"
              : "bg-white/[0.06] backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.10)]"
          }
        `}
      >
        {/* ── Top glass-edge shimmer line ─────────────────────────── */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

        {/* ── Bottom inner shadow line ─────────────────────────────── */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

        {/* ── Logo / Name ─────────────────────────────────────────── */}
        <a href="#" className="flex items-center gap-2.5 select-none shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="text-white font-semibold text-xs tracking-[0.18em] uppercase whitespace-nowrap">
            M. El Soghayar
          </span>
        </a>

        {/* ── Desktop Nav ─────────────────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="
                group relative px-4 py-1.5 rounded-xl
                text-white/50 text-[11px] font-semibold tracking-[0.15em] uppercase
                transition-all duration-300 ease-out
                hover:text-white
                hover:bg-white/[0.08]
                hover:border-white/[0.14]
                hover:shadow-[0_0_16px_rgba(255,255,255,0.07),inset_0_1px_0_rgba(255,255,255,0.14)]
                border border-transparent
              "
            >
              {/* Per-link glass shimmer on hover */}
              <span className="
                absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-gradient-to-b from-white/[0.09] to-transparent
                pointer-events-none
              " />
              {/* Cyan underline accent */}
              <span className="
                absolute left-3 right-3 bottom-0.5 h-px
                bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent
                scale-x-0 group-hover:scale-x-100
                transition-transform duration-300 ease-out
                pointer-events-none
              " />
              <span className="relative">{label}</span>
            </a>
          ))}
        </nav>

        {/* ── Hire Me CTA ─────────────────────────────────────────── */}
        <a
          href="#contact"
          className="
            hidden md:flex items-center shrink-0
            px-4 py-1.5 rounded-xl
            text-[11px] font-semibold tracking-[0.15em] uppercase
            text-cyan-300/80 hover:text-cyan-200
            border border-cyan-500/20 hover:border-cyan-400/40
            bg-cyan-500/5 hover:bg-cyan-500/10
            shadow-[0_0_0px_rgba(0,245,255,0)]
            hover:shadow-[0_0_18px_rgba(0,245,255,0.18)]
            transition-all duration-300
          "
        >
          Hire Me
        </a>

        {/* ── Mobile hamburger ─────────────────────────────────────── */}
        <button className="md:hidden flex flex-col gap-[5px] p-1" aria-label="Menu">
          <span className="block h-px w-5 bg-white/60" />
          <span className="block h-px w-3.5 bg-white/40" />
          <span className="block h-px w-5 bg-white/60" />
        </button>
      </header>
    </div>
  );
}
