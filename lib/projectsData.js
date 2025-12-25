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
        title: 'Raval - E-Commerce App',
        description:
            'A modern e-commerce app built with Flutter for seamless online shopping experience with beautiful UI.',
        fullDescription: 'Raval is a comprehensive e-commerce mobile application designed to provide users with a seamless shopping experience. Built with Flutter and Firebase, it features real-time inventory management, secure payment processing, user authentication, and an intuitive product browsing interface. The app includes advanced features like wishlist management, order tracking, and personalized recommendations.',
        image: '/images/raval.png',
        images: ['/images/raval.png'],
        technologies: ['Flutter', 'Dart', 'Firebase', 'Figma', 'FireAuth'],
        category: 'mobile',
        liveUrl: 'https://github.com/soghayarmahmoud/raval/releases/download/v1.0/Raval.apk',
        githubUrl: 'https://github.com/soghayarmahmoud/raval',
        stars: '',
        views: '1.2k',
        date: '2026',
        status: 'in-progress',
        downloadApk: true,
        features: [
            'User authentication with Firebase Auth',
            'Real-time product catalog',
            'Shopping cart and wishlist',
            'Secure payment integration',
            'Order tracking system',
            'Push notifications',
            'Beautiful UI with smooth animations'
        ]
    },
    {
        id: 2,
        title: 'Wateera - Task Management',
        description:
            'A collaborative task management application with real-time updates and team collaboration features built with Flutter.',
        fullDescription: 'Wateera is a powerful task management application that helps teams collaborate effectively. With real-time synchronization, team members can create, assign, and track tasks seamlessly. The app features project boards, deadline management, file attachments, and comprehensive reporting tools.',
        image: '/images/wateera.png',
        images: ['/images/wateera.png'],
        technologies: ['Flutter', 'Dart', 'Firebase', 'Figma', 'FireAuth'],
        category: 'mobile',
        liveUrl: '/documents/Wateera.apk',
        githubUrl: 'https://github.com/soghayarmahmoud/wateera',
        stars: '',
        views: '1.2k',
        date: '2026',
        status: 'live',
        downloadApk: true,
        features: [
            'Real-time task synchronization',
            'Team collaboration tools',
            'Project boards and lists',
            'Deadline and reminder management',
            'File attachments',
            'Activity tracking',
            'Customizable task categories'
        ]
    },
    {
        id: 3,
        title: 'Budget Tracker App',
        description:
            'A secure budget tracking app with biometric authentication and real-time transaction monitoring.',
        fullDescription: 'MonTrack is a comprehensive personal finance management application that helps users track their income, expenses, and savings goals. With biometric authentication for security, the app provides detailed analytics, budget planning tools, and spending insights to help users make informed financial decisions.',
        image: '/images/mon.png',
        images: ['/images/mon.png'],
        technologies: ['Flutter', 'Dart', 'Firebase', 'FireAuth', 'Hive'],
        category: 'mobile',
        liveUrl: 'https://drive.google.com/file/d/1DBSFzryvpzoafOP8v58g1t1h8I02otaF/view',
        githubUrl: 'https://github.com/soghayarmahmoud/MonTrack',
        stars: '13',
        views: '1.1k',
        date: '2026',
        downloadApk: false,
        features: [
            'Biometric authentication',
            'Transaction tracking',
            'Budget planning',
            'Expense categorization',
            'Financial analytics and reports',
            'Savings goals tracking',
            'Local data storage with Hive'
        ]
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description:
            'A modern portfolio website with dark mode, internationalization, and smooth animations.',
        fullDescription: 'A stunning portfolio website built with Next.js and React, featuring a modern design with dark mode support, smooth animations, and responsive layout. The site showcases projects, skills, and services with an elegant user interface and optimal performance.',
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
            'Dark mode support',
            'Responsive design',
            'Smooth animations with Framer Motion',
            'SEO optimized',
            'Fast page loads',
            'Contact form integration',
            'Project showcase'
        ]
    },
    {
        id: 5,
        title: 'Simple Notes App',
        description:
            'A simple notes application with a clean interface and easy organization.',
        fullDescription: 'A minimalist notes application that focuses on simplicity and ease of use. Built with Flutter and Hive for local storage, it provides a clean interface for creating, editing, and organizing notes with categories and search functionality.',
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
            'Local storage with Hive',
            'Clean and minimal UI',
            'Quick note creation',
            'Note sharing'
        ]
    },
    {
        id: 6,
        title: 'Sahih Al-Bukhari App',
        description:
            'An Islamic app providing access to the complete collection of Sahih Al-Bukhari Hadiths with search functionality.',
        fullDescription: 'A comprehensive Islamic application providing access to the complete collection of Sahih Al-Bukhari Hadiths. Features include advanced search, bookmarking, Arabic text with translations, and offline access. Built with Flutter and SQLite for efficient data management.',
        image: '/images/b.png',
        images: ['/images/b.png'],
        technologies: ['Flutter', 'Dart', 'Firebase', 'FireAuth', 'Hive', 'Search API', 'SQFlite'],
        category: 'mobile',
        liveUrl: '/documents/BuckaryApp.apk',
        githubUrl: 'https://github.com/soghayarmahmoud/buck',
        stars: '28',
        views: '1.5k',
        date: '2026',
        downloadApk: true,
        features: [
            'Complete Sahih Al-Bukhari collection',
            'Advanced search functionality',
            'Bookmarking system',
            'Arabic text with translations',
            'Offline access',
            'Chapter and hadith navigation',
            'Share hadiths'
        ]
    },
    {
        id: 7,
        title: 'Oval - Media Player',
        description:
            'A feature-rich media player application with beautiful UI, playback controls, and playlist management built with Flutter.',
        fullDescription: 'Oval is a modern media player application that provides an exceptional audio playback experience. With a beautiful user interface, advanced playback controls, playlist management, and audio visualization, it offers everything music lovers need in a mobile app.',
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
            'Audio playback controls',
            'Playlist management',
            'Audio visualization',
            'Background playback',
            'Equalizer settings',
            'Sleep timer',
            'Beautiful UI design'
        ]
    },
    {
        id: 8,
        title: 'Li-ion Battery Thermal Management',
        description:
            'Advanced thermal simulation and analysis of 18650 Li-ion batteries with comprehensive performance modeling.',
        fullDescription: 'A comprehensive research project focused on thermal management and performance analysis of 18650 Li-ion batteries. This simulation framework models various battery characteristics including State of Charge (SOC) dynamics, thermal behavior, aging effects, and multi-cell pack thermal distribution. The project includes advanced visualizations and analysis tools for battery research and development.',
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
            'Ragone plot for power-energy analysis',
            'C-rate performance characterization',
            'Internal resistance vs temperature analysis',
            'Multi-cell pack thermal distribution',
            '2D and 3D thermal visualization',
            'Battery efficiency mapping'
        ],
        challenges: [
            {
                challenge: 'Accurate thermal modeling of battery cells',
                solution: 'Implemented physics-based thermal models with validated parameters from experimental data'
            },
            {
                challenge: 'Multi-cell pack thermal coupling',
                solution: 'Developed finite element approach for heat transfer between adjacent cells'
            },
            {
                challenge: 'Computational efficiency for large-scale simulations',
                solution: 'Optimized algorithms using NumPy vectorization and efficient data structures'
            }
        ],
        highlights: [
            'Comprehensive battery performance modeling framework',
            'Advanced visualization suite with 10+ plot types',
            'Validated against experimental battery data',
            'Modular design for easy extension to other battery chemistries',
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
