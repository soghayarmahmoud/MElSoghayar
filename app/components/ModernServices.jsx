'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, MessageCircle } from 'lucide-react';

const ModernServices = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      features: ['React/Next.js', 'Node.js', 'Database Design', 'API Development']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'iOS/Android', 'Cross-platform']
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces and experiences',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: <MessageCircle size={40} />,
      title: 'Tech Consulting',
      description: 'Strategic technology consulting for your business',
      features: ['Architecture', 'Code Review', 'Performance', 'Best Practices']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Services
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Comprehensive solutions to help your business grow
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md hover:shadow-lg border border-blue-100 dark:border-slate-700"
              >
                {/* Icon */}
                <div className="inline-flex p-4 rounded-xl bg-blue-600 text-white mb-6">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-slate-600 dark:text-slate-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;
