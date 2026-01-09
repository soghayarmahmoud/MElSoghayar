'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, MessageCircle, ArrowRight } from 'lucide-react';

const ModernServices = () => {

  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      gradient: 'from-cyan-500 to-blue-500',
      features: ['React/Next.js', 'Node.js', 'Database Design', 'API Development']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications for iOS and Android',
      gradient: 'from-purple-500 to-pink-500',
      features: ['React Native', 'Flutter', 'iOS/Android', 'Cross-platform']
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces and experiences',
      gradient: 'from-teal-500 to-emerald-500',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: <MessageCircle size={40} />,
      title: 'Tech Consulting',
      description: 'Strategic technology consulting for your business',
      gradient: 'from-orange-500 to-red-500',
      features: ['Architecture', 'Code Review', 'Performance', 'Best Practices']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Comprehensive solutions to help your business grow with cutting-edge technology
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white dark:bg-slate-900/80 rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden backdrop-blur"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 sm:p-5 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center text-base text-slate-600 dark:text-slate-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`} />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center text-cyan-600 dark:text-cyan-400 font-semibold cursor-pointer group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 text-lg"
                >
                  <span>Learn More</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${service.gradient} rounded-full opacity-10`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernServices;
