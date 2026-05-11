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
        description: 'Teaching modern frontend development technologies including React, Next.js, and responsive design patterns',
        image: '/images/logos/cipher.jpg',
        type: 'teaching',
        duration: '2024 - Present',
        achievements: ['Mentored 50+ students', 'Created curriculum', 'Code reviews']
    },
    {
        id: 2,
        company: 'DEPI',
        role: 'Software Tester',
        description: 'Ensuring software quality through comprehensive testing methodologies and automated test development',
        image: '/images/logos/Depi.jpeg',
        type: 'internship',
        duration: '2023 - 2024',
        achievements: ['100+ test cases', 'Bug tracking', 'QA automation']
    },
    {
        id: 3,
        company: 'Freelancer',
        role: 'Mobile & Web Developer',
        description: 'Delivering full-stack web and mobile solutions across client projects with responsive design, API integration, and performance-first engineering',
        image: '/images/logos/mostaql.png',
        type: 'freelance',
        duration: '2022 - Present',
        achievements: ['20+ projects', 'Cross-platform apps', 'Client satisfaction']
    },
    {
        id: 4,
        company: 'Oriva Foundation',
        role: 'Founder',
        description: 'Founded Oriva Foundation to empower digital education and community impact through technology-driven programs and partnerships',
        image: '/images/logos/oriva.png',
        type: 'founder',
        duration: '2024 - Present',
        achievements: ['Launched national foundation', 'Built strategic partnerships', 'Led digital empowerment programs']
    }
];

export const getTraining = () => [
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
        logo: '/images/logos/itidagigs.jpeg'
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

export const getCertifications = () => [
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

export const getOrganizations = () => [
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
    },
    {
        id: 6,
        name: 'Fiverr',
        logo: '/images/logos/fiverr.png',
        description: 'Creative services marketplace',
        type: 'platform'
    },
    {
        id: 7,
        name: 'Freelancer',
        logo: '/images/logos/freelancer.png',
        description: 'World\'s largest freelancing marketplace',
        type: 'platform'
    },
    {
        id: 8,
        name: 'Nafezly',
        logo: '/images/logos/nafezly.png',
        description: 'Arabic freelancing platform',
        type: 'platform'
    },
    {
        id: 9,
        name: 'Oriva Foundation',
        logo: '/images/logos/oriva.png',
        description: 'Social impact and technology empowerment through education and mentorship',
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
