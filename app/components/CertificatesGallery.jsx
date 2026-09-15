'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Globe,
  Cpu,
  CircuitBoard,
  GitMerge,
  Code2,
  Briefcase,
  Award,
  ExternalLink,
  Download,
  ZoomIn,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────
const certificates = [
  {
    id: 1,
    title: 'Inclusive Open Source Community',
    issuer: 'The Linux Foundation',
    date: 'August 2026',
    category: 'Open Source',
    image: '/Certificates/mahmoud-elsoghayar-1f6ed99f-6ba7-485f-b5f6-09ecbe70398c-certificate.png',
    pdf: '/Certificates/mahmoud-elsoghayar-1f6ed99f-6ba7-485f-b5f6-09ecbe70398c-certificate.pdf',
  },
  {
    id: 2,
    title: 'Agile & Clean Coding Practices',
    issuer: 'LinkedIn Learning',
    date: 'September 2026',
    category: 'Software Engineering',
    image: '/Certificates/CertificateOfCompletion_Agile Software Development Clean Coding Practices.png',
    pdf: '/Certificates/CertificateOfCompletion_Agile Software Development Clean Coding Practices.pdf',
  },
  {
    id: 3,
    title: 'Web Development Challenger',
    issuer: 'Udacity & ITIDA',
    date: 'March 2022',
    category: 'Web Development',
    image: '/Certificates/شهادة-الوزاره-المصريه-.png',
    pdf: '/Certificates/شهادة-الوزاره-المصريه-.pdf',
  },
  {
    id: 4,
    title: 'IoT Value Chain',
    issuer: 'ITI Platform',
    date: 'August 2026',
    category: 'IoT',
    image: '/Certificates/Course_Certificate_En.png',
    pdf: '/Certificates/Course_Certificate_En.pdf',
  },
  {
    id: 5,
    title: 'IoT Foundations',
    issuer: 'LinkedIn Learning',
    date: 'September 2026',
    category: 'IoT',
    image: '/Certificates/CertificateOfCompletion_IoT Foundations Fundamentals.png',
    pdf: '/Certificates/CertificateOfCompletion_IoT Foundations Fundamentals.pdf',
  },
  {
    id: 6,
    title: 'Learning Altium',
    issuer: 'LinkedIn Learning',
    date: 'September 2026',
    category: 'Hardware / PCB',
    image: '/Certificates/CertificateOfCompletion_Learning Altium.png',
    pdf: '/Certificates/CertificateOfCompletion_Learning Altium.pdf',
  },
  {
    id: 7,
    title: 'Project Leadership',
    issuer: 'LinkedIn Learning',
    date: 'September 2026',
    category: 'Management',
    image: '/Certificates/CertificateOfCompletion_Project Leadership.png',
    pdf: '/Certificates/CertificateOfCompletion_Project Leadership.pdf',
  },
  {
    id: 8,
    title: 'Progressive Web Apps (PWA)',
    issuer: 'Yanfaa',
    date: 'July 2024',
    category: 'Web Development',
    image: '/Certificates/PDA.png',
    pdf: '/Certificates/PDA.pdf',
  },
  {
    id: 9,
    title: 'HTML',
    issuer: 'Yanfaa',
    date: 'July 2024',
    category: 'Web Development',
    image: '/Certificates/HTML.png',
    pdf: '/Certificates/HTML.pdf',
  },
];

// ─── Category Icons ───────────────────────────────────────────────────────────
const categoryIcon = {
  'Open Source': GitMerge,
  'Software Engineering': Code2,
  'Web Development': Globe,
  'IoT': Cpu,
  'Hardware / PCB': CircuitBoard,
  'Management': Briefcase,
};

const allCategories = ['All', ...new Set(certificates.map((c) => c.category))];

