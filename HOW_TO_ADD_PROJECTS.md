# How to Add New Projects

This guide explains how to easily add new projects to your portfolio.

## Quick Start

1. **Open the project data file**: `lib/projectsData.js`
2. **Add your project** to the `projects` array
3. **Add images** to the `public/images` folder
4. **Done!** Your project will automatically appear on the site

## Project Data Structure

Each project requires the following fields:

```javascript
{
    id: 8,  // Increment from the last project ID
    title: 'Your Project Title',
    description: 'Short description (1-2 sentences for the card)',
    fullDescription: 'Detailed description for the project detail page',
    image: '/images/your-main-image.png',  // Main project image
    images: [  // Array of images for the gallery
        '/images/your-main-image.png',
        '/images/screenshot1.png',
        '/images/screenshot2.png'
    ],
    technologies: ['Tech1', 'Tech2', 'Tech3'],  // Technologies used
    category: 'web',  // 'web', 'mobile', or 'research'
    liveUrl: 'https://your-project-url.com',  // Live demo or download link
    githubUrl: 'https://github.com/username/repo',  // GitHub repo (use '' if not available)
    stars: '10',  // GitHub stars (use '' if not applicable)
    views: '500',  // View count (use '' if not applicable)
    date: '2025',  // Year of completion
    status: 'live',  // 'live' or 'in-progress' (optional)
    downloadApk: false,  // true if liveUrl is an APK download (optional)
    features: [  // Array of key features
        'Feature 1',
        'Feature 2',
        'Feature 3'
    ],
    challenges: [  // Optional: Challenges and solutions
        {
            challenge: 'Description of the challenge',
            solution: 'How you solved it'
        }
    ],
    highlights: [  // Optional: Technical highlights
        'Highlight 1',
        'Highlight 2'
    ]
}
```

## Step-by-Step Guide

### 1. Prepare Your Images

- Add your main project image to `public/images/`
- If you have multiple screenshots, create a subfolder: `public/images/your-project/`
- Recommended image formats: PNG, JPG, WebP
- Recommended size: 800x600px or similar aspect ratio

### 2. Add Project Data

Open `lib/projectsData.js` and add your project to the `projects` array:

```javascript
export const projects = [
    // ... existing projects ...
    {
        id: 9,  // Next available ID
        title: 'My Awesome Project',
        description: 'A brief description that appears on the project card.',
        fullDescription: 'A longer, more detailed description that appears on the project detail page. Explain what the project does, what technologies were used, and what problems it solves.',
        image: '/images/my-project.png',
        images: [
            '/images/my-project.png',
            '/images/my-project/screenshot1.png',
            '/images/my-project/screenshot2.png'
        ],
        technologies: ['React', 'Node.js', 'MongoDB'],
        category: 'web',
        liveUrl: 'https://my-project.com',
        githubUrl: 'https://github.com/username/my-project',
        stars: '25',
        views: '1.5k',
        date: '2025',
        status: 'live',
        features: [
            'User authentication',
            'Real-time updates',
            'Responsive design'
        ]
    }
];
```

### 3. Categories

Choose the appropriate category:
- **`web`**: Web applications and websites
- **`mobile`**: Mobile apps (iOS, Android, Flutter)
- **`research`**: Research projects, simulations, academic work

### 4. Optional Fields

#### For Mobile Apps with APK Downloads:
```javascript
{
    liveUrl: '/documents/MyApp.apk',
    downloadApk: true
}
```

#### For Research Projects:
```javascript
{
    challenges: [
        {
            challenge: 'Complex algorithm optimization',
            solution: 'Implemented dynamic programming approach'
        }
    ],
    highlights: [
        'Published in IEEE conference',
        'Achieved 95% accuracy',
        'Open-source implementation'
    ]
}
```

## Examples

### Example 1: Web Application
```javascript
{
    id: 10,
    title: 'Task Manager Pro',
    description: 'A modern task management app with real-time collaboration.',
    fullDescription: 'Task Manager Pro is a full-stack web application built with Next.js and Firebase. It enables teams to collaborate in real-time with features like drag-and-drop task boards, notifications, and analytics.',
    image: '/images/task-manager.png',
    images: ['/images/task-manager.png'],
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
    category: 'web',
    liveUrl: 'https://taskmanager.com',
    githubUrl: 'https://github.com/user/task-manager',
    stars: '42',
    views: '2.3k',
    date: '2025',
    status: 'live',
    features: [
        'Real-time collaboration',
        'Drag-and-drop interface',
        'Team analytics dashboard'
    ]
}
```

### Example 2: Mobile App
```javascript
{
    id: 11,
    title: 'Fitness Tracker',
    description: 'Track your workouts and nutrition with AI-powered insights.',
    fullDescription: 'A comprehensive fitness tracking mobile app built with Flutter. Features include workout logging, nutrition tracking, progress charts, and AI-powered recommendations.',
    image: '/images/fitness-app.png',
    images: [
        '/images/fitness-app.png',
        '/images/fitness/dashboard.png',
        '/images/fitness/workout.png'
    ],
    technologies: ['Flutter', 'Dart', 'TensorFlow Lite'],
    category: 'mobile',
    liveUrl: '/documents/FitnessTracker.apk',
    githubUrl: '',
    stars: '',
    views: '800',
    date: '2025',
    downloadApk: true,
    features: [
        'Workout logging',
        'Nutrition tracking',
        'AI-powered recommendations',
        'Progress visualization'
    ]
}
```

## Tips

1. **Use descriptive titles** - Make it clear what the project does
2. **Write compelling descriptions** - Highlight the unique aspects
3. **Include quality images** - First impressions matter
4. **List relevant technologies** - Show your tech stack
5. **Add features** - Help visitors understand what the project offers
6. **Include challenges/solutions** - Demonstrate problem-solving skills (especially for research projects)

## Troubleshooting

**Project not showing up?**
- Check that the ID is unique
- Verify image paths are correct (relative to `/public`)
- Make sure the category is one of: 'web', 'mobile', or 'research'

**Images not loading?**
- Ensure images are in the `public/images` folder
- Check that paths start with `/images/` (not `public/images/`)
- Verify image file names match exactly (case-sensitive)

**Need help?**
- Review existing projects in `lib/projectsData.js` for reference
- Check the console for any error messages
- Ensure all required fields are filled in
