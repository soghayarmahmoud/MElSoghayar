'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ModernProjectCard from './ModernProjectCard';
import { Filter } from 'lucide-react';

const ModernProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'E-Commerce App',
      description: 'A modern e-commerce app built with Next.js and Stripe integration for seamless online shopping experience.',
      image: '/images/raval.png',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Figma', 'FireAuth'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: 'https://github.com/soghayarmahmoud/raval',
      stars: '',
      views: '1.2k',
      date: '2025'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: '/images/wateera.png',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Figma', 'FireAuth'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: 'https://github.com/soghayarmahmoud/wateera',
      stars: '',
      views: '1.2k',
      date: '2025'
    },
    {
      id: 3,
      title: 'Budget Tracker App',
      description: 'A secure budget tracking app with biometric authentication and real-time transaction monitoring.',
      image: '/images/mon.png',
      technologies: ['Flutter', 'Dart', 'Firebase', 'FireAuth', 'Hive'],
      category: 'mobile',
      liveUrl: 'https://drive.google.com/file/d/1DBSFzryvpzoafOP8v58g1t1h8I02otaF/view',
      githubUrl: 'https://github.com/soghayarmahmoud/MonTrack',
      stars: '13',
      views: '1.1k',
      date: '2025'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with dark mode, internationalization, and smooth animations.',
      image: '/images/alivfx.png',
      technologies: ['Next.js', 'React', 'Tailwind CSS'],
      category: 'web',
      liveUrl: 'https://alivfx.vercel.app/',
      githubUrl: '#',
      stars: '15',
      views: '1K',
      date: '2025'
    },
    {
      id: 5,
      title: 'Simple Notes App',
      description: 'A simple notes application with a clean interface and easy organization.',
      image: '/images/n1.png',
      technologies: ['Flutter', 'Dart', 'Firebase', 'FireAuth', 'Hive'],
      category: 'mobile',
      liveUrl: 'https://drive.google.com/drive/folders/1J2tYf2mV6lDXXdFqjru0K7rPJEVF8dxv?hl=ar',
      githubUrl: '',
      stars: '12',
      views: '2.1K',
      date: '2025'
    },
    {
      id: 6,
      title: 'Sahih Al-Bukhari App',
      description: 'An Islamic app providing access to the complete collection of Sahih Al-Bukhari Hadiths with search functionality.',
      image: '/images/b.png',
      technologies: ['Flutter', 'Dart', 'Firebase', 'FireAuth', 'Hive', 'Search API', 'SQFlite'],
      category: 'mobile',
      liveUrl: 'https://drive.google.com/drive/folders/1KUXVw-iJwnZ0OqPs2nEaOTe4KaUcQwAy?hl=ar',
      githubUrl: 'https://github.com/soghayarmahmoud/buck',
      stars: '28',
      views: '1.5k',
      date: '2025'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Some of my recent work
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <motion.button
                  key={filter.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
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

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ModernProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            {/* <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Projects
            </motion.button> */}

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernProjects;
