'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ModernProjectCard from './ModernProjectCard';
import { Filter } from 'lucide-react';

const ModernProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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
      title: 'AI Chat Assistant',
      description: 'An intelligent chat assistant built using OpenAI API, providing context-aware responses and code generation.',
      image: '/images/ai-chat.png',
      technologies: ['Next.js', 'TypeScript', 'OpenAI', 'Tailwind CSS'],
      category: 'web',
      liveUrl: 'https://aichat.codera.dev/',
      githubUrl: 'https://github.com/soghayarmahmoud/ai-chat',
      stars: '22',
      views: '1.8K',
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
      title: 'Codera Platform',
      description: 'A coding education platform inspired by MDN and W3Schools, offering structured learning paths and AI explanations.',
      image: '/images/codera.png',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      category: 'web',
      liveUrl: 'https://codera.dev/',
      githubUrl: 'https://github.com/soghayarmahmoud/codera',
      stars: '30',
      views: '3.5K',
      date: '2025'
    },
    {
      id: 6,
      title: 'Smart Home Controller',
      description: 'A Flutter app to control smart home devices with Firebase integration and real-time device status updates.',
      image: '/images/smarthome.png',
      technologies: ['Flutter', 'Dart', 'Firebase', 'IoT'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: 'https://github.com/soghayarmahmoud/smarthome',
      stars: '',
      views: '980',
      date: '2025'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile Apps' }
  ];

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
        staggerChildren: 0.1
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
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="sync">
              {filteredProjects.map((project, index) => (
                <ModernProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernProjects;
