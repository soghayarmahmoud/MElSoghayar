'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

const ModernContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          subject: `${formData.subject} - from ${formData.name}`,
          message: formData.message
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('Resend API Error:', data.error);
      }
    } catch (error) {
      console.error('Request Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'alsighiar@gmail.com',
      href: 'mailto:alsighiar@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+20 101 959 3092',
      href: 'tel:+201019593092',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Luxor, Egypt',
      href: '#',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Floating particles animation
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            variants={particleVariants}
            animate="animate"
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Let's collaborate on your next project. I'm always excited to discuss new opportunities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
                  Let's Build Something Amazing
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, or potential collaborations. Whether you have a groundbreaking idea or need expert guidance, let's connect and create something incredible together!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 12 }}
                    className="flex items-center p-6 sm:p-7 bg-white dark:bg-slate-900/80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden backdrop-blur"
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      {info.icon}
                    </div>
                    <div className="ml-5 sm:ml-6 relative z-10">
                      <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-lg">
                        {info.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-base">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-900/50 rounded-2xl p-8 sm:p-10 shadow-xl backdrop-blur">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="peer w-full px-4 py-3 pt-6 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-xl focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-slate-900 dark:text-slate-100 placeholder-transparent text-lg"
                      placeholder="Your Name"
                    />
                    <label className="absolute left-4 top-2 text-xs font-semibold text-slate-600 dark:text-slate-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 dark:peer-focus:text-blue-400">
                      Your Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="peer w-full px-4 py-3 pt-6 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-xl focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-slate-900 dark:text-slate-100 placeholder-transparent text-lg"
                      placeholder="Your Email"
                    />
                    <label className="absolute left-4 top-2 text-xs font-semibold text-slate-600 dark:text-slate-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 dark:peer-focus:text-blue-400">
                      Your Email
                    </label>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="peer w-full px-4 py-3 pt-6 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-xl focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-slate-900 dark:text-slate-100 placeholder-transparent text-lg"
                    placeholder="Subject"
                  />
                  <label className="absolute left-4 top-2 text-xs font-semibold text-slate-600 dark:text-slate-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 dark:peer-focus:text-blue-400">
                    Subject
                  </label>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className="peer w-full px-4 py-3 pt-6 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-xl focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-slate-900 dark:text-slate-100 resize-none placeholder-transparent text-lg"
                    placeholder="Your Message"
                  />
                  <label className="absolute left-4 top-2 text-xs font-semibold text-slate-600 dark:text-slate-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 dark:peer-focus:text-blue-400">
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 overflow-hidden group"
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <span className="relative z-10 flex items-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                      className={`flex items-center space-x-2 p-4 rounded-xl shadow-lg ${submitStatus === 'success'
                          ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-green-700 dark:text-green-400 border-2 border-green-200 dark:border-green-800'
                          : 'bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 text-red-700 dark:text-red-400 border-2 border-red-200 dark:border-red-800'
                        }`}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        {submitStatus === 'success' ? (
                          <CheckCircle size={24} />
                        ) : (
                          <AlertCircle size={24} />
                        )}
                      </motion.div>
                      <span className="font-medium">
                        {submitStatus === 'success'
                          ? '✨ Message sent successfully! I\'ll get back to you soon.'
                          : '❌ Something went wrong. Please try again.'}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernContact;
