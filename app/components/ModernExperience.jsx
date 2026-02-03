'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Heart } from 'lucide-react';

const ModernExperience = () => {
    const experiences = [
        {
            company: 'Cipher',
            role: 'Frontend Instructor',
            icon: <GraduationCap size={24} />,
            description: 'Teaching modern frontend development technologies and best practices',
            type: 'work'
        },
        {
            company: 'DEPI',
            role: 'Software Tester',
            icon: <Briefcase size={24} />,
            description: 'Ensuring software quality through comprehensive testing methodologies',
            type: 'work'
        },
        {
            company: 'Freelancer',
            role: 'Web Developer',
            icon: <Briefcase size={24} />,
            description: 'Creating custom web applications and solutions for diverse clients',
            type: 'work'
        },
        {
            company: 'Freelancer',
            role: 'Mobile App Developer',
            icon: <Briefcase size={24} />,
            description: 'Building cross-platform mobile applications using Flutter',
            type: 'work'
        }
    ];

    const training = [
        {
            program: 'EGFWD',
            title: 'Frontend Web Development',
            icon: <GraduationCap size={24} />
        },
        {
            program: 'ITIDA Gigs',
            title: 'Freelancing Training',
            icon: <Award size={24} />
        },
        {
            program: 'DEPI',
            title: 'Software Testing',
            icon: <Award size={24} />
        }
    ];

    const volunteering = [
        {
            organization: 'بنك الطعام المصري',
            role: 'Volunteer',
            icon: <Heart size={24} />
        }
    ];

    return (
        <section id="experience" className="py-24 bg-blue-50 dark:bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                            Experience & Training
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Professional journey and continuous learning
                        </p>
                    </div>

                    {/* Work Experience */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Work Experience</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={`${exp.company}-${exp.role}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-lg border border-blue-100 dark:border-slate-700"
                                >
                                    {/* Icon */}
                                    <div className="inline-flex p-3 rounded-lg bg-blue-600 text-white mb-4">
                                        {exp.icon}
                                    </div>

                                    {/* Company & Role */}
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                        {exp.company}
                                    </h3>
                                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                                        {exp.role}
                                    </p>

                                    {/* Description */}
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Training & Certifications */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Training & Certifications</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {training.map((item, index) => (
                                <motion.div
                                    key={`${item.program}-${item.title}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md border border-blue-100 dark:border-slate-700 text-center"
                                >
                                    <div className="inline-flex p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                        {item.program}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        {item.title}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Volunteering */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Volunteering</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {volunteering.map((item, index) => (
                                <motion.div
                                    key={item.organization}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md border border-blue-100 dark:border-slate-700"
                                >
                                    <div className="inline-flex p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 mb-4">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                        {item.role}
                                    </h4>
                                    <p className="text-lg text-slate-600 dark:text-slate-400">
                                        {item.organization}
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
