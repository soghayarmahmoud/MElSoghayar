'use client';

import Image from 'next/image';
import Link from 'next/link';

const ModernProjectCard = ({ project, index }) => {
  return (
    <div
      className="group relative bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-slate-700"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || '/images/b1.jpg'}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          {project.status === 'in-progress' ? (
            <span className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              In Progress
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
      <div className="p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 leading-tight">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies?.slice(0, 3).map((tech, techIndex) => (
            <span
              key={tech}
              className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 text-xs px-3 py-1 rounded-full font-medium border border-gray-200 dark:border-slate-600"
            >
              {tech}
            </span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="text-xs text-slate-500 dark:text-slate-400 px-3 py-1">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={project.liveUrl}
            download={project.downloadApk ? `${project.title}.apk` : undefined}
            target={!project.downloadApk ? "_blank" : undefined}
            rel={!project.downloadApk ? "noopener noreferrer" : undefined}
            className="flex-1 bg-gray-800 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200"
          >
            {project.downloadApk ? 'Download' : 'Live Demo'}
          </a>

          {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-center py-3 px-4 rounded-lg font-medium hover:border-gray-400 dark:hover:border-slate-500 transition-all duration-200"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

    </div>
  );
};

export default ModernProjectCard;
