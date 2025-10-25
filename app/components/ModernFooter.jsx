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
    <footer className="bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                M.ElSoghayar
              </h3>
              <p className="text-slate-400 mt-4 leading-relaxed max-w-md">
                Passionate full-stack developer creating innovative web solutions with modern technologies. Let's build something amazing together.
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
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <span className="text-white group-hover:text-white transition-colors duration-300">
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
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400">Email</p>
                <a href="mailto:mahmoud@elsoghayar.com" className="text-white hover:text-blue-400 transition-colors duration-300">
                  alsighiar@gmial.com
                </a>
              </div>
              <div>
                <p className="text-slate-400">Phone</p>
                <a href="https://wa.me/+201019593092" className="text-white hover:text-blue-400 transition-colors duration-300">
                  +20 101 959 3092
                </a>
              </div>
              <div>
                <p className="text-slate-400">Location</p>
                <p className="text-white">Luxor, Egypt</p>
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
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
            <span>© 2024 Mahmoud El Soghayar. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-2 text-slate-400">
            Made with <Heart size={16} className="inline-block mx-1 text-red-500" /> by Mahmoud El Soghayar
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <ArrowUp size={20} />
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
