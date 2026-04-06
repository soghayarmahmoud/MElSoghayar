'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ModernAbout = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '100%', label: 'Dedication' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-b border-gray-100 dark:border-slate-800">
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

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
                Hi, I&apos;m Mahmoud 👋
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I&apos;m a passionate full-stack developer with 3+ years of experience creating innovative web and mobile solutions. I specialize in modern technologies like React, Next.js, Node.js, and Flutter, always striving to deliver exceptional user experiences and clean, maintainable code.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                My approach to software engineering focuses on building scalable, professional platforms rather than just functional code. When I&apos;m not actively coding, I&apos;m constantly exploring industry trends or sharing my knowledge with aspiring developers.
              </p>
            </div>

            {/* Profile Image */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="relative mx-auto w-full max-w-sm"
            >
              <div className="w-80 h-80 mx-auto bg-blue-600 rounded-2xl shadow-xl p-1 transform transition-transform hover:scale-105 duration-300">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about.jpg"
                    alt="Profile"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority={true}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                key={stat.label}
                className="bg-white dark:bg-slate-800 p-8 rounded-xl text-center border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-500 mb-3">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;
