'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Monitor, Layers, Smartphone, ShieldCheck, GraduationCap } from 'lucide-react';

const ModernServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-[#f5d6ad]" />,
      title: 'Front End Development',
      description: 'Building modern, responsive, and pixel-perfect user interfaces using React, Next.js, and advanced CSS frameworks. Focused on excellent UX and accessibility.',
      features: ['React & Next.js', 'Tailwind CSS', 'Responsive Design', 'Web Animation']
    },
    {
      icon: <Layers className="w-12 h-12 text-[#f5d6ad]" />,
      title: 'Embedded Systems Design',
      description: 'Designing robust electronic systems and hardware-aware firmware for sensing, control, automation, and smart-device applications.',
      features: ['PCB Design', 'Microcontroller', 'Firmware Logic', 'System Integration']
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#f5d6ad]" />,
      title: 'Electronics Prototyping',
      description: 'Developing practical proof-of-concept electronics with reliable layouts, testing workflows, and performance validation for engineering projects.',
      features: ['Arduino', 'Sensors', 'Circuit Debugging', 'Hardware Testing']
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-[#f5d6ad]" />,
      title: 'Simulation & Analysis',
      description: 'Using MATLAB and simulation tools to evaluate signals, control behavior, and engineering performance before production.',
      features: ['MATLAB', 'Signal Analysis', 'Model Testing', 'Control Design']
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-[#f5d6ad]" />,
      title: 'Technical Training',
      description: 'Sharing practical knowledge in electronics, embedded systems, and professional engineering workflows with learners and teams.',
      features: ['Mentorship', 'PCB Learning', 'Microcontroller Labs', 'Technical Coaching']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);

  return (
    <section id="services" className="section-shell py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9a66c]">Services</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.06em] mb-6 text-white leading-[0.96]">
              Design, code, and momentum.
            </h2>
            <p className="text-lg text-[#d4d4d4] max-w-2xl mx-auto leading-relaxed">
              Comprehensive and professional solutions tailored to bring your ideas to life.
            </p>
          </div>

          <div className="service-accordion">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`service-accordion-item ${index === currentIndex ? 'active' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className="service-accordion-header w-full text-left"
                >
                  <div className="flex items-center gap-5">
                    <div className="service-icon-wrap">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a] text-2xl text-[#d9a66c]">
                    {index === currentIndex ? '−' : '+'}
                  </div>
                </button>

                <div className="service-accordion-body">
                  <div className="max-w-3xl pt-2">
                    <p className="text-lg leading-relaxed text-[#d4d4d4]">
                      {service.description}
                    </p>
                    <div className="service-feature-list">
                      {service.features.map((feature, i) => (
                        <div key={i} className="service-feature-item">
                          <span />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;
