import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Download my complete resume to learn more about my experience, skills, and achievements in data science and full-stack development.
          </p>
          
          <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-8 shadow-2xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Harini's Resume</h3>
                  <p className="text-white/90 mb-4">
                    Complete overview of my professional journey, technical skills, and project portfolio.
                  </p>
                  <ul className="text-sm text-white/80 space-y-1">
                    <li>• 2+ years of experience</li>
                    <li>• Data Science & ML expertise</li>
                    <li>• Full-stack development skills</li>
                    <li>• 10+ successful projects</li>
                  </ul>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Download Resume Button */}
                  <button
                    onClick={() => window.location.href = "https://drive.google.com/uc?export=download&id=188_kqS-CMvaGAajjgVUdfxGeRUf-bvYi"}
                    className="px-8 py-4 border-2 border-white hover:bg-white hover:text-purple-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Download Resume
                  </button>

                  {/* View Online Button */}
                  <button
                    onClick={() => window.open("https://drive.google.com/file/d/188_kqS-CMvaGAajjgVUdfxGeRUf-bvYi/view", "_blank")}
                    className="px-8 py-4 border-2 border-white hover:bg-white hover:text-purple-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Online
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills Preview */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-colors duration-300">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'React', 'Machine Learning', 'SQL', 'JavaScript', 'TensorFlow'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-colors duration-300">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Education</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Information Technology
                <br />
                <span className="text-gray-500 dark:text-gray-400">Bachelor's Of Technology</span>
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-colors duration-300">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Certifications</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Azure Certified • Cisco's Certified Data Scientist
                <br />
                <span className="text-gray-500 dark:text-gray-400">Machine Learning Specialist</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
