'use client';

import { ArrowLeft, ArrowRight, Calendar, Code2, ExternalLink, Eye, Github, ImageIcon, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { getProjectById } from '@/lib/projectsData';

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = Number(params.id);
  const project = getProjectById(projectId);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4">
        <div className="rounded-[28px] border border-white/10 bg-[#121212] p-10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <h1 className="mb-4 text-4xl font-black tracking-[-0.06em] text-white">Project Not Found</h1>
          <Link href="/#projects">
            <button className="rounded-full bg-[#d9a66c] px-6 py-3 font-semibold text-[#121212] transition-colors hover:bg-[#f5d6ad]">
              Back to Projects
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <section className="relative pb-20 pt-32">
        <div className="container mx-auto px-4">
          <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-[#d4d4d4] transition-colors hover:text-[#f5d6ad]">
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative h-[420px] overflow-hidden rounded-[30px] border border-white/10 bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <Image
                  src={project.images?.[selectedImage] || project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                <div className="absolute right-4 top-4">
                  {project.status === 'in-progress' ? (
                    <span className="rounded-full bg-[#d5655b] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                      In Progress
                    </span>
                  ) : (
                    <span className="rounded-full bg-[#d9a66c] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#121212]">
                      Live
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9a66c]">Case Study</p>
              <h1 className="mb-6 text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">
                {project.title}
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-[#d4d4d4]">
                {project.fullDescription || project.description}
              </p>

              <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-[#d4d4d4]">
                {project.stars && (
                  <div className="flex items-center gap-2">
                    <Star size={18} className="text-[#d9a66c]" />
                    <span>{project.stars} stars</span>
                  </div>
                )}
                {project.views && (
                  <div className="flex items-center gap-2">
                    <Eye size={18} className="text-[#d9a66c]" />
                    <span>{project.views} views</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[#d9a66c]" />
                  <span>{project.date}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {!project.downloadApk && project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#d9a66c] px-6 py-3 font-semibold text-[#121212] transition-colors hover:bg-[#f5d6ad]"
                  >
                    <ExternalLink size={18} />
                    <span>View Project</span>
                  </a>
                )}

                {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121212] px-6 py-3 font-semibold text-[#f5f5f5] transition-colors hover:border-[#d9a66c] hover:text-[#f5d6ad]"
                  >
                    <Github size={18} />
                    <span>View Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.images && project.images.length > 1 && (
        <section className="border-y border-white/10 bg-[#111111] py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 flex items-center gap-3 text-3xl font-black tracking-[-0.06em] text-white">
              <ImageIcon className="text-[#d9a66c]" />
              <span>Project Gallery</span>
            </h2>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {project.images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-32 cursor-pointer overflow-hidden rounded-[22px] border transition-all ${selectedImage === index
                    ? 'border-[#d9a66c] ring-2 ring-[#d9a66c]/40'
                    : 'border-white/10 hover:border-[#d9a66c]/50'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-black tracking-[-0.06em] text-white">
            <Code2 className="text-[#d9a66c]" />
            <span>Technologies Used</span>
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#d9a66c]/30 bg-[#d9a66c]/10 px-5 py-2.5 text-sm font-medium text-[#f5d6ad]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {project.features && project.features.length > 0 && (
        <section className="border-y border-white/10 bg-[#111111] py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-black tracking-[-0.06em] text-white">Key Features</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 rounded-[22px] border border-white/10 bg-[#171717] p-5">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#d9a66c] text-[#121212]">
                    <ArrowRight size={12} />
                  </div>
                  <p className="text-[#d4d4d4]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.challenges && project.challenges.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-black tracking-[-0.06em] text-white">Challenges & Solutions</h2>

            <div className="space-y-6">
              {project.challenges.map((item, index) => (
                <div key={index} className="rounded-[26px] border border-[#d9a66c]/20 bg-[#121212] p-6">
                  <h3 className="mb-2 text-lg font-bold text-white">Challenge: {item.challenge}</h3>
                  <p className="text-[#d4d4d4]">
                    <span className="font-semibold text-[#f5d6ad]">Solution:</span> {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <section className="border-t border-white/10 bg-[#111111] py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-black tracking-[-0.06em] text-white">Technical Highlights</h2>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="rounded-[22px] border border-white/10 bg-[#171717] p-5 text-[#d4d4d4]">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
