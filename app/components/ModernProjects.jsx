'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects } from '@/lib/projectsData';

const ModernProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'research', label: 'Research' },
  ];

  const projects = getAllProjects();

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Some of my recent work showcasing modern technologies
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-2">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-8 py-3 rounded-lg font-medium text-base transition-all duration-200 ${activeFilter === filter.key
                    ? 'bg-gray-800 text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-700'
                    }`}
                >
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </div>


          <AdsenseAd adSlot="1234567890" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ModernProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          <div className="mt-16">
            <AdsenseAd adSlot="9876543210" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProjects;
