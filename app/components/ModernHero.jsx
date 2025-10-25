'use client';

import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const ModernHero = () => {

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

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={floatingAnimation}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 4 } }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mahmoud El Soghayar
            </span>
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-300 mb-8 h-16"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'React Developer',
                2000,
                'Node.js Developer',
                2000,
                'Flutter Developer',
                2000,
                'Online Instructor',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about building modern web applications with cutting-edge technologies. Let's bring your ideas to life!
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {/* Download CV Button */}
            <motion.a
              href="/documents/Mahmoud_El-Soghayar_Flutter_Developer.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.a>

            {/* Hire Me Button (WhatsApp) */}
            <motion.a
              href="https://wa.me/201019593092"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-green-500 dark:hover:border-green-400 hover:text-green-600 dark:hover:text-green-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Hire Me</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-slate-400 dark:text-slate-500"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-4 h-4 bg-blue-500 rounded-full opacity-60"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-6 h-6 bg-purple-500 rounded-full opacity-40"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-10 w-3 h-3 bg-pink-500 rounded-full opacity-50"
      />
    </section>
  );
};

export default ModernHero;