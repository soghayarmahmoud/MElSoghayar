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
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ME</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-400">
                  El Soghayar
                </h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Passionate full-stack developer creating innovative web solutions with modern technologies.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">Get in Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-slate-500 text-sm font-semibold mb-1">Email</p>
                <a href="mailto:mahmoudsruby@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                  mahmoudsruby@gmail.com
                </a>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-semibold mb-1">Phone</p>
                <a href="https://wa.me/201019593092" className="text-white hover:text-blue-400 transition-colors">
                  +20 101 959 3092
                </a>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-semibold mb-1">Location</p>
                <p className="text-white">Luxor, Egypt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © 2026 Mahmoud El Soghayar. All rights reserved.
          </div>

          <div className="flex items-center space-x-2 text-slate-400 text-sm">
            Made with <Heart size={16} className="text-red-500 mx-1" /> by Mahmoud El Soghayar
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default ModernFooter;
