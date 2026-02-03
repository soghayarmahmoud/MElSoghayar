'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ModernProjectCard from './ModernProjectCard';
import AdsenseAd from './AdsenseAd';
import { Filter } from 'lucide-react';
import { getAllProjects } from '@/lib/projectsData';

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
    <section id="projects" className="py-24 bg-blue-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              Some of my recent work showcasing modern technologies
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-lg font-medium text-base transition-all ${activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800'
                    }`}
                >
                  <div className="flex items-center space-x-2">
                    <Filter size={16} />
                    <span>{filter.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Ad placement before projects */}
          <AdsenseAd adSlot="1234567890" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
            <AnimatePresence mode="sync">
              {filteredProjects.map((project, index) => (
                <ModernProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Ad placement after projects */}
          <div className="mt-16">
            <AdsenseAd adSlot="9876543210" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProjects;
