'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Download, ArrowRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import Link from 'next/link';

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* View Details Button - Centered on Hover */}
        <Link href={`/projects/${project.id}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 shadow-xl"
            >
              <span>View Details</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </Link>

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
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.slice(0, 3).map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.1 }}
              className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 rounded-full font-medium border border-cyan-200 dark:border-cyan-800"
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="text-xs text-slate-500 dark:text-slate-400 px-3 py-1">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex space-x-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveUrl}
            download={project.downloadApk ? `${project.title}.apk` : undefined}
            target={!project.downloadApk ? "_blank" : undefined}
            rel={!project.downloadApk ? "noopener noreferrer" : undefined}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            {project.downloadApk ? (
              <>
                <Download size={16} />
                <span>Download</span>
              </>
            ) : (
              <>
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </>
            )}
          </motion.a>

          {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-center py-2 px-4 rounded-lg font-medium hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Github size={16} />
              <span>GitHub</span>
            </motion.a>
          )}
        </div>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-10"
      />
    </motion.div>
  );
};

export default ModernProjectCard;
