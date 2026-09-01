'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Youtube, Facebook } from 'lucide-react';

const ModernFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/soghayarmahmoud', icon: <Github size={20} /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/elsoghayar', icon: <Linkedin size={20} /> },
    { name: 'Youtube', url: 'https://youtube.com/@procode4u', icon: <Youtube size={20} /> },
    { name: 'Facebook', url: 'https://www.facebook.com/mahmoud.elsieghaiar', icon: <Facebook size={20} /> }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#d9a66c] text-lg font-bold text-[#121212]">
                  ME
                </div>
                <h3 className="text-3xl font-bold text-[#f5f5f5]">
                  El Soghayar
                </h3>
              </div>
              <p className="max-w-md text-lg leading-relaxed text-[#d4d4d4]">
                Software & Embedded Systems Engineer building web, mobile, and connected hardware systems.
              </p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Mahmoud El Soghayar on ${social.name}`}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#141414] text-[#f5f5f5] transition-colors hover:bg-[#d9a66c] hover:text-[#121212]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-bold text-[#d9a66c]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#d4d4d4] transition-colors hover:text-[#f5d6ad]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-bold text-[#d9a66c]">Get in Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="mb-1 text-sm font-semibold text-[#a3a3a3]">Email</p>
                <a href="mailto:mahmoudsruby@gmail.com" className="text-white transition-colors hover:text-[#f5d6ad]">
                  mahmoudsruby@gmail.com
                </a>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-[#a3a3a3]">Phone</p>
                <a href="https://wa.me/201019593092" className="text-white transition-colors hover:text-[#f5d6ad]">
                  +20 101 959 3092
                </a>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-[#a3a3a3]">Location</p>
                <p className="text-white">Luxor, Egypt</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="text-sm text-[#a3a3a3]">
            © 2026 Mahmoud El Soghayar. All rights reserved.
          </div>

          <div className="flex items-center space-x-2 text-sm text-[#a3a3a3]">
            Made with <Heart size={16} className="mx-1 text-[#d5655b]" /> by Mahmoud El Soghayar
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#d9a66c] text-[#121212] shadow-[0_15px_40px_rgba(217,166,108,0.25)] transition-colors hover:bg-[#f5d6ad]"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default ModernFooter;
