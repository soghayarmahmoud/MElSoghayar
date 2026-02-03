'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ModernContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
      // Using Web3Forms - completely free email service
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '4e8f5c7e-9d3b-4f1a-8e2c-6a5b9c7d3e4f', // Replace with your Web3Forms access key from https://web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          to_email: 'mahmoudsruby@gmail.com' // Your email where you want to receive messages
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('Web3Forms Error:', data.message);
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
      value: 'mahmoudsruby@gmail.com',
      href: 'mailto:mahmoudsruby@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+20 101 959 3092',
      href: 'tel:+201019593092'
    },
    {
      icon: <Phone size={24} />,
      title: 'WhatsApp',
      value: '+20 110 102 5358',
      href: 'https://wa.me/201101025358'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Luxor, Egypt',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Let's collaborate on your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
                  Let's Build Something Amazing
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, or potential collaborations.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-center p-6 bg-blue-50 dark:bg-slate-800 rounded-xl hover:shadow-md transition-shadow border border-blue-100 dark:border-slate-700"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                        {info.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6 bg-blue-50 dark:bg-slate-800 rounded-xl p-8 border border-blue-100 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-600 text-slate-900 dark:text-slate-100"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-600 text-slate-900 dark:text-slate-100"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-600 text-slate-900 dark:text-slate-100"
                    placeholder="Project inquiry"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-600 text-slate-900 dark:text-slate-100 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`flex items-center space-x-2 p-4 rounded-lg ${submitStatus === 'success'
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                        : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                        }`}
                    >
                      {submitStatus === 'success' ? (
                        <CheckCircle size={24} />
                      ) : (
                        <AlertCircle size={24} />
                      )}
                      <span className="font-medium">
                        {submitStatus === 'success'
                          ? 'Message sent successfully! I\'ll get back to you soon.'
                          : 'Something went wrong. Please try again or email me directly.'}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;