// ─── Certificate Card ──────────────────────────────────────────────────────────
function CertificateCard({ cert, index, onClick }) {
  const Icon = categoryIcon[cert.category] ?? Award;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.32, delay: index * 0.04, ease: 'easeOut' }}
      onClick={() => onClick(cert)}
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-zinc-900
                 border border-white/8 hover:border-amber-500/60
                 hover:shadow-[0_0_22px_rgba(245,158,11,0.18)]
                 transition-all duration-300 flex flex-col"
    >
      {/* ── Certificate image thumbnail ── */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-800 shrink-0">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500
                     group-hover:scale-105"
          priority={cert.id <= 3}
        />

        {/* Dark gradient overlay at bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />

        {/* Category badge — floats over image top-left */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5
                        px-2.5 py-1 rounded-full
                        bg-black/60 backdrop-blur-sm border border-white/10
                        text-[10px] font-semibold text-amber-400/90">
          <Icon size={11} />
          {cert.category}
        </div>

        {/* Zoom icon — appears on hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center
                     bg-black/50 backdrop-blur-[2px] opacity-0
                     group-hover:opacity-100 transition-opacity duration-250"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full
                          bg-amber-400 text-black text-sm font-semibold
                          shadow-[0_0_24px_rgba(245,158,11,0.6)]">
            <ZoomIn size={15} />
            View Certificate
          </div>
        </motion.div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col gap-2 px-4 py-4">
        {/* Title */}
        <h3 className="text-[13.5px] font-semibold text-white leading-snug
                       group-hover:text-amber-300 transition-colors duration-200 line-clamp-2">
          {cert.title}
        </h3>

        {/* Issuer · Date */}
        <div className="flex items-center justify-between gap-2 text-[11px]">
          <span className="text-white/50 truncate">{cert.issuer}</span>
          <span className="text-white/30 shrink-0">{cert.date}</span>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Lightbox Modal ────────────────────────────────────────────────────────────
function CertificateModal({ cert, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-md"
      />

      {/* Panel */}
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.91, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 16 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-4 md:inset-8 lg:inset-10 z-[100]
                   flex flex-col rounded-2xl overflow-hidden"
        style={{
          background: '#111111',
          border: '1px solid rgba(245,158,11,0.3)',
          boxShadow:
            '0 0 0 1px rgba(245,158,11,0.08), 0 32px 80px rgba(0,0,0,0.65)',
        }}
      >
        {/* Header */}
        <div className="shrink-0 flex items-start justify-between gap-4
                        px-5 py-4 border-b border-white/8">
          <div className="flex flex-col gap-0.5 min-w-0">
            <h2 className="text-sm md:text-base font-semibold text-white leading-snug">
              {cert.title}
            </h2>
            <p className="text-xs text-white/40">
              {cert.issuer} &middot; {cert.date}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.16 }}
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 flex items-center justify-center w-8 h-8
                       rounded-full text-white/50 hover:text-white
                       hover:bg-white/10 transition-colors"
          >
            <X size={17} />
          </motion.button>
        </div>

        {/* Action strip */}
        <div className="shrink-0 flex items-center justify-between gap-3
                        px-5 py-2.5 border-b border-white/6 bg-amber-500/[0.04]">
          <span className="text-[11px] text-white/35 hidden sm:block">
            Click outside or press the button to close
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <a
              href={cert.pdf}
              download
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                         text-xs font-medium text-white/60 border border-white/12
                         hover:text-white hover:border-white/25 bg-white/[0.03]
                         transition-colors duration-200"
            >
              <Download size={12} />
              Download PDF
            </a>
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full
                         text-xs font-semibold text-black bg-amber-400
                         hover:bg-amber-300 shadow-[0_0_14px_rgba(245,158,11,0.3)]
                         transition-colors duration-200"
            >
              <ExternalLink size={12} />
              Open PDF
            </a>
          </div>
        </div>

        {/* Two-panel body: big image left, PDF iframe right (on large screens) */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-hidden">

          {/* Image panel — full preview */}
          <div className="relative lg:w-1/2 bg-zinc-950 flex items-center justify-center
                          overflow-hidden border-b lg:border-b-0 lg:border-r border-white/6
                          min-h-[40vh] lg:min-h-0">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4"
              priority
            />
          </div>

          {/* PDF iframe panel — right side */}
          <div className="flex-1 min-h-0 bg-white flex flex-col">
            <iframe
              src={cert.pdf}
              title={cert.title}
              type="application/pdf"
              className="w-full h-full bg-white"
              style={{ border: 'none', display: 'block', minHeight: '300px' }}
            />
          </div>

        </div>
      </motion.div>
    </>
  );
}

// ─── Section Header ────────────────────────────────────────────────────────────
function SectionHeader() {
  return (
    <div className="flex flex-col items-center text-center gap-4 mb-12">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                   text-xs font-semibold text-amber-400
                   bg-amber-500/8 border border-amber-500/20"
      >
        <Award size={13} />
        Credentials &amp; Certifications
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="text-3xl md:text-4xl font-bold text-white tracking-tight"
      >
        My <span className="text-amber-400">Certificates</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.16 }}
        className="text-sm text-white/40 max-w-lg"
      >
        A curated collection of professional certifications across web
        development, IoT, hardware design, and open source.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.22 }}
        className="h-px w-20 rounded-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"
      />
    </div>
  );
}

// ─── Filter Tabs ───────────────────────────────────────────────────────────────
function FilterTabs({ active, onChange, counts }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.36 }}
      className="flex flex-wrap justify-center gap-2 mb-10"
    >
      {allCategories.map((cat) => {
        const isActive = cat === active;
        const count = counts[cat] ?? 0;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                        text-xs font-medium border transition-all duration-200
                        ${isActive
                ? 'bg-amber-400 text-black border-amber-400 shadow-[0_0_14px_rgba(245,158,11,0.35)]'
                : 'bg-white/[0.03] text-white/50 border-white/10 hover:border-white/20 hover:text-white/75'
              }`}
          >
            {cat}
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold
                          ${isActive ? 'bg-black/20 text-black' : 'bg-white/8 text-white/35'}`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export default function CertificatesGallery() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Pre-compute counts for each filter tab
  const counts = { All: certificates.length };
  certificates.forEach((c) => {
    counts[c.category] = (counts[c.category] ?? 0) + 1;
  });

  const filtered =
    activeFilter === 'All'
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

  return (
    <section
      id="certificates"
      className="relative py-24 px-4 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Subtle ambient top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(245,158,11,0.07) 0%, transparent 100%)',
        }}
      />

      <div className="relative container mx-auto max-w-6xl">
        <SectionHeader />

        <FilterTabs
          active={activeFilter}
          onChange={setActiveFilter}
          counts={counts}
        />

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, i) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                index={i}
                onClick={setSelectedCert}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-white/30 text-sm mt-16">
            No certificates in this category yet.
          </p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
