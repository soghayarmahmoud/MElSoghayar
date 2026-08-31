'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Link from 'next/link';

const ModernHeader = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <nav
        className={`glass-header-shell mx-auto max-w-6xl rounded-[28px] px-3 py-2.5 sm:px-4 ${
          isScrolled ? 'is-scrolled' : ''
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="#hero"
              className="group relative inline-flex items-center text-2xl font-black tracking-[-0.08em] transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(59,130,246,0.25)]">
                Elsogh
              </span>
              <span className="ml-1 text-slate-900 dark:text-white">ayar</span>
            </Link>
          </div>

          <div className="hidden items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:border-slate-700/60 dark:bg-slate-900/20 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="header-link relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/20 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white dark:border-slate-700/60 dark:bg-slate-900/30 dark:text-slate-100 dark:hover:bg-blue-500"
              aria-label="Toggle theme"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-blue-500/10 opacity-70" />
              <span className="relative">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/20 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white md:hidden dark:border-slate-700/60 dark:bg-slate-900/30 dark:text-slate-100 dark:hover:bg-blue-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-3 overflow-hidden rounded-[22px] border border-white/25 bg-white/10 p-2 shadow-[0_18px_40px_rgba(15,23,42,0.15)] backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-900/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-full px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-white/25 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800/70 dark:hover:text-blue-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default ModernHeader;
