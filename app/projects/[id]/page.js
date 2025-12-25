'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, Github, Calendar, Eye, Star, Code2, ImageIcon, Lightbulb, Zap } from 'lucide-react';
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
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/#projects">
                        <button className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full hover:shadow-xl transition-all">
                            Back to Projects
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/20 via-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-violet-400/20 via-purple-400/20 to-fuchsia-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Back Button */}
                    <Link href="/#projects">
                        <motion.button
                            whileHover={{ scale: 1.05, x: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 mb-8 transition-colors"
                        >
                            <ArrowLeft size={20} />
                            <span>Back to Projects</span>
                        </motion.button>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Project Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200 dark:ring-slate-700">
                                <Image
                                    src={project.images?.[selectedImage] || project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4">
                                    {project.status === 'in-progress' ? (
                                        <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm px-4 py-2 rounded-full font-medium flex items-center space-x-2 shadow-lg">
                                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                            <span>In Progress</span>
                                        </span>
                                    ) : (
                                        <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                                            Live
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Project Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                    {project.title}
                                </span>
                            </h1>

                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                {project.fullDescription || project.description}
                            </p>

                            {/* Stats */}
                            <div className="flex items-center space-x-6 mb-8">
                                {project.stars && (
                                    <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                                        <Star size={20} className="text-amber-500" />
                                        <span>{project.stars} stars</span>
                                    </div>
                                )}
                                {project.views && (
                                    <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                                        <Eye size={20} className="text-teal-500" />
                                        <span>{project.views} views</span>
                                    </div>
                                )}
                                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                                    <Calendar size={20} className="text-emerald-500" />
                                    <span>{project.date}</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.liveUrl}
                                    download={project.downloadApk ? `${project.title}.apk` : undefined}
                                    target={!project.downloadApk ? "_blank" : undefined}
                                    rel={!project.downloadApk ? "noopener noreferrer" : undefined}
                                    className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all"
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
                                </motion.a>

                                {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' && (
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
                                    >
                                        <Github size={20} />
                                        <span>View Source</span>
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            {project.images && project.images.length > 1 && (
                <section className="py-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3">
                                <ImageIcon className="text-emerald-500" />
                                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                    Project Gallery
                                </span>
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {project.images.map((img, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative h-32 rounded-lg overflow-hidden cursor-pointer transition-all ${selectedImage === index
                                                ? 'ring-4 ring-emerald-500 shadow-xl'
                                                : 'ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-2 hover:ring-emerald-400'
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${project.title} - Image ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Technologies Section */}
            <section className="py-16 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3">
                            <Code2 className="text-teal-500" />
                            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                                Technologies Used
                            </span>
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {project.technologies?.map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20 text-emerald-700 dark:text-emerald-300 px-6 py-3 rounded-full font-medium border-2 border-emerald-200 dark:border-emerald-800 text-lg hover:shadow-lg transition-shadow"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            {project.features && (
                <section className="py-16 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-8">
                                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                    Key Features
                                </span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start space-x-3 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700"
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mt-1">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-slate-700 dark:text-slate-300">{feature}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && project.challenges.length > 0 && (
                <section className="py-16 bg-white dark:bg-slate-900">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3">
                                <Lightbulb className="text-amber-500" />
                                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                    Challenges & Solutions
                                </span>
                            </h2>

                            <div className="space-y-6">
                                {project.challenges.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-6 rounded-xl border-l-4 border-amber-500"
                                    >
                                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">
                                            Challenge: {item.challenge}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">Solution:</span> {item.solution}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Technical Highlights */}
            {project.highlights && project.highlights.length > 0 && (
                <section className="py-16 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3">
                                <Zap className="text-violet-500" />
                                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                                    Technical Highlights
                                </span>
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {project.highlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 p-5 rounded-xl border border-violet-200 dark:border-violet-800 hover:shadow-lg transition-shadow"
                                    >
                                        <p className="text-slate-700 dark:text-slate-300 font-medium">{highlight}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}
        </div>
    );
}
