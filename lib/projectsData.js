/**
 * Centralized Project Data
 * 
 * This file contains all project information for the portfolio.
 * To add a new project, simply add a new object to the projects array below.
 * 
 * @typedef {Object} Project
 * @property {number} id - Unique identifier (increment from last project)
 * @property {string} title - Project title
 * @property {string} description - Short description (1-2 sentences)
 * @property {string} fullDescription - Detailed description for project page
 * @property {string} image - Main project image path (relative to /public)
 * @property {string[]} images - Array of image paths for gallery
 * @property {string[]} technologies - Array of technologies used
 * @property {string} category - 'web', 'mobile', or 'research'
 * @property {string} liveUrl - URL to live demo or download
 * @property {string} githubUrl - GitHub repository URL (use '' if not available)
 * @property {string} stars - GitHub stars count (use '' if not applicable)
 * @property {string} views - View count (use '' if not applicable)
 * @property {string} date - Year of completion
 * @property {string} [status] - 'live' or 'in-progress' (optional)
 * @property {boolean} [downloadApk] - True if liveUrl is an APK download (optional)
 * @property {string[]} features - Array of key features
 * @property {Object[]} [challenges] - Array of challenges and solutions (optional)
 * @property {string[]} [highlights] - Technical highlights (optional)
 */

