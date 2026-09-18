'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Globe,
  Smartphone,
  FlaskConical,
  ZoomIn,
  ExternalLink,
  Github,
  Download,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
} from 'lucide-react';
import { getAllProjects } from '@/lib/projectsData';

// ─── Category Icons ────────────────────────────────────────────────────────────
const categoryIcon = {
  web: Globe,
  mobile: Smartphone,
  research: FlaskConical,
};

const categoryLabel = {
  web: 'Web App',
  mobile: 'Mobile App',
  research: 'Research',
};

const allFilters = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Apps' },
  { key: 'mobile', label: 'Mobile Apps' },
  { key: 'research', label: 'Research' },
];

// ─── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onClick }) {
  const Icon = categoryIcon[project.category] ?? FolderOpen;
  const label = categoryLabel[project.category] ?? project.category;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.32, delay: index * 0.04, ease: 'easeOut' }}
      onClick={() => onClick(project)}
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-zinc-900
                 border border-white/8 hover:border-amber-500/60
                 hover:shadow-[0_0_22px_rgba(245,158,11,0.18)]
                 transition-all duration-300 flex flex-col"
    >
      {/* ── Project image thumbnail ── */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-800 shrink-0">
        <Image
          src={project.image || '/images/b1.jpg'}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500
                     group-hover:scale-105"
          priority={project.id <= 3}
        />

        {/* Dark gradient overlay at bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />

        {/* Category badge — floats over image top-left */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5
                        px-2.5 py-1 rounded-full
                        bg-black/60 backdrop-blur-sm border border-white/10
                        text-[10px] font-semibold text-amber-400/90">
          <Icon size={11} />
          {label}
        </div>

        {/* Status badge — top right */}
        {project.status && (
          <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-semibold
            ${project.status === 'in-progress'
              ? 'bg-amber-400 text-black'
              : project.status === 'pending'
              ? 'bg-red-500/80 text-white'
              : 'bg-emerald-500/80 text-white'
            }`}>
            {project.status === 'in-progress' ? 'In Progress' : project.status === 'pending' ? 'Pending' : 'Live'}
          </div>
        )}

        {/* Zoom / View icon — appears on hover */}
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
            View Project
          </div>
        </motion.div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col gap-2 px-4 py-4">
        {/* Title */}
        <h3 className="text-[13.5px] font-semibold text-white leading-snug
                       group-hover:text-amber-300 transition-colors duration-200 line-clamp-2">
          {project.title}
        </h3>

        {/* Short description · Date */}
        <div className="flex items-center justify-between gap-2 text-[11px]">
          <span className="text-white/50 truncate">{project.description?.split('.')[0]}</span>
          <span className="text-white/30 shrink-0">{project.date}</span>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1 mt-1">
          {project.technologies?.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-full text-[10px]
                                        bg-white/5 border border-white/10 text-white/40">
              {tech}
            </span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="px-2 py-0.5 text-[10px] text-white/25">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Project Modal ─────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  const images = project.images?.length ? project.images : [project.image || '/images/b1.jpg'];

  const prev = (e) => {
    e.stopPropagation();
    setActiveImg((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const next = (e) => {
    e.stopPropagation();
    setActiveImg((i) => (i === images.length - 1 ? 0 : i + 1));
  };

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
              {project.title}
            </h2>
            <p className="text-xs text-white/40">
              {categoryLabel[project.category] ?? project.category} &middot; {project.date}
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
            {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                           text-xs font-medium text-white/60 border border-white/12
                           hover:text-white hover:border-white/25 bg-white/[0.03]
                           transition-colors duration-200"
              >
                <Github size={12} />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target={project.downloadApk ? '_self' : '_blank'}
                rel="noopener noreferrer"
                download={project.downloadApk || undefined}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full
                           text-xs font-semibold text-black bg-amber-400
                           hover:bg-amber-300 shadow-[0_0_14px_rgba(245,158,11,0.3)]
                           transition-colors duration-200"
              >
                {project.downloadApk ? <Download size={12} /> : <ExternalLink size={12} />}
                {project.downloadApk ? 'Download APK' : 'Live Demo'}
              </a>
            )}
          </div>
        </div>

        {/* Two-panel body: image carousel left, details right */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-hidden">

          {/* Image panel — with carousel */}
          <div className="relative lg:w-1/2 bg-zinc-950 flex items-center justify-center
                          overflow-hidden border-b lg:border-b-0 lg:border-r border-white/6
                          min-h-[40vh] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImg}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[activeImg]}
                  alt={`${project.title} screenshot ${activeImg + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-4"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Carousel controls — only show if multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                             w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm
                             border border-white/10 text-white/70 hover:text-white
                             flex items-center justify-center transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                             w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm
                             border border-white/10 text-white/70 hover:text-white
                             flex items-center justify-center transition-colors"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setActiveImg(i); }}
                      className={`h-1.5 rounded-full transition-all duration-200
                        ${i === activeImg ? 'bg-amber-400 w-4' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Details panel — right side */}
          <div className="flex-1 min-h-0 overflow-y-auto p-5 flex flex-col gap-5">

            {/* About */}
            <div>
              <h4 className="text-[11px] font-semibold text-amber-400/70 uppercase tracking-widest mb-2">
                About
              </h4>
              <p className="text-sm text-white/65 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Technologies */}
            {project.technologies?.length > 0 && (
              <div>
                <h4 className="text-[11px] font-semibold text-amber-400/70 uppercase tracking-widest mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium
                                 bg-white/5 border border-white/10 text-white/55"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {project.features?.length > 0 && (
              <div>
                <h4 className="text-[11px] font-semibold text-amber-400/70 uppercase tracking-widest mb-2">
                  Key Features
                </h4>
                <ul className="flex flex-col gap-1.5">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] text-white/55">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-400/60 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Highlights */}
            {project.highlights?.length > 0 && (
              <div>
                <h4 className="text-[11px] font-semibold text-amber-400/70 uppercase tracking-widest mb-2">
                  Highlights
                </h4>
                <ul className="flex flex-col gap-1.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] text-white/55">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-400/60 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {project.challenges?.length > 0 && (
              <div>
                <h4 className="text-[11px] font-semibold text-amber-400/70 uppercase tracking-widest mb-2">
                  Challenges &amp; Solutions
                </h4>
                <div className="flex flex-col gap-3">
                  {project.challenges.map((c, i) => (
                    <div key={i} className="rounded-xl p-3 bg-white/[0.03] border border-white/8">
                      <p className="text-[11px] font-semibold text-amber-300/70 mb-1">{c.challenge}</p>
                      <p className="text-[11px] text-white/45 leading-relaxed">{c.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
        <FolderOpen size={13} />
        Work &amp; Projects
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="text-3xl md:text-4xl font-bold text-white tracking-tight"
      >
        My <span className="text-amber-400">Projects</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.16 }}
        className="text-sm text-white/40 max-w-lg"
      >
        A curated selection of projects spanning web, mobile, and research —
        click any card to explore details, screenshots, and tech stack.
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
      {allFilters.map((f) => {
        const isActive = f.key === active;
        const count = counts[f.key] ?? 0;
        return (
          <button
            key={f.key}
            onClick={() => onChange(f.key)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                        text-xs font-medium border transition-all duration-200
                        ${isActive
              ? 'bg-amber-400 text-black border-amber-400 shadow-[0_0_14px_rgba(245,158,11,0.35)]'
              : 'bg-white/[0.03] text-white/50 border-white/10 hover:border-white/20 hover:text-white/75'
            }`}
          >
            {f.label}
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
export default function ModernProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = getAllProjects();

  // Pre-compute counts for each filter tab
  const counts = { all: projects.length };
  projects.forEach((p) => {
    counts[p.category] = (counts[p.category] ?? 0) + 1;
  });

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
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
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-white/30 text-sm mt-16">
            No projects in this category yet.
          </p>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
