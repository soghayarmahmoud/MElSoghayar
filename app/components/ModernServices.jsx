'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, MessageCircle, ArrowRight } from 'lucide-react';

const ModernServices = () => {

  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      gradient: 'from-blue-500 to-cyan-500',
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
      gradient: 'from-green-500 to-teal-500',
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
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              What I offer to help your business grow
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-6 shadow-lg`}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center text-sm text-slate-500 dark:text-slate-400"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center text-blue-600 dark:text-blue-400 font-medium cursor-pointer group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="ml-2" />
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

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            {/* <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </motion.button> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernServices;
