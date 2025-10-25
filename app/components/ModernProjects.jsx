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
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js and Stripe integration for seamless online shopping experience.',
      image: 'images/appstore.png',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Figma', 'FireAuth'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      stars: '24',
      views: '1.2k',
      date: '2024'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      stars: '18',
      views: '890',
      date: '2024'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication and real-time transaction monitoring.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#',
      stars: '32',
      views: '2.1k',
      date: '2023'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with dark mode, internationalization, and smooth animations.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'next-intl'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      stars: '15',
      views: '650',
      date: '2024'
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts and interactive maps.',
      image: '/api/placeholder/400/300',
      technologies: ['Flutter', 'Dart', 'OpenWeather API', 'Google Maps'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#',
      stars: '12',
      views: '420',
      date: '2023'
    },
    {
      id: 6,
      title: 'Design System',
      description: 'A comprehensive design system with reusable components and design tokens for consistent UI.',
      image: '/api/placeholder/400/300',
      technologies: ['Figma', 'Storybook', 'React', 'CSS Variables'],
      category: 'design',
      liveUrl: '#',
      githubUrl: '#',
      stars: '28',
      views: '1.5k',
      date: '2024'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'design', label: 'UI/UX Design' }
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
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernProjects;
