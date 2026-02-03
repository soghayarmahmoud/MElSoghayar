'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const ModernAbout = () => {
  const skills = [
    { name: 'React/Next.js', level: 95, icon: <Code size={20} /> },
    { name: 'Node.js', level: 90, icon: <Database size={20} /> },
    { name: 'Flutter', level: 92, icon: <Globe size={20} /> },
    { name: 'Full Stack', level: 88, icon: <Code size={20} /> },
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '100%', label: 'Dedication' }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Passionate developer dedicated to crafting exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm a passionate full-stack developer with 3+ years of experience creating innovative web and mobile solutions. I specialize in modern technologies like React, Next.js, Flutter, and Node.js, always striving to deliver exceptional user experiences and clean, maintainable code.
              </p>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                          <div className="w-6 h-6 flex items-center justify-center bg-blue-600 rounded text-white">
                            {skill.icon}
                          </div>
                          <span className="font-semibold">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Image & Stats */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="relative mx-auto w-full max-w-sm">
                <div className="w-80 h-80 mx-auto bg-blue-600 rounded-2xl shadow-xl p-1">
                  <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden">
                    <OptimizedImage
                      src="/images/about.jpg"
                      alt="Profile"
                      width={288}
                      height={288}
                      className="w-full h-full"
                      objectFit="cover"
                      priority={true}
                    />
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-blue-50 dark:bg-slate-800 p-6 rounded-xl text-center border border-blue-100 dark:border-slate-700"
                  >
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;
