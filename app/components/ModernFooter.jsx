'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Youtube, Facebook } from 'lucide-react';

const ModernFooter = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/soghayarmahmoud', icon: <Github size={20} /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mahmoud-el-soghayar-1847a5234/', icon: <Linkedin size={20} /> },
    { name: 'Youtube', url: 'https://youtube.com/@procode4u', icon: <Youtube size={20} /> },
    { name: 'Facebook', url: 'https://www.facebook.com/mahmoud.elsieghaiar', icon: <Facebook size={20} /> }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ME</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  El Soghayar
                </h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Passionate full-stack developer creating innovative web solutions with modern technologies. Let's build something amazing together!
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  className="w-14 h-14 bg-slate-800/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-xl flex items-center justify-center transition-all duration-300 group border border-slate-700/50 hover:border-blue-500/50"
                  title={social.name}
                >
                  <span className="text-white group-hover:text-white transition-colors duration-300 text-xl">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl sm:text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 6 }}
                    className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group text-lg"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl sm:text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Get in Touch</h4>
            <div className="space-y-5">
              <div>
                <p className="text-slate-500 text-sm font-semibold mb-2">Email</p>
                <a href="mailto:alsighiar@gmail.com" className="text-white hover:text-blue-400 transition-colors duration-300 text-lg break-all">
                  alsighiar@gmail.com
                </a>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-semibold mb-2">Phone</p>
                <a href="https://wa.me/201019593092" className="text-white hover:text-blue-400 transition-colors duration-300 text-lg">
                  +20 101 959 3092
                </a>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-semibold mb-2">Location</p>
                <p className="text-white text-lg">Luxor, Egypt</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center space-x-2 text-slate-400 text-sm sm:text-base text-center sm:text-left">
            <span>© 2024 Mahmoud El Soghayar. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-2 text-slate-400 text-sm sm:text-base whitespace-nowrap">
            Made with <Heart size={18} className="inline-block mx-1 text-red-500 animate-pulse" /> by Mahmoud El Soghayar
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.15, y: -4 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <ArrowUp size={24} />
      </motion.button>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-4 h-4 bg-blue-500 rounded-full opacity-30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 w-6 h-6 bg-purple-500 rounded-full opacity-20"
      />
    </footer>
  );
};

export default ModernFooter;
