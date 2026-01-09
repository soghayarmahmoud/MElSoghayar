'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Award, Users, Coffee, Star } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const ModernAbout = () => {

  const skills = [
    { name: 'React/Next.js', level: 95, icon: <Code size={20} /> },
    { name: 'Node.js', level: 90, icon: <Database size={20} /> },
    { name: 'UI/UX Design', level: 85, icon: <Palette size={20} /> },
    { name: 'Full Stack', level: 80, icon: <Globe size={20} /> },
    { name: 'Flutter', level: 92, icon: <Globe size={20} /> },

  ];

  const stats = [
    { number: '3+', label: 'Years Experience', icon: <Award size={24} /> },
    { number: '20+', label: 'Projects Completed', icon: <Code size={24} /> },
    { number: '10+', label: 'Happy Clients', icon: <Users size={24} /> },
    { number: '∞', label: 'Coffee Cups', icon: <Coffee size={24} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Passionate developer dedicated to crafting exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-10">
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm a passionate full-stack developer with 3+ years of experience creating innovative web and mobile solutions. I specialize in modern technologies like React, Next.js, Flutter, and Node.js, always striving to deliver exceptional user experiences and clean, maintainable code.
              </p>

              {/* Skills */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-slate-800 dark:text-slate-100">
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                          <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg text-white">
                            {skill.icon}
                          </div>
                          <span className="font-semibold text-lg">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden shadow-sm">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                          className="bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 h-3 rounded-full shadow-lg"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats & Visual */}
            <motion.div variants={itemVariants} className="space-y-10">
              {/* Profile Image Placeholder */}
              <div className="relative mx-auto w-full max-w-sm">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-3xl shadow-2xl flex items-center justify-center p-1"
                >
                  <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden">
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
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <Code size={32} className="text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <Palette size={32} className="text-white" />
                </motion.div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-5">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-6 sm:p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="text-cyan-500 mb-3 flex justify-center text-3xl">
                      {stat.icon}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernAbout;
