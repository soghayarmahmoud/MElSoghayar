'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Award, Users, Coffee, Star } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const ModernAbout = () => {

  const skills = [
    { name: 'React/Next.js', level: 95, icon: <Code size={20} /> },
    { name: 'Node.js', level: 90, icon: <Database size={20} /> },
    { name: 'UI/UX Design', level: 85, icon: <Palette size={20} /> },
    { name: 'Full Stack', level: 92, icon: <Globe size={20} /> }
  ];

  const stats = [
    { number: '3+', label: 'Years Experience', icon: <Award size={24} /> },
    { number: '50+', label: 'Projects Completed', icon: <Code size={24} /> },
    { number: '30+', label: 'Happy Clients', icon: <Users size={24} /> },
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
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Passionate developer crafting digital experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm a passionate full-stack developer with 3+ years of experience creating innovative web solutions. I specialize in modern technologies like React, Next.js, and Node.js, always striving to deliver exceptional user experiences and clean, maintainable code.
              </p>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                          {skill.icon}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats & Visual */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile Image Placeholder */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl shadow-2xl flex items-center justify-center"
                >
                
                  <div className="w-72 h-72 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden">
                    <OptimizedImage 
                      src="/images/about.jpg" 
                      alt="Profile" 
                      width={288} 
                      height={288} 
                      className="w-full h-full rounded-xl"
                      objectFit="cover"
                      priority={true}
                    />
                  </div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Code size={24} className="text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Palette size={24} className="text-white" />
                </motion.div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-blue-500 mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
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
