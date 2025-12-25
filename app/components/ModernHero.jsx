'use client';

import { motion } from 'framer-motion';
import { Download, MessageCircle, ArrowDown, Sparkles, Code, Smartphone } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

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

  const imageVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={floatingAnimation}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 4 } }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"
        />

        {/* Animated Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Greeting */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4 flex items-center justify-center lg:justify-start gap-2"
              >
                <Sparkles className="w-5 h-5 text-cyan-500" />
                Hello, I'm
              </motion.p>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
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
                  className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"
                />
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed"
              >
                Passionate about building modern web and mobile applications with cutting-edge technologies. Let's bring your ideas to life!
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
              >
                {/* Download Flutter CV Button */}
                <motion.a
                  href="/documents/Mahmoud_El-Soghayar_Flutter_Developer.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <Smartphone size={20} className="relative z-10" />
                  <span className="relative z-10">Flutter Dev CV</span>
                </motion.a>

                {/* Download Full Stack CV Button */}
                <motion.a
                  href="/documents/Mahmoud_El-Soghayar_Full_Stack.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <Code size={20} className="relative z-10" />
                  <span className="relative z-10">Full Stack CV</span>
                </motion.a>

                {/* Hire Me Button (WhatsApp) */}
                <motion.a
                  href="https://wa.me/201019593092"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group border-2 border-emerald-500 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-slate-900 px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 flex items-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Hire Me</span>
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center lg:items-start"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-slate-400 dark:text-slate-500"
                >
                  <ArrowDown size={24} />
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side - Profile Image */}
            <motion.div
              variants={imageVariants}
              className="order-1 lg:order-2 flex justify-center items-center"
            >
              <div className="relative">
                {/* Animated Gradient Border */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-50"
                />

                {/* Glassmorphism Background */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full opacity-75 blur-xl" />

                  {/* Image Container */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                    <Image
                      src="/images/n.jpg"
                      alt="Mahmoud El Soghayar"
                      fill
                      className="object-cover"
                      priority
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-purple-500/20" />
                  </div>
                </motion.div>

                {/* Floating Icons */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-2xl shadow-xl"
                >
                  <Code className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl shadow-xl"
                >
                  <Smartphone className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-4 h-4 bg-cyan-500 rounded-full opacity-60"
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