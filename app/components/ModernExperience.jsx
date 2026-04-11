'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, Award, Building2, CheckCircle } from 'lucide-react';

const ModernExperience = () => {
    const [workFilter, setWorkFilter] = useState('all');
    const [trainingFilter, setTrainingFilter] = useState('all');
    const [certFilter, setCertFilter] = useState('all');

    const experiences = [
        {
            id: 1,
            company: 'Cipher',
            role: 'Frontend Instructor',
            description: 'Teaching modern frontend development technologies including React, Next.js, and responsive design patterns',
            image: '/images/logos/cipher.jpg',
            type: 'teaching',
            duration: '2024 - Present',
            achievements: ['Mentored 50+ students', 'Created curriculum', 'Code reviews']
        },
        {
            id: 2,
            company: 'AMIT',
            role: 'Software Tester',
            description: 'Ensuring software quality through comprehensive testing methodologies and automated test development',
            image: '/images/logos/amit.png',
            type: 'internship',
            duration: '2025 - 2026',
            achievements: ['100+ test cases', 'Bug tracking', 'QA automation']
        },
        {
            id: 3,
            company: 'Freelancer',
            role: 'Web Developer',
            description: 'Creating custom web applications and solutions for diverse clients using cutting-edge web technologies',
            image: '/images/logos/mostaql.png',
            type: 'freelance',
            duration: '2023 - Present',
            achievements: ['20+ projects', 'Client satisfaction', 'Full-stack solutions']
        },
        {
            id: 4,
            company: 'Freelancer',
            role: 'Mobile App Developer',
            description: 'Building cross-platform mobile applications using Flutter with beautiful UI and smooth performance',
            image: '/images/logos/upwork.png',
            type: 'freelance',
            duration: '2022 - Present',
            achievements: ['15+ apps', 'Cross-platform', 'Firebase integration']
        }
    ];

    const training = [
        {
            id: 1,
            program: 'EGFWD',
            title: 'Frontend Web Development',
            duration: '6 months',
            description: 'Advanced frontend development with React, Next.js, and modern CSS',
            type: 'bootcamp',
            logo: '/images/logos/Depi.jpeg'
        },
        {
            id: 2,
            program: 'ITIDA Gigs',
            title: 'Freelancing Training',
            duration: '3 months',
            description: 'Professional freelancing skills, client management, and project delivery',
            type: 'training',
            logo: '/images/logos/cipher.jpg'
        },
        {
            id: 3,
            program: 'DEPI',
            title: 'Software Testing',
            duration: '4 months',
            description: 'Comprehensive QA testing, automation, and best practices',
            type: 'bootcamp',
            logo: '/images/logos/Depi.jpeg'
        }
    ];

    const certifications = [
        {
            id: 1,
            title: 'Frontend Web Development Certificate',
            issuer: 'EGFWD',
            date: '2024',
            type: 'diploma',
            skills: ['React', 'Next.js', 'CSS', 'JavaScript']
        },
        {
            id: 2,
            title: 'Software Testing Professional',
            issuer: 'DEPI',
            date: '2024',
            type: 'diploma',
            skills: ['QA', 'Automation', 'Testing Tools']
        },
        {
            id: 3,
            title: 'Flutter Development Certification',
            issuer: 'Independent',
            date: '2023',
            type: 'course',
            skills: ['Flutter', 'Dart', 'Firebase']
        }
    ];

    const organizations = [
        {
            id: 1,
            name: 'Cipher',
            logo: '/images/logos/cipher.jpg',
            description: 'Technology education and training',
            type: 'education'
        },
        {
            id: 2,
            name: 'DEPI',
            logo: '/images/logos/Depi.jpeg',
            description: 'Digital Egypt Pioneers Initiative',
            type: 'initiative'
        },
        {
            id: 3,
            name: 'Egypt Food Bank',
            logo: '/images/logos/EFB.png',
            description: 'Food security and community support',
            type: 'nonprofit'
        },
        {
            id: 4,
            name: 'Mostaql',
            logo: '/images/logos/mostaql.png',
            description: 'Freelance platform for developers',
            type: 'platform'
        },
        {
            id: 5,
            name: 'Upwork',
            logo: '/images/logos/upwork.png',
            description: 'Global freelancing marketplace',
            type: 'platform'
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

    return (
        <section id="experience" className="py-24 bg-white dark:bg-slate-900 border-t border-b border-gray-100 dark:border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                            Experience & Training
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Professional journey and continuous learning
                        </p>
                    </div>

                    {/* Work Experience Section */}
                    <div className="mb-24">
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="w-8 h-8 text-blue-600" />
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Work Experience</h3>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {workTypes.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setWorkFilter(type)}
                                    className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${
                                        workFilter === type
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
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
                                    className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 dark:border-slate-700 transition-all hover:border-blue-400 dark:hover:border-blue-500 h-full"
                                >
                                    {/* Company Image/Logo */}
                                    <div className="relative h-40 bg-gradient-to-br from-blue-500 to-blue-600 overflow-hidden">
                                        <Image
                                            src={exp.image}
                                            alt={exp.company}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                                {exp.company}
                                            </h3>
                                            <span className="text-xs font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                                                {exp.duration}
                                            </span>
                                        </div>

                                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                            {exp.role}
                                        </p>

                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <div className="space-y-2">
                                            {exp.achievements.map((achievement, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                    <span className="text-sm text-slate-600 dark:text-slate-400">
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
                            <Award className="w-8 h-8 text-green-600" />
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Training & Programs</h3>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {trainingTypes.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setTrainingFilter(type)}
                                    className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${
                                        trainingFilter === type
                                            ? 'bg-green-600 text-white shadow-lg'
                                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
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
                                    className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 dark:border-slate-700 transition-all hover:border-green-400 dark:hover:border-green-500 h-full flex flex-col"
                                >
                                    {/* Logo Section */}
                                    <div className="relative h-32 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={item.logo}
                                            alt={item.program}
                                            width={80}
                                            height={80}
                                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                            {item.program}
                                        </h4>
                                        <p className="text-green-600 dark:text-green-400 font-semibold mb-3 text-sm">
                                            {item.title}
                                        </p>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4 flex-1">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-700">
                                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                                                Duration: {item.duration}
                                            </span>
                                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full font-semibold">
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
                            <CheckCircle className="w-8 h-8 text-purple-600" />
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Certifications</h3>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {certTypes.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setCertFilter(type)}
                                    className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${
                                        certFilter === type
                                            ? 'bg-purple-600 text-white shadow-lg'
                                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
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
                                    className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 dark:border-slate-700 transition-all hover:border-purple-400 dark:hover:border-purple-500 h-full"
                                >
                                    {/* Gradient Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all"></div>

                                    {/* Certificate Badge */}
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 relative z-10 flex flex-col h-full">
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pr-8">
                                            {cert.title}
                                        </h4>

                                        <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                                            {cert.issuer}
                                        </p>

                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                                            Issued: {cert.date}
                                        </p>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2">
                                            {cert.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium"
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
                            <Building2 className="w-8 h-8 text-orange-600" />
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Organizations</h3>
                        </div>

                        {/* Organizations Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {organizations.map((org, index) => (
                                <motion.div
                                    key={org.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-2xl border border-gray-100 dark:border-slate-700 transition-all hover:border-orange-400 dark:hover:border-orange-500 flex flex-col items-center text-center"
                                >
                                    <div className="relative w-full h-20 mb-4 flex items-center justify-center">
                                        <Image
                                            src={org.logo}
                                            alt={`${org.name} logo`}
                                            width={64}
                                            height={64}
                                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                        {org.name}
                                    </h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {org.description}
                                    </p>
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
