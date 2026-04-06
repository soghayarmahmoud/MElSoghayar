'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Monitor, Layers, Smartphone, ShieldCheck, GraduationCap } from 'lucide-react';

const ModernServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-blue-600 mb-6 mx-auto" />,
      title: 'Front End Development',
      description: 'Building modern, responsive, and pixel-perfect user interfaces using React, Next.js, and advanced CSS frameworks. Focused on excellent UX and accessibility.',
      features: ['React & Next.js', 'Tailwind CSS', 'Responsive Design', 'Web Animation']
    },
    {
      icon: <Layers className="w-12 h-12 text-blue-600 mb-6 mx-auto" />,
      title: 'Full Stack Development (MERN)',
      description: 'Architecting scalable web applications from the ground up using MongoDB, Express, React, and Node.js. Delivering high-performance and secure backends.',
      features: ['MERN Stack', 'RESTful APIs', 'Database Design', 'Auth & Security']
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600 mb-6 mx-auto" />,
      title: 'Flutter Mobile App Development',
      description: 'Creating beautiful, natively compiled applications for both Android and iOS platforms from a single codebase using Flutter and Dart.',
      features: ['Cross-Platform', 'Fluid UI', 'State Management', 'Native Integration']
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-blue-600 mb-6 mx-auto" />,
      title: 'Software Testing',
      description: 'Ensuring robust application reliability through extensive unit, integration, and end-to-end testing methodologies. Identifying bugs before they hit production.',
      features: ['Quality Assurance', 'Unit Testing', 'E2E Testing', 'Test Automation']
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-600 mb-6 mx-auto" />,
      title: 'Online Instructor',
      description: 'Sharing practical knowledge and mentorship in web and mobile development. Empowering the next generation of developers with up-to-date industry practices.',
      features: ['Mentorship', 'Curriculum Design', 'Code Reviews', 'Tech Workshops']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, [services.length]);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              Services
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Comprehensive and professional solutions tailored to bring your ideas to life.
            </p>
          </div>

          {/* Slideshow Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Nav Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 p-3 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-gray-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10 p-3 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-gray-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slides */}
            <div className="overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg min-h-[420px] flex items-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="w-full px-8 py-12 md:p-16"
                >
                  {services[currentIndex].icon}
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-6 text-center">
                    {services[currentIndex].title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 text-center max-w-2xl mx-auto leading-relaxed">
                    {services[currentIndex].description}
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                    {services[currentIndex].features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-3 bg-white dark:bg-slate-900 px-5 py-4 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm"
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600 flex-shrink-0" />
                        <span className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mt-10">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`transition-all duration-300 rounded-full h-2.5 ${
                    i === currentIndex ? 'w-10 bg-blue-600' : 'w-2.5 bg-gray-300 dark:bg-slate-600 hover:bg-blue-400 hover:scale-110'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;
