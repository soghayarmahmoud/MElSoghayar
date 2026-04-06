'use client';
import Image from 'next/image';

const ModernExperience = () => {
    const experiences = [
        {
            company: 'Cipher',
            role: 'Frontend Instructor',
            description: 'Teaching modern frontend development technologies and best practices',
            type: 'work',
        },
        {
            company: 'DEPI',
            role: 'Software Tester',
            description: 'Ensuring software quality through comprehensive testing methodologies',
            type: 'work'
        },
        {
            company: 'Freelancer',
            role: 'Web Developer',
            description: 'Creating custom web applications and solutions for diverse clients',
            type: 'work'
        },
        {
            company: 'Freelancer',
            role: 'Mobile App Developer',
            description: 'Building cross-platform mobile applications using Flutter',
            type: 'work'
        }
    ];

    const training = [
        {
            program: 'EGFWD',
            title: 'Frontend Web Development'
        },
        {
            program: 'ITIDA Gigs',
            title: 'Freelancing Training'
        },
        {
            program: 'DEPI',
            title: 'Software Testing'
        }
    ];

    const organizations = [
        {
            name: 'Cipher',
            logo: '/images/logos/cipher.jpg',
            description: 'Technology education and training'
        },
        {
            name: 'DEPI',
            logo: '/images/logos/Depi.jpeg',
            description: 'Digital Egypt Pioneers Initiative'
        },
        {
            name: 'Egypt Food Bank',
            logo: '/images/logos/EFB.png',
            description: 'Food security and community support'
        },
        {
            name: 'Mostaql',
            logo: '/images/logos/mostaql.png',
            description: 'Freelance platform for developers'
        },
        {
            name: 'Upwork',
            logo: '/images/logos/upwork.png',
            description: 'Global freelancing marketplace'
        }
    ];

    return (
<section id="experience" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                        Experience & Training
                    </h2>
                    <div className="w-20 h-1 bg-gray-800 mx-auto mb-8"></div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Professional journey and continuous learning
                        </p>
                    </div>

                    {/* Work Experience */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Work Experience</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {experiences.map((exp, index) => (
                                <div
                                    key={`${exp.company}-${exp.role}`}
                                    className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-md border border-gray-200 dark:border-slate-700"
                                >
                                    {/* Company & Role */}
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                                        {exp.company}
                                    </h3>
                                    <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-4">
                                        {exp.role}
                                    </p>

                                    {/* Description */}
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Training & Certifications */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Training & Certifications</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {training.map((item, index) => (
                                <div
                                    key={`${item.program}-${item.title}`}
                                    className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-md border border-gray-200 dark:border-slate-700 text-center"
                                >
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                                        {item.program}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Organizations I've Worked With */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Organizations I've Worked With</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {organizations.map((org, index) => (
                                <div
                                    key={org.name}
                                    className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-slate-700 text-center"
                                >
                                    <div className="flex justify-center mb-4">
                                        <Image
                                            src={org.logo}
                                            alt={`${org.name} logo`}
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                        />
                                    </div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                                        {org.name}
                                    </h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {org.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModernExperience;
