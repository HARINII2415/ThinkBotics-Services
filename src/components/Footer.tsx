
import React from 'react';
import { Mail, Linkedin, Github, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ThinkBotics
              </h3>
              <p className="text-gray-400 dark:text-gray-300 mb-6 max-w-md">
                Turning data into decisions. Coding ideas into life. 
                Your partner in data science and full-stack development.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="mailto:harini2415@gmail.com"
                  className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/harini-a-9a014925a"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/HARINII2415"
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Projects', 'Services', 'Resume', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 dark:text-gray-300">
                <li>Data Analytics</li>
                <li>Frontend Development</li>
                <li>Python Automation</li>
                <li>Machine Learning</li>
                <li>Web Applications</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-300 text-sm">
              © 2024 ThinkBotics. All rights reserved. Built with ❤️ by Harini.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
