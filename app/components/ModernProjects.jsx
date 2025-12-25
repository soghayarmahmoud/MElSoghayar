'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ModernProjectCard from './ModernProjectCard';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-7xl mx-auto"
        >
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Some of my recent work
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <motion.button
                  key={filter.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${activeFilter === filter.key
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                >
                  <div className="flex items-center space-x-2">
                    <Filter size={16} />
                    <span>{filter.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="sync">
              {filteredProjects.map((project, index) => (
                <ModernProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernProjects;