export const projects = [
    {
        id: 1,
        title: 'Al-Buckary',
        description:
            'A mobile application built with Flutter and Firebase, featuring local data persistence with SQLite and Firebase authentication.',
        fullDescription: 'Al-Buckary is a Flutter mobile application built with Firebase for backend services, FireAuth for authentication, and SQLite for local data storage. Designed and prototyped in Figma.',
        image: '/images/b.png',
        images: ['/images/b.png', '/images/b1.png', '/images/b2.png', '/images/b3.png'],
        technologies: ['Flutter', 'Dart', 'Firebase', 'Figma', 'FireAuth', 'SQLite'],
        category: 'mobile',
        liveUrl: 'https://github.com/soghayarmahmoud/Al-Buckary/releases/download/v1.0/Al-Buckary.apk',
        githubUrl: 'https://github.com/soghayarmahmoud/Al-Buckary',
        stars: '',
        views: '1.2k',
        date: '2026',
        status: 'Live',
        downloadApk: true,
        features: [
            'Firebase authentication',
            'Local data persistence with SQLite',
            'Firebase real-time backend',
            'UI designed in Figma'
        ]
    },
    {
        id: 2,
        title: 'Wateera — Task Management',
        description:
            'A collaborative task management application built with Flutter, featuring real-time synchronization via Firebase and team collaboration tools.',
        fullDescription: 'Wateera is a task management application that helps teams organize and track their work. Built with Flutter and Firebase, it supports real-time task synchronization, project boards, deadline management, and file attachments. Designed under the Oriva Foundation.',
        image: '/images/wateera.png',
        images: ['/images/wateera.png'],
        technologies: ['Flutter', 'Dart', 'Firebase', 'Figma', 'FireAuth'],
        category: 'mobile',
        liveUrl: '/documents/Wateera.apk',
        githubUrl: 'https://github.com/Oriva-foundation/wateera',
        stars: '',
        views: '1.2k',
        date: '2026',
        status: 'live',
        downloadApk: true,
        features: [
            'Real-time task synchronization via Firebase',
            'Project boards and task lists',
            'Team collaboration support',
            'Deadline and reminder management',
            'File attachments',
            'Activity tracking',
            'Customizable task categories'
        ]
    },
    {
        id: 3,
        title: 'MonTrack — Budget Tracker',
        description:
            'A personal finance tracking app with biometric authentication, expense categorization, and local data storage using Hive.',
        fullDescription: 'MonTrack is a personal finance management application for tracking income, expenses, and savings goals. It uses biometric authentication for security and Hive for offline-first local storage. Includes budget planning, spending analytics, and savings goal tracking.',
        image: '/images/mon.png',
        images: ['/images/mon.png'],
        technologies: ['Flutter', 'Dart', 'Firebase', 'FireAuth', 'Hive'],
        category: 'mobile',
        liveUrl: 'https://drive.google.com/file/d/1DBSFzryvpzoafOP8v58g1t1h8I02otaF/view',
        githubUrl: 'https://github.com/Oriva-foundation/MonTrack',
        stars: '13',
        views: '1.1k',
        date: '2026',
        downloadApk: false,
        features: [
            'Biometric authentication',
            'Transaction tracking and expense categorization',
            'Budget planning tools',
            'Financial analytics and summary reports',
            'Savings goals tracking',
            'Offline-first local storage with Hive'
        ]
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description:
            'A personal portfolio website built with Next.js and React, featuring smooth animations and a responsive layout.',
        fullDescription: 'A portfolio website built with Next.js and React, using Tailwind CSS for styling and Framer Motion for animations. Features a responsive layout, project showcase, and integrated contact form.',
        image: '/images/alivfx.png',
        images: ['/images/alivfx.png'],
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
        category: 'web',
        liveUrl: 'https://alivfx.vercel.app/',
        githubUrl: '#',
        stars: '15',
        views: '1K',
        date: '2026',
        features: [
            'Responsive design',
            'Smooth animations with Framer Motion',
            'Project showcase section',
            'Contact form integration',
            'SEO metadata',
            'Fast page loads with Next.js'
        ]
    },
    {
        id: 5,
        title: 'Simple Notes App',
        description:
            'A minimalist notes application with category organization, search, and offline-first local storage using Hive.',
        fullDescription: 'A Flutter notes application focused on simplicity. Uses Hive for local storage to keep notes available offline. Supports creating and editing notes, organizing by category, and searching through content.',
        image: '/images/n1.png',
        images: ['/images/n1.png'],
        technologies: ['Flutter', 'Dart', 'Firebase', 'FireAuth', 'Hive'],
        category: 'mobile',
        liveUrl: '/documents/notes.apk',
        githubUrl: '',
        stars: '12',
        views: '2.1K',
        date: '2026',
        downloadApk: true,
        features: [
            'Create and edit notes',
            'Category organization',
            'Search functionality',
            'Offline-first local storage with Hive',
            'Clean minimal UI',
            'Quick note creation'
        ]
    },
    {
        id: 6,
        title: 'Oval — Media Player',
        description:
            'A Flutter audio player application with playlist management, background playback, and audio visualization.',
        fullDescription: 'Oval is a Flutter media player application for audio playback. Includes playlist management, background playback support, audio visualization, and an equalizer. Designed in Figma.',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop',
        images: ['https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop'],
        technologies: ['Flutter', 'Dart', 'Audio Plugin', 'Provider', 'Figma'],
        category: 'mobile',
        liveUrl: '/documents/oval.apk',
        githubUrl: 'https://github.com/soghayarmahmoud/oval',
        stars: '8',
        views: '900',
        date: '2026',
        status: 'live',
        downloadApk: true,
        features: [
            'Audio playback with controls',
            'Playlist management',
            'Audio visualization',
            'Background playback',
            'Equalizer settings',
            'Sleep timer'
        ]
    },
    {
        id: 7,
        title: 'Li-ion Battery Thermal Simulation',
        description:
            'A Python-based thermal simulation framework for 18650 Li-ion batteries, modeling SOC dynamics, thermal runaway, aging, and multi-cell pack behavior.',
        fullDescription: 'A research project focused on thermal management and performance analysis of 18650 Li-ion batteries. Implements physics-based thermal models using Python, NumPy, and SciPy — covering State of Charge dynamics, thermal runaway analysis, capacity fade prediction, and multi-cell pack thermal distribution. Includes 10+ visualization types using Matplotlib.',
        image: '/images/li-ion.png',
        images: [
            '/images/li-ion.png',
            '/images/simulation/battery_SOC_dynamics.png',
            '/images/simulation/battery_thermal_runaway.png',
            '/images/simulation/battery_capacity_fade.png',
            '/images/simulation/battery_ragone_plot.png',
            '/images/simulation/battery_crate_performance.png',
            '/images/simulation/battery_resistance_temperature.png',
            '/images/simulation/battery_pack_thermal_distribution.png',
            '/images/simulation/battery_thermal_2D_plot.png',
            '/images/simulation/battery_thermal_3D_envelope.png',
            '/images/simulation/battery_efficiency_map.png'
        ],
        technologies: ['Python', 'NumPy', 'Matplotlib', 'SciPy', 'Thermal Modeling', 'Battery Simulation'],
        category: 'research',
        liveUrl: 'https://github.com/soghayarmahmoud/Thermal-Simulation',
        githubUrl: 'https://github.com/soghayarmahmoud/Thermal-Simulation',
        stars: '5',
        views: '850',
        date: '2025',
        status: 'live',
        downloadApk: false,
        features: [
            'State of Charge (SOC) dynamics modeling',
            'Thermal runaway analysis',
            'Battery capacity fade prediction',
            'Ragone plot for power-energy tradeoff analysis',
            'C-rate performance characterization',
            'Internal resistance vs temperature modeling',
            'Multi-cell pack thermal distribution',
            '2D and 3D thermal visualization',
            'Battery efficiency mapping'
        ],
        challenges: [
            {
                challenge: 'Accurate thermal modeling of battery cells',
                solution: 'Implemented physics-based thermal models with parameters derived from published experimental data'
            },
            {
                challenge: 'Multi-cell pack thermal coupling',
                solution: 'Developed a finite element approach for heat transfer between adjacent cells'
            },
            {
                challenge: 'Computational efficiency for large-scale simulations',
                solution: 'Optimized algorithms using NumPy vectorization and efficient data structures'
            }
        ],
        highlights: [
            'Physics-based battery performance modeling framework',
            'Visualization suite with 10+ plot types',
            'Modular design extensible to other battery chemistries',
            'Publication-ready figure generation'
        ]
    }
];

/**
 * Get all projects
 * @returns {Project[]} Array of all projects
 */
export const getAllProjects = () => projects;

/**
 * Get project by ID
 * @param {number} id - Project ID
 * @returns {Project|undefined} Project object or undefined if not found
 */
export const getProjectById = (id) => projects.find(p => p.id === id);

/**
 * Get projects by category
 * @param {string} category - Category filter ('all', 'web', 'mobile', 'research')
 * @returns {Project[]} Filtered array of projects
 */
export const getProjectsByCategory = (category) => {
    if (category === 'all') return projects;
    return projects.filter(p => p.category === category);
};

/**
 * Get total project count
 * @returns {number} Total number of projects
 */
export const getProjectCount = () => projects.length;
