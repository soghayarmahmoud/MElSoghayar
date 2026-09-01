'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, Award, Building2, CheckCircle, Star } from 'lucide-react';
import { getWorkExperience, getTraining, getCertifications, getOrganizations } from '@/lib/experienceData';

const ModernExperience = () => {
    const [workFilter, setWorkFilter] = useState('all');
    const [trainingFilter, setTrainingFilter] = useState('all');
    const [certFilter, setCertFilter] = useState('all');

    const experiences = getWorkExperience();
    const training = getTraining();
    const certifications = getCertifications();
    const organizations = getOrganizations();

    const reviews = [
        {
            id: 1,
            quote: 'Really great to work with. Fast, responsive, and did exactly what was instructed with clear documentation.',
            reviewer: 'ivy_zha',
            title: 'Verified Client',
            company: 'Fiverr — Software Testing',
            rating: 5,
            country: 'United States',
            serviceContext: 'Software Testing · $50 · 3 days'
        }
    ];

    // Filter methods
    const filteredExperiences = workFilter === 'all' 
        ? experiences 
        : experiences.filter(exp => exp.type === workFilter);

    const filteredTraining = trainingFilter === 'all'
        ? training
        : training.filter(t => t.type === trainingFilter);

    const filteredCerts = certFilter === 'all'
        ? certifications
        : certifications.filter(c => c.type === certFilter);

    const workTypes = ['all', ...new Set(experiences.map(e => e.type))];
    const trainingTypes = ['all', ...new Set(training.map(t => t.type))];
    const certTypes = ['all', ...new Set(certifications.map(c => c.type))];

    const workTypeLabels = {
        all: 'All',
        teaching: 'Teaching',
        internship: 'Internship',
        freelance: 'Freelance',
        founder: 'Founder'
    };

    const trainingTypeLabels = {
        all: 'All',
        bootcamp: 'Bootcamp',
        training: 'Training'
    };

    const certTypeLabels = {
        all: 'All',
        diploma: 'Diploma',
        course: 'Course'
    };

    return (
        <section id="experience" className="section-shell py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9a66c]">Experience & Training</p>
                        <h2 className="text-4xl md:text-6xl font-black tracking-[-0.06em] mb-6 text-white leading-[0.96]">
                            Progress shaped by craft.
                        </h2>
                        <p className="text-lg text-[#d4d4d4] max-w-2xl mx-auto leading-relaxed">
                            Professional journey and continuous learning
                        </p>
                    </div>

                    {/* Work Experience Section */}
                    <div className="mb-24">
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="w-8 h-8 text-[#d9a66c]" />
                            <h3 className="text-3xl font-bold text-[#f5f5f5]">Work Experience</h3>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {workTypes.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setWorkFilter(type)}
                                    className={`rounded-full px-6 py-2 font-semibold transition-all hover:scale-[1.02] ${
                                        workFilter === type
                                            ? 'bg-[#d9a66c] text-[#121212] shadow-[0_12px_30px_rgba(217,166,108,0.25)]'
                                            : 'border border-white/10 bg-[#121212] text-[#f5f5f5] hover:border-[#d9a66c]/50 hover:text-[#f5d6ad]'
                                    }`}
                                >
                                    {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Work Cards */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {filteredExperiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group section-panel rounded-[28px] overflow-hidden transition-all hover:border-[#d9a66c]/70 h-full"
                                >
                                    {/* Company Image/Logo */}
                                    <div className="relative h-40 bg-[#1d1d1d] overflow-hidden">
                                        <Image
                                            src={exp.image}
                                            alt={exp.company}
                                            fill
                                            className="object-cover grayscale group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-2xl font-bold text-white">
                                                {exp.company}
                                            </h3>
                                            <span className="text-xs font-semibold px-3 py-1 bg-[#d9a66c]/10 text-[#f5d6ad] rounded-full border border-[#d9a66c]/20">
                                                {exp.duration}
                                            </span>
                                        </div>

                                        <p className="text-lg font-semibold text-[#d9a66c] mb-4">
                                            {exp.role}
                                        </p>

                                        <p className="text-[#d4d4d4] leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <div className="space-y-2">
                                            {exp.achievements.map((achievement, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#d9a66c] flex-shrink-0" />
                                                    <span className="text-sm text-[#d4d4d4]">
                                                        {achievement}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Training Section */}
                    <div className="mb-24">
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="w-8 h-8 text-[#d9a66c]" />
                            <h3 className="text-3xl font-bold text-[#f5f5f5]">Training & Programs</h3>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {trainingTypes.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setTrainingFilter(type)}
                                    className={`rounded-full px-6 py-2 font-semibold transition-all hover:scale-[1.02] ${
                                        trainingFilter === type
                                            ? 'bg-[#d9a66c] text-[#121212] shadow-[0_12px_30px_rgba(217,166,108,0.25)]'
                                            : 'border border-white/10 bg-[#121212] text-[#f5f5f5] hover:border-[#d9a66c]/50 hover:text-[#f5d6ad]'
                                    }`}
                                >
                                    {trainingTypeLabels[type] || type}
                                </button>
                            ))}
                        </div>

                        {/* Training Cards */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {filteredTraining.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group section-panel rounded-[28px] overflow-hidden transition-all hover:border-[#d9a66c]/70 h-full flex flex-col"
                                >
                                    {/* Logo Section */}
                                    <div className="relative h-32 bg-[#1a1a1a] overflow-hidden">
                                        <Image
                                            src={item.logo}
                                            alt={item.program}
                                            fill
                                            className="object-cover grayscale group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <h4 className="text-xl font-bold text-white mb-2">
                                            {item.program}
                                        </h4>
                                        <p className="text-[#d9a66c] font-semibold mb-3 text-sm">
                                            {item.title}
                                        </p>
                                        <p className="text-[#d4d4d4] leading-relaxed text-sm mb-4 flex-1">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                            <span className="text-xs font-semibold text-[#d4d4d4]">
                                                Duration: {item.duration}
                                            </span>
                                            <span className="px-3 py-1 bg-[#d9a66c]/10 text-[#f5d6ad] text-xs rounded-full font-semibold border border-[#d9a66c]/20">
                                                {item.type}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="mb-24">
                        <div className="flex items-center gap-3 mb-8">
                            <CheckCircle className="w-8 h-8 text-[#d9a66c]" />
                            <h3 className="text-3xl font-bold text-[#f5f5f5]">Certifications</h3>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {certTypes.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setCertFilter(type)}
                                    className={`rounded-full px-6 py-2 font-semibold transition-all hover:scale-[1.02] ${
                                        certFilter === type
                                            ? 'bg-[#d9a66c] text-[#121212] shadow-[0_12px_30px_rgba(217,166,108,0.25)]'
                                            : 'border border-white/10 bg-[#121212] text-[#f5f5f5] hover:border-[#d9a66c]/50 hover:text-[#f5d6ad]'
                                    }`}
                                >
                                    {certTypeLabels[type] || type}
                                </button>
                            ))}
                        </div>

                        {/* Certification Cards */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {filteredCerts.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group relative section-panel rounded-[28px] overflow-hidden transition-all hover:border-[#d9a66c]/70 h-full"
                                >
                                    {/* Gradient Background */}
                                    <div className="absolute inset-0 bg-[#111111]" />

                                    <div className="absolute top-4 right-4 w-12 h-12 bg-[#d9a66c] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <Award className="w-6 h-6 text-[#121212]" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 relative z-10 flex flex-col h-full">
                                        <h4 className="text-lg font-bold text-white mb-3 pr-8">
                                            {cert.title}
                                        </h4>

                                        <p className="text-[#d9a66c] font-semibold mb-2">
                                            {cert.issuer}
                                        </p>

                                        <p className="text-sm text-[#d4d4d4] mb-6">
                                            Issued: {cert.date}
                                        </p>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2">
                                            {cert.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-[#d9a66c]/10 text-[#f5d6ad] text-xs rounded-full font-medium border border-[#d9a66c]/20"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Organizations Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Building2 className="w-8 h-8 text-[#d9a66c]" />
                            <h3 className="text-3xl font-bold text-white">Organizations</h3>
                        </div>

                        <div className="relative">
                            <div className="flex overflow-x-auto gap-6 pb-4 px-2 hide-scrollbar">
                                {organizations.map((org, index) => (
                                    <motion.div
                                        key={org.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="org-glass-card group p-6 flex flex-col items-center text-center"
                                    >
                                        <div className="relative w-full h-20 mb-4 flex items-center justify-center">
                                            <Image
                                                src={org.logo}
                                                alt={`${org.name} logo`}
                                                width={64}
                                                height={64}
                                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <h4 className="font-bold text-white mb-2 transition-colors group-hover:text-[#f5d6ad]">
                                            {org.name}
                                        </h4>
                                        <p className="text-xs text-[#d4d4d4] leading-relaxed">
                                            {org.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                            
                            {/* Navigation Arrows */}
                            <button 
                                className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1a1a1a] shadow-lg rounded-full p-2 hover:bg-[#222222] transition-colors border border-white/10 text-[#f5f5f5]"
                                onClick={() => {
                                    const container = document.querySelector('.overflow-x-auto');
                                    if (container) container.scrollLeft -= 200;
                                }}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            
                            <button 
                                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#1a1a1a] shadow-lg rounded-full p-2 hover:bg-[#222222] transition-colors border border-white/10 text-[#f5f5f5]"
                                onClick={() => {
                                    const container = document.querySelector('.overflow-x-auto');
                                    if (container) container.scrollLeft += 200;
                                }}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                         </div>
                    </div>

                    {/* Client Review Section */}
                    <div className="mt-24">
                        <div className="flex items-center gap-3 mb-8">
                            <Star className="w-8 h-8 text-[#d9a66c]" />
                            <h3 className="text-3xl font-bold text-[#f5f5f5]">Client Review</h3>
                        </div>

                        <div className="max-w-xl">
                            {reviews.map((review, index) => (
                                <motion.div
                                    key={review.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45 }}
                                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#121212] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all hover:translate-y-[-2px]"
                                >
                                    <div className="absolute inset-x-0 top-0 h-1 bg-[#d9a66c]" />
                                    <div className="relative z-10 flex h-full flex-col gap-6">
                                        <div className="space-y-4">
                                            <p className="text-[#d4d4d4] leading-relaxed text-sm">
                                                &ldquo;{review.quote}&rdquo;
                                            </p>
                                            <div className="flex items-center gap-2">
                                                {Array.from({ length: review.rating }).map((_, idx) => (
                                                    <Star key={idx} className="w-4 h-4 text-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-auto pt-4 border-t border-white/10">
                                            <p className="text-base font-semibold text-white">
                                                {review.reviewer}
                                            </p>
                                            <p className="text-sm text-[#d9a66c] font-medium">
                                                {review.company}
                                            </p>
                                            {review.serviceContext && (
                                                <p className="text-xs text-[#a3a3a3] mt-1">
                                                    {review.serviceContext} · {review.country}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModernExperience;
