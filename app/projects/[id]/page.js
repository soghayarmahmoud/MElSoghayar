'use client';

import { ArrowLeft, Download, ExternalLink, Github, Calendar, Eye, Star, Code2, ImageIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { getProjectById } from '@/lib/projectsData';

export default function ProjectDetailPage() {
    const params = useParams();
    const projectId = parseInt(params.id);
    const project = getProjectById(projectId);
    const [selectedImage, setSelectedImage] = useState(0);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Project Not Found</h1>
                    <Link href="/#projects">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                            Back to Projects
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20">
                <div className="container mx-auto px-4">
                    {/* Back Button */}
                    <Link href="/#projects">
                        <button className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors">
                            <ArrowLeft size={20} />
                            <span>Back to Projects</span>
                        </button>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Project Image */}
                        <div className="relative">
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg border border-blue-100 dark:border-slate-700">
                                <Image
                                    src={project.images?.[selectedImage] || project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4">
                                    {project.status === 'in-progress' ? (
                                        <span className="bg-amber-500 text-white text-sm px-4 py-2 rounded-lg font-medium flex items-center space-x-2 shadow-md">
                                            <span className="w-2 h-2 bg-white rounded-full"></span>
                                            <span>In Progress</span>
                                        </span>
                                    ) : (
                                        <span className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg font-medium shadow-md">
                                            Live
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                                {project.title}
                            </h1>

                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                {project.fullDescription || project.description}
                            </p>

                            {/* Stats */}
                            <div className="flex items-center flex-wrap gap-6 mb-8">
                                {project.stars && (
                                    <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                                        <Star size={20} className="text-amber-500" />
                                        <span>{project.stars} stars</span>
                                    </div>
                                )}
                                {project.views && (
                                    <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                                        <Eye size={20} className="text-blue-500" />
                                        <span>{project.views} views</span>
                                    </div>
                                )}
                                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                                    <Calendar size={20} className="text-blue-500" />
                                    <span>{project.date}</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={project.liveUrl}
                                    download={project.downloadApk ? `${project.title}.apk` : undefined}
                                    target={!project.downloadApk ? "_blank" : undefined}
                                    rel={!project.downloadApk ? "noopener noreferrer" : undefined}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 shadow-md hover:shadow-lg transition-all"
                                >
                                    {project.downloadApk ? (
                                        <>
                                            <Download size={20} />
                                            <span>Download APK</span>
                                        </>
                                    ) : (
                                        <>
                                            <ExternalLink size={20} />
                                            <span>View Project</span>
                                        </>
                                    )}
                                </a>

                                {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                                    >
                                        <Github size={20} />
                                        <span>View Source</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            {project.images && project.images.length > 1 && (
                <section className="py-16 bg-blue-50 dark:bg-slate-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3 text-slate-900 dark:text-white">
                            <ImageIcon className="text-blue-600" />
                            <span>Project Gallery</span>
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {project.images.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative h-32 rounded-lg overflow-hidden cursor-pointer transition-all ${selectedImage === index
                                            ? 'ring-4 ring-blue-600 shadow-lg'
                                            : 'ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-2 hover:ring-blue-400'
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

            {/* Technologies Section */}
            <section className="py-16 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3 text-slate-900 dark:text-white">
                        <Code2 className="text-blue-600" />
                        <span>Technologies Used</span>
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {project.technologies?.map((tech) => (
                            <span
                                key={tech}
                                className="bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-lg font-medium border border-blue-200 dark:border-slate-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            {project.features && (
                <section className="py-16 bg-blue-50 dark:bg-slate-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                            Key Features
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {project.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-3 bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-blue-100 dark:border-slate-700"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-slate-700 dark:text-slate-300">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && project.challenges.length > 0 && (
                <section className="py-16 bg-white dark:bg-slate-900">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                            Challenges & Solutions
                        </h2>

                        <div className="space-y-6">
                            {project.challenges.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-blue-50 dark:bg-slate-800 p-6 rounded-xl border-l-4 border-blue-600"
                                >
                                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">
                                        Challenge: {item.challenge}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        <span className="font-semibold text-blue-600 dark:text-blue-400">Solution:</span> {item.solution}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Technical Highlights */}
            {project.highlights && project.highlights.length > 0 && (
                <section className="py-16 bg-blue-50 dark:bg-slate-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                            Technical Highlights
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-blue-200 dark:border-slate-700"
                                >
                                    <p className="text-slate-700 dark:text-slate-300 font-medium">{highlight}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
