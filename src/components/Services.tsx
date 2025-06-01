
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with advanced analytics, machine learning models, and predictive algorithms.",
      features: [
        "Predictive Modeling",
        "Statistical Analysis",
        "Data Visualization",
        "Business Intelligence",
        "Machine Learning"
      ],
      icon: "📊",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Frontend Development",
      description: "Create stunning, responsive web applications with modern frameworks and cutting-edge design principles.",
      features: [
        "React Applications",
        "Responsive Design",
        "UI/UX Implementation",
        "Performance Optimization",
        "Modern JavaScript"
      ],
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Python Automation",
      description: "Streamline your workflows with custom Python automation solutions that save time and reduce manual errors.",
      features: [
        "Process Automation",
        "Web Scraping",
        "API Integration",
        "Data Pipeline",
        "Task Scheduling"
      ],
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative">
                  <div className={`h-32 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <span className="text-4xl filter drop-shadow-lg">{service.icon}</span>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="https://www.linkedin.com/in/harini-a-9a014925a" target="_blank" rel="noopener noreferrer"></a>
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Service highlights */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Fast Delivery</h4>
              <p className="text-sm text-gray-600">Quick turnaround on all projects</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Precision</h4>
              <p className="text-sm text-gray-600">Accurate solutions every time</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Continuous Support</h4>
              <p className="text-sm text-gray-600">Ongoing maintenance & updates</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">Cutting-edge technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
