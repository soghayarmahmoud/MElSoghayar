'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ModernAbout = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '7', label: 'Deployed Apps' },
  ];

  return (
    <section id="about" className="section-shell py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9a66c]">About Me</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.06em] mb-6 text-[#f5f5f5] leading-[0.96]">
              Software meets hardware.
            </h2>
            <p className="text-lg md:text-xl text-[#d4d4d4] max-w-2xl mx-auto">
              Engineering student with hands-on experience across the full stack — from web and mobile to embedded systems and electronics.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
                Hi, I&apos;m Mahmoud 👋
              </h3>
              <p className="text-lg text-[#d4d4d4] leading-relaxed">
                I&apos;m an Electrical & Electronics Engineering student who builds software. My work spans web development with React and Next.js, cross-platform mobile apps with Flutter, and embedded systems with microcontrollers and PCB design.
              </p>
              <p className="text-lg text-[#d4d4d4] leading-relaxed">
                What distinguishes my work is the ability to operate across both layers — writing firmware for a microcontroller and building the web interface that talks to it, or designing a PCB and writing the software that runs on it. I work on real projects, not just exercises, and I train other developers in the process.
              </p>
            </div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="relative mx-auto w-full max-w-sm"
            >
              <div className="section-panel w-80 h-80 mx-auto rounded-[32px] p-1 transform transition-transform hover:scale-[1.02] duration-300">
                <div className="w-full h-full rounded-[28px] overflow-hidden bg-[#1b1b1b]">
                  <Image
                    src="/images/about.jpg"
                    alt="Mahmoud El Soghayar — Software & Embedded Systems Engineer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover grayscale"
                    priority={true}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                key={stat.label}
                className="section-panel p-8 rounded-[24px] text-center"
              >
                <div className="text-4xl font-extrabold text-[#d9a66c] mb-3">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-[#d4d4d4] uppercase tracking-[0.2em]">
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
