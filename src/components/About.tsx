
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            About Our Company
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-purple-900 dark:text-purple-300 mb-4">
                Meet Harini - Founder of ThinkBotics
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Welcome to ThinkBotics! I'm Harini, a passionate data scientist and full-stack developer 
                dedicated to transforming complex data into actionable insights and building innovative 
                digital solutions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With expertise in Python, machine learning, and modern web technologies, I help businesses 
                make data-driven decisions and create scalable applications that drive growth and efficiency.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                At ThinkBotics, we believe in the power of technology to solve real-world problems. 
                Whether it's uncovering hidden patterns in your data or building a cutting-edge web application, 
                I'm here to turn your ideas into reality.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-300">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">1+ Years</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-300">Projects</h4>
                  <p className="text-gray-600 dark:text-gray-400">10+ Completed</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md border-l-4 border-pink-500">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-300">Clients</h4>
                  <p className="text-gray-600 dark:text-gray-400">Happy Worldwide</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-300">Specialization</h4>
                  <p className="text-gray-600 dark:text-gray-400">AI & Web Dev</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Main profile card */}
              <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white relative z-10">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop&crop=face" 
                      alt="Harini working" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-center mb-2">Harini</h4>
                  <p className="text-center text-white/90 mb-4">Data Scientist & Full Stack Developer</p>
                  
                  {/* Social links */}
                  <div className="flex justify-center gap-4">
                    <a href="https://www.linkedin.com/in/harini-a-9a014925a" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <span className="text-sm font-bold">Li</span>
                    </a>
                    <a href="https://github.com/harinii2415" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <span className="text-sm font-bold">Gh</span>
                    </a>
                    <a href="https://www.instagram.com/_hazxnx_/" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <span className="text-sm font-bold">Is</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Workspace images */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop" 
                  alt="Coding workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop" 
                  alt="Technology" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 w-6 h-6 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-8 -right-8 w-4 h-4 bg-pink-400 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
