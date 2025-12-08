'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Star } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const ModernProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      key={project.id}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -10, scale: 1.02 }}
      layout
      className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <OptimizedImage
            src={project.image || '/images/b1.jpg'}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-full"
            objectFit="cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Action Buttons */}
        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
          >
            <Eye size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
          >
            <Github size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
          >
            <ExternalLink size={20} />
          </motion.button>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          {project.status === 'in-progress' ? (
            <span className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center space-x-1">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span>In Progress</span>
            </span>
          ) : project.status === 'pending' ? (
            <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              Pending
            </span>
          ) : (
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              Live
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.1 }}
              className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-3 py-1 rounded-full font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star size={14} />
              <span>{project.stars || '0'}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye size={14} />
              <span>{project.views || '0'}</span>
            </div>
          </div>
          <span className="text-xs">{project.date}</span>
        </div>

        <div className="flex space-x-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveUrl}
            download={project.downloadApk ? `${project.title}.apk` : undefined}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            {project.downloadApk ? 'Download APK' : 'Live Demo'}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-center py-2 px-4 rounded-lg font-medium hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
          >
            Source Code
          </motion.a>
        </div>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10"
      />
    </motion.div>
  );
};

export default ModernProjectCard;
