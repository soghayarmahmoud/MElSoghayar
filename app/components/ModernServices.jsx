'use client';

import Image from 'next/image';

const ModernServices = () => {
  const services = [
    {
      logo: '/images/logos/cipher.jpg',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      features: ['React/Next.js', 'Node.js', 'Database Design', 'API Development']
    },
    {
      logo: '/images/logos/Depi.jpeg',
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'iOS/Android', 'Cross-platform']
    },
    {
      logo: '/images/logos/mostaql.png',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces and experiences',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      logo: '/images/logos/upwork.png',
      title: 'Tech Consulting',
      description: 'Strategic technology consulting for your business',
      features: ['Architecture', 'Code Review', 'Performance', 'Best Practices']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              Services
            </h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions to help your business grow
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-md border border-gray-200 dark:border-slate-700"
              >
                {/* Logo */}
                <div className="flex justify-center mb-6">
                  <Image
                    src={service.logo}
                    alt={`${service.title} logo`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center leading-tight">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-base mb-6 leading-relaxed text-center">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-slate-600 dark:text-slate-300 text-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-gray-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;
