'use client';

import { motion } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const ModernHero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4"
              >
                Hello, I'm
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white"
              >
                Mahmoud El Soghayar
              </motion.h1>

              {/* Animated Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-8 h-16"
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed"
              >
                Passionate about building modern web and mobile applications with cutting-edge technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                {/* Download CV Button */}
                <a
                  href="/documents/Mahmoud_El-Soghayar_CV_EN.pdf"
                  download
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base shadow-md hover:shadow-lg flex items-center space-x-2"
                >
                  <Download size={20} />
                  <span>Download CV</span>
                </a>

                {/* Hire Me Button (WhatsApp) */}
                <a
                  href="https://wa.me/201019593092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 px-6 py-3 rounded-lg font-semibold text-base flex items-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Hire Me</span>
                </a>
              </motion.div>
            </div>

            {/* Right Side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center items-center"
            >
              <div className="relative">
                {/* Image Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
                  <Image
                    src="/images/n.jpg"
                    alt="Mahmoud El Soghayar"
                    fill
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Simple Icon Badges */}
                <div className="absolute -top-4 -right-4 bg-blue-600 p-4 rounded-xl shadow-lg">
                  <Download className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-4 bg-blue-500 p-4 rounded-xl shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;