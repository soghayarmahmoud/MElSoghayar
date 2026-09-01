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
          access_key: '4a69c09d-9ee7-4484-9880-0fa8ab1e7292', // Your verified Web3Forms access key
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
      title: 'WhatsApp',
      value: '+20 101 959 3092',
      href: 'https://wa.me/+201019593092'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+20 110 102 5358',
      href: 'tel:+201101025358'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Luxor, Egypt',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="section-shell py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9a66c]">Get In Touch</p>
            <h2 className="mb-6 text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">
              Let&apos;s build something real.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#d4d4d4] md:text-xl">
              Let&apos;s collaborate on your next project
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Have a project or opportunity in mind?
                </h3>
                <p className="text-lg leading-relaxed text-[#d4d4d4]">
                  Whether it&apos;s a web app, mobile project, embedded system, or a technical challenge — reach out and let&apos;s talk through it.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-center rounded-[24px] border border-white/10 bg-[#141414] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-1"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#d9a66c] text-[#121212]">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-white">
                        {info.title}
                      </h4>
                      <p className="text-[#d4d4d4]">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6 rounded-[30px] border border-white/10 bg-[#121212] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.25)]">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#f5f5f5]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 py-3 text-[#f5f5f5] placeholder:text-[#a3a3a3] focus:border-[#d9a66c] focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#f5f5f5]">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 py-3 text-[#f5f5f5] placeholder:text-[#a3a3a3] focus:border-[#d9a66c] focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#f5f5f5]">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 py-3 text-[#f5f5f5] placeholder:text-[#a3a3a3] focus:border-[#d9a66c] focus:outline-none"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#f5f5f5]">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 py-3 text-[#f5f5f5] placeholder:text-[#a3a3a3] focus:border-[#d9a66c] focus:outline-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center space-x-2 rounded-full bg-[#d9a66c] px-6 py-4 text-lg font-semibold text-[#121212] shadow-[0_15px_40px_rgba(217,166,108,0.25)] transition-colors hover:bg-[#f5d6ad] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#121212] border-t-transparent" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`flex items-center space-x-2 rounded-2xl p-4 ${submitStatus === 'success'
                        ? 'bg-[#d9a66c]/10 text-[#f5d6ad] border border-[#d9a66c]/20'
                        : 'bg-[#d5655b]/10 text-[#f7b1aa] border border-[#d5655b]/20'
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
