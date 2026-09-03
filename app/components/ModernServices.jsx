'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Monitor, Layers, Smartphone, ShieldCheck, GraduationCap } from 'lucide-react';

const ModernServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-[#f5d6ad]" />,
      title: 'Web Development',
      description: 'Responsive web applications and interfaces built with React and Next.js. Covers frontend UI, server-side rendering, API integration, and deployment.',
      features: ['React & Next.js', 'Tailwind CSS', 'Responsive Design', 'API Integration']
    },
    {
      icon: <Layers className="w-12 h-12 text-[#f5d6ad]" />,
      title: 'Embedded Systems',
      description: 'Microcontroller-based systems for sensing, control, and automation. Covers firmware development, hardware-software integration, and device communication protocols.',
      features: ['Arduino & ESP32', 'Firmware Development', 'Sensor Integration', 'Hardware-Software Bridge']
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#f5d6ad]" />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications built with Flutter. Covers UI development, Firebase integration, local storage, authentication, and APK delivery.',
      features: ['Flutter & Dart', 'Firebase Backend', 'Cross-Platform', 'App Store Ready']
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-[#f5d6ad]" />,
      title: 'Electronics & PCB Design',
      description: 'Electronic circuit design and PCB development for embedded and hardware projects. From schematic design in KiCad to board layout, review, and prototyping.',
      features: ['KiCad', 'Schematic Design', 'PCB Layout', 'Hardware Prototyping']
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-[#f5d6ad]" />,
      title: 'Technical Training',
      description: 'Practical training in web development, mobile development, and software engineering fundamentals. Curriculum-based instruction with code reviews and project-based learning.',
      features: ['Web Development', 'Mobile Dev', 'Code Reviews', 'Project-Based Learning']
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
              Covering the full range — from web and mobile software to embedded hardware.
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
                  aria-expanded={index === currentIndex}
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

                <div className="service-accordion-body ">
                  <div className="max-w-3xl pt-4 ">
                    <p className="text-lg leading-relaxed text-[#d4d4d4] ">
                      {service.description}
                    </p>
                    <div className="service-feature-list">
                      {service.features.map((feature, i) => (
                        <div key={i} className="service-feature-item ">
                          <span />
                          <p className="font-small font-bold  ">{feature}</p>
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
