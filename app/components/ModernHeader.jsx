'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const ModernHeader = () => {
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'border-b border-white/10 bg-[#111111]/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]'
          : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#121212]/75 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <Link href="#hero" className="text-2xl md:text-3xl font-bold tracking-tight transition-transform hover:scale-105">
              <span className="text-[#d9a66c]">Elsogh</span>
              <span className="text-[#f5f5f5]">ayar</span>
            </Link>
          </div>

          <div className="hidden items-center space-x-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#d4d4d4] transition-colors hover:text-[#f5d6ad]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a] text-[#f5f5f5] transition-colors hover:bg-[#d9a66c] hover:text-[#121212] md:hidden"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-3 rounded-[22px] border border-white/10 bg-[#121212]/90 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.25)] md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-full px-4 py-3 text-sm font-medium text-[#d4d4d4] transition-colors hover:bg-white/5 hover:text-[#f5d6ad]"
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
