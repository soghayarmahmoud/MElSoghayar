'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects } from '@/lib/projectsData';
import { useState } from 'react';
import AdsenseAd from './AdsenseAd';
import ModernProjectCard from './ModernProjectCard';
const ModernProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'research', label: 'Research' },
  ];

  const projects = getAllProjects();

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-shell py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9a66c]">Projects</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.06em] mb-6 text-white leading-[0.96]">
              Selected work with depth.
            </h2>
            <p className="text-lg md:text-xl text-[#d4d4d4] max-w-2xl mx-auto">
              Some of my recent work showcasing modern technologies
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8 mb-2">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-8 py-3 rounded-full font-medium text-base transition-all duration-200 ${activeFilter === filter.key
                    ? 'bg-[#d9a66c] text-[#121212] shadow-md'
                    : 'bg-[#1a1a1a] text-[#f5f5f5] hover:bg-[#222222] border border-white/10'
                    }`}
                >
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </div>

          <AdsenseAd adSlot="1234567890" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="h-full">
                <ModernProjectCard project={project} index={index} />
              </div>
            ))}
          </div>

          <div className="mt-16">
            <AdsenseAd adSlot="9876543210" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProjects;
