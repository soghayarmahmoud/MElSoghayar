'use client';

import { motion } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const ModernHero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,166,108,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.04),_transparent_26%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-lg text-[#d4d4d4] md:text-xl"
              >
                Hello, I&apos;m
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 text-4xl font-black tracking-[-0.06em] text-white md:text-5xl lg:text-6xl"
              >
                Mahmoud El Soghayar
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 h-16 text-2xl font-semibold text-[#d9a66c] md:text-3xl lg:text-4xl"
              >
                <TypeAnimation
                  sequence={[
                    'Embedded Systems Engineer',
                    2000,
                    'PCB Design Specialist',
                    2000,
                    'Microcontroller Developer',
                    2000,
                    'MATLAB & Electronics Engineer',
                    2000,
                    'Instructor & Problem Solver',
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
                className="mb-12 text-lg leading-relaxed text-[#d4d4d4] md:text-xl"
              >
                Passionate about designing efficient electronic systems, embedded solutions, and modern technical experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              >
                <a
                  href="/documents/Mahmoud_El-Soghayar_CV_EN.pdf"
                  download
                  className="flex items-center space-x-2 rounded-full bg-[#d9a66c] px-6 py-3 text-base font-semibold text-[#121212] shadow-[0_15px_40px_rgba(217,166,108,0.25)] transition-colors hover:bg-[#f5d6ad]"
                >
                  <Download size={20} />
                  <span>Download CV</span>
                </a>

                <a
                  href="https://wa.me/201019593092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 rounded-full border border-white/10 bg-[#121212] px-6 py-3 text-base font-semibold text-[#f5f5f5] transition-colors hover:border-[#d9a66c] hover:text-[#f5d6ad]"
                >
                  <MessageCircle size={20} />
                  <span>Hire Me</span>
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 flex items-center justify-center lg:order-2"
            >
              <div className="relative">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border border-white/10 bg-[#121212] shadow-[0_30px_70px_rgba(0,0,0,0.3)] md:h-80 md:w-80 lg:h-96 lg:w-96">
                  <Image
                    src="/images/n.jpg"
                    alt="Mahmoud El Soghayar"
                    fill
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    className="object-cover grayscale"
                    priority
                  />
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