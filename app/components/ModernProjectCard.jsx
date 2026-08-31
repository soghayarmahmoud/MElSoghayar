'use client';

import Image from 'next/image';
import Link from 'next/link';

const ModernProjectCard = ({ project, index }) => {
  return (
    <div className="group relative overflow-hidden border border-white/10 bg-[#0f0f0f]">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || '/images/b1.jpg'}
          alt={project.title}
          width={400}
          height={300}
          className="h-full w-full object-cover grayscale transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute right-4 top-4">
          {project.status === 'in-progress' ? (
            <span className="rounded-full bg-[#d9a66c] px-3 py-1 text-xs font-medium text-[#121212]">
              In Progress
            </span>
          ) : project.status === 'pending' ? (
            <span className="rounded-full bg-[#d5655b] px-3 py-1 text-xs font-medium text-white">
              Pending
            </span>
          ) : (
            <span className="rounded-full bg-[#f5d6ad] px-3 py-1 text-xs font-medium text-[#121212]">
              Live
            </span>
          )}
        </div>
      </div>

      <div className="p-8">
        <div className="mb-6">
          <h3 className="mb-3 text-xl font-bold leading-tight text-white">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-[#d4d4d4]">
            {project.description}
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies?.slice(0, 3).map((tech, techIndex) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-[#171717] px-3 py-1 text-xs font-medium text-[#f5f5f5]"
            >
              {tech}
            </span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="px-3 py-1 text-xs text-[#a3a3a3]">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          {!project.downloadApk && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full bg-[#d9a66c] px-4 py-3 text-center font-medium text-[#121212] transition-colors hover:bg-[#f5d6ad]"
            >
              Live Demo
            </a>
          )}

          {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full border border-white/10 bg-[#121212] px-4 py-3 text-center font-medium text-[#f5f5f5] transition-colors hover:border-[#d9a66c] hover:text-[#f5d6ad]"
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
