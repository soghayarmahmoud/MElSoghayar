/**
 * Centralized Experience Data
 * 
 * This file contains all experience, training, certifications, and organizations data.
 * To add or modify entries, update the respective arrays below.
 */

export const getWorkExperience = () => [
    {
        id: 1,
        company: 'Cipher',
        role: 'Frontend Instructor',
        description: 'Delivered practical frontend development training covering React, Next.js, responsive design, and modern web development workflows.',
        image: '/images/logos/cipher.jpg',
        type: 'teaching',
        duration: '2024 - Present',
        achievements: [
            'Taught React and Next.js fundamentals through hands-on curriculum',
            'Conducted code reviews and project-based assessments',
            'Developed structured learning materials for web development tracks'
        ]
    },
    {
        id: 2,
        company: 'DEPI',
        role: 'Software Tester',
        description: 'Participated in the Digital Egypt Pioneers Initiative software testing track, applying QA methodologies, test case design, and bug tracking across real software projects.',
        image: '/images/logos/Depi.jpeg',
        type: 'internship',
        duration: '2023 - 2024',
        achievements: [
            'Designed and executed structured test cases for web applications',
            'Documented bugs and tracked resolution through the development cycle',
            'Applied manual and basic automated testing techniques'
        ]
    },
    {
        id: 3,
        company: 'Freelancer',
        role: 'Mobile & Web Developer',
        description: 'Delivered web and mobile development projects for clients across platforms including Fiverr, Mostaql, and others — covering frontend development, Flutter mobile apps, API integration, and software testing.',
        image: '/images/logos/mostaql.png',
        type: 'freelance',
        duration: '2022 - Present',
        achievements: [
            '20+ projects completed across web and mobile development',
            'Built cross-platform Flutter applications with Firebase integration',
            'Delivered software testing services with documented client satisfaction'
        ]
    },
    {
        id: 4,
        company: 'Oriva Foundation',
        role: 'Founder',
        description: 'Founded Oriva Foundation, a technology-focused initiative building software projects and supporting community-oriented digital development efforts.',
        image: '/images/logos/oriva.png',
        type: 'founder',
        duration: '2024 - Present',
        achievements: [
            'Established the foundation and defined its technical direction',
            'Led development of open-source projects including Wateera and MonTrack',
            'Built and managed a collaborative development team'
        ]
    }
];

export const getTraining = () => [
    {
        id: 1,
        program: 'EGFWD',
        title: 'Frontend Web Development',
        duration: '6 months',
        description: 'Intensive frontend development program covering React, Next.js, and modern CSS — part of the Egypt Forward Digital Workforce Development initiative.',
        type: 'bootcamp',
        logo: '/images/logos/EGFWD.png'
    },
    {
        id: 2,
        program: 'ITIDA Gigs',
        title: 'Freelancing Skills Training',
        duration: '3 months',
        description: 'Professional freelancing program covering client communication, project scoping, delivery workflows, and platform best practices.',
        type: 'training',
        logo: '/images/logos/itidagigs.jpeg'
    },
    {
        id: 3,
        program: 'DEPI',
        title: 'Software Testing',
        duration: '7 months',
        description: 'Structured QA training covering manual testing, test case design, bug reporting, and introductory test automation — part of the Digital Egypt Pioneers Initiative.',
        type: 'training',
        logo: '/images/logos/Depi.jpeg'
    },
    {
        id: 4,
        program: 'GCI World',
        title: 'Data Analytics & AI',
        duration: '4 months',
        description: 'Comprehensive training in data analytics, machine learning, and AI applications — part of the Google Career Initiative World program.',
        type: 'training',
        logo: '/images/logos/GCI.jpeg'
    }
];

export const getCertifications = () => [
    {
        id: 1,
        title: 'Embedded Systems & Electronics',
        issuer: 'Technical Training Program',
        date: '2024',
        type: 'diploma',
        skills: ['PCB Design', 'Microcontrollers', 'Embedded C', 'Circuit Design']
    },
    {
        id: 2,
        title: 'MATLAB for Engineering Applications',
        issuer: 'Applied Engineering Program',
        date: '2024',
        type: 'diploma',
        skills: ['MATLAB', 'Signal Analysis', 'Simulation', 'Control Systems']
    },
    {
        id: 3,
        title: 'KiCad & PCB Hardware Design',
        issuer: 'Independent Course',
        date: '2023',
        type: 'course',
        skills: ['KiCad', 'Schematic Design', 'PCB Layout', 'Hardware Validation']
    }
];

export const getOrganizations = () => [
    {
        id: 1,
        name: 'Cipher',
        logo: '/images/logos/cipher.jpg',
        description: 'Technology education and frontend development training',
        type: 'education'
    },
    {
        id: 2,
        name: 'DEPI',
        logo: '/images/logos/Depi.jpeg',
        description: 'Digital Egypt Pioneers Initiative — government-backed tech training',
        type: 'initiative'
    },
    {
        id: 3,
        name: 'Egypt Food Bank',
        logo: '/images/logos/EFB.png',
        description: 'Food security and community support nonprofit',
        type: 'nonprofit'
    },
    {
        id: 4,
        name: 'Mostaql',
        logo: '/images/logos/mostaql.png',
        description: 'Arabic freelance platform for developers and designers',
        type: 'platform'
    },
    {
        id: 5,
        name: 'Upwork',
        logo: '/images/logos/upwork.png',
        description: 'Global freelancing marketplace',
        type: 'platform'
    },
    {
        id: 6,
        name: 'Fiverr',
        logo: '/images/logos/fiverr.png',
        description: 'Freelance services marketplace',
        type: 'platform'
    },
    {
        id: 7,
        name: 'Freelancer',
        logo: '/images/logos/freelancer.png',
        description: 'Global project-based freelancing marketplace',
        type: 'platform'
    },
    {
        id: 8,
        name: 'Nafezly',
        logo: '/images/logos/nafezly.png',
        description: 'Arabic-language freelancing platform',
        type: 'platform'
    },
    {
        id: 9,
        name: 'Oriva Foundation',
        logo: '/images/logos/oriva.png',
        description: 'Technology-focused foundation building software and supporting digital development',
        type: 'foundation'
    }
];

/**
 * Filter utilities for experience data
 */
export const filterByType = (items, type) => {
    if (type === 'all') return items;
    return items.filter(item => item.type === type);
};

export const getUniqueTypes = (items) => {
    return ['all', ...new Set(items.map(item => item.type))];
};
